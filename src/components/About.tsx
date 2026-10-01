import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionTransition } from './SectionTransition';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const founders = [
    {
      name: 'Abdullah Minhas',
      role: 'Co-Founder · Design & Front-End Engineering',
      bio: 'Focuses on visual design systems, typographic hierarchy, responsive layouts, and performance optimization. Ensures every site communicates clearly and looks distinctive across all viewports.',
      photoPlaceholder: '[ADD PHOTO — ABDULLAH]',
    },
    {
      name: 'Hamza',
      role: 'Co-Founder · Technical Architecture & Lead Systems',
      bio: 'Focuses on semantic code structure, lead capture integrations, hosting configuration, SEO fundamentals, and cross-browser reliability.',
      photoPlaceholder: '[ADD PHOTO — HAMZA]',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0C0D0E] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16 sm:space-y-20">
        <SectionTransition>
        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>About the Studio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#F4F2ED] leading-tight font-heading">
              Two founders. No middlemen. Direct craft.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#8E9298] text-base sm:text-lg font-body leading-relaxed">
            <p>
              We started A&amp;H Devlo because small business owners deserve websites that actually convert and look sharp, without navigating layers of account managers, bloated agency retainers, or cheap templates that break after three months.
            </p>
            <p className="text-sm sm:text-base">
              When you hire us, you work directly with both of us from the initial discovery call to the final DNS launch. Every layout is drawn for your brand, every component is written with clean code, and all project assets are 100% owned by your business.
            </p>
          </div>
        </div>

        {/* Founders Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#22252A] pt-12">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="p-6 sm:p-8 rounded-xl bg-[#141618] border border-[#22252A] space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Photo Placeholder Box */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border border-[#22252A] bg-[#181A1D] flex items-center justify-center text-center p-2">
                  <span className="text-[10px] font-mono text-[#8E9298] uppercase tracking-wider leading-tight">
                    {founder.photoPlaceholder}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F2ED] tracking-tight font-heading">
                    {founder.name}
                  </h3>
                  <span className="text-xs text-[#8E9298] font-mono block mt-1">
                    {founder.role}
                  </span>
                </div>

                <p className="text-sm text-[#8E9298] font-body leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#22252A] text-xs text-[#8E9298] font-mono">
                Direct client point of contact
              </div>
            </div>
          ))}
        </div>

        {/* Bottom studio promise */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#141618] border border-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E9298] block mb-1">
              Studio Operating Model
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#F4F2ED] font-heading">
              We take on a maximum of two client projects at any given time to protect attention and delivery speed.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer"
          >
            <span>Check current availability</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
        </SectionTransition>
      </div>
    </section>
  );
};
