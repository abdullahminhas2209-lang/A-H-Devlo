import React from 'react';
import { BrandLogo } from './BrandLogo';
import { GmailIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon } from './icons';
import {
  CONTACT_CONFIG,
  getGmailComposeUrl,
  getMailtoUrl,
  getWhatsAppUrl,
  getInstagramDmUrl,
} from '../config/contact';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenLegal,
}) => {
  return (
    <footer
      id="contact"
      className="bg-[#030B14] border-t border-[#14304D] pt-16 md:pt-20 text-slate-300 text-sm scroll-mt-24 sm:scroll-mt-28 relative"
      style={{
        // Safe bottom padding ensuring floating Apple Dock never obscures footer content
        paddingBottom: 'max(9.5rem, calc(8.5rem + env(safe-area-inset-bottom, 0px)))',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Main 4-Column Footer Grid matching reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Contact With Us & Circular Social Buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded cursor-pointer transition-transform hover:scale-[1.02]"
              aria-label="A&H Devlo — Return to homepage top"
            >
              <BrandLogo size="md" />
            </button>

            <h3 className="text-white font-bold text-lg font-heading tracking-tight pt-1">
              Contact With Us:
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed font-body max-w-sm">
              Stay connected with A&amp;H Devlo on social media! Follow us on Instagram, LinkedIn, WhatsApp and Gmail.
            </p>

            {/* Circular Social Media Icon Buttons matching reference */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Instagram */}
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow A&H Devlo on Instagram (opens in a new tab)"
                className="w-10 h-10 rounded-full bg-white text-slate-950 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with A&H Devlo on LinkedIn (opens in a new tab)"
                className="w-10 h-10 rounded-full bg-white text-slate-950 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with A&H Devlo on WhatsApp (opens in a new tab)"
                className="w-10 h-10 rounded-full bg-white text-slate-950 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              {/* Gmail */}
              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email A&H Devlo via Gmail (opens in a new tab)"
                className="w-10 h-10 rounded-full bg-white text-slate-950 hover:bg-[#EA4335] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                <GmailIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Direct Contact Text Details */}
            <div className="pt-3 space-y-1.5 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500">Email: </span>
                <a
                  href={getMailtoUrl()}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500">WhatsApp: </span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {CONTACT_CONFIG.formattedWhatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: About (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:pl-2 lg:pl-6">
            <h3 className="text-white font-bold text-lg font-heading tracking-tight mb-4">
              About
            </h3>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  History &amp; Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Brand Guidelines &amp; Principles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Terms &amp; Condition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-lg font-heading tracking-tight mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <button
                  onClick={onOpenInquiry}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  How to Order / Start
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Our Products &amp; Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Turnaround &amp; Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Payment Methods &amp; Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Other (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white font-bold text-lg font-heading tracking-tight mb-4">
              Other
            </h3>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <button
                  onClick={onOpenInquiry}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Help &amp; FAQ
                </button>
              </li>
              <li>
                <a
                  href={getInstagramDmUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-pink-400 transition-colors block focus:outline-none focus-visible:ring-1 focus-visible:ring-pink-400 rounded"
                >
                  Message on Instagram
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  Privacy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Clean, human, authentic copyright line */}
        <div className="pt-8 border-t border-[#14304D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {CURRENT_YEAR} A&amp;H Devlo. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
