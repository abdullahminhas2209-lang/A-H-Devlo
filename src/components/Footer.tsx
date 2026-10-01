import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import {
  CONTACT_CONFIG,
  getGmailComposeUrl,
  getMailtoUrl,
  getWhatsAppUrl,
} from '../config/contact';
import {
  GmailIcon,
  WhatsAppIcon,
  LinkedInIcon,
  InstagramIcon,
} from './icons';

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
    <footer className="bg-[#030B14] border-t border-[#14304D] pt-16 md:pt-24 pb-28 sm:pb-36 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Brand & Mission (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              aria-label="Return to top of page"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded cursor-pointer"
            >
              <BrandLogo size="md" />
            </button>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-body">
              Web design &amp; development studio crafting high-performance digital experiences for ambitious businesses.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Clean by design • Performance-focused • Studio craftsmanship
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="md:col-span-2 space-y-3">
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
                About Studio
              </button>
            </div>
          </div>

          {/* Direct Channels / Contact Us (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 block">
              Contact Channels
            </span>
            <div className="flex flex-col space-y-2.5 font-body">
              {/* Gmail Compose */}
              <div className="flex flex-col space-y-1">
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send email to A&H Devlo via Gmail web compose (opens in new tab)"
                  className="flex items-center space-x-2.5 px-3 py-2.5 min-h-[44px] rounded-xl bg-[#081726]/80 hover:bg-[#0E243A] border border-[#163554] hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] group"
                >
                  <GmailIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">Email ({CONTACT_CONFIG.email})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover:text-cyan-300 shrink-0" />
                </a>
                <a
                  href={getMailtoUrl()}
                  aria-label="Open default mail client"
                  className="text-[11px] font-mono text-slate-500 hover:text-cyan-400 transition-colors pl-1 inline-flex items-center space-x-1"
                >
                  <Mail className="w-3 h-3" />
                  <span>or open native mail client</span>
                </a>
              </div>

              {/* WhatsApp Direct */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with A&H Devlo on WhatsApp at ${CONTACT_CONFIG.formattedWhatsapp} (opens in new tab)`}
                className="flex items-center space-x-2.5 px-3 py-2.5 min-h-[44px] rounded-xl bg-[#081726]/80 hover:bg-[#0E243A] border border-[#163554] hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] group"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>WhatsApp ({CONTACT_CONFIG.formattedWhatsapp})</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover:text-cyan-300 shrink-0" />
              </a>

              {/* LinkedIn Page */}
              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit A&H Devlo official LinkedIn company page (opens in new tab)"
                className="flex items-center space-x-2.5 px-3 py-2.5 min-h-[44px] rounded-xl bg-[#081726]/80 hover:bg-[#0E243A] border border-[#163554] hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] group"
              >
                <LinkedInIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>LinkedIn Company</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover:text-cyan-300 shrink-0" />
              </a>

              {/* Instagram Profile */}
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit A&H Devlo official Instagram profile @ah_devlo (opens in new tab)"
                className="flex items-center space-x-2.5 px-3 py-2.5 min-h-[44px] rounded-xl bg-[#081726]/80 hover:bg-[#0E243A] border border-[#163554] hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] group"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>Instagram (@{CONTACT_CONFIG.instagramHandle})</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover:text-cyan-300 shrink-0" />
              </a>
            </div>
          </div>

          {/* Direct Inquiry CTA (3 cols) */}
          <div className="md:col-span-3 p-5 rounded-2xl bg-[#081726]/90 border border-[#14304D] space-y-3.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block">
              New Project Inquiries
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-body">
              Have an upcoming website project or redesign? Tell us about your goals and we will respond with scope details.
            </p>
            <button
              onClick={onOpenInquiry}
              aria-label="Open project inquiry modal"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold tracking-tight transition-colors shadow cursor-pointer font-heading min-h-[44px]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
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
