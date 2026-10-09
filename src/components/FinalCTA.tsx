import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { getWhatsAppUrl } from '../config/contact';

interface FinalCTAProps {
  onOpenInquiry: () => void;
  onViewWork?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-b from-[#021F33]/90 to-[#00141F]/95 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden group">
            
            {/* Subtle inner highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/30 to-transparent" />

            <div className="space-y-6 sm:space-y-8 relative z-10 max-w-3xl mx-auto">
              
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B3B61]/40 border border-[var(--border-subtle)] text-xs text-[var(--accent-lime)] font-mono">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
                <span>Taking on new client projects</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-heading)] leading-[1.12] font-heading">
                Ready to make your business look{' '}
                <span className="text-[#D0FE1D]">remarkable</span> online?
              </h2>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-body)] font-normal leading-relaxed max-w-2xl mx-auto font-body">
                Whether you need a custom website, a fresh brand identity, or everyday marketing graphics, we&apos;d love to collaborate. Get in touch for a quick project review and a flat, transparent quote.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  data-inquiry=""
                  onClick={onOpenInquiry}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-bold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-lime-950/20 hover:scale-[1.02] active:scale-95 cursor-pointer font-heading"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href={getWhatsAppUrl("Hi A&H Devlo, I'd like to discuss a project for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#021F33]/80 hover:bg-[#0B3B61]/60 text-[var(--color-heading)] font-semibold text-sm border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] transition-all duration-200 cursor-pointer font-heading"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Reassurance points */}
              <div className="pt-4 border-t border-[var(--border-subtle)]/70 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs text-[var(--text-muted)] font-sans">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct reply within 24 hours</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Transparent fixed-price quotes</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct founder collaboration</span>
                </span>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
