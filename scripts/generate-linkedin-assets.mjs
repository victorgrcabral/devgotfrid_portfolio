import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const bannerWidth = 1584;
const bannerHeight = 396;

const bannerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${bannerWidth}" height="${bannerHeight}" viewBox="0 0 ${bannerWidth} ${bannerHeight}">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030e12"/>
      <stop offset="30%" stop-color="#05181D"/>
      <stop offset="70%" stop-color="#082229"/>
      <stop offset="100%" stop-color="#041418"/>
    </linearGradient>

    <radialGradient id="cyanSpotlight" cx="80%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#73D1E0" stop-opacity="0.22"/>
      <stop offset="40%" stop-color="#00595B" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="leftGlow" cx="20%" cy="60%" r="40%">
      <stop offset="0%" stop-color="#00595B" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F7F7F8"/>
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

  <!-- Radiant Atmospheric Lights -->
  <rect width="${bannerWidth}" height="${bannerHeight}" fill="url(#cyanSpotlight)"/>
  <rect width="${bannerWidth}" height="${bannerHeight}" fill="url(#leftGlow)"/>

  <!-- Left Side Geometric / Grid Decorative Lines (Behind profile photo avatar safe zone) -->
  <g transform="translate(60, 40)" opacity="0.35">
    <circle cx="160" cy="160" r="140" fill="none" stroke="#00595B" stroke-width="1.5" stroke-dasharray="4 6"/>
    <circle cx="160" cy="160" r="110" fill="none" stroke="#73D1E0" stroke-width="1" stroke-dasharray="2 4"/>
    <line x1="20" y1="160" x2="300" y2="160" stroke="#00595B" stroke-width="1"/>
    <line x1="160" y1="20" x2="160" y2="300" stroke="#00595B" stroke-width="1"/>
  </g>

  <!-- Main Content Card Container (Placed on the right to avoid profile photo overlap) -->
  <g transform="translate(420, 32)">
    <!-- Frosted Glass Card Panel -->
    <rect width="1114" height="332" rx="20" fill="#082229" fill-opacity="0.75" stroke="#00595B" stroke-width="1.2" stroke-opacity="0.6"/>
    <rect width="1114" height="332" rx="20" fill="none" stroke="#73D1E0" stroke-width="0.75" stroke-opacity="0.25"/>

    <!-- Top Badge Row -->
    <g transform="translate(36, 30)">
      <!-- Terminal Icon Badge -->
      <rect width="36" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1.2"/>
      <polyline points="11 13 18 18 11 23" fill="none" stroke="#73D1E0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="20" y1="23" x2="26" y2="23" stroke="#73D1E0" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Category Label -->
      <g transform="translate(48, 4)">
        <rect width="310" height="28" rx="8" fill="#00595B" fill-opacity="0.3" stroke="#73D1E0" stroke-width="0.8" stroke-opacity="0.4"/>
        <text x="14" y="19" font-family="system-ui, -apple-system, monospace" font-size="11" font-weight="600" fill="#73D1E0" letter-spacing="1.2">PRODUCT &amp; WEB DESIGN • ENGINEERING</text>
      </g>

      <!-- URL Badge on Right -->
      <g transform="translate(820, 2)">
        <rect width="220" height="32" rx="16" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <circle cx="18" cy="16" r="3.5" fill="#10B981"/>
        <text x="32" y="21" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="600" fill="#73D1E0">victorgotfrid.com</text>
      </g>
    </g>

    <!-- Main Headline & Subtitle -->
    <g transform="translate(36, 115)">
      <!-- Name -->
      <text x="0" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="url(#textGrad)" letter-spacing="-1">
        Victor Gotfrid
      </text>

      <!-- Role / Tagline -->
      <text x="0" y="78" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#73D1E0" letter-spacing="-0.2">
        Product &amp; Web Designer • Design Engineer
      </text>

      <text x="0" y="104" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="400" fill="#8EACB4" letter-spacing="-0.1">
        Unindo engenharia full-stack, direção de arte e design de produto — Figma • React 19 • Next.js 16 • TypeScript • Python • Three.js
      </text>
    </g>

    <!-- Bottom Stack Badges & Status -->
    <g transform="translate(36, 266)">
      <!-- Pill 1: Figma -->
      <g transform="translate(0, 0)">
        <rect width="90" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="45" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">🎨 Figma</text>
      </g>
      <!-- Pill 2: React -->
      <g transform="translate(100, 0)">
        <rect width="105" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="52" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#73D1E0" text-anchor="middle">⚛️ React 19</text>
      </g>
      <!-- Pill 3: Next.js -->
      <g transform="translate(215, 0)">
        <rect width="110" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="55" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">▲ Next.js 16</text>
      </g>
      <!-- Pill 4: TypeScript -->
      <g transform="translate(335, 0)">
        <rect width="115" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="57" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#73D1E0" text-anchor="middle">📘 TypeScript</text>
      </g>
      <!-- Pill 5: Python API -->
      <g transform="translate(460, 0)">
        <rect width="115" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="57" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">🐍 Python API</text>
      </g>
      <!-- Pill 6: Three.js -->
      <g transform="translate(585, 0)">
        <rect width="105" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="52" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#73D1E0" text-anchor="middle">🌌 Three.js</text>
      </g>
      <!-- Pill 7: Cloudflare -->
      <g transform="translate(700, 0)">
        <rect width="105" height="32" rx="8" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="52" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#F7F7F8" text-anchor="middle">⚡ Cloudflare</text>
      </g>

      <!-- Status Pill on Right -->
      <g transform="translate(845, 0)">
        <rect width="195" height="32" rx="8" fill="#00595B" fill-opacity="0.3" stroke="#10B981" stroke-width="1"/>
        <circle cx="16" cy="16" r="3.5" fill="#10B981"/>
        <text x="28" y="20" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="600" fill="#10B981">Disponível / Open to Work</text>
      </g>
    </g>
  </g>
</svg>
`;

async function main() {
  console.log('Generating LinkedIn assets...');

  // 1. Render Banner to PNG (1584 x 396 px)
  const bannerBuffer = await sharp(Buffer.from(bannerSvg))
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();

  // Save banner files
  const bannerLocalPath = path.resolve('public/linkedin-banner-1584x396.png');
  fs.writeFileSync(bannerLocalPath, bannerBuffer);
  console.log('✓ Saved public/linkedin-banner-1584x396.png');

  const artifactDir = 'C:\\Users\\victo\\.gemini\\antigravity\\brain\\7b9d9f7c-c49e-46df-845d-4c83de75b558';
  if (fs.existsSync(artifactDir)) {
    fs.writeFileSync(path.join(artifactDir, 'victor-gotfrid-linkedin-banner.png'), bannerBuffer);
  }

  // 2. Process Profile Photo (from generated studio portrait)
  const generatedPhotoPath = path.join(artifactDir, 'victor_profile_photo_1787611568854.jpg');
  if (fs.existsSync(generatedPhotoPath)) {
    const profilePng = await sharp(generatedPhotoPath)
      .resize(800, 800, { fit: 'cover' })
      .png({ quality: 95 })
      .toBuffer();

    fs.writeFileSync(path.resolve('public/linkedin-profile-photo.png'), profilePng);
    fs.writeFileSync(path.join(artifactDir, 'victor-gotfrid-linkedin-profile.png'), profilePng);
    console.log('✓ Saved public/linkedin-profile-photo.png');
  }

  console.log('LinkedIn assets generation complete!');
}

main().catch(console.error);
