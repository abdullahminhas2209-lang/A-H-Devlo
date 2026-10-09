import React from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  Palette,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  onOpenInquiry: (serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                Studio Capabilities
              </span>
            </div>
            <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
              What We Do: <span className="text-[#D0FE1D]">Web</span> &amp; <span className="text-[var(--accent-blue)]">Graphic Design</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
              Everything your business needs to look established, cohesive, and modern online. We give website development and visual graphic design equal craft and care.
            </p>
          </div>
        </ScrollReveal>

        {/* Two Balanced Creative Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Pillar 1: Website Design & Development */}
          <ScrollReveal delayMs={50} className="flex">
            <div className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[var(--accent-blue)]/50 hover:bg-[var(--surface-card-hover)] w-full">
              
              <div className="space-y-6">
                {/* Pillar Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B3B61]/40 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-blue)] shadow-md">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00141F] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                    Pillar 01 · Digital
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--color-heading)] tracking-tight">
                    Website Design &amp; Development
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-body)] leading-relaxed font-body">
                    Bespoke websites built from scratch to give your business credibility, speed, and effortless customer inquiries. No rigid templates or slow page builders.
                  </p>
                </div>

                {/* Offerings Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold block">
                    Core Web Services
                  </span>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[var(--text-body)]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">Custom Business Websites</strong>
                        <span className="text-[var(--text-muted)] text-xs">Multi-page digital flagships for restaurants, clinics, fashion labels, and consultancies.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">High-Impact Landing Pages</strong>
                        <span className="text-[var(--text-muted)] text-xs">Focused single-page campaigns built to drive direct inquiries, trial bookings, and calls.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">Website Redesigns &amp; Speed Audits</strong>
                        <span className="text-[var(--text-muted)] text-xs">Modernizing dated layouts, fixing mobile view glitches, and eliminating slow loading times.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">Interactive Menus &amp; Booking Funnels</strong>
                        <span className="text-[var(--text-muted)] text-xs">Native digital menu engines, class timetable grids, and frictionless appointment booking.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Guarantees */}
                <div className="p-4 rounded-2xl bg-[#00141F]/80 border border-[var(--border-subtle)] space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      Typical Turnaround: 2–3 weeks
                    </span>
                    <span className="text-emerald-400 font-semibold font-mono">100% Code Ownership</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] font-sans">
                    Includes responsive testing on iOS &amp; Android, custom domain connection, and basic search optimization.
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  data-inquiry="Website Design & Development"
                  onClick={() => onOpenInquiry('Website Design & Development')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#0B3B61]/50 hover:bg-[var(--accent-blue)] text-[var(--color-heading)] hover:text-white text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] transition-all duration-200 cursor-pointer font-heading group/btn"
                >
                  <span>Inquire About Website Design</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </div>
          </ScrollReveal>

          {/* Pillar 2: Branding & Graphic Design (Equal Importance!) */}
          <ScrollReveal delayMs={100} className="flex">
            <div className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[var(--accent-lime)]/50 hover:bg-[var(--surface-card-hover)] w-full">
              
              <div className="space-y-6">
                {/* Pillar Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B3B61]/40 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-lime)] shadow-md">
                    <Palette className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00141F] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                    Pillar 02 · Identity &amp; Visuals
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--color-heading)] tracking-tight">
                    Branding &amp; Graphic Design
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-body)] leading-relaxed font-body">
                    Complete visual identities and everyday marketing graphics that look cohesive, premium, and memorable across print and digital media.
                  </p>
                </div>

                {/* Offerings Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold block">
                    Core Design Services
                  </span>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[var(--text-body)]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">Logo Design &amp; Monograms</strong>
                        <span className="text-[var(--text-muted)] text-xs">Distinctive primary logos, vector wordmarks, secondary badges, and responsive favicons.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">Visual Brand Systems</strong>
                        <span className="text-[var(--text-muted)] text-xs">Curated color palettes, complementary typography pairings, and practical brand style guidelines.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">Social Media &amp; Content Graphics</strong>
                        <span className="text-[var(--text-muted)] text-xs">Ready-to-use Instagram post grids, story templates, banners, and announcement assets.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-heading)] font-semibold block">Marketing Banners &amp; Print Materials</strong>
                        <span className="text-[var(--text-muted)] text-xs">Promotional web banners, digital menus, business cards, flyers, and physical signage.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Guarantees */}
                <div className="p-4 rounded-2xl bg-[#00141F]/80 border border-[var(--border-subtle)] space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
                      Typical Turnaround: 5–10 days
                    </span>
                    <span className="text-emerald-400 font-semibold font-mono">Vector SVGs &amp; Print PDFs</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] font-sans">
                    Includes all original vector sources, exported web assets, and full commercial copyright transfer.
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  data-inquiry="Branding & Graphic Design"
                  onClick={() => onOpenInquiry('Branding & Graphic Design')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#0B3B61]/50 hover:bg-[#D0FE1D] text-[var(--color-heading)] hover:text-[#00141F] text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] hover:border-[#D0FE1D] transition-all duration-200 cursor-pointer font-heading group/btn"
                >
                  <span>Inquire About Graphic Design</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Studio Bundle Callout */}
        <ScrollReveal delayMs={150}>
          <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-r from-[#021F33]/90 via-[#0B3B61]/40 to-[#021F33]/90 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-lime)] font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Need both website &amp; brand identity?</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--color-heading)]">
                The Complete Studio Package
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-body)] font-body leading-relaxed">
                Launch your business with a cohesive brand identity, custom website, and matching social media templates in one unified project.
              </p>
            </div>

            <button
              data-inquiry="Complete Studio Package (Web + Brand)"
              onClick={() => onOpenInquiry('Complete Studio Package (Web + Brand)')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D0FE1D] hover:brightness-105 text-[#00141F] text-xs sm:text-sm font-bold tracking-tight transition-all shadow-md shrink-0 cursor-pointer font-heading"
            >
              <span>Ask About Full Package</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Services;
