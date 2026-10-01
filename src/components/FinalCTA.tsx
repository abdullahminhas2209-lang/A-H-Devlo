import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/contact';
import { WhatsAppIcon, InstagramIcon } from './icons';

interface FinalCTAProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0D0E] border-t border-[#22252A] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Start a Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#F4F2ED] leading-[1.08] font-heading max-w-2xl mx-auto">
            Ready to build a website that does your business justice?
          </h2>

          <p className="text-base sm:text-lg text-[#8E9298] max-w-xl mx-auto font-body leading-relaxed">
            Tell us about your business goals. We review requirements and send back fixed timeline estimates and pricing within 24 hours.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] font-semibold text-sm transition-all duration-150 shadow-sm active:scale-95 cursor-pointer font-body"
          >
            <span>Start a project inquiry</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2]" />
          </button>

          <a
            href={getWhatsAppUrl("Hi A&H Devlo, I'd like to discuss a website project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#141618] hover:bg-[#181A1D] text-[#F4F2ED] font-medium text-sm border border-[#22252A] hover:border-[#363A42] transition-colors cursor-pointer font-body"
            aria-label="Chat with A&H Devlo on WhatsApp (opens in a new tab)"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#F4F2ED]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Channels */}
        <div className="pt-8 border-t border-[#22252A] flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E9298] font-body">
          <a
            href={getMailtoUrl("Website project inquiry", "Hi A&H Devlo,\n\nI'm interested in discussing a website project for my business.\n\nBest regards,")}
            className="inline-flex items-center space-x-1.5 hover:text-[#F4F2ED] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{CONTACT_CONFIG.email}</span>
          </a>
          <span className="text-[#22252A] hidden sm:inline">•</span>
          <a
            href={CONTACT_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-[#F4F2ED] transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@{CONTACT_CONFIG.instagramHandle}</span>
          </a>
          <span className="text-[#22252A] hidden sm:inline">•</span>
          <span className="font-mono text-[#8E9298]">Typical turnaround: 2–3 weeks</span>
        </div>
      </div>
    </section>
  );
};
