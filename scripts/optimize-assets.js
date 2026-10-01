import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const projectsDir = path.join(publicDir, 'projects');

async function generateOgImage() {
  const ogWidth = 1200;
  const ogHeight = 630;

  // Render high-res SVG overlay
  const svgOverlay = Buffer.from(`
    <svg width="${ogWidth}" height="${ogHeight}" viewBox="0 0 ${ogWidth} ${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cyanGlow" cx="20%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#030B14" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="blueGlow" cx="80%" cy="70%" r="50%">
          <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#030B14" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#22D3EE"/>
          <stop offset="100%" stop-color="#3B82F6"/>
        </linearGradient>
      </defs>
      
      <!-- Background rect -->
      <rect width="${ogWidth}" height="${ogHeight}" fill="#030B14"/>
      <rect width="${ogWidth}" height="${ogHeight}" fill="url(#cyanGlow)"/>
      <rect width="${ogWidth}" height="${ogHeight}" fill="url(#blueGlow)"/>

      <!-- Ambient grid dots -->
      <g opacity="0.15" fill="#38BDF8">
        ${Array.from({ length: 12 }).map((_, r) =>
          Array.from({ length: 24 }).map((_, c) =>
            `<circle cx="${50 + c * 48}" cy="${50 + r * 48}" r="1.5" />`
          ).join('')
        ).join('')}
      </g>

      <!-- Border frame -->
      <rect x="30" y="30" width="${ogWidth - 60}" height="${ogHeight - 60}" rx="24" fill="none" stroke="#163554" stroke-width="1.5"/>

      <!-- Eyebrow Pill -->
      <g transform="translate(80, 110)">
        <rect width="320" height="38" rx="19" fill="#0E243A" stroke="#1D4ED8" stroke-width="1.2"/>
        <circle cx="24" cy="19" r="4.5" fill="#22D3EE"/>
        <text x="42" y="24" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#E0F2FE" letter-spacing="1.5">
          WEB DESIGN × DEVELOPMENT
        </text>
      </g>

      <!-- Main Headline -->
      <text x="80" y="225" font-family="'Outfit', 'Inter', sans-serif" font-size="54" font-weight="800" fill="#FFFFFF" letter-spacing="-1">
        Websites that make
      </text>
      <text x="80" y="285" font-family="'Outfit', 'Inter', sans-serif" font-size="54" font-weight="800" fill="#FFFFFF" letter-spacing="-1">
        small businesses
      </text>
      <text x="80" y="345" font-family="'Outfit', 'Inter', sans-serif" font-size="54" font-weight="800" fill="#22D3EE" letter-spacing="-1">
        look professional.
      </text>

      <!-- Subtitle -->
      <text x="80" y="420" font-family="'Inter', sans-serif" font-size="20" font-weight="400" fill="#94A3B8">
        Bespoke websites and conversion landing pages for ambitious small businesses.
      </text>

      <!-- Brand Monogram / Badge bottom right -->
      <g transform="translate(80, 500)">
        <text x="0" y="24" font-family="'Outfit', sans-serif" font-size="28" font-weight="800" fill="#FFFFFF">
          A&amp;H Devlo
        </text>
        <text x="0" y="46" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#64748B" letter-spacing="1">
          https://a-h-devlo.vercel.app
        </text>
      </g>

      <!-- Live badge -->
      <g transform="translate(880, 495)">
        <rect width="240" height="48" rx="24" fill="#081726" stroke="#163554" stroke-width="1.2"/>
        <circle cx="28" cy="24" r="5" fill="#34D399"/>
        <text x="46" y="29" font-family="'Inter', sans-serif" font-size="14" font-weight="600" fill="#F1F5F9">
          Available for Q2/Q3
        </text>
      </g>
    </svg>
  `);

  const ogPath = path.join(publicDir, 'og-image.jpg');
  await sharp(svgOverlay)
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
    .toFile(ogPath);

  console.log(`Generated og-image.jpg (${(fs.statSync(ogPath).size / 1024).toFixed(1)} KB)`);
}

async function optimizeProjectImages() {
  const images = ['apex-athletic', 'maison-forme', 'osteria-riva', 'vanguard-advisory'];

  for (const name of images) {
    const srcJpg = path.join(projectsDir, `${name}.jpg`);
    if (!fs.existsSync(srcJpg)) continue;

    const originalSize = fs.statSync(srcJpg).size;
    const inputBuffer = fs.readFileSync(srcJpg);

    // Generate WebP
    const webpPath = path.join(projectsDir, `${name}.webp`);
    await sharp(inputBuffer)
      .webp({ quality: 82, effort: 5 })
      .toFile(webpPath);

    // Generate AVIF
    const avifPath = path.join(projectsDir, `${name}.avif`);
    await sharp(inputBuffer)
      .avif({ quality: 78, effort: 5 })
      .toFile(avifPath);

    const webpSize = fs.statSync(webpPath).size;
    const avifSize = fs.statSync(avifPath).size;

    console.log(
      `Optimized ${name}: Original ${(originalSize / 1024).toFixed(0)}KB -> WebP ${(webpSize / 1024).toFixed(0)}KB | AVIF ${(avifSize / 1024).toFixed(0)}KB`
    );
  }
}

async function run() {
  console.log('Optimizing images and generating social assets...');
  await generateOgImage();
  await optimizeProjectImages();
  console.log('Optimization complete!');
}

run().catch(console.error);
