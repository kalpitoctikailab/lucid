# Image Optimization Scripts

## Generate Thumbnails

This script creates tiny blur placeholder versions of all project images to enable progressive loading.

### What it does:
- Scans all images in `public/lucid-project-data/`
- Creates `-thumb.webp` versions at 10% size and 20% quality (~20KB each)
- Skips images that already have thumbnails
- Original images remain untouched

### Usage:

1. **Install sharp** (if not already installed):
   ```bash
   npm install
   ```

2. **Run the script**:
   ```bash
   npm run generate-thumbs
   ```

3. **Output**:
   ```
   ✓ image1.webp → image1-thumb.webp (2.1% of original)
   ✓ image2.webp → image2-thumb.webp (1.8% of original)
   ```

### How it improves performance:

**Before:**
- User scrolls → 8-10MB image starts loading → page hangs/stutters
- Total load time: 3-5 seconds per image on slow connections

**After:**
- User scrolls → 20KB blur thumbnail loads instantly (< 100ms)
- Full 8-10MB image loads in background
- Smooth fade from blur → sharp when ready
- Page never hangs

### File structure:
```
public/lucid-project-data/
  COMMERCIAL/
    PROJECT NAME/
      image1.webp          (8MB - original)
      image1-thumb.webp    (20KB - blur placeholder)
      image2.webp          (10MB - original)
      image2-thumb.webp    (18KB - blur placeholder)
```

### Re-running:
The script is **idempotent** — it skips existing thumbnails, so you can safely run it multiple times. Only new images will be processed.

### Adding new images:
1. Add your new high-res images to the project folders
2. Run `npm run generate-thumbs`
3. Thumbnails are created automatically
