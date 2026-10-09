import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, X, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import type { GraphicDesignItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { graphicDesignItems } from '../data/portfolio';

interface LogosSectionProps {
  onSelectItem: (item: GraphicDesignItem) => void;
  onOpenInquiry?: (serviceType?: string) => void;
}

export const LogosSection: React.FC<LogosSectionProps> = ({
  onSelectItem,
  onOpenInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'healthcare' | 'apparel' | 'corporate' | 'culinary' | 'personal'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allLogos = useMemo(() => {
    return graphicDesignItems.filter((item) => item.category === 'logo');
  }, []);

  const filteredLogos = useMemo(() => {
    let items = allLogos;

    if (activeFilter === 'healthcare') {
      items = items.filter((i) => i.id.includes('orifice'));
    } else if (activeFilter === 'apparel') {
      items = items.filter((i) => i.id.includes('toes') || i.id.includes('sigma') || i.id.includes('rizwaniat'));
    } else if (activeFilter === 'corporate') {
      items = items.filter((i) => i.id.includes('collab') || i.id.includes('horizon') || i.id.includes('pixel'));
    } else if (activeFilter === 'culinary') {
      items = items.filter((i) => i.id.includes('bawarchi') || i.id.includes('theta'));
    } else if (activeFilter === 'personal') {
      items = items.filter((i) => i.id.includes('abdullah') || i.id.includes('zuhair'));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.subcategory.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return items;
  }, [allLogos, activeFilter, searchQuery]);

  return (
    <section id="logos" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                  Identity &amp; Marks
                </span>
              </div>
              <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
                Logo Design &amp; <span className="text-[#D0FE1D]">Brand Marks</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
                Custom vector marks, monograms, and brand lockups. Every logo is designed with balanced geometry to scale flawlessly from a 16px favicon to high-resolution storefront signage.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#021F33]/60 border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] self-start md:self-auto font-sans">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full vector delivery (SVG/EPS/AI) + Complete copyright ownership.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-3.5 rounded-2xl bg-[#011421]/90 border border-[var(--border-subtle)]">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: `All Logos (${allLogos.length})` },
              { id: 'healthcare', label: 'Healthcare & Medical' },
              { id: 'apparel', label: 'Apparel & Leather' },
              { id: 'corporate', label: 'Corporate & Real Estate' },
              { id: 'culinary', label: 'Food & Beverage' },
              { id: 'personal', label: 'Personal Monograms' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-heading font-medium transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#D0FE1D] text-[#00141F] font-bold shadow-sm'
                    : 'bg-[#021F33]/60 text-[var(--text-muted)] hover:text-white hover:bg-[#021F33]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px] sm:min-w-[260px]">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search logos..."
              className="w-full bg-[#00111a] border border-[var(--border-subtle)] rounded-xl pl-9 pr-8 py-1.5 text-xs text-[var(--color-heading)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-lime)] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-white cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 13 Logos Grid - Clean Neutral Cards with HD Rendering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredLogos.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative rounded-2xl bg-[#011421] border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] hover:bg-[#021827] p-5 flex flex-col justify-between shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-3">
                <span className="text-[var(--accent-lime)] font-semibold uppercase tracking-wider text-[10px] truncate max-w-[150px]">
                  {item.subcategory}
                </span>
                {item.brandGroupId && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)]/30 text-[9px] font-mono text-[var(--accent-blue)]">
                    <Layers className="w-2.5 h-2.5" />
                    <span>System</span>
                  </span>
                )}
              </div>

              {/* Logo Mark Presentation Surface (Contain fit - Preserves original quality without distortion) */}
              <div className="rounded-xl bg-[#00111a] border border-white/5 relative flex items-center justify-center p-4 min-h-[150px] sm:min-h-[160px] overflow-hidden group-hover:border-white/10 transition-colors">
                <picture className="flex items-center justify-center max-w-[180px] max-h-[85px]">
                  {item.pngPath && <source srcSet={item.pngPath} type="image/png" />}
                  <img
                    src={item.assetPath}
                    alt={item.title}
                    className="max-w-[180px] max-h-[85px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                </picture>

                {/* Hover Reveal Action */}
                <div className="absolute inset-0 bg-[#00141F]/65 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D0FE1D] text-[#00141F] font-heading font-bold text-xs tracking-tight shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <span>Inspect Mark</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 space-y-1.5">
                <h4 className="font-heading font-bold text-base text-[var(--color-heading)] group-hover:text-cyan-200 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-body)] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                  <span>Vector Master File</span>
                  <span className="text-emerald-400">100% Scalable</span>
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
                Custom Logo Packages
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--color-heading)] tracking-tight">
              Looking for a distinctive brand identity or company mark?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-body)]">
              We design primary logos, secondary sub-marks, brand guidelines, color architectures, and font pairings with direct founder collaboration.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry?.('Brand Identity & Logo Design')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-heading font-bold text-xs sm:text-sm tracking-tight shadow-lg transition-all cursor-pointer shrink-0"
          >
            <span>Inquire About Logo Design</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LogosSection;
