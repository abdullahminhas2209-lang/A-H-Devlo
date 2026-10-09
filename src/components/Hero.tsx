import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenInquiry?: (serviceType?: string) => void;
  onViewWork?: () => void;
  onNavigate?: (sectionId: string) => void;
  onSelectProject?: (projectId: string) => void;
  activeSection?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onViewWork,
  onSelectProject,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-76px)] flex items-center justify-center pt-8 pb-16 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[980px] h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(11,59,97,0.22)_0%,rgba(2,31,51,0.08)_55%,transparent_75%)] blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): Studio Message, Hierarchy, Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
            
            {/* Studio Status Pill (Restrained, no pulsing dot) */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#021F33]/80 border border-[var(--border-subtle)] text-xs text-[var(--color-heading)] font-sans">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
              <span className="font-medium tracking-tight">Independent Creative Studio</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className="text-[var(--text-muted)] text-[11px]">Taking projects for 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold tracking-tight text-[var(--color-heading)] text-3xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.06] text-balance">
              Websites and visual brands that make small businesses look{' '}
              <span className="text-[#D0FE1D]">remarkable</span> online.
            </h1>

            {/* Human, Jargon-Free Supporting Copy */}
            <p className="text-base sm:text-lg text-[var(--text-body)] font-normal leading-relaxed max-w-2xl font-body">
              A&amp;H Devlo is a design-led creative studio run directly by its founders. We partner with independent businesses to create bespoke websites, memorable brand identities, and sharp marketing graphics that win customer trust.
            </p>

            {/* Primary & Secondary Action Routes */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                data-inquiry=""
                onClick={() => onOpenInquiry?.()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-bold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-xl shadow-lime-950/20 hover:scale-[1.02] active:scale-95 cursor-pointer font-heading"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#021F33]/60 hover:bg-[#0B3B61]/50 text-[var(--color-heading)] border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] font-semibold text-sm transition-all duration-200 cursor-pointer font-heading group"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4 text-[var(--accent-blue)] transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Studio Guarantees Micro-Strip */}
            <div className="pt-3 border-t border-[var(--border-subtle)]/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--text-muted)] font-sans">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Direct founder collaboration
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Flat-rate milestone quotes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)]" />
                100% full file &amp; code ownership
              </span>
            </div>

          </div>

          {/* Right Column (5 cols): Asymmetric Editorial Work Showcase (Real Assets) */}
          <div className="lg:col-span-5 relative select-none">
            
            {/* Layer 1: Primary Featured Project Card (Osteria Riva Dining Concept) */}
            <div
              onClick={() => onSelectProject?.('osteria-riva')}
              className="relative rounded-2xl border border-[var(--border-subtle)] bg-[#021F33]/85 backdrop-blur-md p-3.5 sm:p-4 shadow-2xl transition-all duration-300 hover:border-[var(--accent-blue)]/50 hover:shadow-cyan-950/30 group cursor-pointer"
            >
              {/* Chrome bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-[var(--text-muted)] truncate max-w-[170px] sm:max-w-xs">
                    osteriariva.com
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">
                  Concept Prototype
                </span>
              </div>

              {/* Real Project Image Preview */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#00141F]">
                <picture>
                  <source srcSet="/projects/osteria-riva.avif" type="image/avif" />
                  <source srcSet="/projects/osteria-riva.webp" type="image/webp" />
                  <img
                    src="/projects/osteria-riva.jpg"
                    alt="Osteria Riva Restaurant Concept Preview"
                    width={900}
                    height={560}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-[#00141F]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white font-bold font-heading block text-sm">Osteria Riva</span>
                    <span className="text-[var(--text-muted)] text-[11px]">Restaurant Website &amp; Digital Menu</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[var(--accent-lime)] text-[11px] font-semibold bg-[#00141F]/90 px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                    View Project
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Layer 2: Overlapping Fashion Lookbook Card (Maison Forme) */}
            <div
              onClick={() => onSelectProject?.('maison-forme')}
              className="mt-4 -ml-2 sm:-ml-6 sm:-mt-8 relative z-10 w-[92%] sm:w-[86%] rounded-2xl border border-[var(--border-subtle)] bg-[#00141F]/95 backdrop-blur-xl p-3.5 shadow-2xl transition-all duration-300 hover:border-[var(--accent-blue)]/50 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                  <span className="font-heading font-bold text-[var(--color-heading)] text-xs">Maison Forme</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  Brand &amp; E-Commerce
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-20 sm:w-24 h-14 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-[var(--border-subtle)] bg-[#021F33]">
                  <picture>
                    <source srcSet="/projects/maison-forme.avif" type="image/avif" />
                    <source srcSet="/projects/maison-forme.webp" type="image/webp" />
                    <img
                      src="/projects/maison-forme.jpg"
                      alt="Maison Forme Atelier Lookbook Preview"
                      width={160}
                      height={120}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[var(--text-body)] line-clamp-2 leading-relaxed">
                    Minimalist fashion atelier storefront with editorial lookbook and cart drawer.
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-[var(--accent-blue)] group-hover:text-cyan-300 transition-colors">
                    <span>Explore Lookbook</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 3: Studio Seal / Creative Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-3 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#021F33]/90 border border-[var(--border-subtle)] backdrop-blur-md shadow-xl text-xs text-[var(--color-heading)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-lime)] shrink-0" />
              <div className="font-sans leading-tight">
                <span className="font-bold block text-[11px] text-[var(--color-heading)]">100% Bespoke Design</span>
                <span className="text-[10px] text-[var(--text-muted)]">Zero off-the-shelf templates</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
