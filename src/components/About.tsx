import React from 'react';
import { ArrowUpRight, Code, Palette } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const tools = ['Figma', 'Illustrator', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                Behind the Studio
              </span>
            </div>
            <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
              Meet the <span className="text-[#D0FE1D]">Founders</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
              Two complementary skill sets, one shared goal: helping small businesses look remarkable online without agency overhead.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Concise Studio Mission & Tools */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delayMs={50}>
              <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl p-6 sm:p-8 space-y-5 shadow-xl">
                <h3 className="font-heading font-bold text-xl text-[var(--color-heading)] tracking-tight">
                  Why We Started A&amp;H Devlo
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-body">
                  Most small businesses are stuck between two bad options: expensive agencies with layers of account managers, or cheap generic website templates that make every business look identical.
                </p>

                <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-body">
                  We built A&amp;H Devlo to offer something better: direct access to senior design and development craft. When you hire us, you work directly with the two people creating your website and brand assets.
                </p>

                {/* Tools Strip */}
                <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                    Our Core Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-[#00141F] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-body)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-bold font-heading transition-all shadow cursor-pointer"
                  >
                    <span>Work Directly With Us</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Two Compact Founder Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Founder 1: Abdullah Minhas */}
            <ScrollReveal delayMs={100} className="flex">
              <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[var(--border-subtle-hover)] transition-all group w-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B3B61] to-[#021F33] border border-[#2F7BFF]/30 flex items-center justify-center text-[var(--accent-lime)] font-heading font-bold text-base shadow">
                      AM
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[var(--color-heading)] tracking-tight">
                        Abdullah Minhas
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-blue)] font-heading mt-0.5">
                        <Palette className="w-3.5 h-3.5 shrink-0" />
                        <span>Co-Founder · Design &amp; Frontend</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-body">
                    Leads visual identity, UI/UX, and graphic design. Obsessed with clean layouts, considered typography, and digital experiences that feel effortless to browse.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href="https://www.linkedin.com/in/abdullahminhas2209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-medium text-[var(--text-body)] hover:text-white transition-colors group/link"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Founder 2: M. Hassan Ali */}
            <ScrollReveal delayMs={150} className="flex">
              <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[var(--border-subtle-hover)] transition-all group w-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B3B61] to-[#021F33] border border-[#2F7BFF]/30 flex items-center justify-center text-cyan-300 font-heading font-bold text-base shadow">
                      HA
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[var(--color-heading)] tracking-tight">
                        M. Hassan Ali
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-heading mt-0.5">
                        <Code className="w-3.5 h-3.5 shrink-0" />
                        <span>Co-Founder · Engineering</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-body">
                    Leads frontend development, site architecture, and integrations. Focused on fast load times, reliable code, and smooth mobile response across all devices.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href="https://www.linkedin.com/in/muhammad-hassan-ali-b085a3351/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-medium text-[var(--text-body)] hover:text-white transition-colors group/link"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
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
