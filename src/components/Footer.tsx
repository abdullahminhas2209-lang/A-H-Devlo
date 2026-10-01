import React from 'react';
import { BrandLogo } from './BrandLogo';
import { GmailIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon } from './icons';
import {
  CONTACT_CONFIG,
  getGmailComposeUrl,
  getMailtoUrl,
  getWhatsAppUrl,
} from '../config/contact';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
}) => {
  return (
    <footer
      id="contact"
      className="bg-[#0C0D0E] border-t border-[#22252A] pt-16 md:pt-20 pb-12 md:pb-16 text-[#8E9298] text-sm scroll-mt-24 relative"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Brand & Direct Contact */}
          <div className="md:col-span-2 lg:col-span-6 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded cursor-pointer transition-opacity hover:opacity-90"
              aria-label="A&H Devlo — Return to homepage top"
            >
              <BrandLogo size="md" />
            </button>

            <p className="text-[#8E9298] text-sm leading-relaxed font-body max-w-md">
              Independent web design and development studio founded by Abdullah Minhas and Hamza. We build fast, custom websites for small businesses and independent practices.
            </p>

            {/* Direct Social Icon Links */}
            <div className="flex items-center space-x-2 pt-2">
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A&H Devlo on Instagram (opens in a new tab)"
                className="w-9 h-9 rounded-full border border-[#22252A] bg-[#141618] hover:border-[#363A42] hover:bg-[#181A1D] text-[#F4F2ED] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A&H Devlo on LinkedIn (opens in a new tab)"
                className="w-9 h-9 rounded-full border border-[#22252A] bg-[#141618] hover:border-[#363A42] hover:bg-[#181A1D] text-[#F4F2ED] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with A&H Devlo on WhatsApp (opens in a new tab)"
                className="w-9 h-9 rounded-full border border-[#22252A] bg-[#141618] hover:border-[#363A42] hover:bg-[#181A1D] text-[#F4F2ED] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email A&H Devlo via Gmail (opens in a new tab)"
                className="w-9 h-9 rounded-full border border-[#22252A] bg-[#141618] hover:border-[#363A42] hover:bg-[#181A1D] text-[#F4F2ED] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <GmailIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Contact Details */}
            <div className="pt-2 space-y-1 text-xs font-mono text-[#8E9298]">
              <div>
                <span>Email: </span>
                <a
                  href={getMailtoUrl()}
                  className="text-[#F4F2ED] hover:underline transition-colors"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </div>
              <div>
                <span>WhatsApp: </span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4F2ED] hover:underline transition-colors"
                >
                  {CONTACT_CONFIG.formattedWhatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column 1: Services */}
          <div className="md:col-span-1 lg:col-span-3 space-y-3">
            <h3 className="text-[#F4F2ED] font-semibold text-sm tracking-tight mb-4 font-heading">
              Services
            </h3>
            <ul className="space-y-2 text-xs font-body">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  Landing Pages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  Website Rebuilds
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Studio */}
          <div className="md:col-span-1 lg:col-span-3 space-y-3">
            <h3 className="text-[#F4F2ED] font-semibold text-sm tracking-tight mb-4 font-heading">
              Studio
            </h3>
            <ul className="space-y-2 text-xs font-body">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  Founders &amp; Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  4-Step Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  Studio Commitments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#22252A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9298] font-body">
          <div>
            &copy; {CURRENT_YEAR} A&amp;H Devlo. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#F4F2ED] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#F4F2ED] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
