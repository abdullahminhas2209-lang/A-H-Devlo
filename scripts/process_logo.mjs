import sharp from 'sharp';

async function findContentBounds() {
  const inputPath = 'devlo by A&H logo edited.png';
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });

  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  
  // Brightness test: The background is dark blue/navy (max channel ~60).
  // The emblem has bright cyan/teal (green/blue > 120), text is white (> 200).
  for (let y = 0; y < info.height; y += 4) {
    for (let x = 0; x < info.width; x += 4) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // If any channel is > 100, it is foreground (emblem or white text)
      if (r > 90 || g > 110 || b > 120) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`True content bounds: left=${minX}, top=${minY}, right=${maxX}, bottom=${maxY}`);
  console.log(`Width=${maxX - minX}, Height=${maxY - minY}`);

  // Add 4% margin around content
  const marginX = Math.round((maxX - minX) * 0.05);
  const marginY = Math.round((maxY - minY) * 0.08);

  const cropLeft = Math.max(0, minX - marginX);
  const cropTop = Math.max(0, minY - marginY);
  const cropWidth = Math.min(info.width - cropLeft, (maxX - minX) + marginX * 2);
  const cropHeight = Math.min(info.height - cropTop, (maxY - minY) + marginY * 2);

  console.log(`Extracted crop: left=${cropLeft}, top=${cropTop}, width=${cropWidth}, height=${cropHeight}`);

  // 1. High-res cropped banner (maintains authentic studio gradient background behind emblem and text)
  await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize({ width: 1200 })
    .png({ quality: 95 })
    .toFile('public/brand/logo-cropped.png');

  // 2. High-res transparent cutout (removes the dark navy background cleanly)
  // Background pixels have brightness < 80. Foreground has bright colors.
  const croppedRaw = await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize({ width: 1200 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cData = croppedRaw.data;
  const cInfo = croppedRaw.info;
  const transparentBuf = Buffer.alloc(cInfo.width * cInfo.height * 4);

  for (let i = 0; i < cInfo.width * cInfo.height; i++) {
    const srcIdx = i * cInfo.channels;
    const r = cData[srcIdx];
    const g = cData[srcIdx + 1];
    const b = cData[srcIdx + 2];

    const maxChannel = Math.max(r, g, b);

    const outIdx = i * 4;
    transparentBuf[outIdx] = r;
    transparentBuf[outIdx + 1] = g;
    transparentBuf[outIdx + 2] = b;

    if (maxChannel < 60) {
      transparentBuf[outIdx + 3] = 0; // fully transparent background
    } else if (maxChannel < 110) {
      // Smooth alpha feather
      const alpha = Math.round(((maxChannel - 60) / 50) * 255);
      transparentBuf[outIdx + 3] = alpha;
    } else {
      transparentBuf[outIdx + 3] = 255;
    }
  }

  await sharp(transparentBuf, { raw: { width: cInfo.width, height: cInfo.height, channels: 4 } })
    .png()
    .toFile('public/brand/logo-transparent.png');

  // 3. Extract the 3-node emblem icon on its own (for favicon and compact badges)
  // The emblem ends around minX + (maxY - minY)
  const emblemRight = minX + Math.round((maxY - minY) * 1.05);
  const emblemWidth = emblemRight - minX + marginX * 2;

  await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: Math.min(emblemWidth, cropWidth), height: cropHeight })
    .resize({ width: 512, height: 512, fit: 'contain', background: { r: 2, g: 15, b: 28, alpha: 1 } })
    .png()
    .toFile('public/brand/emblem.png');

  console.log('Saved logo-cropped.png, logo-transparent.png, and emblem.png!');
}

findContentBounds().catch(console.error);
