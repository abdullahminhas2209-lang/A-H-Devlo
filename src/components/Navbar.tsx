import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'why', label: 'Why Devlo' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? 'translate-y-0 opacity-100 bg-[var(--bg-deep)]/90 border-[var(--border-subtle)] shadow-lg shadow-black/50 py-3 sm:py-3.5'
          : '-translate-y-full opacity-0 pointer-events-none py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded-lg cursor-pointer flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="A&H Devlo Studio Home"
        >
          <BrandLogo size="sm" />
          <div className="text-left hidden xs:block">
            <span className="font-bold tracking-tight text-[var(--color-heading)] flex items-center gap-1.5 text-base sm:text-lg font-heading leading-none">
              A&amp;H Devlo <span className="text-[var(--text-muted)] font-normal text-xs uppercase tracking-widest ml-1 hidden sm:inline">Studio</span>
            </span>
          </div>
        </button>

        {/* Center: Desktop Anchor Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#021F33]/60 border border-[var(--border-subtle)] rounded-full px-3 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#38E1D8] font-bold shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5 font-medium'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#38E1D8] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Primary CTA, Sun Control & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => onOpenInquiry()}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#D0FE1D] hover:brightness-105 text-[#00141F] rounded-xl px-4 py-2 text-xs sm:text-sm font-bold tracking-tight shadow-md shadow-lime-950/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-heading"
          >
            <span>Startup Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={() => onOpenInquiry()}
            title="Startup Project"
            aria-label="Startup Project"
            className="w-11 h-9 sm:w-13 sm:h-10 rounded-2xl bg-gradient-to-br from-[#4EE2EC] via-[#38E8DA] to-[#2AA8F2] flex items-center justify-center cursor-pointer shadow-[0_4px_18px_rgba(56,232,218,0.38)] hover:shadow-[0_4px_24px_rgba(42,168,242,0.5)] hover:scale-105 active:scale-95 transition-all select-none"
          >
            <Sun className="w-4.5 h-4.5 text-[#011B2B] stroke-[2.2]" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-[#021F33]/80 border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-[var(--color-heading)] flex items-center justify-center transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-[var(--bg-deep)]/95 border-b border-[var(--border-subtle)] backdrop-blur-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm font-medium px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white/10 text-[var(--color-heading)] font-semibold'
                      : 'text-[var(--text-body)] hover:text-[var(--color-heading)] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-[#D0FE1D] text-[#00141F] text-sm font-bold shadow transition-all hover:brightness-105 cursor-pointer font-heading"
              >
                Startup Project
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

