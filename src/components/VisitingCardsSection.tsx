import React from 'react';
import { ArrowUpRight, Sparkles, Layers, Printer } from 'lucide-react';
import type { GraphicDesignItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { graphicDesignItems } from '../data/portfolio';

interface VisitingCardsSectionProps {
  onSelectItem: (item: GraphicDesignItem) => void;
  onOpenInquiry?: (serviceType?: string) => void;
}

export const VisitingCardsSection: React.FC<VisitingCardsSectionProps> = ({
  onSelectItem,
  onOpenInquiry,
}) => {
  const cards = graphicDesignItems.filter((item) => item.category === 'visiting-card');

  return (
    <section id="visiting-cards" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
                  Stationery &amp; Print
                </span>
              </div>
              <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
                Visiting Cards &amp; <span className="text-[#D0FE1D]">Print Collateral</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
                Premium business stationery mockups crafted with tangible paper stocks, metallic hot foil stamping, soft-touch matte lamination, and executive desk presentations.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#021F33]/60 border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] self-start md:self-auto font-sans">
              <Printer className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Print-ready CMYK vector PDFs + 300+ DPI press files.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Visiting Cards Grid - Natural 1.4:1 ratio with Material Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative rounded-3xl bg-[#011421] border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] hover:bg-[#021827] p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Natural 1.4:1 Mockup Viewport */}
              <div className="relative aspect-[1.4/1] rounded-2xl overflow-hidden bg-[#00111a] border border-white/5 flex items-center justify-center p-2 mb-4 group-hover:border-white/10 transition-colors">
                <img
                  src={item.assetPath}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl filter group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  loading="lazy"
                />

                {/* Hover Reveal Action */}
                <div className="absolute inset-0 bg-[#00141F]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D0FE1D] text-[#00141F] font-heading font-bold text-xs tracking-tight shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <span>Inspect Print Mockup HD</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>

                {/* Floating Aspect Tag */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 border border-white/10 text-[9px] font-mono text-[var(--text-muted)]">
                  {item.dimensions}
                </div>
              </div>

              {/* Card Story & Print Specs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold truncate max-w-[200px]">
                    {item.subcategory}
                  </span>
                  {item.brandGroupId && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)]/30 text-[9px] font-mono text-[var(--accent-blue)] shrink-0">
                      <Layers className="w-2.5 h-2.5" />
                      <span>System</span>
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-lg text-[var(--color-heading)] group-hover:text-cyan-200 transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-xs text-[var(--text-body)] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Material Finish Badge */}
                {item.finishDetails && (
                  <div className="p-3 rounded-xl bg-[#00111a] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block font-semibold">
                      Paper &amp; Finish Specifications
                    </span>
                    <p className="text-[11px] text-[var(--text-body)] line-clamp-2 leading-relaxed">
                      {item.finishDetails}
                    </p>
                  </div>
                )}

                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {item.clientOrProjectName}
                  </span>
                  <span className="text-[var(--accent-lime)] text-[11px] font-heading font-semibold inline-flex items-center gap-1">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#011421] via-[#021F33] to-[#011421] border border-[var(--border-subtle)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-lime)]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                Custom Stationery Retainers
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--color-heading)] tracking-tight">
              Ready to print tangible, executive-grade business cards?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-body)]">
              We prepare bleed margins, trim marks, color separation for foils, and press-ready vector PDFs for direct handover to commercial printers.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry?.('Visiting Cards & Collateral')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-heading font-bold text-xs sm:text-sm tracking-tight shadow-lg transition-all cursor-pointer shrink-0"
          >
            <span>Inquire About Stationery</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default VisitingCardsSection;
