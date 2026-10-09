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

const getPictureSources = (src: string) => {
  if (src.endsWith('.jpg') || src.endsWith('.png')) {
    const base = src.replace(/\.(jpg|png)$/, '');
    return {
      avif: `${base}.avif`,
      webp: `${base}.webp`,
      fallback: src,
    };
  }
  return null;
};

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  imageSrc,
  title,
  urlPreview = 'ahdevlo.com/preview',
  device = 'desktop',
  className = '',
  accentColor = '#3B82F6',
}) => {
  const sources = getPictureSources(imageSrc);

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
          {sources ? (
            <picture>
              <source srcSet={sources.avif} type="image/avif" />
              <source srcSet={sources.webp} type="image/webp" />
              <img
                src={sources.fallback}
                alt={`${title} Mobile Preview`}
                width={340}
                height={700}
                style={{ aspectRatio: '9 / 18.5' }}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>
          ) : (
            <img
              src={imageSrc}
              alt={`${title} Mobile Preview`}
              width={340}
              height={700}
              style={{ aspectRatio: '9 / 18.5' }}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          )}
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
          <div className="w-2 h-2 rounded-full bg-[#2A3144]"></div>
        </div>
        {/* Screen */}
        <div className="rounded-[18px] overflow-hidden bg-[#0B0C10] border border-[#232938] aspect-[4/3] relative group">
          {sources ? (
            <picture>
              <source srcSet={sources.avif} type="image/avif" />
              <source srcSet={sources.webp} type="image/webp" />
              <img
                src={sources.fallback}
                alt={`${title} Tablet Preview`}
                width={620}
                height={465}
                style={{ aspectRatio: '4 / 3' }}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>
          ) : (
            <img
              src={imageSrc}
              alt={`${title} Tablet Preview`}
              width={620}
              height={465}
              style={{ aspectRatio: '4 / 3' }}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </div>
    );
  }

  // Desktop default
  return (
    <div
      className={`rounded-xl overflow-hidden bg-[#021F33]/90 border border-[var(--border-subtle)] shadow-2xl transition-all duration-300 ${className}`}
      style={{
        boxShadow: `0 20px 40px -15px rgba(0,0,0,0.7), 0 0 20px -5px ${accentColor}15`,
      }}
    >
      {/* Browser Chrome Header */}
      <div className="h-10 bg-[#00141F]/90 px-4 flex items-center justify-between border-b border-[var(--border-subtle)]">
        {/* Window controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80 hover:opacity-100 transition-opacity"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 hover:opacity-100 transition-opacity"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]/80 hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Address bar */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-md bg-[#00141F] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono max-w-xs md:max-w-md w-full justify-center">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span className="truncate">https://{urlPreview}</span>
        </div>

        {/* Status badges */}
        <div className="flex items-center space-x-2 text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider hidden sm:flex">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
          <span>Verified UI</span>
        </div>
      </div>

      {/* Screen View */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0C10] group">
        {sources ? (
          <picture>
            <source srcSet={sources.avif} type="image/avif" />
            <source srcSet={sources.webp} type="image/webp" />
            <img
              src={sources.fallback}
              alt={`${title} Preview`}
              width={1280}
              height={800}
              style={{ aspectRatio: '16 / 10' }}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <img
            src={imageSrc}
            alt={`${title} Preview`}
            width={1280}
            height={800}
            style={{ aspectRatio: '16 / 10' }}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};
