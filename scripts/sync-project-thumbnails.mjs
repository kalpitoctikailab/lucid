/**
 * Regenerate data/projectThumbnails.ts from files in public/Thumbnail Source Ready.
 * Prefers *_{slug}_01.jpg over {slug}.jpg when both exist.
 *
 * Usage: node scripts/sync-project-thumbnails.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const thumbRoot = path.join(root, "public", "Thumbnail Source Ready");
const urlPrefix = "/Thumbnail Source Ready";
const outFile = path.join(root, "data", "projectThumbnails.ts");

const folders = ["Commercial", "Low Rise", "High Rise", "Villas", "Farmhouse"];
const map = new Map();

for (const folder of folders) {
  const dir = path.join(thumbRoot, folder);
  if (!fs.existsSync(dir)) continue;

  for (const name of fs.readdirSync(dir)) {
    if (!/\.(jpe?g|webp|png)$/i.test(name)) continue;

    const base = path.parse(name).name;
    const is01 = /_01$/.test(base);
    const slug = base.replace(/_01$/, "");
    const webPath = `${urlPrefix}/${folder}/${name}`;
    const cur = map.get(slug);

    if (!cur) {
      map.set(slug, { path: webPath, is01 });
    } else if (is01 && !cur.is01) {
      map.set(slug, { path: webPath, is01: true });
    }
  }
}

const entries = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));

const lines = [
  "/** Auto-generated — run: node scripts/sync-project-thumbnails.mjs */",
  "",
  "export const projectThumbnailBySlug: Record<string, string> = {",
];

for (const [slug, { path: p }] of entries) {
  lines.push(`  ${JSON.stringify(slug)}: ${JSON.stringify(p)},`);
}

lines.push("};", "");

fs.writeFileSync(outFile, lines.join("\n") + "\n");
console.log(`Wrote ${path.relative(root, outFile)} (${entries.length} slugs)`);
