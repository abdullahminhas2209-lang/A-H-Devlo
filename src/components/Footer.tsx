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
    <footer className="bg-[var(--bg-deep)]/95 border-t border-[var(--border-subtle)] pt-16 pb-28 sm:pb-32 text-[var(--text-body)] text-sm relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Tier 1 (Top): Brand Identity & Quick Action */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[var(--border-subtle)]">
          <div className="space-y-2 max-w-xl">
            <button
              onClick={() => onNavigate('hero')}
              aria-label="Return to top of page"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded cursor-pointer block -ml-1 transition-opacity hover:opacity-90"
            >
              <BrandLogo size="md" />
            </button>
            <p className="text-sm text-[var(--text-body)] leading-relaxed font-sans pt-1">
              A modern digital studio crafting high-converting websites and bespoke web applications with precision engineering and thoughtful design.
            </p>
          </div>

          {/* Quick Intake CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-[var(--color-heading)] bg-[#021F33]/80 border border-[var(--border-subtle)] px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
              <span>Available for projects</span>
            </div>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-950/50 hover:shadow-[0_0_16px_rgba(47,123,255,0.4)] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Tier 2 (Middle): Multi-Column Navigation & Direct Channels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Column 1: Navigation */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono font-semibold text-[var(--color-heading)] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col space-y-2 text-sm font-sans">
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
                  onClick={() => onNavigate('services')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Why Devlo
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
                  onClick={() => onNavigate('about')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  About Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Offerings */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono font-semibold text-[var(--color-heading)] uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="flex flex-col space-y-2 text-sm font-sans">
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
                  High-Converting Landing Pages
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
                  onClick={() => onNavigate('services')}
                  className="text-left text-[var(--text-body)] hover:text-[var(--color-heading)] transition-colors cursor-pointer"
                >
                  Performance Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono font-semibold text-[var(--color-heading)] uppercase tracking-wider">
              Direct Inquiries
            </h4>
            <ul className="flex flex-col space-y-2 text-sm font-sans">
              <li>
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-body)] hover:text-[var(--accent-blue)] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{CONTACT_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-body)] hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{CONTACT_CONFIG.formattedWhatsapp}</span>
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)] text-xs">Response time: within 24 hours</span>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenInquiry}
                  className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] font-medium inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>Project intake form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Channels */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono font-semibold text-[var(--color-heading)] uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-xs text-[var(--text-body)] leading-relaxed">
              Follow our latest releases, design studies, and engineering updates.
            </p>
            {/* Social Icons row */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow A&H Devlo on Instagram (@${CONTACT_CONFIG.instagramHandle})`}
                className="w-9 h-9 rounded-full bg-[#021F33]/80 border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-white hover:border-[var(--accent-blue)]/50 hover:bg-[#0B3B61]/50 flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with A&H Devlo on WhatsApp (${CONTACT_CONFIG.formattedWhatsapp})`}
                className="w-9 h-9 rounded-full bg-[#021F33]/80 border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-[#0B3B61]/50 flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit A&H Devlo on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#021F33]/80 border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-blue-400 hover:border-blue-500/40 hover:bg-[#0B3B61]/50 flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Send Email to A&H Devlo (${CONTACT_CONFIG.email})`}
                className="w-9 h-9 rounded-full bg-[#021F33]/80 border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-[var(--accent-blue)] hover:border-[var(--accent-blue)]/40 hover:bg-[#0B3B61]/50 flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <GmailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Tier 3 (Bottom): Copyright & Legal Disclosures */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
          <div>
            &copy; 2026 A&amp;H Devlo Studio. All rights reserved.
          </div>

          <div className="text-[var(--text-muted)] hidden md:block">
            Built with precision &amp; clean code.
          </div>

          <div className="flex items-center space-x-5">
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

