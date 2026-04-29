/**
 * Generate thumbnail versions of all project images
 * Thumbnails are 10% size, heavily compressed for blur placeholders
 * 
 * Usage: node scripts/generate-thumbnails.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const PROJECT_DATA_DIR = path.join(PUBLIC_DIR, 'lucid-project-data');

async function generateThumbnail(imagePath) {
  const ext = path.extname(imagePath);
  const thumbPath = imagePath.replace(ext, '-thumb.webp');

  // Skip if thumbnail already exists
  if (fs.existsSync(thumbPath)) {
    console.log(`✓ Skip (exists): ${path.basename(thumbPath)}`);
    return;
  }

  try {
    const metadata = await sharp(imagePath).metadata();
    const targetWidth = Math.round(metadata.width * 0.1); // 10% of original

    await sharp(imagePath)
      .resize(targetWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({
        quality: 20, // Very low quality for blur placeholder
        effort: 6,
      })
      .toFile(thumbPath);

    const originalSize = fs.statSync(imagePath).size;
    const thumbSize = fs.statSync(thumbPath).size;
    const ratio = ((thumbSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${path.basename(imagePath)} → ${path.basename(thumbPath)} (${ratio}% of original)`);
  } catch (err) {
    console.error(`✗ Failed: ${imagePath}`, err.message);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(webp|jpg|jpeg|png)$/i.test(entry.name) && !entry.name.includes('-thumb')) {
      await generateThumbnail(fullPath);
    }
  }
}

async function main() {
  console.log('🖼️  Generating thumbnails for all project images...\n');

  if (!fs.existsSync(PROJECT_DATA_DIR)) {
    console.error(`❌ Project data directory not found: ${PROJECT_DATA_DIR}`);
    process.exit(1);
  }

  // Check if sharp is installed
  try {
    require.resolve('sharp');
  } catch (e) {
    console.error('❌ sharp is not installed. Run: npm install --save-dev sharp');
    process.exit(1);
  }

  await processDirectory(PROJECT_DATA_DIR);

  console.log('\n✅ Thumbnail generation complete!');
}

main().catch(console.error);
