import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, ExternalLink, Mail, Phone } from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = CONTACT_CONFIG.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.formattedWhatsapp);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleCopyInstagram = async () => {
    try {
      await navigator.clipboard.writeText(`@${CONTACT_CONFIG.instagramHandle}`);
      setCopiedInstagram(true);
      setTimeout(() => setCopiedInstagram(false), 2200);
    } catch {
      setCopiedInstagram(true);
      setTimeout(() => setCopiedInstagram(false), 2200);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#030B14] border-t border-[#14304D] pt-16 md:pt-24 text-slate-400 text-sm scroll-mt-24 sm:scroll-mt-28 relative"
      style={{
        // Safe bottom padding ensuring floating Apple Dock never obscures footer content
        paddingBottom: 'max(9.5rem, calc(8.5rem + env(safe-area-inset-bottom, 0px)))',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        {/* Main Grid: Brand Block, Quick Navigation, & Contact Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* 1. BRAND BLOCK (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('hero')}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
              aria-label="A&H Devlo — Return to homepage top"
            >
              <BrandLogo size="md" />
            </button>

            <p className="text-sm sm:text-base text-slate-300 max-w-sm leading-relaxed font-body">
              Web design &amp; development studio for businesses ready to build a serious, high-performing online presence.
            </p>

            <div className="p-4 rounded-xl bg-[#081726]/90 border border-[#14304D] space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block">
                Have a project in mind? Let&apos;s talk.
              </span>
              <p className="text-xs text-slate-400 font-body leading-relaxed">
                Whether you need a custom business website, a targeted landing page, or a complete redesign, we respond within 24 hours.
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold font-heading transition-all shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. QUICK NAVIGATION (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-300">
              Quick Navigation
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2.5 text-sm font-body">
                <li>
                  <button
                    onClick={() => onNavigate('hero')}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('work')}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    Selected Work &amp; Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    Studio Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('why')}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    Our Principles
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('process')}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    How We Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    About the Studio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('faq')}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* 3. CONTACT US SECTION WITH 4 ACTION BUTTONS & COPY DETAILS (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-2">
                <span className="w-4 h-[1.5px] bg-cyan-400 inline-block"></span>
                <span>GET IN TOUCH</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                Contact us
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-body">
                Connect directly through your preferred channel. We respond promptly.
              </p>
            </div>

            {/* Four Primary Channels: Gmail, WhatsApp, LinkedIn, Instagram */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {/* Button 1: Gmail Compose */}
              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email A&H Devlo via Gmail (opens compose window in a new tab)"
                className="group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-[#081726]/90 hover:bg-[#0E243A] border border-[#163554] hover:border-red-500/50 transition-all duration-200 min-h-[96px] cursor-pointer shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                    <GmailIcon className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <span className="font-bold text-sm text-white group-hover:text-red-300 transition-colors block font-heading">
                    Gmail
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono block truncate">
                    Compose email ↗
                  </span>
                </div>
              </a>

              {/* Button 2: WhatsApp Chat */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with A&H Devlo on WhatsApp (opens in a new tab)"
                className="group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-[#081726]/90 hover:bg-[#0E243A] border border-[#163554] hover:border-emerald-500/50 transition-all duration-200 min-h-[96px] cursor-pointer shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <span className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors block font-heading">
                    WhatsApp
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono block truncate">
                    Direct chat ↗
                  </span>
                </div>
              </a>

              {/* Button 3: LinkedIn Company */}
              <a
                href={CONTACT_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A&H Devlo on LinkedIn (opens official company profile in a new tab)"
                className="group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-[#081726]/90 hover:bg-[#0E243A] border border-[#163554] hover:border-sky-500/50 transition-all duration-200 min-h-[96px] cursor-pointer shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-sky-950/40 border border-sky-800/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </div>
                <div>
                  <span className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors block font-heading">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono block truncate">
                    Company page ↗
                  </span>
                </div>
              </a>

              {/* Button 4: Instagram Profile */}
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A&H Devlo on Instagram (opens in a new tab)"
                className="group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-xl bg-[#081726]/90 hover:bg-[#0E243A] border border-[#163554] hover:border-pink-500/50 transition-all duration-200 min-h-[96px] cursor-pointer shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-pink-950/40 border border-pink-800/40 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-400 transition-colors" />
                </div>
                <div>
                  <span className="font-bold text-sm text-white group-hover:text-pink-300 transition-colors block font-heading">
                    Instagram
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono block truncate" title={`@${CONTACT_CONFIG.instagramHandle}`}>
                    @{CONTACT_CONFIG.instagramHandle} ↗
                  </span>
                </div>
              </a>
            </div>

            {/* Secondary fallback mailto & Instagram DM text links */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <a
                href={getInstagramDmUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 underline underline-offset-2 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-pink-400 rounded"
                aria-label="Message A&H Devlo on Instagram Direct (opens in a new tab)"
              >
                Message us on Instagram (DM) ↗
              </a>
              <a
                href={getMailtoUrl()}
                className="hover:text-cyan-300 underline underline-offset-2 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
              >
                Not using Gmail? Default email app ↗
              </a>
            </div>

            {/* Direct Readable Copyable Contact Strip */}
            <div className="p-4 rounded-xl bg-[#081726]/80 border border-[#14304D] space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                Direct Contact Details
              </span>

              {/* Email display with one-click copy button */}
              <div className="flex items-center justify-between gap-3 text-xs sm:text-sm font-mono bg-[#040E1A] p-2.5 rounded-lg border border-[#0E243A]">
                <div className="flex items-center space-x-2.5 truncate">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href={getMailtoUrl()}
                    className="text-slate-200 hover:text-cyan-300 transition-colors truncate"
                    title={`Send email to ${CONTACT_CONFIG.email}`}
                  >
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  className="shrink-0 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#0E243A] hover:bg-[#163554] active:bg-[#1E4369] text-xs text-slate-300 hover:text-white transition-all cursor-pointer border border-[#163554] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp display with copy / direct message link */}
              <div className="flex items-center justify-between gap-3 text-xs sm:text-sm font-mono bg-[#040E1A] p-2.5 rounded-lg border border-[#0E243A]">
                <div className="flex items-center space-x-2.5 truncate">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-emerald-300 transition-colors truncate"
                    title={`Open WhatsApp chat with ${CONTACT_CONFIG.formattedWhatsapp}`}
                  >
                    {CONTACT_CONFIG.formattedWhatsapp}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy WhatsApp number to clipboard"
                  className="shrink-0 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#0E243A] hover:bg-[#163554] active:bg-[#1E4369] text-xs text-slate-300 hover:text-white transition-all cursor-pointer border border-[#163554] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instagram handle display with copy handle & DM link */}
              <div className="flex items-center justify-between gap-3 text-xs sm:text-sm font-mono bg-[#040E1A] p-2.5 rounded-lg border border-[#0E243A]">
                <div className="flex items-center space-x-2.5 truncate">
                  <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                  <a
                    href={CONTACT_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-pink-300 transition-colors truncate"
                    title={`Instagram profile @${CONTACT_CONFIG.instagramHandle}`}
                  >
                    @{CONTACT_CONFIG.instagramHandle}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyInstagram}
                  aria-label="Copy Instagram username to clipboard"
                  className="shrink-0 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#0E243A] hover:bg-[#163554] active:bg-[#1E4369] text-xs text-slate-300 hover:text-white transition-all cursor-pointer border border-[#163554] focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                >
                  {copiedInstagram ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclosures */}
        <div className="pt-8 border-t border-[#14304D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
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
