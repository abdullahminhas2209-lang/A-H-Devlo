import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#030B14] relative">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Monogram */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
                <span>05 / ABOUT THE STUDIO</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
                Small studio. Serious websites.
              </h2>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div className="p-6 rounded-2xl bg-[#081726]/80 border border-[#14304D] space-y-4 shadow-lg">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                  Official Studio Identity
                </span>
                <BrandLogo size="lg" />
                <p className="text-xs text-slate-400 font-mono pt-3 border-t border-[#14304D]">
                  Independent Web Design &amp; Development Practice
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Copy & Studio Standards */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delayMs={150}>
              <div className="space-y-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed font-body">
                <p>
                  A&amp;H Devlo is a web design and development studio focused on helping small businesses establish a professional presence online.
                </p>

                <p className="text-slate-400 text-sm sm:text-lg">
                  We combine thoughtful design, modern development and a practical understanding of what businesses actually need from their website.
                </p>
              </div>
            </ScrollReveal>

            {/* Studio Pillars (Zero fake claims, grounded in work philosophy) */}
            <ScrollReveal delayMs={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#14304D]">
                <div className="p-5 rounded-xl bg-[#081726]/80 border border-[#14304D] space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Terminal className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      Direct Craft
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    You work directly with the designers and engineers building your website. No account managers or communication silos.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#081726]/80 border border-[#14304D] space-y-2">
                  <div className="flex items-center space-x-2 text-teal-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      Honest Scope
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    Clear upfront project milestones, transparent pricing, and zero hidden platform lock-in. You own 100% of your website.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={250}>
              <div className="pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/40 cursor-pointer font-heading"
                >
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
