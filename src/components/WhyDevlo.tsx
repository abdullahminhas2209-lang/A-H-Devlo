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
    <section id="why" className="py-24 md:py-36 bg-transparent relative">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Top Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
            <div className="flex items-center space-x-2.5 text-xs font-mono font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] inline-block shrink-0 shadow-[0_0_8px_var(--accent-blue)]"></span>
              <span>03 / OUR PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
              Why work with A&amp;H Devlo?
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-body)] font-normal leading-relaxed font-body">
              We operate with a clear philosophy: no generic agency bloat, no confusing jargon, and no shortcuts. Just thoughtful design and reliable execution.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.number} delayMs={index * 80}>
              <div
                className="relative p-8 sm:p-10 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] backdrop-blur-md transition-all duration-300 group flex flex-col justify-between h-full shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-blue)] font-mono tracking-tighter">
                      {principle.number}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                      Standard of Craft
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)] tracking-tight mb-4 group-hover:text-white transition-colors font-heading">
                    {principle.title}
                  </h3>

                  <p className="text-[var(--text-body)] text-sm sm:text-base leading-relaxed font-body">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center space-x-2 text-xs font-medium text-[var(--text-muted)]">
                  <Check className="w-4 h-4 text-[var(--accent-blue)] shrink-0" />
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
