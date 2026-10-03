import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import {
  CONTACT_CONFIG,
  getGmailComposeUrl,
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
    <footer className="bg-[var(--bg-deep)]/80 backdrop-blur-md border-t border-[var(--border-subtle)] pt-16 md:pt-20 pb-28 sm:pb-36 text-[var(--text-muted)] text-sm relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
        
        {/* Main Grid: Left Column (Brand + Contact Info) + 3 Essential Heading Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Block: Brand Logo, Contact With Us, and Social Icons */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-5 space-y-4">
            {/* Studio Logo */}
            <button
              onClick={() => onNavigate('hero')}
              aria-label="Return to top of page"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded cursor-pointer block -ml-1 transition-transform hover:scale-105"
            >
              <BrandLogo size="md" />
            </button>

            {/* Heading matching Image 1 */}
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-heading)] tracking-tight">
              Contact With Us:
            </h3>

            {/* Explanatory text */}
            <p className="text-sm text-[var(--text-body)] max-w-sm leading-relaxed font-sans">
              Stay connected with A&amp;H Devlo on social media! Reach out to us on WhatsApp, Instagram, LinkedIn, and Email.
            </p>

            {/* Circular Social Buttons Row matching Image 1 */}
            <div className="pt-2 flex items-center space-x-3">
              {/* Instagram */}
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow A&H Devlo on Instagram (@${CONTACT_CONFIG.instagramHandle})`}
                className="w-10 h-10 rounded-full bg-white text-[#00141F] hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with A&H Devlo on WhatsApp (${CONTACT_CONFIG.formattedWhatsapp})`}
                className="w-10 h-10 rounded-full bg-white text-[#00141F] hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit A&H Devlo on LinkedIn"
                className="w-10 h-10 rounded-full bg-white text-[#00141F] hover:bg-[#0077B5] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 cursor-pointer"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              {/* Gmail / Email */}
              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Send Email to A&H Devlo (${CONTACT_CONFIG.email})`}
                className="w-10 h-10 rounded-full bg-white text-[#00141F] hover:bg-[var(--accent-blue)] hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 cursor-pointer"
              >
                <GmailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Essential Column 1: About */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--color-heading)] tracking-tight">
              About
            </h4>
            <ul className="flex flex-col space-y-2.5 text-sm font-sans">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  How We Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Terms &amp; Condition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Essential Column 2: Services */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--color-heading)] tracking-tight">
              Services
            </h4>
            <ul className="flex flex-col space-y-2.5 text-sm font-sans">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Custom Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Landing Pages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Website Redesigns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  UI/UX Design Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  How to Order
                </button>
              </li>
            </ul>
          </div>

          {/* Essential Column 3: Other */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--color-heading)] tracking-tight">
              Other
            </h4>
            <ul className="flex flex-col space-y-2.5 text-sm font-sans">
              <li>
                <button
                  onClick={onOpenInquiry}
                  className="text-left text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] font-semibold transition-colors cursor-pointer inline-flex items-center space-x-1"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-[var(--text-body)] hover:text-emerald-400 transition-colors cursor-pointer block"
                >
                  Help
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Privacy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Disclosures */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
          <div>
            &copy; 2026 A&amp;H Devlo. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[var(--color-heading)] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[var(--color-heading)] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
