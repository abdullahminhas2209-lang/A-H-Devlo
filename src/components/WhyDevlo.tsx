import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyDevlo: React.FC = () => {
  const differentiators = [
    {
      number: '01',
      title: 'Direct Founder Collaboration',
      description:
        'You work directly with the senior engineers and designers building your website. Zero junior handoffs, no middle-management bloat, and fast feedback loops.',
      takeaway: 'Direct access to senior craft',
    },
    {
      number: '02',
      title: 'Engineered for Speed',
      description:
        'Every line of code is optimized for Core Web Vitals, ultra-fast initial render, and smooth mobile response. Fast websites rank higher and convert better.',
      takeaway: 'Sub-second page speeds',
    },
    {
      number: '03',
      title: 'Transparent Pricing',
      description:
        'Clear upfront milestones, guaranteed scope delivery, and flat project rates. Zero surprise fees, no hidden maintenance lock-ins, and 100% IP ownership.',
      takeaway: 'Predictable flat investment',
    },
    {
      number: '04',
      title: 'Conversion-Focused Architecture',
      description:
        'We do not just make sites look beautiful—we engineer the information hierarchy and customer journey to guide visitors toward booking, calling, or inquiring.',
      takeaway: 'Built to turn visitors into clients',
    },
  ];

  return (
    <section id="why" className="py-16 md:py-24 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[#021F33]/70 text-xs font-semibold tracking-widest text-[var(--accent-blue)] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] inline-block shadow-[0_0_8px_var(--accent-blue)]"></span>
              <span>WHY WORK WITH US</span>
            </div>
            <h2 className="section-title font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
              Built on clarity, speed, and craft.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed max-w-2xl font-body">
              We operate with a simple philosophy: no generic agency bloat, no confusing jargon, and no shortcuts. Just thoughtful design and reliable execution.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Item Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.number} delayMs={index * 80}>
              <div
                className="relative p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] backdrop-blur-md transition-all duration-300 group flex flex-col justify-between h-full shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top: Mono Number Counter */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold text-[var(--accent-blue)] font-mono tracking-tight">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      Standard
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-heading)] tracking-tight mb-2.5 group-hover:text-cyan-200 transition-colors font-heading leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[var(--text-body)] text-xs sm:text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-medium text-[var(--text-body)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{item.takeaway}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDevlo;
