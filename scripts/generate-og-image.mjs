import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const width = 1200;
const height = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041216"/>
      <stop offset="50%" stop-color="#05181D"/>
      <stop offset="100%" stop-color="#082229"/>
    </linearGradient>

    <radialGradient id="glowTopRight" cx="85%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#73D1E0" stop-opacity="0.18"/>
      <stop offset="50%" stop-color="#00595B" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="glowBottomLeft" cx="15%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#00595B" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#05181D" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#082229" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#05181D" stop-opacity="0.95"/>
    </linearGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F7F7F8"/>
      <stop offset="100%" stop-color="#73D1E0"/>
    </linearGradient>

    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#73D1E0"/>
      <stop offset="100%" stop-color="#358A90"/>
    </linearGradient>

    <!-- Technical Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00595B" stroke-width="0.8" stroke-opacity="0.25"/>
      <circle cx="40" cy="40" r="1" fill="#73D1E0" fill-opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>

  <!-- Radiant Glows -->
  <rect width="${width}" height="${height}" fill="url(#glowTopRight)"/>
  <rect width="${width}" height="${height}" fill="url(#glowBottomLeft)"/>

  <!-- Outer Glass Frame / Container -->
  <g transform="translate(60, 50)">
    <rect width="1080" height="530" rx="24" fill="url(#cardGrad)" stroke="#00595B" stroke-width="1.5" stroke-opacity="0.6"/>
    <rect width="1080" height="530" rx="24" fill="none" stroke="#73D1E0" stroke-width="1" stroke-opacity="0.2"/>

    <!-- Top Navigation Bar inside Glass -->
    <g transform="translate(48, 48)">
      <!-- Terminal Brandmark -->
      <rect width="48" height="48" rx="14" fill="#082229" stroke="#00595B" stroke-width="1.5"/>
      <polyline points="15 17 24 24 15 31" fill="none" stroke="#73D1E0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="27" y1="31" x2="35" y2="31" stroke="#73D1E0" stroke-width="3" stroke-linecap="round"/>

      <!-- Brand Info -->
      <text x="64" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" letter-spacing="0.5">VICTOR GOTFRID</text>
      <text x="64" y="42" font-family="system-ui, -apple-system, monospace" font-size="12" font-weight="500" fill="#73D1E0" letter-spacing="1">DESIGN &amp; TECHNOLOGY • PORTFOLIO</text>

      <!-- URL Badge on Right -->
      <g transform="translate(740, 4)">
        <rect width="240" height="40" rx="20" fill="#05181D" stroke="#00595B" stroke-width="1.2"/>
        <circle cx="22" cy="20" r="4" fill="#10B981"/>
        <text x="36" y="25" font-family="system-ui, -apple-system, monospace" font-size="14" font-weight="600" fill="#73D1E0">victorgotfrid.com</text>
      </g>
    </g>

    <!-- Main Hero Content -->
    <g transform="translate(48, 175)">
      <!-- Mini Badge -->
      <rect width="360" height="28" rx="14" fill="#00595B" fill-opacity="0.3" stroke="#73D1E0" stroke-width="1" stroke-opacity="0.4"/>
      <text x="18" y="19" font-family="system-ui, -apple-system, monospace" font-size="11" font-weight="600" fill="#73D1E0" letter-spacing="1.5">PRODUCT DESIGN • WEB • 3D CANVAS</text>

      <!-- Giant Main Headline -->
      <text x="0" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="800" fill="url(#textGrad)" letter-spacing="-1.5">
        Product &amp; Web Designer
      </text>

      <!-- Subtitle Description -->
      <text x="0" y="132" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#8EACB4" letter-spacing="-0.2">
        Unindo engenharia full-stack, direção de arte e design de produto.
      </text>
      <text x="0" y="160" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="400" fill="#5C7B83">
        Figma • React 19 • Next.js 16 • TypeScript • Python • Three.js • Cloudflare
      </text>
    </g>

    <!-- Bottom Stack Pills Bar -->
    <g transform="translate(48, 435)">
      <!-- Pill 1 -->
      <g transform="translate(0, 0)">
        <rect width="115" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="57" y="22" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="500" fill="#F7F7F8" text-anchor="middle">🎨 Figma</text>
      </g>
      <!-- Pill 2 -->
      <g transform="translate(127, 0)">
        <rect width="125" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="62" y="22" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="500" fill="#73D1E0" text-anchor="middle">⚛️ React 19</text>
      </g>
      <!-- Pill 3 -->
      <g transform="translate(264, 0)">
        <rect width="130" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="65" y="22" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="500" fill="#F7F7F8" text-anchor="middle">▲ Next.js 16</text>
      </g>
      <!-- Pill 4 -->
      <g transform="translate(406, 0)">
        <rect width="140" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="70" y="22" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="500" fill="#73D1E0" text-anchor="middle">📘 TypeScript</text>
      </g>
      <!-- Pill 5 -->
      <g transform="translate(558, 0)">
        <rect width="140" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="70" y="22" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="500" fill="#F7F7F8" text-anchor="middle">🐍 Python API</text>
      </g>
      <!-- Pill 6 -->
      <g transform="translate(710, 0)">
        <rect width="135" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="67" y="22" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="500" fill="#73D1E0" text-anchor="middle">🌌 Three.js</text>
      </g>
      <!-- Pill 7 -->
      <g transform="translate(857, 0)">
        <rect width="125" height="36" rx="10" fill="#05181D" stroke="#00595B" stroke-width="1"/>
        <text x="62" y="22" font-family="system-ui, -apple-system, monospace" font-size="13" font-weight="500" fill="#F7F7F8" text-anchor="middle">⚡ Cloudflare</text>
      </g>
    </g>
  </g>
</svg>
`;

async function generate() {
  console.log('Generating OpenGraph and LinkedIn thumbnail image...');

  const svgBuffer = Buffer.from(svg);

  const pngBuffer = await sharp(svgBuffer)
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();

  // Save to public/og-image.png
  fs.writeFileSync(path.resolve('public/og-image.png'), pngBuffer);
  console.log('✓ Saved public/og-image.png');

  // Save to src/app/opengraph-image.png and twitter-image.png
  fs.writeFileSync(path.resolve('src/app/opengraph-image.png'), pngBuffer);
  fs.writeFileSync(path.resolve('src/app/twitter-image.png'), pngBuffer);
  console.log('✓ Saved src/app/opengraph-image.png and twitter-image.png');

  // Save to brain artifacts directory
  const artifactDir = 'C:\\Users\\victo\\.gemini\\antigravity\\brain\\7b9d9f7c-c49e-46df-845d-4c83de75b558';
  if (fs.existsSync(artifactDir)) {
    fs.writeFileSync(path.join(artifactDir, 'victorgotfrid-og-preview.png'), pngBuffer);
    console.log('✓ Saved artifact victorgotfrid-og-preview.png');
  }

  // Also copy to user desktop or project root for direct access if needed
  fs.writeFileSync(path.resolve('victorgotfrid-linkedin-thumbnail.png'), pngBuffer);
  console.log('✓ Saved victorgotfrid-linkedin-thumbnail.png in project root');

  console.log('OpenGraph social share image generation complete! (1200x630 PNG)');
}

generate().catch(console.error);
