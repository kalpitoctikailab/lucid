/**
 * Merges on-disk images under public/{COMMERCIAL,FARMHOUSE,...} into data/projects.ts
 * Keeps existing image order; appends any new files not already listed.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const PROJECTS_TS = path.join(ROOT, "data", "projects.ts");

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

const BASE_FOLDERS = [
  "COMMERCIAL",
  "FARMHOUSE",
  "RESIDENCIAL VILLAS",
  "RESIDENCIALV HIGH RISE APPARTMENTS",
];

function walkImages(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkImages(full));
    else if (IMAGE_EXT.test(ent.name)) out.push(full);
  }
  return out;
}

function toPublicUrl(absPath) {
  const rel = path.relative(PUBLIC, absPath).split(path.sep).join("/");
  return "/" + rel;
}

function prefixFromUrl(urlPath) {
  const parts = urlPath.split("/").filter(Boolean);
  if (parts.length < 2) return null;
  return "/" + parts[0] + "/" + parts[1] + "/";
}

function buildDiskIndex() {
  const byPrefix = new Map();
  for (const base of BASE_FOLDERS) {
    const root = path.join(PUBLIC, base);
    for (const abs of walkImages(root)) {
      const url = toPublicUrl(abs);
      const prefix = prefixFromUrl(url);
      if (!prefix) continue;
      if (!byPrefix.has(prefix)) byPrefix.set(prefix, []);
      byPrefix.get(prefix).push(url);
    }
  }
  for (const urls of byPrefix.values()) {
    urls.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
  }
  return byPrefix;
}

/** Match `[` at openIdx with proper bracket depth (respects strings). */
function findMatchingBracketClose(content, openIdx) {
  let depth = 0;
  let inString = false;
  let q = null;
  let esc = false;
  for (let i = openIdx; i < content.length; i++) {
    const c = content[i];
    if (inString) {
      if (esc) {
        esc = false;
        continue;
      }
      if (c === "\\") {
        esc = true;
        continue;
      }
      if (c === q) inString = false;
      continue;
    }
    if (c === '"' || c === "'") {
      inString = true;
      q = c;
      continue;
    }
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/** Split inner body of projects array into top-level `{ ... }` object strings. */
function splitTopLevelObjects(innerBody) {
  const items = [];
  let i = 0;
  while (i < innerBody.length) {
    while (i < innerBody.length && /[\s,]/.test(innerBody[i])) i++;
    if (i >= innerBody.length) break;
    if (innerBody[i] !== "{")
      throw new Error(`Expected "{" at offset ${i}, got ${JSON.stringify(innerBody.slice(i, i + 20))}`);
    let depth = 0;
    const start = i;
    let inString = false;
    let q = null;
    let esc = false;
    for (; i < innerBody.length; i++) {
      const c = innerBody[i];
      if (inString) {
        if (esc) {
          esc = false;
          continue;
        }
        if (c === "\\") {
          esc = true;
          continue;
        }
        if (c === q) inString = false;
        continue;
      }
      if (c === '"' || c === "'") {
        inString = true;
        q = c;
        continue;
      }
      if (c === "{") depth++;
      else if (c === "}") {
        depth--;
        if (depth === 0) {
          items.push(innerBody.slice(start, i + 1));
          i++;
          break;
        }
      }
    }
  }
  return items;
}

function extractCoverImage(block) {
  const m = block.match(/"coverImage":\s*"((?:[^"\\]|\\.)*)"/);
  if (!m) return null;
  try {
    return JSON.parse(`"${m[1]}"`);
  } catch {
    return m[1];
  }
}

function parseImagesArray(block) {
  const idx = block.indexOf('"images":');
  if (idx === -1) return null;
  const lb = block.indexOf("[", idx);
  if (lb === -1) return null;
  let depth = 0;
  let j = lb;
  for (; j < block.length; j++) {
    const c = block[j];
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) {
        j++;
        break;
      }
    }
  }
  const inner = block.slice(lb + 1, j - 1);
  const paths = [];
  const re = /"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    const raw = m[1];
    try {
      const decoded = JSON.parse(`"${raw.replace(/\\"/g, '"')}"`);
      if (decoded.startsWith("/")) paths.push(decoded);
    } catch {
      /* skip */
    }
  }
  return { paths };
}

function formatImagesArray(paths, indent = "    ") {
  const lines = paths.map((p) => `${indent}  ${JSON.stringify(p)},`);
  return `${indent}"images": [\n${lines.join("\n")}\n${indent}],`;
}

function splitProjectsFile(content) {
  /** Must include trailing `[` — do not use `Project[]` alone or `indexOf("[")` matches that `[`. */
  const marker = "export const projects: Project[] = [";
  const mi = content.indexOf(marker);
  if (mi === -1) throw new Error("Could not find projects array declaration");
  const openBracketIdx = mi + marker.length - 1;
  const closeBracketIdx = findMatchingBracketClose(content, openBracketIdx);
  if (closeBracketIdx === -1) throw new Error("Could not find closing ] for projects array");

  const head = content.slice(0, openBracketIdx + 1);
  const innerBody = content.slice(openBracketIdx + 1, closeBracketIdx);
  const tail = content.slice(closeBracketIdx);
  const items = splitTopLevelObjects(innerBody);
  return { head, innerBody, tail, items };
}

export function syncProjectImages({ dryRun = false } = {}) {
  const content = fs.readFileSync(PROJECTS_TS, "utf8");
  const diskByPrefix = buildDiskIndex();
  const { head, tail, items } = splitProjectsFile(content);

  let changed = 0;
  const newItems = items.map((block) => {
    const cover = extractCoverImage(block);
    const prefix = cover ? prefixFromUrl(cover) : null;
    const diskSet = prefix && diskByPrefix.has(prefix) ? diskByPrefix.get(prefix) : null;
    const parsed = parseImagesArray(block);
    if (!parsed || !diskSet) return block;

    const existing = parsed.paths;
    const seen = new Set(existing);
    const additions = diskSet.filter((u) => !seen.has(u));
    if (additions.length === 0) return block;

    changed++;
    const merged = [...existing, ...additions];
    const oldImagesPattern = /^\s*"images":\s*\[[\s\S]*?\]\s*,/m;
    const replacement = formatImagesArray(merged, "    ");
    if (!oldImagesPattern.test(block)) {
      console.warn("Could not replace images for a block; skipping");
      return block;
    }
    return block.replace(oldImagesPattern, replacement + "\n");
  });

  const out =
    head + newItems.map((b) => b.replace(/^\{/, "  {")).join(",\n") + tail;

  if (!dryRun && changed > 0) {
    fs.writeFileSync(PROJECTS_TS, out, "utf8");
  }

  return { changedProjects: changed, totalProjects: items.length };
}

const dry = process.argv.includes("--dry-run");
const { changedProjects, totalProjects } = syncProjectImages({ dryRun: dry });
console.log(
  dry
    ? `[dry-run] Would update ${changedProjects} project(s) (of ${totalProjects}).`
    : `Updated ${changedProjects} project(s) (of ${totalProjects}).`
);
