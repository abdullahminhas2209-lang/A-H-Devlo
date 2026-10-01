import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  // Prominent heights so the logo and typography are clearly visible with zero background
  const heights = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13 md:h-14',
    lg: 'h-16 sm:h-20',
  };

  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      {!imageError ? (
        <img
          src="/brand/logo-transparent.png"
          onError={() => setImageError(true)}
          alt="A&H Devlo Logo"
          width={180}
          height={48}
          decoding="async"
          className={`${heights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md`}
        />
      ) : (
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-sm tracking-tight text-white shadow">
            A&amp;H
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white block font-heading leading-tight">
              A&amp;H Devlo
            </span>
            <span className="text-[10px] tracking-widest uppercase text-cyan-400 font-medium block">
              Design &amp; Dev Studio
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
