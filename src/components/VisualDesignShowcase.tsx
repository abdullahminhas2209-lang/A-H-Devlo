import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface VisualDesignShowcaseProps {
  onOpenInquiry: (serviceType?: string) => void;
}

export const VisualDesignShowcase: React.FC<VisualDesignShowcaseProps> = ({
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'logos' | 'social' | 'print'>('all');

  return (
    <section id="design" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[var(--border-subtle)]">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                  Visual Identity &amp; Collateral
                </span>
              </div>
              <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
                Brand &amp; <span className="text-[#D0FE1D]">Graphic Design</span> Showcase
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
                How we shape cohesive visual identities for independent businesses. From custom vector logos and color palettes to social media campaigns and printed collateral.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#021F33]/80 border border-[var(--border-subtle)] self-start md:self-auto">
              {(
                [
                  { id: 'all', label: 'All Work' },
                  { id: 'logos', label: 'Logos & Marks' },
                  { id: 'social', label: 'Social Graphics' },
                  { id: 'print', label: 'Collateral' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[var(--accent-blue)] text-white shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 1. Feature Block: Logo Design & Monogram Anatomy (Authentic Studio Vectors) */}
        {(activeTab === 'all' || activeTab === 'logos') && (
          <ScrollReveal>
            <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Visual Mark Presentation (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Authentic Vector Monogram Card */}
                    <div className="p-6 rounded-2xl bg-[#00141F] border border-[var(--border-subtle)] flex flex-col items-center justify-center min-h-[220px] text-center relative overflow-hidden group">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <img
                          src="/brand/monogram.svg"
                          alt="A&H Devlo Vector Monogram Mark"
                          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                          width={112}
                          height={112}
                        />
                      </div>
                      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] w-full flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                        <span>A&amp;H Monogram Mark</span>
                        <span className="text-cyan-400">Vector SVG</span>
                      </div>
                    </div>

                    {/* Official Brand Emblem Card */}
                    <div className="p-6 rounded-2xl bg-[#021F33]/80 border border-[var(--border-subtle)] flex flex-col items-center justify-center min-h-[220px] text-center relative overflow-hidden group">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <img
                          src="/brand/emblem.png"
                          alt="A&H Devlo Brand Emblem"
                          className="w-full h-full object-contain"
                          width={112}
                          height={112}
                        />
                      </div>
                      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] w-full flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                        <span>Circular Studio Seal</span>
                        <span className="text-[var(--accent-lime)]">Print &amp; Web</span>
                      </div>
                    </div>

                  </div>

                  {/* Brand Typography & Color Palette Swatches */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#00141F]/80 border border-[var(--border-subtle)] space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                      Color Palette Architecture
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-[#00141F] border border-[var(--border-subtle)] flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#00141F] border border-white/20 shrink-0" />
                        <div>
                          <span className="text-white block font-semibold text-[11px]">Deep Navy</span>
                          <span className="text-[var(--text-muted)] text-[10px]">#00141F</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#021F33] border border-[var(--border-subtle)] flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#021F33] border border-white/20 shrink-0" />
                        <div>
                          <span className="text-white block font-semibold text-[11px]">Mid Surface</span>
                          <span className="text-[var(--text-muted)] text-[10px]">#021F33</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#2F7BFF]/20 border border-[var(--border-subtle)] flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#2F7BFF] shrink-0" />
                        <div>
                          <span className="text-white block font-semibold text-[11px]">Electric Blue</span>
                          <span className="text-[var(--text-muted)] text-[10px]">#2F7BFF</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#D0FE1D]/20 border border-[var(--border-subtle)] flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#D0FE1D] shrink-0" />
                        <div>
                          <span className="text-white block font-semibold text-[11px]">Lime Accent</span>
                          <span className="text-[var(--text-muted)] text-[10px]">#D0FE1D</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right (5 cols): Design Rationale & Capabilities */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[var(--accent-blue)] uppercase tracking-wider font-semibold">
                      Logo &amp; Brand Systems
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--color-heading)] tracking-tight">
                      Crafting Logos That Scale From 16px to Billboards
                    </h3>
                    <p className="text-sm text-[var(--text-body)] leading-relaxed font-body">
                      A good logo doesn&apos;t just look pretty on a presentation slide. It has to stay crisp as a 16px browser favicon, look sharp on Instagram avatars, and scale flawlessly to storefront signage and business cards.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[var(--text-body)]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Full Vector Delivery:</strong> Scalable SVGs and print-ready EPS files with zero quality loss.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Adaptive Variations:</strong> Primary logo lockups, compact secondary marks, and dark/light colorways.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Complete Brand Guidelines:</strong> Typography pairings, clear-space specifications, and usage rules.</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenInquiry('Brand Identity & Logo Design')}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--accent-lime)] hover:text-white transition-colors cursor-pointer group"
                    >
                      <span>Inquire about custom logo &amp; brand design</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 2. Feature Block: Social Media Graphics & Campaign Templates */}
        {(activeTab === 'all' || activeTab === 'social') && (
          <ScrollReveal delayMs={100}>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[var(--color-heading)] tracking-tight">
                    Social Media &amp; Content Graphics
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-body)] font-body">
                    Custom templates designed to maintain visual consistency across Instagram, LinkedIn, and promotional channels.
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] self-start sm:self-auto">
                  1:1 Post &amp; 9:16 Story Templates
                </span>
              </div>

              {/* 3 Real Concept Social Graphic Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Social Card 1: Osteria Riva Seasonal Tasting Menu Announcement */}
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[#00141F] p-4 flex flex-col justify-between shadow-xl space-y-4 hover:border-[var(--border-subtle-hover)] transition-all">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#021F33] p-5 flex flex-col justify-between text-left border border-white/5">
                    {/* Background photo snippet */}
                    <img
                      src="/projects/osteria-riva.jpg"
                      alt="Osteria Riva Dining Experience"
                      className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[1px]"
                    />
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 px-2 py-0.5 rounded bg-black/60 border border-amber-400/20">
                        OSTERIA RIVA
                      </span>
                      <span className="text-[10px] font-mono text-white/60">AUTUMN 2025</span>
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <span className="text-xs text-amber-200/80 font-mono tracking-widest uppercase block">
                        CHEF&apos;S TASTING RESERVE
                      </span>
                      <h4 className="font-heading font-extrabold text-xl text-white leading-tight">
                        Six Courses. Curated Tuscan Cellar Pairings.
                      </h4>
                      <p className="text-[11px] text-white/70 font-sans line-clamp-2">
                        Now open for weekend evening bookings through our digital reservation portal.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-between text-[var(--color-heading)] font-semibold">
                      <span>Dining Launch Graphic</span>
                      <span className="text-[10px] font-mono text-amber-400">1:1 Instagram Feed</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                      Custom editorial typography paired with atmospheric lighting to elevate dinner reservations.
                    </p>
                  </div>
                </div>

                {/* Social Card 2: Maison Forme Atelier Drop Preview */}
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[#00141F] p-4 flex flex-col justify-between shadow-xl space-y-4 hover:border-[var(--border-subtle-hover)] transition-all">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#0A0D14] p-5 flex flex-col justify-between text-left border border-white/5">
                    <img
                      src="/projects/maison-forme.jpg"
                      alt="Maison Forme Garment Silhouette"
                      className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[1px]"
                    />
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-200 px-2 py-0.5 rounded bg-black/60 border border-white/10">
                        MAISON FORME
                      </span>
                      <span className="text-[10px] font-mono text-white/60">COLLECTION 01</span>
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <span className="text-xs text-slate-300 font-mono tracking-widest uppercase block">
                        STRUCTURED SILHOUETTES
                      </span>
                      <h4 className="font-heading font-extrabold text-xl text-white leading-tight">
                        Everyday Uniforms. Uncompromising Texture.
                      </h4>
                      <p className="text-[11px] text-white/70 font-sans line-clamp-2">
                        Explore the online campaign lookbook and secure limited release garments.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-between text-[var(--color-heading)] font-semibold">
                      <span>Apparel Campaign Card</span>
                      <span className="text-[10px] font-mono text-cyan-300">1:1 Lookbook Post</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                      Clean editorial layout with generous whitespace to preserve minimalist boutique perception.
                    </p>
                  </div>
                </div>

                {/* Social Card 3: Apex Athletic Conditioning Class Announcement */}
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[#00141F] p-4 flex flex-col justify-between shadow-xl space-y-4 hover:border-[var(--border-subtle-hover)] transition-all">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#021815] p-5 flex flex-col justify-between text-left border border-white/5">
                    <img
                      src="/projects/apex-athletic.jpg"
                      alt="Apex Athletic Training Ground"
                      className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[1px]"
                    />
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 px-2 py-0.5 rounded bg-black/60 border border-emerald-400/20">
                        APEX ATHLETIC
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">TRIAL PASS</span>
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <span className="text-xs text-emerald-300 font-mono tracking-widest uppercase block">
                        SMALL-GROUP CONDITIONING
                      </span>
                      <h4 className="font-heading font-extrabold text-xl text-white leading-tight">
                        Claim Your First Session. No Lock-in Contracts.
                      </h4>
                      <p className="text-[11px] text-white/70 font-sans line-clamp-2">
                        Interactive weekly schedule is live. Reserve a spot in under 30 seconds.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-between text-[var(--color-heading)] font-semibold">
                      <span>Gym Promotion Graphic</span>
                      <span className="text-[10px] font-mono text-emerald-400">1:1 Promo Banner</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                      High-contrast kinetic typography engineered to convert local viewers into trial attendees.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 3. Feature Block: Marketing Banners & Print Collateral */}
        {(activeTab === 'all' || activeTab === 'print') && (
          <ScrollReveal delayMs={150}>
            <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[var(--color-heading)] tracking-tight">
                    Promotional Banners &amp; Print Assets
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-body)] font-body">
                    From digital website campaign banners to tangible printed collateral.
                  </p>
                </div>
                <span className="text-xs font-mono text-[var(--accent-lime)] font-semibold">
                  Vector Sources + Print-Ready CMYK PDFs
                </span>
              </div>

              {/* 16:9 Banner Mockup Showcase */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-gradient-to-r from-[#00141F] via-[#021F33] to-[#0B3B61] p-6 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[240px]">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-white">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
                    <span>Digital Campaign Banner (16:9)</span>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)]">Web Marketing Export</span>
                </div>

                <div className="max-w-xl space-y-2 py-4">
                  <h4 className="font-heading font-extrabold text-xl sm:text-3xl text-white tracking-tight">
                    Clean, memorable marketing graphics designed for the real world.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    Every banner, flyer, and digital ad is tailored to your brand identity so your business always looks cohesive everywhere a customer finds you.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                  <span>• Digital Display Ads</span>
                  <span>• Physical Menu Cards</span>
                  <span>• Business Cards</span>
                  <span>• Signage &amp; Window Decals</span>
                </div>
              </div>

            </div>
          </ScrollReveal>
        )}

        {/* Closing Note & Direct Link to Dual Portfolio */}
        <ScrollReveal delayMs={200}>
          <div className="text-center pt-2 space-y-4">
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-sans">
              All vector marks, social templates, and marketing collateral are crafted in-house by A&amp;H Devlo Studio with 100% full commercial copyright transfer.
            </p>
            <div>
              <a
                href="#graphic-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#021F33] hover:bg-[#0B3B61]/60 border border-[var(--border-subtle)] text-xs font-heading font-semibold text-[var(--color-heading)] transition-all group cursor-pointer"
              >
                <span>Browse the full 25-piece Graphic Design gallery in Selected Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-lime)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default VisualDesignShowcase;
