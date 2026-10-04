import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sun } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOpenInquiry: (serviceType?: string) => void;
  onViewWork: () => void;
  onNavigate: (sectionId: string) => void;
  onSelectProject?: (projectId: string) => void;
  activeSection?: string;
}

const AbstractArtwork: React.FC = () => {
  // Center coordinates for the 4x3 rhythmic grid
  // Col 0: cx = 64, Col 1: cx = 190, Col 2: cx = 316, Col 3: cx = 442
  // Row 0: cy = 64, Row 1: cy = 190, Row 2: cy = 316
  // Radius r = 54
  const radius = 54;
  const cols = [64, 190, 316, 442];
  const rows = [64, 190, 316];

  // 10 Background discs (excluding Col 1 Row 1 for Teardrop and Col 2 Row 2 for Arch)
  const darkDiscCoords: [number, number][] = [
    // Row 0 (top)
    [cols[0], rows[0]],
    [cols[1], rows[0]],
    [cols[2], rows[0]],
    [cols[3], rows[0]],
    // Row 1 (middle)
    [cols[0], rows[1]],
    // [cols[1], rows[1]] -> Lime Teardrop
    [cols[2], rows[1]],
    [cols[3], rows[1]],
    // Row 2 (bottom)
    [cols[0], rows[2]],
    [cols[1], rows[2]],
    // [cols[2], rows[2]] -> Sunset Arch
    [cols[3], rows[2]],
  ];

  // Teardrop path at cx = 190, cy = 190, r = 54:
  // Starts at top-right corner (244, 136), drops down right tangent (244, 190),
  // sweeps 270 deg circle around bottom, left, top to (190, 136), closes to (244, 136)
  const teardropPath = 'M 244 136 L 244 190 A 54 54 0 1 1 190 136 L 244 136 Z';

  // Arch path at cx = 316, cy = 316, r = 54:
  // Flat base at y = 370, vertical sides, and semicircular dome over top
  const archPath = 'M 262 370 L 262 316 A 54 54 0 0 1 370 316 L 370 370 Z';

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] xl:max-w-[530px] aspect-[510/385] select-none">
      {/* Subtle ambient lighting behind composition */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_50%,rgba(11,59,97,0.3)_0%,transparent_70%)] pointer-events-none -z-10" />

      <svg
        viewBox="0 0 510 385"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-2xl"
      >
        <defs>
          {/* Subtle directional gradient for dark discs (matte architectural finish) */}
          <linearGradient id="discGrad" x1="20%" y1="15%" x2="80%" y2="85%">
            <stop offset="0%" stopColor="#082842" />
            <stop offset="50%" stopColor="#031a2d" />
            <stop offset="100%" stopColor="#011220" />
          </linearGradient>

          {/* Smooth material gradient for Lime Teardrop */}
          <linearGradient id="limeGrad" x1="20%" y1="15%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#D8FE28" />
            <stop offset="55%" stopColor="#C6EB14" />
            <stop offset="100%" stopColor="#9EC209" />
          </linearGradient>

          {/* Sunset gradient for Arch matching original reference */}
          <linearGradient id="archGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="35%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          {/* Realistic physical shadow for background discs */}
          <filter id="discShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.45" />
          </filter>

          {/* Rich multi-layer physical drop shadow for prominent foreground shapes */}
          <filter id="shapeShadow" x="-30%" y="-25%" width="160%" height="165%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000000" floodOpacity="0.65" />
            <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. Base Layer: Dark Architectural Discs */}
        <g id="dark-discs">
          {darkDiscCoords.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={radius}
              fill="url(#discGrad)"
              stroke="rgba(230, 251, 255, 0.05)"
              strokeWidth="1"
              filter="url(#discShadow)"
            />
          ))}
        </g>

        {/* 2. Highlight Layer: The Sunset Arch */}
        <motion.path
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.48, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          d={archPath}
          fill="url(#archGrad)"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
          filter="url(#shapeShadow)"
          className="transition-transform duration-300 hover:scale-[1.02] origin-center cursor-pointer"
        />

        {/* 3. Focal Layer: The Lime Teardrop Shape */}
        <motion.path
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.58, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          d={teardropPath}
          fill="url(#limeGrad)"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
          filter="url(#shapeShadow)"
          className="transition-transform duration-300 hover:scale-[1.02] origin-center cursor-pointer"
        />
      </svg>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8"
    >
      {/* Ambient Canvas Glow: Soft radial gradient behind the hero container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(11,59,97,0.35)_0%,rgba(2,31,51,0.15)_50%,transparent_75%)] blur-[140px] pointer-events-none -z-10" />

      {/* Hero Master Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] bg-[#021827] border border-[rgba(230,251,255,0.12)] shadow-[0_24px_80px_rgba(0,0,0,0.65)] relative overflow-hidden flex flex-col justify-between min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] p-6 sm:p-10 lg:p-14"
      >
        {/* Subtle inner ambient backdrop lighting */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_70%_30%,rgba(11,59,97,0.3)_0%,transparent_70%)] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_20%_80%,rgba(2,31,51,0.4)_0%,transparent_70%)] pointer-events-none -z-10" />

        {/* 1. TOP NAVIGATION (Inside the Hero Container) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="w-full flex items-center justify-between relative z-20 pb-8 sm:pb-12"
        >
          {/* Top Left: A&H Devlo Logo (Colors 100% Unchanged) */}
          <button
            onClick={() => handleNavClick('hero')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded-lg cursor-pointer flex items-center gap-2.5 transition-opacity hover:opacity-90"
            aria-label="A&H Devlo Studio Home"
          >
            <BrandLogo size="sm" />
          </button>

          {/* Top Center/Right: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 text-sm font-medium">
            <button
              onClick={() => handleNavClick('hero')}
              className="relative py-1 text-[#38E1D8] font-semibold transition-colors cursor-pointer group"
            >
              <span>Home</span>
              {/* Active Underline Indicator matching reference */}
              <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#38E1D8] rounded-full" />
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="text-white/90 hover:text-white transition-colors cursor-pointer py-1 font-medium"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('work')}
              className="text-white/90 hover:text-white transition-colors cursor-pointer py-1 font-medium"
            >
              Projects
            </button>

            <button
              onClick={() => {
                onOpenInquiry();
              }}
              className="text-white/90 hover:text-white transition-colors cursor-pointer py-1 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Top Right: Sun Card Control & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <motion.button
              whileHover={{ scale: 1.05, filter: 'brightness(1.06)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              onClick={() => onOpenInquiry()}
              title="Startup Project"
              aria-label="Startup Project"
              className="w-13 h-10 sm:w-15 sm:h-11 rounded-2xl bg-gradient-to-br from-[#4EE2EC] via-[#38E8DA] to-[#2AA8F2] flex items-center justify-center cursor-pointer shadow-[0_4px_22px_rgba(56,232,218,0.38)] hover:shadow-[0_4px_28px_rgba(42,168,242,0.55)] transition-all select-none"
            >
              <Sun className="w-5 h-5 text-[#011B2B] stroke-[2.2]" />
            </motion.button>

            {/* Mobile Navigation Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-[#031D33]/80 border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown Drawer inside Hero Container */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full mb-6 p-4 rounded-2xl bg-[#011422]/95 border border-[var(--border-subtle)] backdrop-blur-xl relative z-30 transition-all animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left text-sm font-semibold text-[#38E1D8] px-3 py-2 rounded-lg bg-white/5 flex items-center justify-between"
              >
                <span>Home</span>
                <span className="w-2 h-2 rounded-full bg-[#38E1D8]" />
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left text-sm text-white/90 hover:text-white px-3 py-2 rounded-lg"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('work')}
                className="text-left text-sm text-white/90 hover:text-white px-3 py-2 rounded-lg"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="text-left text-sm text-white/90 hover:text-white px-3 py-2 rounded-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        )}

        {/* 2. HERO BODY (Editorial 2-Column Composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center flex-1 my-auto">
          {/* Left Column: Headline with dominant "professional" in #D0FE1D */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            <h1 className="font-bold text-white tracking-tight leading-[1.12] font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] select-none">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white"
              >
                Websites that make
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white mt-1 sm:mt-1.5"
              >
                small business
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16, color: '#FFFFFF' }}
                animate={{ opacity: 1, y: 0, color: '#D0FE1D' }}
                transition={{ delay: 0.58, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block font-extrabold text-[#D0FE1D] mt-1 sm:mt-1.5"
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
            className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-center relative select-none"
          >
            <AbstractArtwork />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
