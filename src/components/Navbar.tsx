import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
      className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/85 border-neutral-800/80 shadow-lg shadow-black/50 py-3 sm:py-3.5'
          : 'bg-[#0a0a0c]/70 border-neutral-800/50 py-3.5 sm:py-4'
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
            <span className="font-bold tracking-tight text-white flex items-center gap-1.5 text-base sm:text-lg font-heading leading-none">
              A&amp;H Devlo <span className="text-neutral-400 font-normal text-xs uppercase tracking-widest ml-1 hidden sm:inline">Studio</span>
            </span>
          </div>
        </button>

        {/* Center: Desktop Anchor Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/50 border border-neutral-800/70 rounded-full px-3 py-1.5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/10 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-1.5 bg-white text-neutral-950 hover:bg-neutral-100 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-heading"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-[#0a0a0c]/95 border-b border-neutral-800 backdrop-blur-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm font-medium px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
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
                className="w-full text-center py-2.5 rounded-xl bg-[var(--accent-blue)] text-white text-sm font-semibold shadow transition-opacity hover:opacity-90 cursor-pointer"
              >
                Book a Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

