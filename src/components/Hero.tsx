import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onViewWork,
}) => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient Glow: Soft radial gradient in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Status Badge with pulsing emerald dot */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md text-xs font-medium text-neutral-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>Available for new projects</span>
          <span className="text-neutral-600 dark:text-neutral-500">•</span>
          <span className="text-neutral-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[var(--accent-blue)]" />
            Q2 Booking Open
          </span>
        </div>

        {/* Hero Headline with clamp, zero awkward word breaks */}
        <h1 className="hero-display font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
          Websites that make small businesses look professional.
        </h1>

        {/* Subtitle */}
        <p className="lead-text mt-6 text-neutral-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          We design and develop clean, high-performance websites and conversion landing pages that help businesses build credibility and stand out online.
        </p>

        {/* Action Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-950/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.5)] cursor-pointer font-heading"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={onViewWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900/60 hover:bg-neutral-800/80 text-white font-medium text-sm border border-neutral-800 hover:border-neutral-700 active:scale-95 transition-all backdrop-blur-sm cursor-pointer"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-4 h-4 text-neutral-400" />
          </button>
        </div>

        {/* Social Proof / Metrics Row (Directly below CTAs) */}
        <div className="mt-12 pt-8 border-t border-neutral-800/70 w-full max-w-2xl flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-neutral-400 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
            <span>100% Responsive Everywhere</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
            <span>Sub-Second Load Times</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
            <span>SEO &amp; Conversion Optimized</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
