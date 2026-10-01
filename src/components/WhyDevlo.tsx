import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyDevlo: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Clean by design',
      description:
        'We focus on clarity, hierarchy and purposeful design instead of unnecessary visual clutter. Your visitors should never struggle to understand what you do or how to take the next step.',
      takeaway: 'Clarity drives trust and action.',
    },
    {
      number: '02',
      title: 'Built around your business',
      description:
        'Every website is designed around your brand, audience and goals. We do not force your business into generic pre-made templates that look like hundreds of other competitors.',
      takeaway: 'Custom tailored, zero cookie-cutter templates.',
    },
    {
      number: '03',
      title: 'Professional from the first click',
      description:
        'Your website should give potential customers confidence before they ever contact you. High-grade typography, thoughtful spacing, and responsive speed communicate quality instantly.',
      takeaway: 'First impressions determine customer trust.',
    },
    {
      number: '04',
      title: 'Responsive everywhere',
      description:
        'Your website should look and work properly across desktop, tablet and mobile. More than 65% of your customers visit on mobile devices—we ensure their experience is flawless.',
      takeaway: 'Pixel-perfect across all screen sizes.',
    },
  ];

  return (
    <section id="why" className="py-24 md:py-36 bg-[#030B14] relative">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Top Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>03 / OUR PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Why work with A&amp;H Devlo?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed font-body">
              We operate with a clear philosophy: no generic agency bloat, no confusing jargon, and no shortcuts. Just thoughtful design and reliable execution.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.number} delayMs={index * 80}>
              <div
                className="relative p-8 sm:p-10 rounded-2xl bg-[#081726]/80 border border-[#14304D] hover:border-cyan-500/40 hover:bg-[#0C1F35]/90 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tracking-tighter">
                      {principle.number}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      Standard of Craft
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-cyan-300 transition-colors font-heading">
                    {principle.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#14304D]/60 flex items-center space-x-2 text-xs font-medium text-slate-400">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{principle.takeaway}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
