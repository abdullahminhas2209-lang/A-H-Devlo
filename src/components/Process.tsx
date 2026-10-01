import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProcessProps {
  onOpenInquiry: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      step: '01',
      title: 'Blueprint & Architecture',
      duration: 'Days 1–3',
      description:
        'We review your service offerings, customer questions, and business goals. We outline the page hierarchy, call-to-action flow, and content structure before writing a single line of code.',
    },
    {
      step: '02',
      title: 'Bespoke Design & Review',
      duration: 'Days 4–8',
      description:
        'We craft custom desktop and mobile layouts tailored to your business identity. You receive an interactive walkthrough with structured feedback rounds to review and approve.',
    },
    {
      step: '03',
      title: 'Clean Engineering & Testing',
      duration: 'Days 9–14',
      description:
        'We develop the site using lightweight React and modern CSS. Every screen is tested across physical phones, tablets, and laptops to ensure sub-second load times and zero layout shifts.',
    },
    {
      step: '04',
      title: 'Domain Launch & Handover',
      duration: 'Days 15–18',
      description:
        'We connect your custom domain, verify SEO metadata and sitemaps, audit contact forms, and transfer complete code and asset ownership directly to your business.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0C0D0E] border-t border-[#22252A] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#F4F2ED] leading-tight font-heading">
            A clear 4-step process from kickoff to live launch.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9298] font-body leading-relaxed">
            No endless meetings or opaque agency handoffs. You always know exactly what phase your project is in, what is being delivered, and what comes next.
          </p>
        </div>

        {/* 4-Step Progressive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border-t border-[#22252A] pt-10">
          {steps.map((item) => (
            <div key={item.step} className="space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#22252A] pb-3">
                  <span className="text-xs font-mono text-[#8E9298]">
                    {item.step} / STEP
                  </span>
                  <span className="text-xs font-body text-[#8E9298] px-2 py-0.5 rounded bg-[#141618] border border-[#22252A]">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F4F2ED] tracking-tight font-heading">
                  {item.title}
                </h3>

                <p className="text-sm text-[#8E9298] font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct inquiry prompt */}
        <div className="mt-16 pt-8 border-t border-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[#8E9298] font-body">
            Have a target launch date in mind? We can confirm project availability within 24 hours.
          </p>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[#F4F2ED] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Discuss your timeline</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
