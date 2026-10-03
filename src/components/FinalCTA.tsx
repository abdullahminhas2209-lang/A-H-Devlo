import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FinalCTAProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry, onViewWork }) => {
  return (
    <section className="py-16 md:py-24 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl border border-neutral-800/90 bg-gradient-to-b from-neutral-900/80 to-[#0d0d12]/90 backdrop-blur-xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[300px] bg-indigo-500/12 blur-[140px] rounded-full pointer-events-none -z-10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            {/* Subtle top inner highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

            <div className="space-y-6 sm:space-y-8 relative z-10 max-w-3xl mx-auto">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono tracking-wider text-neutral-300 uppercase shadow-sm">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>Next Project Intake</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
                Ready to elevate your business online?
              </h2>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
                Let&apos;s build a website that drives real results and sets you apart. Transparent fixed quotes, clean engineering, and zero fluff.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  onClick={onOpenInquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-indigo-950/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 cursor-pointer font-sans"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <button
                  onClick={onViewWork}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-900/60 hover:bg-neutral-800/80 text-neutral-200 hover:text-white font-medium text-sm border border-neutral-800 hover:border-neutral-700 transition-all duration-200 cursor-pointer font-sans"
                >
                  <span>View Our Work</span>
                  <ArrowDown className="w-4 h-4 text-neutral-400" />
                </button>
              </div>

              {/* Reassurance points */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs text-neutral-400">
                <span className="inline-flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prompt 24h project review</span>
                </span>
                <span className="inline-flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent fixed-scope quotes</span>
                </span>
                <span className="inline-flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct designer &amp; dev collaboration</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
