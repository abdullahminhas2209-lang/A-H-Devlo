import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenLegal,
}) => {
  return (
    <footer className="bg-[#030B14] border-t border-[#14304D] py-16 md:py-24 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded cursor-pointer"
            >
              <BrandLogo size="md" />
            </button>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-body">
              Web design &amp; development for businesses ready to build a stronger online presence.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Clean by design • Performance-focused • Studio craftsmanship
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 block">
              Navigation
            </span>
            <div className="flex flex-col space-y-2 text-sm font-body">
              <button
                onClick={() => onNavigate('hero')}
                className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('work')}
                className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Selected Work
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => onNavigate('why')}
                className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Our Principles
              </button>
              <button
                onClick={() => onNavigate('process')}
                className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                How We Work
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                About the Studio
              </button>
              <button
                onClick={() => onOpenInquiry()}
                className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Contact &amp; Inquiry
              </button>
            </div>
          </div>

          {/* Direct Inquiry CTA (4 cols) */}
          <div className="md:col-span-4 p-6 rounded-2xl bg-[#081726]/80 border border-[#14304D] space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block">
              New Project Inquiries
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-body">
              Have an upcoming website project or redesign? Tell us about your goals and we will respond with scope details.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold tracking-tight transition-colors shadow cursor-pointer font-heading"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="pt-2 flex flex-col space-y-1 text-xs text-slate-400 font-mono">
              <a href="mailto:hello@ahdevlo.com" className="hover:text-cyan-300 transition-colors">
                Email: hello@ahdevlo.com
              </a>
              <a
                href="https://wa.me/923000000000?text=Hi%20A%26H%20Devlo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                WhatsApp: Direct Chat ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Disclosures */}
        <div className="pt-8 border-t border-[#14304D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; 2026 A&amp;H Devlo. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
