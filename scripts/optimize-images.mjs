import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const projectsDir = path.resolve('public/projects');
const files = fs.readdirSync(projectsDir);

let totalOriginalSize = 0;
let totalNewSize = 0;
let convertedCount = 0;

console.log('Starting image optimization with sharp to WebP...\n');

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    const baseName = path.basename(file, ext);
    const inputPath = path.join(projectsDir, file);
    const outputPath = path.join(projectsDir, `${baseName}.webp`);

    const stat = fs.statSync(inputPath);
    totalOriginalSize += stat.size;

    try {
      await sharp(inputPath)
        .webp({ quality: 85, effort: 5 })
        .toFile(outputPath);

      const newStat = fs.statSync(outputPath);
      totalNewSize += newStat.size;
      convertedCount++;

      const saving = ((1 - newStat.size / stat.size) * 100).toFixed(1);
      console.log(`✓ ${file} (${Math.round(stat.size / 1024)} KB) -> ${baseName}.webp (${Math.round(newStat.size / 1024)} KB) [Saved ${saving}%]`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err.message);
    }
  }
}

const origMB = (totalOriginalSize / (1024 * 1024)).toFixed(2);
const newMB = (totalNewSize / (1024 * 1024)).toFixed(2);
const totalSaved = ((1 - totalNewSize / totalOriginalSize) * 100).toFixed(1);

console.log(`\n========================================`);
console.log(`Optimization Complete!`);
console.log(`Converted ${convertedCount} images.`);
console.log(`Original: ${origMB} MB -> WebP: ${newMB} MB`);
console.log(`Total Bandwidth Saved: ${totalSaved}%`);
console.log(`========================================`);
