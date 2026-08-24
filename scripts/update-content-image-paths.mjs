import fs from 'fs';
import path from 'path';

const files = [
  path.resolve('src/data/content-pt.ts'),
  path.resolve('src/data/content-en.ts'),
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace /projects/*.png and /projects/*.jpg with /projects/*.webp
  content = content.replace(/\/projects\/([a-zA-Z0-9\-_]+)\.(png|jpg|jpeg)/g, '/projects/$1.webp');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated image paths to .webp in ${path.basename(file)}`);
}
