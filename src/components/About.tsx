import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const techBadges = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel'];

  return (
    <section id="about" className="py-16 md:py-24 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (4 cols): Studio Avatar / Badge Card */}
          <div className="md:col-span-5 lg:col-span-4">
            <ScrollReveal>
              <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-md space-y-5 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-blue)] font-semibold">
                    Studio Practice
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                </div>

                <div className="py-2">
                  <BrandLogo size="lg" />
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                  <div className="text-sm font-bold text-[var(--color-heading)] font-heading">
                    A&amp;H Devlo Studio
                  </div>
                  <p className="text-xs text-[var(--text-body)] font-body leading-relaxed">
                    Independent web engineering and digital design practice serving ambitious small businesses and private founders.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-[var(--text-body)] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Bespoke Code &amp; Design</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (8 cols): Studio Mission Statement & Tech Stack Badges */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            <ScrollReveal delayMs={100}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[#021F33]/70 text-xs font-semibold tracking-widest text-[var(--accent-blue)] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] inline-block shadow-[0_0_8px_var(--accent-blue)]"></span>
                  <span>ABOUT THE STUDIO</span>
                </div>

                <h2 className="section-title font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
                  Small studio. Serious websites.
                </h2>

                <p className="text-base sm:text-lg text-[var(--color-heading)] font-normal leading-relaxed font-body">
                  At A&amp;H Devlo Studio, we believe small businesses deserve agency-tier digital presence without bloated timelines or unnecessary complexity. We build modern, high-precision web experiences that establish instant credibility.
                </p>

                <p className="text-sm text-[var(--text-body)] font-normal leading-relaxed font-body">
                  We combine thoughtful typography, modern component architecture, and a commercial understanding of what turns casual website visitors into loyal clients.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Values / Studio Pillars */}
            <ScrollReveal delayMs={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[#021F33]/50 space-y-1.5">
                  <div className="flex items-center gap-2 text-[var(--accent-blue)]">
                    <Terminal className="w-4 h-4" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      Direct Senior Craft
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed font-body">
                    You work directly with the designers and engineers coding your website. Zero account managers or communication silos.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[#021F33]/50 space-y-1.5">
                  <div className="flex items-center gap-2 text-[var(--accent-blue)]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      Guaranteed Ownership
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed font-body">
                    You own 100% of your production codebase, assets, and design files upon completion. Zero proprietary platform lock-in.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tech Stack Badges & CTA */}
            <ScrollReveal delayMs={200}>
              <div className="pt-2 space-y-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-2 font-medium">
                    Engineered With Modern Standards
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[#021F33]/60 text-[var(--text-body)] text-xs font-mono font-medium hover:border-[var(--accent-blue)]/50 transition-colors"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs sm:text-sm font-bold tracking-tight transition-all shadow-md shadow-blue-950/50 hover:scale-[1.02] active:scale-95 cursor-pointer font-heading"
                  >
                    <span>Work With Us</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
