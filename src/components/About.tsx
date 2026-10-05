import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const techBadges = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel'];

  return (
    <section id="about" className="py-10 sm:py-12 md:py-14 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 cols): Founding Partners Profile Cards */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            {/* Meet the Founders Subsection Header */}
            <ScrollReveal>
              <div className="space-y-2 pb-1">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-heading)] font-heading">
                  Meet the <span className="text-[#D0FE1D]">Founders</span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-body)] font-body leading-relaxed">
                  Two complementary skill sets, one shared ambition: building better digital experiences.
                </p>
              </div>
            </ScrollReveal>

            {/* Founder 1: Abdullah Minhas */}
            <ScrollReveal delayMs={50}>
              <div className="p-5 sm:p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-md shadow-2xl relative overflow-hidden hover:border-[var(--border-subtle-hover)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B3B61] to-[#021F33] border border-[#2F7BFF]/30 flex items-center justify-center text-white font-heading font-bold text-base shrink-0 shadow-md">
                    AM
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-[var(--color-heading)] font-heading tracking-tight truncate">
                      Abdullah Minhas
                    </h3>
                    <div className="text-xs font-semibold text-[var(--accent-blue)] font-heading mt-0.5">
                      Co-Founder · Design &amp; Frontend
                    </div>
                  </div>
                </div>

                <p className="mt-3.5 text-xs text-[var(--text-body)] font-body leading-relaxed">
                  Focused on product vision, UI/UX, frontend engineering, and creating digital experiences that feel as good as they perform.
                </p>

                <div className="mt-4 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <a
                    href="https://www.linkedin.com/in/abdullahminhas2209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading font-medium text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors group/link"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-[var(--accent-blue)] group-hover/link:text-white transition-colors" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover/link:text-[var(--accent-blue)] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Founder 2: M. Hassan Ali */}
            <ScrollReveal delayMs={100}>
              <div className="p-5 sm:p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-md shadow-2xl relative overflow-hidden hover:border-[var(--border-subtle-hover)] transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B3B61] to-[#021F33] border border-[#2F7BFF]/30 flex items-center justify-center text-white font-heading font-bold text-base shrink-0 shadow-md">
                    HA
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-[var(--color-heading)] font-heading tracking-tight truncate">
                      M. Hassan Ali
                    </h3>
                    <div className="text-xs font-semibold text-[var(--accent-blue)] font-heading mt-0.5">
                      Co-Founder · Engineering
                    </div>
                  </div>
                </div>

                <p className="mt-3.5 text-xs text-[var(--text-body)] font-body leading-relaxed">
                  Focused on scalable architecture, full-stack development, performance, and turning ambitious ideas into reliable software.
                </p>

                <div className="mt-4 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <a
                    href="https://www.linkedin.com/in/muhammad-hassan-ali-b085a3351/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading font-medium text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors group/link"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-[var(--accent-blue)] group-hover/link:text-white transition-colors" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover/link:text-[var(--accent-blue)] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Studio Mission Statement & Tech Stack Badges */}
          <div className="md:col-span-7 lg:col-span-7 space-y-6">
            <ScrollReveal delayMs={100}>
              <div className="space-y-4 max-w-xl">
                <h2 className="section-title font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
                  Bespoke digital architecture for <span className="text-[#D0FE1D]">enduring brands</span>.
                </h2>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[var(--color-heading)] tracking-tight">
                    A&amp;H Devlo Studio was founded on a singular standard.
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body max-w-prose">
                    Businesses should never have to choose between bloated agency retainers and fragile generic website templates.
                  </p>
                </div>

                <p className="text-sm text-[var(--text-body)] font-normal leading-relaxed font-body max-w-prose">
                  We engineer digital platforms as high-yield software assets—combining editorial typography, clean component architecture, and the conversion rigor required to turn casual visitors into committed clients.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Values / Studio Pillars */}
            <ScrollReveal delayMs={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl">
                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[#021F33]/50 space-y-1.5">
                  <div className="flex items-center gap-2 text-[var(--color-heading)]">
                    <Terminal className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
                    <h4 className="text-sm font-heading font-bold tracking-tight text-[var(--color-heading)]">
                      Architectural Integrity
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed font-body">
                    We write production-grade code designed to scale cleanly, load in milliseconds, and remain entirely free of unnecessary third-party dependencies.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[#021F33]/50 space-y-1.5">
                  <div className="flex items-center gap-2 text-[var(--color-heading)]">
                    <ShieldCheck className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
                    <h4 className="text-sm font-heading font-bold tracking-tight text-[var(--color-heading)]">
                      Complete IP Sovereignty
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed font-body">
                    You own 100% of your source code, design systems, and production assets upon delivery. Zero proprietary platform lock-in.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tech Stack Badges & CTA */}
            <ScrollReveal delayMs={200}>
              <div className="pt-2 space-y-4 max-w-xl">
                <div>
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                    Engineered with Modern Standards
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[#021F33]/60 text-[var(--text-body)] text-xs font-sans font-medium hover:border-[var(--accent-blue)]/50 transition-colors"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    data-inquiry=""
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
