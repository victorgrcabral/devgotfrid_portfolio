import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// -------------------------------------------------------------
// 1. EXACT PROFILE PHOTO WITH GREEN BACKGROUND REPLACED
// -------------------------------------------------------------
async function processProfilePhoto() {
  console.log('Processing exact original profile photo without modifying face...');

  const photoPath = 'C:/Users/victo/Downloads/Foto profissional .PNG';
  const input = fs.existsSync(photoPath)
    ? photoPath
    : 'C:/Users/victo/.gemini/antigravity/brain/7b9d9f7c-c49e-46df-845d-4c83de75b558/.user_uploaded/media_1787611764076.png';

  const { data, info } = await sharp(input)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  const outBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];

    // Detect lime green background (typically g is distinctly higher than r and b, and g > 110)
    // Calculate green dominance
    const greenDominance = g - Math.max(r, b);
    const isGreenBg = g > 110 && greenDominance > 20 && (g > r * 1.08) && (g > b * 1.3);

    if (isGreenBg) {
      // Background pixel -> transparent
      outBuffer[i * 4] = 0;
      outBuffer[i * 4 + 1] = 0;
      outBuffer[i * 4 + 2] = 0;
      outBuffer[i * 4 + 3] = 0;
    } else if (g > 100 && greenDominance > 5 && (g > b * 1.15)) {
      // Feathered edge / fringe -> calculate alpha and suppress green spill
      const alpha = Math.max(0, Math.min(255, 255 - greenDominance * 4));
      outBuffer[i * 4] = r;
      outBuffer[i * 4 + 1] = Math.min(g, Math.max(r, b)); // De-spill green edge
      outBuffer[i * 4 + 2] = b;
      outBuffer[i * 4 + 3] = alpha;
    } else {
      // Foreground person pixel -> 100% original RGB intact
      outBuffer[i * 4] = r;
      outBuffer[i * 4 + 1] = g;
      outBuffer[i * 4 + 2] = b;
      outBuffer[i * 4 + 3] = 255;
    }
  }

  const cutoutBuffer = await sharp(outBuffer, { raw: { width, height, channels: 4 } })
    .png()
    .toBuffer();

  // Create 1000x1000 dark teal background with subtle radial glow
  const darkBgSvg = `
  <svg width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bg" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#0c353f"/>
        <stop offset="45%" stop-color="#082229"/>
        <stop offset="85%" stop-color="#05181D"/>
        <stop offset="100%" stop-color="#030f13"/>
      </radialGradient>
      <radialGradient id="rimGlow" cx="80%" cy="20%" r="45%">
        <stop offset="0%" stop-color="#73D1E0" stop-opacity="0.22"/>
        <stop offset="60%" stop-color="#00595B" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00595B" stroke-width="0.8" stroke-opacity="0.15"/>
      </pattern>
    </defs>
    <rect width="1000" height="1000" fill="url(#bg)"/>
    <rect width="1000" height="1000" fill="url(#grid)"/>
    <rect width="1000" height="1000" fill="url(#rimGlow)"/>
  </svg>
  `;

  const cutoutResized = await sharp(cutoutBuffer)
    .resize(920, 920, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const finalProfilePng = await sharp(Buffer.from(darkBgSvg))
    .composite([
      {
        input: cutoutResized,
        gravity: 'center'
      }
    ])
    .png({ quality: 98 })
    .toBuffer();

  const ptDesktop = path.join(process.env.USERPROFILE, 'Área de Trabalho');
  const enDesktop = path.join(process.env.USERPROFILE, 'Desktop');
  const desktopDir = fs.existsSync(ptDesktop) ? ptDesktop : enDesktop;

  fs.writeFileSync(path.join(desktopDir, 'victor-gotfrid-linkedin-profile.png'), finalProfilePng);
  fs.writeFileSync(path.resolve('public/linkedin-profile-photo.png'), finalProfilePng);

  const artifactDir = 'C:\\Users\\victo\\.gemini\\antigravity\\brain\\7b9d9f7c-c49e-46df-845d-4c83de75b558';
  if (fs.existsSync(artifactDir)) {
    fs.writeFileSync(path.join(artifactDir, 'victor-gotfrid-linkedin-profile.png'), finalProfilePng);
  }

  console.log('✓ Profile photo generated with original face and dark-teal background!');
}

// -------------------------------------------------------------
// 2. LINKEDIN BANNER ADJUSTED (No Open to Work, Right-Aligned Flush URL)
// -------------------------------------------------------------
async function processLinkedInBanner() {
  console.log('Generating adjusted LinkedIn banner...');

  const bannerWidth = 1584;
  const bannerHeight = 396;

  const bannerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${bannerWidth}" height="${bannerHeight}" viewBox="0 0 ${bannerWidth} ${bannerHeight}">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030e12"/>
      <stop offset="25%" stop-color="#05181D"/>
      <stop offset="70%" stop-color="#082229"/>
      <stop offset="100%" stop-color="#041418"/>
    </linearGradient>

    <radialGradient id="cyanSpotlight" cx="82%" cy="28%" r="60%">
      <stop offset="0%" stop-color="#73D1E0" stop-opacity="0.22"/>
      <stop offset="45%" stop-color="#00595B" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="leftGlow" cx="15%" cy="60%" r="45%">
      <stop offset="0%" stop-color="#00595B" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F7F7F8"/>
      <stop offset="100%" stop-color="#73D1E0"/>
    </linearGradient>

    <!-- Technical Grid Pattern -->
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#00595B" stroke-width="0.75" stroke-opacity="0.25"/>
      <circle cx="36" cy="36" r="0.8" fill="#73D1E0" fill-opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="${bannerWidth}" height="${bannerHeight}" fill="url(#bgGrad)"/>
  <rect width="${bannerWidth}" height="${bannerHeight}" fill="url(#grid)"/>

  <!-- Atmospheric Lighting -->
  <rect width="${bannerWidth}" height="${bannerHeight}" fill="url(#cyanSpotlight)"/>
  <rect width="${bannerWidth}" height="${bannerHeight}" fill="url(#leftGlow)"/>

  <!-- Left Side Background Geometry (Behind avatar safe zone) -->
  <g transform="translate(60, 40)" opacity="0.35">
    <circle cx="160" cy="160" r="145" fill="none" stroke="#00595B" stroke-width="1.5" stroke-dasharray="4 6"/>
    <circle cx="160" cy="160" r="115" fill="none" stroke="#73D1E0" stroke-width="1" stroke-dasharray="2 4"/>
    <line x1="15" y1="160" x2="305" y2="160" stroke="#00595B" stroke-width="1"/>
    <line x1="160" y1="15" x2="160" y2="305" stroke="#00595B" stroke-width="1"/>
  </g>

  <!-- Main Glass Card Container (Balanced width, 400px to 1536px -> width: 1136px) -->
  <g transform="translate(410, 32)">
    <rect width="1126" height="332" rx="20" fill="#082229" fill-opacity="0.78" stroke="#00595B" stroke-width="1.2" stroke-opacity="0.6"/>
    <rect width="1126" height="332" rx="20" fill="none" stroke="#73D1E0" stroke-width="0.75" stroke-opacity="0.25"/>

    <!-- Top Row: Terminal Icon, Category Pill and URL Badge (Flush Right) -->
    <g transform="translate(36, 28)">
      <!-- Terminal Brandmark -->
      <rect width="36" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1.2"/>
      <polyline points="11 13 18 18 11 23" fill="none" stroke="#73D1E0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="20" y1="23" x2="26" y2="23" stroke="#73D1E0" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Category Label -->
      <g transform="translate(48, 4)">
        <rect width="320" height="28" rx="8" fill="#00595B" fill-opacity="0.3" stroke="#73D1E0" stroke-width="0.8" stroke-opacity="0.4"/>
        <text x="14" y="19" font-family="system-ui, -apple-system, monospace" font-size="11" font-weight="600" fill="#73D1E0" letter-spacing="1.2">PRODUCT &amp; WEB DESIGN • ENGINEERING</text>
      </g>

      <!-- URL Badge Aligned Flush to Right (x = 838px -> ends at 1054px) -->
      <g transform="translate(838, 2)">
        <rect width="216" height="32" rx="16" fill="#05181D" stroke="#00595B" stroke-width="1.2"/>
        <circle cx="18" cy="16" r="3.5" fill="#10B981"/>
        <text x="32" y="21" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="600" fill="#73D1E0">victorgotfrid.com</text>
      </g>
    </g>

    <!-- Main Headline & Subtitle -->
    <g transform="translate(36, 112)">
      <!-- Name -->
      <text x="0" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="url(#textGrad)" letter-spacing="-1">
        Victor Gotfrid
      </text>

      <!-- Role / Title -->
      <text x="0" y="78" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#73D1E0" letter-spacing="-0.2">
        Product &amp; Web Designer • Design Engineer
      </text>

      <!-- Description -->
      <text x="0" y="104" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="400" fill="#8EACB4" letter-spacing="-0.1">
        Unindo engenharia full-stack, direção de arte e design de produto — Figma • React 19 • Next.js 16 • TypeScript • Python • Three.js
      </text>
    </g>

    <!-- Bottom Tech Stack Pills Row (Evenly spaced across the card width) -->
    <g transform="translate(36, 266)">
      <!-- Pill 1: Figma -->
      <g transform="translate(0, 0)">
        <rect width="135" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="67" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">🎨 Figma</text>
      </g>
      <!-- Pill 2: React 19 -->
      <g transform="translate(150, 0)">
        <rect width="145" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="72" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#73D1E0" text-anchor="middle">⚛️ React 19</text>
      </g>
      <!-- Pill 3: Next.js 16 -->
      <g transform="translate(310, 0)">
        <rect width="150" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="75" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">▲ Next.js 16</text>
      </g>
      <!-- Pill 4: TypeScript -->
      <g transform="translate(475, 0)">
        <rect width="155" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="77" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#73D1E0" text-anchor="middle">📘 TypeScript</text>
      </g>
      <!-- Pill 5: Python API -->
      <g transform="translate(645, 0)">
        <rect width="155" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="77" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">🐍 Python API</text>
      </g>
      <!-- Pill 6: Three.js -->
      <g transform="translate(815, 0)">
        <rect width="140" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="70" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#73D1E0" text-anchor="middle">🌌 Three.js</text>
      </g>
      <!-- Pill 7: Cloudflare -->
      <g transform="translate(970, 0)">
        <rect width="84" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="42" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">⚡ Edge</text>
      </g>
    </g>
  </g>
</svg>
`;

  const bannerBuffer = await sharp(Buffer.from(bannerSvg))
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();

  const ptDesktop = path.join(process.env.USERPROFILE, 'Área de Trabalho');
  const enDesktop = path.join(process.env.USERPROFILE, 'Desktop');
  const desktopDir = fs.existsSync(ptDesktop) ? ptDesktop : enDesktop;

  fs.writeFileSync(path.join(desktopDir, 'victor-gotfrid-linkedin-banner.png'), bannerBuffer);
  fs.writeFileSync(path.resolve('public/linkedin-banner-1584x396.png'), bannerBuffer);

  const artifactDir = 'C:\\Users\\victo\\.gemini\\antigravity\\brain\\7b9d9f7c-c49e-46df-845d-4c83de75b558';
  if (fs.existsSync(artifactDir)) {
    fs.writeFileSync(path.join(artifactDir, 'victor-gotfrid-linkedin-banner.png'), bannerBuffer);
  }

  console.log('✓ Adjusted LinkedIn banner generated and saved to Desktop!');
}

async function run() {
  await processProfilePhoto();
  await processLinkedInBanner();
}

run().catch(console.error);
