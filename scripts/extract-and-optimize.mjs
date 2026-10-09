import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_ASSETS_DIR = path.resolve('source-assets');
const OUTPUT_DIR = path.resolve('public/portfolio');

// Ensure output directories exist
const dirs = [
  'public/portfolio',
  'public/portfolio/logos',
  'public/portfolio/visiting-cards',
  'public/portfolio/social-media',
  'public/portfolio/thumbnails'
];
dirs.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

async function processAll() {
  console.log('--- Starting HD Asset Extraction & Enhancement Pipeline ---');

  // ==========================================
  // 1. EXTRACT LOGOS VOL 01 (7 logos) - HD 4x Super Resolution
  // ==========================================
  const vol1Path = path.join(SOURCE_ASSETS_DIR, 'original-logo-collection-vol-01.jpg');
  const vol1Logos = [
    {
      id: 'logo-abdullah-minhas',
      title: 'Abdullah Minhas',
      box: { left: 0, top: 113, width: 178, height: 120 },
      artBox: { left: 25, top: 128, width: 128, height: 85 }
    },
    {
      id: 'logo-orifice-medical',
      title: 'Orifice Healthcare',
      box: { left: 0, top: 237, width: 178, height: 120 },
      artBox: { left: 30, top: 248, width: 118, height: 90 }
    },
    {
      id: 'logo-toes-to-nose',
      title: 'Toes to Nose',
      box: { left: 0, top: 361, width: 178, height: 120 },
      artBox: { left: 35, top: 372, width: 108, height: 90 }
    },
    {
      id: 'logo-iqra-book-store',
      title: 'Iqra Book Store',
      box: { left: 0, top: 485, width: 178, height: 122 },
      artBox: { left: 30, top: 495, width: 118, height: 95 }
    },
    {
      id: 'logo-collab-and-connect',
      title: 'Collab & Connect',
      box: { left: 0, top: 611, width: 178, height: 121 },
      artBox: { left: 32, top: 620, width: 114, height: 92 }
    },
    {
      id: 'logo-horizon-skyline',
      title: 'Horizon Properties',
      box: { left: 0, top: 736, width: 178, height: 124 },
      artBox: { left: 28, top: 746, width: 122, height: 94 }
    },
    {
      id: 'logo-zuhair-ishaque',
      title: 'Zuhair Ishaque',
      box: { left: 0, top: 864, width: 178, height: 122 },
      artBox: { left: 32, top: 874, width: 114, height: 92 }
    }
  ];

  for (const item of vol1Logos) {
    // 1. Full card presentation version - upscale 4.5x with Lanczos3 + unsharp sharpening for ultra-crisp HD edges
    const targetCardWidth = Math.round(item.box.width * 4.5);
    const cardImg = sharp(vol1Path)
      .extract(item.box)
      .resize({ width: targetCardWidth, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 0.9, m2: 2.2 });

    await cardImg.clone().webp({ quality: 98, effort: 6 }).toFile(`public/portfolio/logos/${item.id}.webp`);
    await cardImg.clone().png({ compressionLevel: 8 }).toFile(`public/portfolio/logos/${item.id}.png`);

    // 2. Focused artwork crop (isolated mark) - upscale 4.5x with Lanczos3
    const targetArtWidth = Math.round(item.artBox.width * 4.5);
    const artImg = sharp(vol1Path)
      .extract(item.artBox)
      .resize({ width: targetArtWidth, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.4 });

    await artImg.clone().webp({ quality: 98, effort: 6 }).toFile(`public/portfolio/logos/${item.id}-mark.webp`);
    await artImg.clone().png({ compressionLevel: 8 }).toFile(`public/portfolio/logos/${item.id}-mark.png`);

    // 3. Crisp Retina-ready thumbnail (400px width)
    await sharp(vol1Path)
      .extract(item.box)
      .resize({ width: 400, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.8 })
      .webp({ quality: 92 })
      .toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);

    console.log(`[HD 4x] Generated logo assets for: ${item.id}`);
  }

  // ==========================================
  // 2. EXTRACT LOGOS VOL 02 (6 logos) - HD 4x Super Resolution
  // ==========================================
  const vol2Path = path.join(SOURCE_ASSETS_DIR, 'original-logo-collection-vol-02.jpg');
  const vol2Logos = [
    {
      id: 'logo-theta-teas',
      title: 'Theta Teas',
      box: { left: 0, top: 173, width: 245, height: 107 },
      artBox: { left: 20, top: 195, width: 205, height: 75 }
    },
    {
      id: 'logo-sigma-leathers',
      title: 'Sigma Leathers',
      box: { left: 0, top: 289, width: 245, height: 106 },
      artBox: { left: 20, top: 308, width: 205, height: 75 }
    },
    {
      id: 'logo-rizwaniat-fluid',
      title: 'Rizwaniat (Fluid)',
      box: { left: 0, top: 404, width: 245, height: 107 },
      artBox: { left: 25, top: 418, width: 195, height: 82 }
    },
    {
      id: 'logo-bawarchi-khana',
      title: 'Bawarchi Khana',
      box: { left: 0, top: 519, width: 245, height: 107 },
      artBox: { left: 35, top: 526, width: 175, height: 95 }
    },
    {
      id: 'logo-pixel-perfect-designs',
      title: 'Pixel Perfect Designs',
      box: { left: 0, top: 635, width: 245, height: 107 },
      artBox: { left: 30, top: 648, width: 185, height: 82 }
    },
    {
      id: 'logo-rizwaniat-serif',
      title: 'Rizwaniat (Serif)',
      box: { left: 0, top: 750, width: 245, height: 107 },
      artBox: { left: 30, top: 758, width: 185, height: 88 }
    }
  ];

  for (const item of vol2Logos) {
    const targetCardWidth = Math.round(item.box.width * 4.0);
    const cardImg = sharp(vol2Path)
      .extract(item.box)
      .resize({ width: targetCardWidth, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 0.9, m2: 2.2 });

    await cardImg.clone().webp({ quality: 98, effort: 6 }).toFile(`public/portfolio/logos/${item.id}.webp`);
    await cardImg.clone().png({ compressionLevel: 8 }).toFile(`public/portfolio/logos/${item.id}.png`);

    const targetArtWidth = Math.round(item.artBox.width * 4.0);
    const artImg = sharp(vol2Path)
      .extract(item.artBox)
      .resize({ width: targetArtWidth, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 1.0, m2: 2.4 });

    await artImg.clone().webp({ quality: 98, effort: 6 }).toFile(`public/portfolio/logos/${item.id}-mark.webp`);
    await artImg.clone().png({ compressionLevel: 8 }).toFile(`public/portfolio/logos/${item.id}-mark.png`);

    await sharp(vol2Path)
      .extract(item.box)
      .resize({ width: 440, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.8 })
      .webp({ quality: 92 })
      .toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);

    console.log(`[HD 4x] Generated logo assets for: ${item.id}`);
  }

  // ==========================================
  // 3. EXTRACT VISITING CARDS (6 mockups) - HD 980px Resolution
  // ==========================================
  const cardsPath = path.join(SOURCE_ASSETS_DIR, 'original-visiting-cards-collection.jpg');
  const visitingCards = [
    {
      id: 'visiting-card-gold-luxury',
      title: 'Gold Luxury Stationery',
      box: { left: 0, top: 182, width: 245, height: 123 }
    },
    {
      id: 'visiting-card-boxed-stationery',
      title: 'Minimalist Boxed Presentation',
      box: { left: 0, top: 307, width: 245, height: 132 }
    },
    {
      id: 'visiting-card-modern-duo',
      title: 'Corporate Duo Cards',
      box: { left: 0, top: 441, width: 245, height: 123 }
    },
    {
      id: 'visiting-card-executive-desk',
      title: 'Orifice Executive Stationery',
      box: { left: 0, top: 566, width: 245, height: 134 }
    },
    {
      id: 'visiting-card-dark-geometric',
      title: 'Obsidian Matte Identity Cards',
      box: { left: 0, top: 702, width: 245, height: 139 }
    },
    {
      id: 'visiting-card-wood-table-mockup',
      title: 'Collab & Connect Walnut Mockup',
      box: { left: 0, top: 843, width: 245, height: 141 }
    }
  ];

  for (const item of visitingCards) {
    const cardImg = sharp(cardsPath)
      .extract(item.box)
      .resize({ width: 980, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 0.85, m2: 2.2 });

    await cardImg.clone().webp({ quality: 98, effort: 6 }).toFile(`public/portfolio/visiting-cards/${item.id}.webp`);
    await cardImg.clone().png({ compressionLevel: 8 }).toFile(`public/portfolio/visiting-cards/${item.id}.png`);

    await sharp(cardsPath)
      .extract(item.box)
      .resize({ width: 500, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.8 })
      .webp({ quality: 92 })
      .toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);

    console.log(`[HD 4x] Generated visiting card assets for: ${item.id}`);
  }

  // ==========================================
  // 4. EXTRACT SOCIAL POSTS VOL 01 (3 Orifice Posts) - HD 980x980 Square
  // ==========================================
  const social1Path = path.join(SOURCE_ASSETS_DIR, 'original-social-posts-vol-01.jpg');
  const social1Posts = [
    {
      id: 'social-post-orifice-team',
      title: 'Orifice Medical Team Spotlight',
      box: { left: 0, top: 189, width: 245, height: 246 }
    },
    {
      id: 'social-post-orifice-oncologist',
      title: 'Dr. Shane Doe Smith (Oncologist)',
      box: { left: 0, top: 445, width: 245, height: 255 }
    },
    {
      id: 'social-post-orifice-discount',
      title: 'Comprehensive Health Checkup (20% Off)',
      box: { left: 0, top: 710, width: 245, height: 255 }
    }
  ];

  for (const item of social1Posts) {
    const postImg = sharp(social1Path)
      .extract(item.box)
      .resize({ width: 980, height: 980, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 0.85, m2: 2.2 });

    await postImg.clone().webp({ quality: 98, effort: 6 }).toFile(`public/portfolio/social-media/${item.id}.webp`);
    await postImg.clone().png({ compressionLevel: 8 }).toFile(`public/portfolio/social-media/${item.id}.png`);

    await sharp(social1Path)
      .extract(item.box)
      .resize({ width: 480, height: 480, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.8 })
      .webp({ quality: 92 })
      .toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);

    console.log(`[HD 4x] Generated social media assets for: ${item.id}`);
  }

  // ==========================================
  // 5. EXTRACT SOCIAL POSTS VOL 02 (3 Toes to Nose Posts) - HD 980x980 Square
  // ==========================================
  const social2Path = path.join(SOURCE_ASSETS_DIR, 'original-social-posts-vol-02.jpg');
  const social2Posts = [
    {
      id: 'social-post-toes-to-nose-tailored',
      title: 'Tailored Suiting Editorial',
      box: { left: 0, top: 189, width: 245, height: 246 }
    },
    {
      id: 'social-post-toes-to-nose-clearance',
      title: 'Seasonal Clearance Campaign (50% Off)',
      box: { left: 0, top: 445, width: 245, height: 245 }
    },
    {
      id: 'social-post-toes-to-nose-denim',
      title: 'Contemporary Casual Denim (65% Off)',
      box: { left: 0, top: 700, width: 245, height: 255 }
    }
  ];

  for (const item of social2Posts) {
    const postImg = sharp(social2Path)
      .extract(item.box)
      .resize({ width: 980, height: 980, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.0, m1: 0.85, m2: 2.2 });

    await postImg.clone().webp({ quality: 98, effort: 6 }).toFile(`public/portfolio/social-media/${item.id}.webp`);
    await postImg.clone().png({ compressionLevel: 8 }).toFile(`public/portfolio/social-media/${item.id}.png`);

    await sharp(social2Path)
      .extract(item.box)
      .resize({ width: 480, height: 480, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 0.8, m1: 0.8, m2: 1.8 })
      .webp({ quality: 92 })
      .toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);

    console.log(`[HD 4x] Generated social media assets for: ${item.id}`);
  }

  console.log('--- Finished extracting and generating ALL 25 Ultra-HD assets! ---');
}

processAll().catch(err => {
  console.error('HD Extraction error:', err);
  process.exit(1);
});
