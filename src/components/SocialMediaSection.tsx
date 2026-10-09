import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, Share2 } from 'lucide-react';
import type { GraphicDesignItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { graphicDesignItems } from '../data/portfolio';

interface SocialMediaSectionProps {
  onSelectItem: (item: GraphicDesignItem) => void;
  onOpenInquiry?: (serviceType?: string) => void;
}

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({
  onSelectItem,
  onOpenInquiry,
}) => {
  const [activeCampaign, setActiveCampaign] = useState<'all' | 'orifice' | 'toes'>('all');

  const socialPosts = graphicDesignItems.filter((item) => item.category === 'social-media');

  const filteredPosts = socialPosts.filter((item) => {
    if (activeCampaign === 'orifice') return item.id.includes('orifice');
    if (activeCampaign === 'toes') return item.id.includes('toes');
    return true;
  });

  return (
    <section id="social-media" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Campaigns &amp; Content
                </span>
              </div>
              <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
                Social Media &amp; <span className="text-[#D0FE1D]">Marketing Graphics</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
                High-converting 1:1 Instagram feed graphics, promotional sale banners, and brand drop announcements designed to look cohesive across all marketing channels.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#021F33]/60 border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] self-start md:self-auto font-sans">
              <Share2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0" />
              <span>Native 1:1 Square &amp; 9:16 Story formats + Reusable Figma templates.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Campaign Filter Chips */}
        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: `All Social Graphics (${socialPosts.length})` },
            { id: 'orifice', label: 'Orifice Healthcare Campaign (3)' },
            { id: 'toes', label: 'Toes to Nose Fashion Drops (3)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCampaign(tab.id as typeof activeCampaign)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-medium transition-all cursor-pointer ${
                activeCampaign === tab.id
                  ? 'bg-[#D0FE1D] text-[#00141F] font-bold shadow-sm'
                  : 'bg-[#021F33]/60 text-[var(--text-muted)] hover:text-white hover:bg-[#021F33]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Social Media Posts Grid - Native 1:1 Squares with HD Clarity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative rounded-3xl bg-[#011421] border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] hover:bg-[#021827] p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Native 1:1 Square Viewport */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#000d14] border border-white/5 flex items-center justify-center p-3 mb-4 group-hover:border-white/10 transition-colors">
                <picture className="w-full h-full flex items-center justify-center">
                  {item.pngPath && <source srcSet={item.pngPath} type="image/png" />}
                  <source srcSet={item.assetPath} type="image/webp" />
                  <img
                    src={item.pngPath || item.assetPath}
                    alt={item.title}
                    className="max-w-[245px] max-h-[245px] w-auto h-auto object-contain rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Hover Reveal Action */}
                <div className="absolute inset-0 bg-[#00141F]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D0FE1D] text-[#00141F] font-heading font-bold text-xs tracking-tight shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <span>Inspect Post HD</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>

                {/* Channel Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-black/75 border border-white/10 text-[9px] font-mono text-cyan-300">
                  1:1 Feed Post
                </div>
              </div>

              {/* Campaign Story */}
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

                {/* Campaign Tag */}
                {item.campaign && (
                  <div className="p-2.5 rounded-xl bg-[#00111a] border border-white/5 space-y-0.5">
                    <span className="text-[9px] font-mono text-amber-300 uppercase tracking-wider block font-semibold">
                      Campaign Series
                    </span>
                    <p className="text-[11px] text-[var(--text-body)] line-clamp-1">
                      {item.campaign}
                    </p>
                  </div>
                )}

                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {item.clientOrProjectName}
                  </span>
                  <span className="text-[var(--accent-lime)] text-[11px] font-heading font-semibold inline-flex items-center gap-1">
                    <span>Inspect Post</span>
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
                Social Campaign Bundles
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--color-heading)] tracking-tight">
              Need cohesive social templates that stop customer scrolling?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-body)]">
              We design custom post graphics, story layouts, promotional flyers, and carousel templates matching your brand color palette and typography.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry?.('Social Media & Marketing Graphics')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-heading font-bold text-xs sm:text-sm tracking-tight shadow-lg transition-all cursor-pointer shrink-0"
          >
            <span>Inquire About Social Graphics</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SocialMediaSection;
