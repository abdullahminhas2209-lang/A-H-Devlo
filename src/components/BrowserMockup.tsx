import React from 'react';
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
  device = 'desktop',
  className = '',
}) => {
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
      <div className={`mx-auto max-w-[320px] rounded-lg overflow-hidden border border-[#22252A] bg-[#141618] ${className}`}>
        <div className="px-3 py-2 bg-[#181A1D] border-b border-[#22252A] flex items-center justify-between text-[11px] font-mono text-[#8E9298]">
          <span>{title}</span>
          <span>MOBILE VIEW</span>
        </div>
        <div className="relative aspect-[9/16] overflow-hidden bg-[#0C0D0E]">
          <picture>
            {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
            {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
            <img
              src={sources.fallback}
              alt={`${title} Mobile Preview`}
              width={680}
              height={1200}
              decoding="async"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    );
  }

  // Desktop default
  return (
    <div className={`rounded-lg overflow-hidden border border-[#22252A] bg-[#141618] transition-colors hover:border-[#363A42] ${className}`}>
      <div className="px-4 py-2.5 bg-[#181A1D] border-b border-[#22252A] flex items-center justify-between text-xs font-mono text-[#8E9298]">
        <span className="font-medium text-[#F4F2ED]">{title}</span>
        <span className="text-[10px] uppercase tracking-wider">PROJECT PREVIEW</span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-[#0C0D0E]">
        <picture>
          {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
          {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
          <img
            src={sources.fallback}
            alt={`${title} Project Preview`}
            width={1200}
            height={750}
            decoding="async"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};
