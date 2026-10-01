import React from 'react';
import { SectionTransition } from './SectionTransition';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      quote:
        '[ADD REAL CLIENT QUOTE 1 — Provide a 2–3 sentence statement from an actual client describing your delivery speed, communication, or the impact on their business.]',
      client: '[Client Name]',
      business: '[Business Name / Practice]',
      service: 'Business Website',
    },
    {
      id: 2,
      quote:
        '[ADD REAL CLIENT QUOTE 2 — Provide a second real quote regarding mobile performance, design quality, or ease of working directly with Abdullah & Hamza.]',
      client: '[Client Name]',
      business: '[Business Name / Practice]',
      service: 'Landing Page',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0C0D0E]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-14">
        <SectionTransition>
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Client References</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#F4F2ED] leading-tight font-heading">
            Grounded feedback from business owners.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9298] font-body leading-relaxed">
            We never publish fabricated five-star widgets or stock testimonials. Real client references and portfolio code audits are available directly upon inquiry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-xl bg-[#141618] border border-[#22252A] space-y-6 flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base text-[#F4F2ED] leading-relaxed font-body italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-[#22252A] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#F4F2ED] block font-heading">
                    {item.client}
                  </span>
                  <span className="text-[#8E9298] font-body block mt-0.5">
                    {item.business}
                  </span>
                </div>
                <span className="font-mono text-[#8E9298] uppercase">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>
        </SectionTransition>
      </div>
    </section>
  );
};
