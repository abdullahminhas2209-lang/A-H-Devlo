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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(() => {
    if (typeof window !== 'undefined' && (window as unknown as { __PENDING_MENU__?: boolean }).__PENDING_MENU__) {
      delete (window as unknown as { __PENDING_MENU__?: boolean }).__PENDING_MENU__;
      return true;
    }
    return false;
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'design', label: 'Brand & Graphics' },
    { id: 'process', label: 'How We Work' },
    { id: 'about', label: 'Founders' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-deep)]/95 border-[var(--border-subtle)] shadow-lg shadow-black/50 py-3 sm:py-3.5'
          : 'bg-[var(--bg-deep)]/80 border-[var(--border-subtle)]/60 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded-lg cursor-pointer flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="A&H Devlo Studio Home"
        >
          <BrandLogo size="sm" priority={true} />
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
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`relative text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'text-[var(--accent-lime)] font-bold shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5 font-medium'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[var(--accent-lime)] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            data-inquiry=""
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-1.5 bg-[#D0FE1D] hover:brightness-105 text-[#00141F] rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold tracking-tight shadow-md shadow-lime-950/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-heading"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            data-mobile-menu-toggle=""
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
                      ? 'bg-white/10 text-[var(--accent-lime)] font-semibold'
                      : 'text-[var(--text-body)] hover:text-[var(--color-heading)] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                data-inquiry=""
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full text-center py-2.5 rounded-full bg-[#D0FE1D] text-[#00141F] text-sm font-bold shadow transition-all hover:brightness-105 cursor-pointer font-heading"
              >
                <span>Start a Project</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
