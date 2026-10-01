import React from 'react';
import { SectionTransition } from './SectionTransition';

export const WhyDevlo: React.FC = () => {
  const commitments = [
    {
      index: '01',
      title: 'Direct Founder Communication',
      description:
        'You work directly with the two people designing and building your website. No account managers, middle layers, or junior interns. Questions are answered directly, feedback is applied accurately, and decisions happen fast.',
    },
    {
      index: '02',
      title: 'Custom Architecture, Zero Templates',
      description:
        'We design every layout from scratch around your brand, customer journey, and specific services. Your business will never be squeezed into a generic WordPress or Webflow template shared with hundreds of competitors.',
    },
    {
      index: '03',
      title: 'Fast Loading & Mobile-Tested',
      description:
        'Over 60% of your customers visit on their phones. We build with lightweight semantic code, modern responsive typography, and optimized images so pages load in under a second on mobile networks.',
    },
    {
      index: '04',
      title: '100% Client Ownership, Zero Lock-In',
      description:
        'When the project launches, full ownership of code, design files, domain connections, and hosting accounts is transferred to you. No proprietary builder lock-in, no monthly hostage fees.',
    },
  ];

  return (
    <section id="why" className="py-24 sm:py-32 bg-[#0C0D0E] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTransition>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Point of View (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>Studio Commitments</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#F4F2ED] leading-tight font-heading">
              Why small businesses work directly with us.
            </h2>

            <p className="text-base text-[#8E9298] font-body leading-relaxed">
              Most agency experiences are bogged down by layers of meetings, slow communication, and marked-up invoices. We operate as a lean two-person studio where craft, speed, and honest execution come first.
            </p>
          </div>

          {/* Right Column: 4 Numbered Commitments with Hairline Dividers (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#22252A] border-t lg:border-t-0 border-b border-[#22252A]">
            {commitments.map((item) => (
              <div key={item.index} className="py-8 sm:py-10 space-y-3">
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-mono text-[#8E9298]">
                    {item.index}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F2ED] tracking-tight font-heading">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#8E9298] font-body leading-relaxed pl-8 sm:pl-9">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </SectionTransition>
      </div>
    </section>
  );
};
