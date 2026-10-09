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
  console.log('--- Starting Asset Extraction & Optimization ---');

  // ==========================================
  // 1. EXTRACT LOGOS VOL 01 (7 logos)
  // ==========================================
  const vol1Path = path.join(SOURCE_ASSETS_DIR, 'original-logo-collection-vol-01.jpg');
  const vol1Logos = [
    {
      id: 'logo-abdullah-minhas',
      title: 'Abdullah Minhas',
      subtitle: 'Personal Brand Identity',
      category: 'Logo Design',
      box: { left: 0, top: 113, width: 178, height: 120 },
      artBox: { left: 25, top: 128, width: 128, height: 85 }
    },
    {
      id: 'logo-orifice-medical',
      title: 'Orifice Healthcare',
      subtitle: 'Medical Group Brand Identity',
      category: 'Logo Design',
      box: { left: 0, top: 237, width: 178, height: 120 },
      artBox: { left: 30, top: 248, width: 118, height: 90 }
    },
    {
      id: 'logo-toes-to-nose',
      title: 'Toes to Nose',
      subtitle: 'Apparel & Clothing Brand',
      category: 'Logo Design',
      box: { left: 0, top: 361, width: 178, height: 120 },
      artBox: { left: 35, top: 372, width: 108, height: 90 }
    },
    {
      id: 'logo-iqra-book-store',
      title: 'Iqra Book Store',
      subtitle: 'Educational & Literary Identity',
      category: 'Logo Design',
      box: { left: 0, top: 485, width: 178, height: 122 },
      artBox: { left: 30, top: 495, width: 118, height: 95 }
    },
    {
      id: 'logo-collab-and-connect',
      title: 'Collab & Connect',
      subtitle: 'Digital Community Platform',
      category: 'Logo Design',
      box: { left: 0, top: 611, width: 178, height: 121 },
      artBox: { left: 32, top: 620, width: 114, height: 92 }
    },
    {
      id: 'logo-horizon-skyline',
      title: 'Horizon Properties',
      subtitle: 'Architectural & Real Estate Mark',
      category: 'Logo Design',
      box: { left: 0, top: 736, width: 178, height: 124 },
      artBox: { left: 28, top: 746, width: 122, height: 94 }
    },
    {
      id: 'logo-zuhair-ishaque',
      title: 'Zuhair Ishaque',
      subtitle: 'Executive Personal Identity',
      category: 'Logo Design',
      box: { left: 0, top: 864, width: 178, height: 122 },
      artBox: { left: 32, top: 874, width: 114, height: 92 }
    }
  ];

  for (const item of vol1Logos) {
    // 1. Card presentation version (clean background, with subtle margins)
    const cardImg = sharp(vol1Path).extract(item.box);
    await cardImg.clone().webp({ quality: 92 }).toFile(`public/portfolio/logos/${item.id}.webp`);
    await cardImg.clone().png().toFile(`public/portfolio/logos/${item.id}.png`);

    // 2. Focused artwork crop (tight bounds for contain-fit logo showcases)
    const artImg = sharp(vol1Path).extract(item.artBox);
    await artImg.clone().webp({ quality: 95 }).toFile(`public/portfolio/logos/${item.id}-mark.webp`);
    await artImg.clone().png().toFile(`public/portfolio/logos/${item.id}-mark.png`);

    // 3. Optimized thumbnail
    await cardImg.clone().resize({ width: 320 }).webp({ quality: 85 }).toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);
    console.log(`Generated logo assets for: ${item.id}`);
  }

  // ==========================================
  // 2. EXTRACT LOGOS VOL 02 (6 logos)
  // ==========================================
  const vol2Path = path.join(SOURCE_ASSETS_DIR, 'original-logo-collection-vol-02.jpg');
  const vol2Logos = [
    {
      id: 'logo-theta-teas',
      title: 'Theta Teas',
      subtitle: 'Artisanal Beverage & Tea Brand',
      category: 'Logo Design',
      box: { left: 0, top: 173, width: 245, height: 107 },
      artBox: { left: 20, top: 195, width: 205, height: 75 }
    },
    {
      id: 'logo-sigma-leathers',
      title: 'Sigma Leathers',
      subtitle: 'Luxury Leathercraft Brand',
      category: 'Logo Design',
      box: { left: 0, top: 289, width: 245, height: 106 },
      artBox: { left: 20, top: 308, width: 205, height: 75 }
    },
    {
      id: 'logo-rizwaniat-fluid',
      title: 'Rizwaniat (Fluid)',
      subtitle: 'Modern Fluid Typographic Identity',
      category: 'Logo Design',
      box: { left: 0, top: 404, width: 245, height: 107 },
      artBox: { left: 25, top: 418, width: 195, height: 82 }
    },
    {
      id: 'logo-bawarchi-khana',
      title: 'Bawarchi Khana',
      subtitle: 'Culinary & Dining Seal (Est 2024)',
      category: 'Logo Design',
      box: { left: 0, top: 519, width: 245, height: 107 },
      artBox: { left: 35, top: 526, width: 175, height: 95 }
    },
    {
      id: 'logo-pixel-perfect-designs',
      title: 'Pixel Perfect Designs',
      subtitle: 'Digital Creative Studio Mark',
      category: 'Logo Design',
      box: { left: 0, top: 635, width: 245, height: 107 },
      artBox: { left: 30, top: 648, width: 185, height: 82 }
    },
    {
      id: 'logo-rizwaniat-serif',
      title: 'Rizwaniat (Serif)',
      subtitle: 'Luxury Apparel & Fashion Wordmark',
      category: 'Logo Design',
      box: { left: 0, top: 750, width: 245, height: 107 },
      artBox: { left: 30, top: 758, width: 185, height: 88 }
    }
  ];

  for (const item of vol2Logos) {
    const cardImg = sharp(vol2Path).extract(item.box);
    await cardImg.clone().webp({ quality: 92 }).toFile(`public/portfolio/logos/${item.id}.webp`);
    await cardImg.clone().png().toFile(`public/portfolio/logos/${item.id}.png`);

    const artImg = sharp(vol2Path).extract(item.artBox);
    await artImg.clone().webp({ quality: 95 }).toFile(`public/portfolio/logos/${item.id}-mark.webp`);
    await artImg.clone().png().toFile(`public/portfolio/logos/${item.id}-mark.png`);

    await cardImg.clone().resize({ width: 360 }).webp({ quality: 85 }).toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);
    console.log(`Generated logo assets for: ${item.id}`);
  }

  // ==========================================
  // 3. EXTRACT VISITING CARDS (6 mockups)
  // ==========================================
  const cardsPath = path.join(SOURCE_ASSETS_DIR, 'original-visiting-cards-collection.jpg');
  const visitingCards = [
    {
      id: 'visiting-card-gold-luxury',
      title: 'Gold Luxury Stationery',
      subtitle: 'Embossed Dual Card Mockup',
      category: 'Visiting Cards',
      box: { left: 0, top: 182, width: 245, height: 123 }
    },
    {
      id: 'visiting-card-boxed-stationery',
      title: 'Minimalist Boxed Presentation',
      subtitle: 'Custom Gift Box & Card Suite',
      category: 'Visiting Cards',
      box: { left: 0, top: 307, width: 245, height: 132 }
    },
    {
      id: 'visiting-card-modern-duo',
      title: 'Corporate Duo Cards',
      subtitle: 'Front & Back Brand Collateral',
      category: 'Visiting Cards',
      box: { left: 0, top: 441, width: 245, height: 123 }
    },
    {
      id: 'visiting-card-executive-desk',
      title: 'Orifice Executive Stationery',
      subtitle: 'Desk Layout with Notebook & Pen',
      category: 'Visiting Cards',
      box: { left: 0, top: 566, width: 245, height: 134 }
    },
    {
      id: 'visiting-card-dark-geometric',
      title: 'Obsidian Matte Identity Cards',
      subtitle: 'High-Contrast Architectural Cards',
      category: 'Visiting Cards',
      box: { left: 0, top: 702, width: 245, height: 139 }
    },
    {
      id: 'visiting-card-wood-table-mockup',
      title: 'Collab & Connect Walnut Mockup',
      subtitle: 'Rich Textured Tabletop Showcase',
      category: 'Visiting Cards',
      box: { left: 0, top: 843, width: 245, height: 141 }
    }
  ];

  for (const item of visitingCards) {
    const cardImg = sharp(cardsPath).extract(item.box);
    await cardImg.clone().webp({ quality: 92 }).toFile(`public/portfolio/visiting-cards/${item.id}.webp`);
    await cardImg.clone().png().toFile(`public/portfolio/visiting-cards/${item.id}.png`);
    await cardImg.clone().resize({ width: 400 }).webp({ quality: 85 }).toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);
    console.log(`Generated visiting card assets for: ${item.id}`);
  }

  // ==========================================
  // 4. EXTRACT SOCIAL POSTS VOL 01 (3 Orifice Healthcare Posts)
  // ==========================================
  const social1Path = path.join(SOURCE_ASSETS_DIR, 'original-social-posts-vol-01.jpg');
  const social1Posts = [
    {
      id: 'social-post-orifice-team',
      title: 'Orifice Medical Team Spotlight',
      subtitle: '1:1 Instagram Appointment Campaign',
      category: 'Social Media',
      brand: 'Orifice Healthcare',
      box: { left: 0, top: 189, width: 245, height: 246 }
    },
    {
      id: 'social-post-orifice-oncologist',
      title: 'Dr. Shane Doe Smith (Oncologist)',
      subtitle: 'Specialist Consultation Social Banner',
      category: 'Social Media',
      brand: 'Orifice Healthcare',
      box: { left: 0, top: 445, width: 245, height: 255 }
    },
    {
      id: 'social-post-orifice-discount',
      title: 'Comprehensive Health Checkup (20% Off)',
      subtitle: 'Promotional Healthcare Booking Post',
      category: 'Social Media',
      brand: 'Orifice Healthcare',
      box: { left: 0, top: 710, width: 245, height: 255 }
    }
  ];

  for (const item of social1Posts) {
    const postImg = sharp(social1Path).extract(item.box);
    await postImg.clone().webp({ quality: 92 }).toFile(`public/portfolio/social-media/${item.id}.webp`);
    await postImg.clone().png().toFile(`public/portfolio/social-media/${item.id}.png`);
    await postImg.clone().resize({ width: 360 }).webp({ quality: 85 }).toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);
    console.log(`Generated social media assets for: ${item.id}`);
  }

  // ==========================================
  // 5. EXTRACT SOCIAL POSTS VOL 02 (3 Toes to Nose Fashion Posts)
  // ==========================================
  const social2Path = path.join(SOURCE_ASSETS_DIR, 'original-social-posts-vol-02.jpg');
  const social2Posts = [
    {
      id: 'social-post-toes-to-nose-tailored',
      title: 'Tailored Suiting Editorial',
      subtitle: '1:1 Lookbook Campaign Post',
      category: 'Social Media',
      brand: 'Toes to Nose',
      box: { left: 0, top: 189, width: 245, height: 246 }
    },
    {
      id: 'social-post-toes-to-nose-clearance',
      title: 'Seasonal Clearance Campaign (50% Off)',
      subtitle: 'Promotional Apparel Web & Social Post',
      category: 'Social Media',
      brand: 'Toes to Nose',
      box: { left: 0, top: 445, width: 245, height: 245 }
    },
    {
      id: 'social-post-toes-to-nose-denim',
      title: 'Contemporary Casual Denim (65% Off)',
      subtitle: 'Summer Fashion Discount Banner',
      category: 'Social Media',
      brand: 'Toes to Nose',
      box: { left: 0, top: 700, width: 245, height: 255 }
    }
  ];

  for (const item of social2Posts) {
    const postImg = sharp(social2Path).extract(item.box);
    await postImg.clone().webp({ quality: 92 }).toFile(`public/portfolio/social-media/${item.id}.webp`);
    await postImg.clone().png().toFile(`public/portfolio/social-media/${item.id}.png`);
    await postImg.clone().resize({ width: 360 }).webp({ quality: 85 }).toFile(`public/portfolio/thumbnails/${item.id}-thumb.webp`);
    console.log(`Generated social media assets for: ${item.id}`);
  }

  console.log('--- Finished extracting and optimizing all portfolio assets! ---');
}

processAll().catch(err => {
  console.error('Extraction error:', err);
  process.exit(1);
});
