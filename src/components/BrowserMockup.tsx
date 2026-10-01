import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';
import type { DeviceMode } from '../types';

interface BrowserMockupProps {
  imageSrc: string;
  title: string;
  urlPreview?: string;
  device?: DeviceMode;
  className?: string;
  accentColor?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  imageSrc,
  title,
  urlPreview = 'ahdevlo.com/preview',
  device = 'desktop',
  className = '',
  accentColor = '#3B82F6',
}) => {
  // Generate modern WebP & AVIF sources when pointing to project assets
  const getSources = (src: string) => {
    const isProjectJpg = src.startsWith('/projects/') && src.endsWith('.jpg');
    if (!isProjectJpg) {
      return { avif: null, webp: null, fallback: src };
    }
    const base = src.replace(/\.jpg$/, '');
    return {
      avif: `${base}.avif`,
      webp: `${base}.webp`,
      fallback: src,
    };
  };

  const sources = getSources(imageSrc);

  if (device === 'mobile') {
    return (
      <div className={`mx-auto max-w-[340px] rounded-[36px] p-3 bg-[#161A26] border border-[#2B3247] shadow-2xl relative ${className}`}>
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0B0C10] rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#181B26] mr-2"></div>
          <div className="w-2 h-2 rounded-full bg-blue-900/60"></div>
        </div>

        {/* Screen container */}
        <div className="rounded-[28px] overflow-hidden bg-[#0B0C10] border border-[#232938] aspect-[9/18.5] relative group">
          <picture>
            {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
            {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
            <img
              src={sources.fallback}
              alt={`${title} Mobile Preview`}
              width={680}
              height={1396}
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </picture>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20"></div>
        </div>
      </div>
    );
  }

  if (device === 'tablet') {
    return (
      <div className={`mx-auto max-w-[620px] rounded-[28px] p-4 bg-[#141722] border border-[#2A3144] shadow-2xl relative ${className}`}>
        {/* Top camera bezel */}
        <div className="flex items-center justify-center pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A3144]"></div>
        </div>
        {/* Screen */}
        <div className="rounded-[18px] overflow-hidden bg-[#0B0C10] border border-[#232938] aspect-[4/3] relative group">
          <picture>
            {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
            {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
            <img
              src={sources.fallback}
              alt={`${title} Tablet Preview`}
              width={800}
              height={600}
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    );
  }

  // Desktop default
  return (
    <div
      className={`rounded-xl overflow-hidden bg-[#11141E] border border-[#232938] shadow-2xl transition-all duration-300 ${className}`}
      style={{
        boxShadow: `0 20px 40px -15px rgba(0,0,0,0.7), 0 0 20px -5px ${accentColor}15`,
      }}
    >
      {/* Browser Chrome Header */}
      <div className="h-10 bg-[#161A26] px-4 flex items-center justify-between border-b border-[#232938]">
        {/* Window controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80 hover:opacity-100 transition-opacity"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 hover:opacity-100 transition-opacity"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]/80 hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Address bar */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0B0C10] border border-[#232938] text-xs text-slate-400 font-mono max-w-xs md:max-w-md w-full justify-center">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span className="truncate">https://{urlPreview}</span>
        </div>

        {/* Status badges */}
        <div className="flex items-center space-x-2 text-[10px] text-slate-400 uppercase tracking-widest hidden sm:flex">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Verified UI</span>
        </div>
      </div>

      {/* Screen View */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0C10] group">
        <picture>
          {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
          {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
          <img
            src={sources.fallback}
            alt={`${title} Preview`}
            width={1200}
            height={750}
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};
