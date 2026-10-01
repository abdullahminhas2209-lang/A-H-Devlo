import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { cn } from '../lib/utils';

interface NavbarProps {
  onOpenInquiry: (serviceType?: string) => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  onNavigate,
  activeSection = 'hero',
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'why', label: 'Why Us' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none ${
        scrolled
          ? 'py-3.5 bg-[#030B14]/85 backdrop-blur-md border-b border-[#14304D]/60 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded cursor-pointer pointer-events-auto transition-transform hover:scale-[1.02]"
          aria-label="A&H Devlo Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Center Desktop Navigation Links in Inter font */}
        <nav
          aria-label="Desktop Section Navigation"
          className="hidden md:flex items-center space-x-1 pointer-events-auto bg-[#081726]/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#163554]/70 shadow-sm"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={cn(
                  'px-3 py-1 text-sm font-body font-medium transition-colors cursor-pointer rounded-full select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Status Badge & Direct CTA */}
        <div className="flex items-center space-x-3 pointer-events-auto">
          <div className="hidden sm:flex items-center space-x-2 text-[11px] font-body text-cyan-300 font-medium px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Available for Q2/Q3</span>
          </div>

          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-body"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};


