import React from 'react';
import { ArrowUpRight, Eye, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TrustStatementProps {
  onOpenInquiry: () => void;
}

export const TrustStatement: React.FC<TrustStatementProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 md:py-36 bg-transparent relative overflow-hidden">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/30 to-transparent"></div>

      {/* Background Accent subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-10">
        <ScrollReveal>
          <div className="inline-flex items-center space-x-2.5 text-xs font-mono font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] inline-block shrink-0 shadow-[0_0_8px_var(--accent-blue)]"></span>
            <span>THE STUDIO STANDARD</span>
          </div>

          {/* Main Bold Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-heading)] leading-tight max-w-4xl mx-auto font-heading">
            Built for businesses that are ready to look the part.
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-2xl text-[var(--text-body)] font-normal leading-relaxed max-w-3xl mx-auto mt-4 font-body">
            Professional design isn&apos;t just about looking good. It&apos;s about giving people a reason to trust your business.
          </p>
        </ScrollReveal>

        {/* Four Trust Anchors */}
        <ScrollReveal delayMs={150}>
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-subtle)] backdrop-blur-md shadow-md">
              <Eye className="w-5 h-5 text-[var(--accent-blue)] mb-2" />
              <h4 className="text-sm font-bold text-[var(--color-heading)] font-heading">Visual Authority</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-body">Establishes instant market credibility on the first screen.</p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-subtle)] backdrop-blur-md shadow-md">
              <Zap className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-sm font-bold text-[var(--color-heading)] font-heading">Speed &amp; Performance</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-body">Ultra-fast load times prevent mobile visitors from bouncing.</p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-subtle)] backdrop-blur-md shadow-md">
              <ShieldCheck className="w-5 h-5 text-teal-400 mb-2" />
              <h4 className="text-sm font-bold text-[var(--color-heading)] font-heading">Semantic Code</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-body">Clean, standard web code with zero fragile proprietary plugins.</p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-subtle)] backdrop-blur-md shadow-md">
              <HeartHandshake className="w-5 h-5 text-indigo-400 mb-2" />
              <h4 className="text-sm font-bold text-[var(--color-heading)] font-heading">Full Ownership</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-body">You own 100% of your assets, domain, and codebase forever.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={200}>
          <div className="pt-4">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-sm font-bold tracking-tight transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-[0_0_20px_rgba(47,123,255,0.4)] cursor-pointer font-heading"
            >
              <span>Let&apos;s Build Your Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
