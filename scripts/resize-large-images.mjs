import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const projectsDir = path.resolve('public/projects');
const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.webp') && !f.endsWith('.tmp'));

console.log('Resizing oversized WebP images down to max 1600px width...\n');

let savedBytes = 0;

for (const file of files) {
  const filePath = path.join(projectsDir, file);
  try {
    const inputBuffer = fs.readFileSync(filePath);
    const metadata = await sharp(inputBuffer).metadata();

    if (metadata.width && metadata.width > 1600) {
      const originalSize = inputBuffer.length;

      const outputBuffer = await sharp(inputBuffer)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toBuffer();

      fs.writeFileSync(filePath, outputBuffer);
      const newSize = outputBuffer.length;
      savedBytes += (originalSize - newSize);

      console.log(`✓ Resized ${file}: ${metadata.width}px (${Math.round(originalSize / 1024)} KB) -> 1600px (${Math.round(newSize / 1024)} KB)`);
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

// Clean any leftover .tmp files
for (const file of fs.readdirSync(projectsDir)) {
  if (file.endsWith('.tmp')) {
    try { fs.unlinkSync(path.join(projectsDir, file)); } catch {}
  }
}

console.log(`\nAdditional savings: ${Math.round(savedBytes / 1024)} KB`);
