import { ArrowDown, ArrowUpRight } from 'lucide-react';

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[var(--bg-glow-top)]/40 blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Hero Headline */}
        <h1 className="hero-display font-extrabold tracking-tight text-[var(--color-heading)] max-w-4xl leading-[1.12]">
          High-Precision Web Engineering &amp; Digital Flagships.
        </h1>

        {/* Subtitle */}
        <p className="lead-text mt-6 text-[var(--text-body)] text-base sm:text-lg max-w-2xl font-normal leading-relaxed font-body">
          A&amp;H Devlo Studio engineers custom websites, bespoke digital storefronts, and conversion-focused web applications with direct founder collaboration and sub-second load times.
        </p>

        {/* Action Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-950/60 cursor-pointer font-heading"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={onViewWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#021F33]/50 hover:bg-[#0B3B61]/40 text-[var(--color-heading)] font-medium text-sm border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] active:scale-95 transition-all backdrop-blur-sm cursor-pointer font-heading"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4 text-[var(--text-muted)]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
