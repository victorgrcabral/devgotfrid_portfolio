import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function extract() {
  const originalPath = 'C:/Users/victo/.gemini/antigravity/brain/7b9d9f7c-c49e-46df-845d-4c83de75b558/.user_uploaded/media_1787611412124.png';
  if (!fs.existsSync(originalPath)) return;

  const { data, info } = await sharp(originalPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Replace lime green background (R: 120-170, G: 160-220, B: 60-120) with transparent alpha
  const outBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];

    // Detect lime green background
    const isGreen = g > 140 && g > r * 1.15 && g > b * 1.3 && (r > 90 && r < 190);

    if (isGreen) {
      outBuffer[i * 4] = 0;
      outBuffer[i * 4 + 1] = 0;
      outBuffer[i * 4 + 2] = 0;
      outBuffer[i * 4 + 3] = 0;
    } else {
      outBuffer[i * 4] = r;
      outBuffer[i * 4 + 1] = g;
      outBuffer[i * 4 + 2] = b;
      outBuffer[i * 4 + 3] = 255;
    }
  }

  // Create composite over dark teal background
  const cutoutPng = await sharp(outBuffer, { raw: { width, height, channels: 4 } })
    .png()
    .toBuffer();

  const darkBgSvg = `
  <svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#0e3a45"/>
        <stop offset="50%" stop-color="#082229"/>
        <stop offset="100%" stop-color="#05181D"/>
      </radialGradient>
      <radialGradient id="glow" cx="80%" cy="20%" r="40%">
        <stop offset="0%" stop-color="#73D1E0" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="800" height="800" fill="url(#bg)"/>
    <rect width="800" height="800" fill="url(#glow)"/>
  </svg>
  `;

  const finalComposite = await sharp(Buffer.from(darkBgSvg))
    .composite([
      {
        input: await sharp(cutoutPng).resize(700, 700, { fit: 'contain' }).toBuffer(),
        gravity: 'center'
      }
    ])
    .png()
    .toBuffer();

  const desktop = path.join(process.env.USERPROFILE, 'Desktop');
  const ptDesktop = path.join(process.env.USERPROFILE, 'Área de Trabalho');
  const targetDir = fs.existsSync(ptDesktop) ? ptDesktop : desktop;

  fs.writeFileSync(path.join(targetDir, 'victor-gotfrid-linkedin-profile-original-cutout.png'), finalComposite);
  console.log('✓ Saved original photo cutout to:', path.join(targetDir, 'victor-gotfrid-linkedin-profile-original-cutout.png'));
}

extract().catch(console.error);
