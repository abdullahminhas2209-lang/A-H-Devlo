import React from 'react';

interface SectionDividerProps {
  className?: string;
  withNode?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  withNode = true,
}) => {
  return (
    <div
      className={`relative w-full flex items-center justify-center overflow-hidden py-0 ${className}`}
      aria-hidden="true"
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 relative flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#22252A] to-transparent" />
        {withNode && (
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#1B1D21] border border-[#22252A]" />
        )}
      </div>
    </div>
  );
};
