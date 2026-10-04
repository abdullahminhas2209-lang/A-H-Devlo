import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { getWhatsAppUrl } from '../config/contact';

interface FinalCTAProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 md:py-24 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-b from-[#021F33]/85 to-[#00141F]/95 backdrop-blur-xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[300px] bg-[var(--bg-glow-top)]/40 blur-[130px] rounded-full pointer-events-none -z-10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--accent-blue)]/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            {/* Subtle top inner highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/40 to-transparent"></div>

            <div className="space-y-6 sm:space-y-8 relative z-10 max-w-3xl mx-auto">

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-heading)] leading-[1.15] font-heading">
                Ready to build a <span className="text-[#D0FE1D]">digital flagship</span> that commands respect?
              </h2>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[var(--text-body)] font-normal leading-relaxed max-w-2xl mx-auto font-body">
                Direct senior collaboration. Transparent milestone pricing. Zero agency bloat. Let&apos;s engineer your next digital platform together.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  onClick={onOpenInquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl sm:rounded-2xl bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-bold text-sm transition-all duration-200 shadow-xl shadow-lime-950/20 hover:scale-[1.02] active:scale-95 cursor-pointer font-heading"
                >
                  <span className="text-[#00141F]">Start Project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#00141F]" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-[#021F33]/50 hover:bg-[#0B3B61]/40 text-[var(--color-heading)] font-medium text-sm border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] transition-all duration-200 cursor-pointer font-heading"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Reassurance points */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs text-[var(--text-muted)]">
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
