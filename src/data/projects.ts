import type { ProjectData } from '../types';

export const projects: ProjectData[] = [
  {
    id: 'osteria-riva',
    title: 'Osteria Riva',
    client: 'Self-Initiated Studio Concept',
    category: 'Hospitality Architecture',
    tags: ['CONCEPT DESIGN', 'FRONT-END DEV'],
    description: 'An editorial dining experience built to replace slow PDF menus with instant digital courses and clean reservation flows.',
    isConcept: true,
    year: '2025',
    services: ['Information Architecture', 'UI/UX Design', 'Native Menu Engine', 'Responsive Layouts'],
    image: '/projects/osteria-riva.jpg',
    urlPreview: undefined,
    accentColor: '#D97706',
    overview: 'Most restaurant websites frustrate diners with heavy PDF menus that require downloading, unreadable small text on phones, and disjointed third-party booking widgets. This concept explores how a dining room can offer an elegant digital presence that lets guests view seasonal dishes and book in under a minute.',
    challenge: 'Hospitality sites routinely lose mobile visitors to PDF downloads and clunky reservation redirects. The challenge was creating a fast, accessible menu system that works in dim evening light on any phone.',
    solution: 'We structured the menu as clean semantic HTML with instant category toggling between Dinner, Tasting Menus, and the Cellar. The reservation flow is built as a lightweight two-step drawer rather than a jarring third-party redirect.',
    highlights: [
      {
        title: 'Native Digital Menu Engine',
        description: 'Replaced PDF downloads with lightweight, readable typography and instant course filtering.'
      },
      {
        title: 'Two-Step Reservation Flow',
        description: 'A focused booking drawer that captures party size, date, and seating preference without leaving the page.'
      },
      {
        title: 'Mobile-Optimized Contrast',
        description: 'High-contrast typography tested specifically for low-light mobile reading in restaurants.'
      }
    ],
    deliverables: [
      'Custom Responsive Layout',
      'Native Menu System',
      'Table Reservation Flow UI',
      'Performance Optimization'
    ],
    metricsContext: 'Built as a studio benchmark for eliminating hospitality PDF menu friction.',
    nextProjectId: 'maison-forme',
    prevProjectId: 'client-project-placeholder'
  },
  {
    id: 'maison-forme',
    title: 'Maison Forme',
    client: 'Self-Initiated Studio Concept',
    category: 'Apparel & Atelier',
    tags: ['CONCEPT DESIGN', 'CATALOG UI'],
    description: 'A calm, editorial lookbook and digital storefront designed for an independent garment atelier.',
    isConcept: true,
    year: '2025',
    services: ['Editorial Layout', 'Lookbook Architecture', 'Catalog UI', 'Mobile Optimization'],
    image: '/projects/maison-forme.jpg',
    urlPreview: undefined,
    accentColor: '#94A3B8',
    overview: 'Independent clothing labels often struggle with noisy e-commerce templates cluttered with countdown timers and popups. This concept demonstrates a gallery-grade digital flagship where garment craftsmanship and fabric photography take center stage.',
    challenge: 'Balancing full-bleed seasonal editorial photography with clear product details and fast mobile browsing without layout shifts.',
    solution: 'We designed a restrained grid with generous whitespace and razor-thin hairline borders. The lookbook allows customers to view full silhouettes or inspect garment details seamlessly.',
    highlights: [
      {
        title: 'Editorial Campaign Lookbook',
        description: 'Full-bleed photography combined with contextual garment details and material notes.'
      },
      {
        title: 'Distraction-Free Catalog',
        description: 'Clean product grids with zero promotional popups or aggressive countdown widgets.'
      },
      {
        title: 'Sub-Second Image Loading',
        description: 'Modern WebP and AVIF responsive image formatting for instant page loads on cellular data.'
      }
    ],
    deliverables: [
      'Minimalist Lookbook System',
      'Product Detail Hierarchy',
      'Mobile-First Grid Architecture',
      'Ultra-Fast Image Optimization'
    ],
    metricsContext: 'Built to demonstrate calm, high-end design for independent lifestyle and apparel labels.',
    nextProjectId: 'apex-athletic-lab',
    prevProjectId: 'osteria-riva'
  },
  {
    id: 'apex-athletic-lab',
    title: 'Apex Athletic Lab',
    client: 'Self-Initiated Studio Concept',
    category: 'Fitness & Conditioning',
    tags: ['CONCEPT DESIGN', 'LANDING PAGE'],
    description: 'A focused landing page built to communicate training programs and convert local visitors into first-visit bookings.',
    isConcept: true,
    year: '2025',
    services: ['Landing Page Strategy', 'Class Timetable UI', 'Lead Capture', 'Mobile Performance'],
    image: '/projects/apex-athletic.jpg',
    urlPreview: undefined,
    accentColor: '#10B981',
    overview: 'Prospective gym members frequently bounce from gym websites due to hidden pricing, confusing schedules, and unclear coaching qualifications. This concept explores a high-clarity landing page designed for local trial conversion.',
    challenge: 'Presenting class schedules, pricing tiers, and coaching credentials clearly on small phone screens without clutter.',
    solution: 'We organized the page around an interactive weekly schedule with clear filter tabs (Strength, Conditioning, Mobility), accompanied by upfront trial pass pricing and direct WhatsApp inquiry buttons.',
    highlights: [
      {
        title: 'Interactive Weekly Timetable',
        description: 'Clean schedule grid allowing visitors to filter sessions by focus and time of day.'
      },
      {
        title: 'Upfront Pricing & Trial Pass',
        description: 'Transparent introductory pricing that eliminates visitor hesitation.'
      },
      {
        title: 'Direct WhatsApp Action',
        description: 'One-tap direct chat connection for immediate answers to membership questions.'
      }
    ],
    deliverables: [
      'Single-Page Conversion Layout',
      'Interactive Timetable Grid',
      'Direct WhatsApp & Form Flow',
      'Mobile Performance Audit'
    ],
    metricsContext: 'Designed to demonstrate high-conversion landing page structure for local fitness studios.',
    nextProjectId: 'client-project-placeholder',
    prevProjectId: 'maison-forme'
  },
  {
    id: 'client-project-placeholder',
    title: '[Your Client Project]',
    client: '[ADD REAL CLIENT NAME & LIVE URL]',
    category: 'Custom Business Website',
    tags: ['LIVE CLIENT WORK', 'CASE STUDY SLOT'],
    description: 'Reserved slot for your first featured client website. Add your client name, live website link, and actual business outcome here.',
    isConcept: false,
    year: '2025',
    services: ['Web Design', 'Full-Stack Development', 'SEO Setup', 'Domain Handover'],
    image: '/projects/vanguard-advisory.jpg',
    urlPreview: undefined,
    accentColor: '#2563EB',
    overview: 'This project slot is set up to showcase your actual client work. Once you launch a client site, replace this text with the real client story: what they needed, what you built, and how it helped their business.',
    challenge: 'State the specific problem your client had with their previous site or business presence.',
    solution: 'Explain the custom design and engineering solution A&H Devlo delivered to solve that problem.',
    highlights: [
      {
        title: '[Real Highlight 1]',
        description: 'Describe the key feature, custom integration, or speed improvement achieved for the client.'
      },
      {
        title: '[Real Highlight 2]',
        description: 'Describe how the new design improved customer inquiries, bookings, or client credibility.'
      },
      {
        title: '[Real Highlight 3]',
        description: 'Detail the turnaround time and client feedback upon launch.'
      }
    ],
    deliverables: [
      'Custom Multipage Web Design',
      'Production Codebase',
      'SEO & Google Search Console Setup',
      'Client Training & Handover'
    ],
    metricsContext: 'Drop in real performance metrics or client feedback once live.',
    nextProjectId: 'osteria-riva',
    prevProjectId: 'apex-athletic-lab'
  }
];
