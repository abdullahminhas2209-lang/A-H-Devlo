import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenInquiry: (serviceType?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none ${
        scrolled
          ? 'py-3.5 bg-[var(--bg-deep)]/85 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-lg shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded cursor-pointer pointer-events-auto transition-transform hover:scale-[1.02]"
          aria-label="A&H Devlo Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Right Direct CTA */}
        <div className="flex items-center space-x-3 pointer-events-auto">

          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 shadow-md shadow-blue-900/30 hover:shadow-[0_0_20px_rgba(47,123,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-heading"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};

