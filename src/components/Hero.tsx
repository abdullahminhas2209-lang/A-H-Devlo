import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenInquiry?: (serviceType?: string) => void;
  onViewWork?: () => void;
  onNavigate?: (sectionId: string) => void;
  onSelectProject?: (projectId: string) => void;
  activeSection?: string;
}

/**
 * AbstractArtwork
 * Faithful, tactile, and physically realistic reproduction of the 4x3 architectural
 * tile composition inspired by the reference design.
 *
 * Grid Structure (4 columns x 3 rows):
 * - Row 0: 4 matte dark architectural discs
 * - Row 1: 1 dark disc, Lime Teardrop (#D0FE1D), 2 dark discs
 * - Row 2: 2 dark discs, Sunset Arch (#EA580C), 1 dark disc
 */
const AbstractArtwork: React.FC = () => {
  // Tile dimensions across breakpoints:
  // Mobile: 56px (w-14) | Tablet: 64px - 80px | Desktop: 80px - 112px
  const tileClasses = 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28';

  // Common styling for tactile dark architectural discs
  const darkDiscStyle: React.CSSProperties = {
    background: 'radial-gradient(circle at 38% 28%, #0d3b63 0%, #05233c 50%, #011422 100%)',
    boxShadow:
      '0 14px 28px -4px rgba(0, 0, 0, 0.65), 0 4px 10px -2px rgba(0, 0, 0, 0.45), inset 0 1px 1.5px rgba(255, 255, 255, 0.14), inset 0 -1.5px 2px rgba(0, 0, 0, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  };

  // Tactile satin lime teardrop: rounded top-left, bottom-left, bottom-right; sharp top-right corner
  const limeTeardropStyle: React.CSSProperties = {
    background: 'radial-gradient(circle at 32% 28%, #ecfe66 0%, #D0FE1D 48%, #9fca05 100%)',
    borderRadius: '50% 0 50% 50%',
    boxShadow:
      '0 24px 50px -8px rgba(0, 0, 0, 0.8), 0 10px 20px -4px rgba(0, 0, 0, 0.5), 0 0 45px -8px rgba(208, 254, 29, 0.35), inset 0 2px 3px rgba(255, 255, 255, 0.48), inset 0 -2px 4px rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.22)',
  };

  // Tactile sunset arch: semicircular dome on top, flat base at bottom
  const sunsetArchStyle: React.CSSProperties = {
    background: 'linear-gradient(180deg, #FDBA74 0%, #F59E0B 28%, #EA580C 72%, #C2410C 100%)',
    borderRadius: '50% 50% 0 0',
    boxShadow:
      '0 24px 50px -8px rgba(0, 0, 0, 0.8), 0 10px 20px -4px rgba(0, 0, 0, 0.5), 0 0 45px -8px rgba(234, 88, 12, 0.3), inset 0 2px 3px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.16)',
  };

  return (
    <div className="relative select-none p-2 sm:p-4">
      {/* Soft atmospheric ambient glow behind the matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(11,59,97,0.4)_0%,rgba(2,31,51,0.15)_60%,transparent_80%)] pointer-events-none -z-10" />

      {/* 4x3 Physical Tile Matrix */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-3.5 xl:gap-4">
        {/* ROW 0 */}
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />

        {/* ROW 1 */}
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
        {/* The Focal Lime Teardrop */}
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          transition={{ duration: 0.25 }}
          className={`${tileClasses} cursor-pointer`}
          style={limeTeardropStyle}
          aria-label="Focal Lime Accent Geometry"
        />
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />

        {/* ROW 2 */}
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
        {/* The Warm Sunset Arch */}
        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          transition={{ duration: 0.25 }}
          className={`${tileClasses} cursor-pointer`}
          style={sunsetArchStyle}
          aria-label="Sunset Arch Accent Geometry"
        />
        <div className={`${tileClasses} rounded-full`} style={darkDiscStyle} />
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient Canvas Glow: Soft radial gradient seamlessly blending into site background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] sm:h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(11,59,97,0.3)_0%,rgba(2,31,51,0.1)_50%,transparent_75%)] blur-[140px] pointer-events-none -z-10" />

      {/* Hero Content Container - Fits seamlessly into website background without boxed container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto relative flex items-center"
      >
        {/* 2-Column Composition: Left Headline & Right Abstract Geometric Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]">
          {/* Left Column: Headline with dominant "professional" in solid #D0FE1D */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="font-extrabold sm:font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.04] font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] 2xl:text-[5.5rem] select-none">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                Website that make
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white mt-1 sm:mt-2"
              >
                small businesses
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16, color: '#FFFFFF' }}
                animate={{ opacity: 1, y: 0, color: '#D0FE1D' }}
                transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block font-extrabold text-[#D0FE1D] mt-1 sm:mt-2"
              >
                professional
              </motion.span>
            </h1>
          </div>

          {/* Right Column: Abstract Geometric Composition */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative select-none"
          >
            <AbstractArtwork />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
