import type { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    id: 'osteria-riva',
    title: 'Osteria Riva',
    client: 'Osteria Riva (Hospitality Group)',
    category: 'Restaurant Website',
    tags: ['WEB DESIGN', 'DEVELOPMENT'],
    description: 'A modern restaurant website focused on visual identity, menu discovery and table reservations.',
    isConcept: true,
    year: '2025',
    services: ['Visual Identity', 'Web Design', 'Responsive Development', 'Online Reservations'],
    image: '/projects/osteria-riva.jpg',
    urlPreview: 'osteriariva.com',
    accentColor: '#D97706',
    overview: 'Osteria Riva is a contemporary Italian dining room and wine cellar. The digital experience was architected to evoke the intimate atmosphere of evening service while providing effortless guest reservation flows and mobile-optimized menu exploration.',
    challenge: 'Most hospitality websites frustrate diners with heavy PDF menus that require downloading, unreadable tiny text on mobile devices, and disjointed third-party booking widgets that harm reservation conversion rates. Osteria Riva required an editorial-grade web experience where guests could browse curated seasonal courses and secure a table in under 45 seconds.',
    solution: 'We engineered a refined, dark-toned visual aesthetic balancing candlelight warm amber with dark slate textures. Menus were built as native semantic components with instant category switching between Dinner, Tasting Menus, and the Cellar Reserve. The table reservation funnel was crafted as a seamless modal drawer that guides guests with date, party size, and seating preference.',
    highlights: [
      {
        title: 'Instant Native Menu Engine',
        description: 'Eliminated slow PDF downloads with instant, beautifully formatted digital menus featuring dietary filters and sommelier pairings.'
      },
      {
        title: 'Frictionless Booking Flow',
        description: 'Two-step reservation drawer engineered directly into the navigation, minimizing guest drop-off during peak booking hours.'
      },
      {
        title: 'Mobile-First Typography',
        description: 'Generous line heights and high-contrast typography ensuring effortless reading in dim dining and evening settings.'
      }
    ],
    deliverables: [
      'Custom Responsive Studio Design',
      'Interactive Digital Menu System',
      'Table Reservation Integration Flow',
      'Cellar & Private Dining Showcase',
      'Performance Optimization & Fast Load'
    ],
    metricsContext: 'Designed to eliminate PDF menu abandonment and maximize direct table reservations.',
    nextProjectId: 'maison-forme',
    prevProjectId: 'vanguard-advisory'
  },
  {
    id: 'maison-forme',
    title: 'Maison Forme',
    client: 'Maison Forme Studio',
    category: 'Fashion Brand',
    tags: ['WEB DESIGN', 'E-COMMERCE'],
    description: 'A clean digital storefront designed to give a fashion brand a stronger online presence.',
    isConcept: true,
    year: '2025',
    services: ['E-Commerce Architecture', 'UI/UX Design', 'Lookbook Experience', 'Performance Optimization'],
    image: '/projects/maison-forme.jpg',
    urlPreview: 'maisonforme.co',
    accentColor: '#94A3B8',
    overview: 'Maison Forme is an independent design house producing structured, minimalist everyday garments. The digital storefront was designed to communicate high-end craftsmanship, celebrate fabric texture, and remove purchasing friction.',
    challenge: 'Independent apparel brands frequently suffer from cluttered e-commerce templates that dilute brand identity with aggressive popups, badge overload, and clumsy mobile product filters. Maison Forme needed a gallery-grade digital flagship that retained the calm elegance of their physical atelier while driving frictionless checkout.',
    solution: 'We implemented an ultra-restrained editorial grid with expansive whitespace, razor-thin hairline borders, and subtle zoom interactions. Products feature seamless lookbook toggle modes, quick-view silhouette guides, and a streamlined slide-over shopping bag with zero unnecessary distractions.',
    highlights: [
      {
        title: 'Editorial Campaign Lookbook',
        description: 'Combines full-bleed seasonal campaign photography with shoppable product links that preserve visual storytelling.'
      },
      {
        title: 'Interactive Silhouette & Size Guide',
        description: 'Clear model specifications and exact garment dimensions to eliminate customer sizing uncertainty.'
      },
      {
        title: 'Distraction-Free Cart & Checkout',
        description: 'A frictionless slide-out shopping drawer with instant subtotal calculations and single-tap checkout triggers.'
      }
    ],
    deliverables: [
      'Minimalist Brand Showcase & E-Commerce',
      'Product Detail & Lookbook Architecture',
      'Slide-over Cart Drawer UX',
      'Mobile-Optimized Catalog Navigation',
      'Ultra-Fast Image Lazy Loading'
    ],
    metricsContext: 'Built to elevate boutique apparel perception and maximize average order value through calm clarity.',
    nextProjectId: 'apex-athletic-lab',
    prevProjectId: 'osteria-riva'
  },
  {
    id: 'apex-athletic-lab',
    title: 'Apex Athletic Lab',
    client: 'Apex Athletic Club',
    category: 'Fitness Studio',
    tags: ['LANDING PAGE', 'WEB DESIGN'],
    description: "A focused landing page designed to communicate the studio's offering and drive enquiries.",
    isConcept: true,
    year: '2025',
    services: ['Landing Page Strategy', 'Conversion Architecture', 'Interactive Timetable', 'Lead Capture'],
    image: '/projects/apex-athletic.jpg',
    urlPreview: 'apexathleticlab.com',
    accentColor: '#10B981',
    overview: 'Apex Athletic Lab is a boutique conditioning and strength facility offering small-group athletic training, mobility workshops, and cold plunge recovery. The landing page was crafted with precision to convert local fitness seekers into trial pass members.',
    challenge: 'Prospective gym members are routinely turned away by ambiguous pricing, confusing class schedules, and hidden coaching qualifications. Apex needed a high-impact, transparent landing page that built immediate coaching credibility and drove first-visit pass claims without confusion.',
    solution: 'We built a high-energy, dark-contrast landing page featuring electric emerald accents and kinetic typography. The experience places an interactive weekly schedule front and center, backed by coach certifications, facility photography, and an unmissable one-click trial pass inquiry flow.',
    highlights: [
      {
        title: 'Interactive Weekly Timetable',
        description: 'Live interactive schedule allowing visitors to filter by training focus (Strength, Conditioning, Mobility) and time of day.'
      },
      {
        title: 'One-Tap Trial Pass Funnel',
        description: 'A persistent, touch-friendly inquiry action that enables visitors to claim an introductory session in under 30 seconds.'
      },
      {
        title: 'Coach & Methodology Trust Architecture',
        description: 'Transparent breakdowns of training phases, coaching credentials, and recovery amenities to build immediate authority.'
      }
    ],
    deliverables: [
      'High-Conversion Single Page Architecture',
      'Interactive Class Schedule Grid',
      'Coach Credentials & Facility Tour UI',
      'Direct WhatsApp & Form Inquiry Integration',
      'Speed-Optimized Mobile Viewport'
    ],
    metricsContext: 'Engineered specifically for local trial conversion and transparent class scheduling.',
    nextProjectId: 'vanguard-advisory',
    prevProjectId: 'maison-forme'
  },
  {
    id: 'vanguard-advisory',
    title: 'Vanguard Advisory',
    client: 'Vanguard Corporate Partners',
    category: 'Professional Services',
    tags: ['BUSINESS WEBSITE', 'DEVELOPMENT'],
    description: 'A professional business website designed to establish credibility and clearly communicate services.',
    isConcept: true,
    year: '2025',
    services: ['Corporate Information Architecture', 'Brand Positioning', 'Consultation Funnel', 'Security & Compliance UI'],
    image: '/projects/vanguard-advisory.jpg',
    urlPreview: 'vanguardadvisory.com',
    accentColor: '#3B82F6',
    overview: 'Vanguard Advisory is a boutique corporate advisory and transaction practice providing strategic counsel to growing enterprises. The corporate website was designed to project quiet authority, intellectual rigor, and transparent engagement parameters.',
    challenge: 'Boutique advisory firms often struggle with dense corporate jargon, impenetrable PDFs, and dated corporate templates that fail to engage executive stakeholders. Vanguard needed a clean, authoritative digital home that clearly communicated core practice areas and facilitated confidential consultation inquiries.',
    solution: 'We engineered an executive-grade website with deep midnight navy surfaces, sharp typographic rhythm, and structured service modules. Each advisory capability (M&A Advisory, Capital Markets, Restructuring) features clear scope boundaries, leadership oversight, and an NDA-ready confidential inquiry interface.',
    highlights: [
      {
        title: 'Modular Practice Area Breakdown',
        description: 'Clear, digestible cards outlining scope of engagement, transaction tiers, and advisory methodologies.'
      },
      {
        title: 'Confidential Executive Consultation',
        description: 'A discrete, secure project briefing form tailored for C-suite decision-makers seeking advisory evaluations.'
      },
      {
        title: 'Institutional Trust Hierarchy',
        description: 'Clean leadership bios and structured transaction history demonstrating institutional depth without visual clutter.'
      }
    ],
    deliverables: [
      'Multi-Tier Corporate Information Architecture',
      'Practice Area & Case Experience Layouts',
      'Confidential Project Briefing Portal',
      'Full Responsive Desktop & Mobile Styling',
      'Enterprise Accessibility Compliance'
    ],
    metricsContext: 'Built to establish immediate institutional credibility and drive qualified executive conversations.',
    nextProjectId: 'osteria-riva',
    prevProjectId: 'apex-athletic-lab'
  }
];
