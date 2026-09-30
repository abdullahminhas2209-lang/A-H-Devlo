import sharp from 'sharp';
import fs from 'fs';

async function generateFavicon() {
  const input = 'public/brand/logo-transparent.png';
  
  // Crop the 3-node clover emblem: minX=53, maxX=538, minY=34, maxY=486 (w=485, h=452)
  const pad = 12;
  const left = Math.max(0, 53 - pad);
  const top = Math.max(0, 34 - pad);
  const width = (538 - 53) + pad * 2;
  const height = (486 - 34) + pad * 2;

  // 1. Extract emblem with transparent background and square fit
  const emblemBuffer = await sharp(input)
    .extract({ left, top, width, height })
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // Save 512x512 favicon.png
  await sharp(emblemBuffer).toFile('public/favicon.png');
  await sharp(emblemBuffer).toFile('public/apple-touch-icon.png');

  // Save 32x32 and 16x16
  await sharp(emblemBuffer).resize(32, 32).toFile('public/favicon-32x32.png');
  await sharp(emblemBuffer).resize(16, 16).toFile('public/favicon-16x16.png');

  // Also save a version with a dark subtle circle/pill if needed, or pure transparent
  // For favicon.ico, we can write the 32x32 PNG as favicon.ico or copy
  fs.copyFileSync('public/favicon-32x32.png', 'public/favicon.ico');

  // 2. Generate public/favicon.svg using embedded base64 of the high-res emblem
  const base64 = emblemBuffer.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image width="512" height="512" href="data:image/png;base64,${base64}" />
</svg>`;

  fs.writeFileSync('public/favicon.svg', svgContent, 'utf8');

  console.log('Successfully generated all favicons: favicon.png, favicon-32x32.png, favicon-16x16.png, favicon.ico, and favicon.svg!');
}

generateFavicon().catch(console.error);
