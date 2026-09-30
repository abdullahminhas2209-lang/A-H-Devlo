import sharp from 'sharp';

async function makeSolidWhiteTextTransparent() {
  const input = 'public/brand/logo-cropped.png';
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  const out = Buffer.alloc(w * h * 4);

  // Background is dark navy: r <= 15, g <= 34, b <= 52
  // Emblem is strictly x < 540
  // Gap is 540 <= x <= 620
  // Text is strictly x >= 625
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * info.channels;
      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const outIdx = (y * w + x) * 4;

      const isBg = (r <= 15 && g <= 35 && b <= 54);

      if (isBg) {
        out[outIdx] = 0;
        out[outIdx + 1] = 0;
        out[outIdx + 2] = 0;
        out[outIdx + 3] = 0; // Pure transparent background
      } else if (x > 580) {
        // Text area: "A&H devlo"
        // Make the text solid, pure brilliant white with smooth edge anti-aliasing
        const brightness = Math.max(r, g, b);
        const alpha = Math.min(255, Math.max(0, Math.round(((brightness - 25) / 45) * 255)));
        
        out[outIdx] = 255;
        out[outIdx + 1] = 255;
        out[outIdx + 2] = 255;
        out[outIdx + 3] = alpha;
      } else {
        // Emblem area: preserve authentic cyan/teal gradient & nodes
        const edgeDist = Math.max(r - 12, g - 32, b - 50);
        const alpha = edgeDist < 25 ? Math.round((edgeDist / 25) * 255) : 255;

        out[outIdx] = r;
        out[outIdx + 1] = g;
        out[outIdx + 2] = b;
        out[outIdx + 3] = Math.min(255, Math.max(0, alpha));
      }
    }
  }

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile('public/brand/logo-transparent.png');

  console.log('Saved perfect logo-transparent.png with accurate gap!');
}

makeSolidWhiteTextTransparent().catch(console.error);
