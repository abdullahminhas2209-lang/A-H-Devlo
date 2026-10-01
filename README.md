# A&H Devlo — Official Studio Portfolio

> **Web Design & Development Studio**  
> *We design and develop clean, professional websites and landing pages that help businesses build credibility and stand out online.*

---

## ✦ Key Features

- **Apple macOS-Style Bottom Dock**: Built with `motion/react` and `@motion-primitives/dock`, featuring physics-based spring magnification, floating animated tooltips (`DockLabel`), and real-time active section indicator dots.
- **Minimalist Top Brand Header**: Pure floating transparent A&H Devlo brand logo with availability status badge and instant inquiry action.
- **Curated Studio Portfolio**: Large-format website showcases featuring high-resolution viewports (Desktop, Tablet, Mobile) and interactive case study walkthroughs (*Osteria Riva*, *Maison Forme*, *Apex Athletic Lab*, *Vanguard Advisory*).
- **Interactive 3D Hero Mockup Deck**: Smooth hover-to-front elevated transition allowing visitors to seamlessly bring background website previews to center stage.
- **Studio Services Suite**: Business Websites, Landing Pages, and Complete Website Redesigns with structured deliverables.
- **Fluid Scroll Animations**: `ScrollReveal` intersection observer triggers with glowing hairline dividers between sections.
- **Conversion-Focused Inquiry Flow**: Direct multi-step inquiry modal with scope selection and automated proposal generation.

---

## ✦ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Motion Primitives Dock)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts — **Outfit** (Headlines & Display) and **Inter** (Body & UI)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## ✦ Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v24)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/abdullahminhas2209-lang/A-H-Devlo.git
cd A-H-Devlo

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The production output will be generated in the `dist/` directory.

### Linting

```bash
npm run lint
```

---

## ✦ Contact Configuration

Official studio communication channels are centralized in [`src/config/contact.ts`](src/config/contact.ts). You can override defaults via environment variables (see [`.env.example`](.env.example)):

```bash
# Business email
VITE_CONTACT_EMAIL=devlobyah@gmail.com

# WhatsApp Business number (international digits only, no + or spaces)
VITE_CONTACT_WHATSAPP=923333875790

# LinkedIn company profile URL
VITE_CONTACT_LINKEDIN=https://www.linkedin.com/company/a-h-devlo/
```

Helper utilities generate:
- Direct **Gmail Web Compose** links with prefilled subject/body.
- Standard **mailto:** fallback links.
- **WhatsApp Web & mobile** deep links with prefilled greetings.
- Official **LinkedIn** company profile target links.

---

## ✦ License

© 2026 A&H Devlo. All rights reserved.
