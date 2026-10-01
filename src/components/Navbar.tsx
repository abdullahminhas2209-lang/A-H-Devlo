import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-colors duration-200',
        scrolled
          ? 'bg-[#0C0D0E]/95 backdrop-blur-md border-b border-[#22252A]'
          : 'bg-[#0C0D0E]/80 backdrop-blur-sm border-b border-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Wordmark & Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded cursor-pointer transition-opacity hover:opacity-90"
          aria-label="A&H Devlo Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Center Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-1 border border-[#22252A] rounded-full px-3 py-1.5 bg-[#141618]/70"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={cn(
                  'px-3.5 py-1 text-xs font-body tracking-tight rounded-full transition-colors cursor-pointer',
                  isActive
                    ? 'text-[#F4F2ED] bg-[#22252A] font-medium'
                    : 'text-[#8E9298] hover:text-[#F4F2ED]'
                )}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-sm active:scale-95 font-body"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#22252A] text-[#8E9298] hover:text-[#F4F2ED] hover:bg-[#141618] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#22252A] bg-[#0C0D0E] px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={cn(
                    'text-left py-2 px-3 rounded-md text-sm font-body transition-colors cursor-pointer',
                    isActive
                      ? 'text-[#F4F2ED] bg-[#141618] font-medium'
                      : 'text-[#8E9298] hover:text-[#F4F2ED]'
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#22252A] flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#F4F2ED] text-[#0C0D0E] text-sm font-semibold hover:bg-white transition-colors cursor-pointer"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
