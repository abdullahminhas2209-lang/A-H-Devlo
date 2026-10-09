import React, { useEffect, useCallback, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import type { GraphicDesignItem } from '../types';
import { getBrandSystemById, getRelatedItems } from '../data/portfolio';

interface PortfolioLightboxProps {
  item: GraphicDesignItem | null;
  itemsList: GraphicDesignItem[];
  onClose: () => void;
  onSelectItem: (item: GraphicDesignItem) => void;
  onOpenInquiry?: (serviceType?: string) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  item,
  itemsList,
  onClose,
  onSelectItem,
  onOpenInquiry,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const currentIndex = item ? itemsList.findIndex((i) => i.id === item.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < itemsList.length - 1;

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      onSelectItem(itemsList[currentIndex - 1]);
    }
  }, [hasPrev, currentIndex, itemsList, onSelectItem]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      onSelectItem(itemsList[currentIndex + 1]);
    }
  }, [hasNext, currentIndex, itemsList, onSelectItem]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!item) return;

    if (typeof document !== 'undefined') {
      previousActiveElement.current = document.activeElement as HTMLElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [item, onClose, handlePrev, handleNext]);

  if (!item) return null;

  const relatedItems = getRelatedItems(item);
  const brandSystem = item.brandGroupId ? getBrandSystemById(item.brandGroupId) : undefined;

  const categoryLabel =
    item.category === 'logo'
      ? 'Logo & Brand Mark'
      : item.category === 'visiting-card'
      ? 'Visiting Card & Stationery'
      : item.category === 'social-media'
      ? 'Social Media Graphic'
      : 'Promotional Banner';

  const inquiryService =
    item.category === 'logo'
      ? 'Brand Identity & Logo Design'
      : item.category === 'visiting-card'
      ? 'Visiting Cards & Collateral'
      : 'Social Media & Marketing Graphics';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} portfolio preview`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#000d14]/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#011421] border border-[var(--border-subtle)] rounded-3xl shadow-2xl overflow-hidden text-[var(--text-body)]"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[var(--border-subtle)] bg-[#021827]/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)]/30 text-[var(--accent-blue)] text-xs font-mono font-semibold uppercase tracking-wider">
              {categoryLabel}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-[var(--text-muted)]">
              {currentIndex + 1} of {itemsList.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next controls */}
            <div className="flex items-center gap-1 bg-[#00141F] rounded-full p-1 border border-[var(--border-subtle)]">
              <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-body)] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Previous graphic design asset"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={!hasNext}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-body)] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Next graphic design asset"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#00141F] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close preview modal"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-7 md:p-8 space-y-7">
          {/* Main Visual Display Surface */}
          <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[#00111a] flex items-center justify-center min-h-[260px] sm:min-h-[360px] md:min-h-[420px] p-6 sm:p-10 overflow-hidden shadow-inner group">
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(47,123,255,0.08)_0%,transparent_70%)]" />

            {/* Asset Image (Rendered at crisp dimensions without artificial stretching or blurring filters) */}
            <picture className="relative z-10 flex items-center justify-center p-4">
              {item.pngPath && <source srcSet={item.pngPath} type="image/png" />}
              <source srcSet={item.assetPath} type="image/webp" />
              <img
                src={item.pngPath || item.assetPath}
                alt={item.title}
                className={`${
                  item.category === 'logo'
                    ? 'max-w-[280px] max-h-[170px]'
                    : item.category === 'visiting-card'
                    ? 'max-w-[320px] max-h-[190px]'
                    : 'max-w-[300px] max-h-[300px]'
                } w-auto h-auto object-contain rounded-xl select-none shadow-2xl`}
              />
            </picture>

            {/* Dimensions tag floating */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#000d14]/80 border border-white/10 text-[11px] font-mono text-[var(--text-muted)]">
              {item.dimensions}
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (8 cols): Title, Description, Metadata */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-[var(--accent-lime)] uppercase tracking-wider">
                    {item.subcategory}
                  </span>
                  <span className="text-[var(--text-muted)] text-xs">•</span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {item.clientOrProjectName}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--color-heading)] tracking-tight">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed font-body">
                {item.description}
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {item.finishDetails && (
                  <div className="p-3.5 rounded-xl bg-[#021827] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[11px] font-mono text-[var(--accent-blue)] uppercase tracking-wider block font-semibold">
                      Print &amp; Finish Specifications
                    </span>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed">
                      {item.finishDetails}
                    </p>
                  </div>
                )}

                {item.campaign && (
                  <div className="p-3.5 rounded-xl bg-[#021827] border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[11px] font-mono text-amber-300 uppercase tracking-wider block font-semibold">
                      Campaign Series
                    </span>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed">
                      {item.campaign}
                    </p>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-[#021827] border border-[var(--border-subtle)] space-y-1">
                  <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                    Studio Deliverable
                  </span>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">
                    100% Vector master file, print-ready CMYK PDF, and responsive WebP exports.
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <Tag className="w-3.5 h-3.5 text-[var(--text-muted)] mr-1" />
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-[#021F33] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column (4 cols): Quick Inquiry & Brand System Sibling Links */}
            <div className="lg:col-span-4 space-y-6">
              {/* Inquiry Action Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#021F33] to-[#011421] border border-[var(--border-subtle)] space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--accent-lime)]" />
                    <span className="font-heading font-bold text-sm text-[var(--color-heading)]">
                      Want a similar design?
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">
                    We craft custom identity packages, business stationery, and social media templates with direct founder revisions.
                  </p>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry?.(inquiryService);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-heading font-bold text-xs tracking-tight shadow transition-all cursor-pointer"
                >
                  <span>Inquire about this style</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Brand System Siblings */}
              {brandSystem && relatedItems.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#00141F] border border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[var(--accent-blue)]" />
                    <span className="font-heading font-bold text-xs text-[var(--color-heading)]">
                      Part of Brand System
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    {brandSystem.name}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                      Explore Matching Assets:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {relatedItems.map((rel) => (
                        <button
                          key={rel.id}
                          onClick={() => onSelectItem(rel)}
                          className="group/rel p-2 rounded-xl bg-[#021827] border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] text-left transition-all cursor-pointer flex flex-col justify-between"
                        >
                          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#000d14] flex items-center justify-center p-1.5 mb-1.5">
                            <img
                              src={rel.thumbnailPath}
                              alt={rel.title}
                              className="max-w-full max-h-full object-contain group-hover/rel:scale-105 transition-transform"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-[11px] font-heading font-semibold text-[var(--color-heading)] line-clamp-1">
                            {rel.title}
                          </span>
                          <span className="text-[9px] font-mono text-[var(--text-muted)]">
                            {rel.category}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Ownership assurance */}
              <div className="flex items-start gap-2 text-xs text-[var(--text-muted)] px-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Includes 100% intellectual property ownership and raw editable files.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLightbox;
