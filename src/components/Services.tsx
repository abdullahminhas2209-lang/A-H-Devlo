import React from 'react';
import { ArrowUpRight, Check, Compass, Layout, RefreshCw } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  onOpenInquiry: (serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const serviceList = [
    {
      number: '01',
      title: 'Business Websites',
      icon: Layout,
      summary:
        'Professional websites designed to establish credibility and clearly communicate what your business offers.',
      features: [
        'Custom bespoke design (no templates)',
        'Responsive mobile, tablet & desktop development',
        'Business-focused architecture & copywriting structure',
        'Contact & customer inquiry functionality',
        'Modern interactions & fluid micro-animations',
      ],
      idealFor: 'Small businesses, practices, local establishments, & consultancy firms.',
    },
    {
      number: '02',
      title: 'Landing Pages',
      icon: Compass,
      summary:
        'Focused pages designed around a specific product, service, campaign or business goal.',
      features: [
        'Conversion-focused layout & message pacing',
        'Strong visual hierarchy guiding user attention',
        'Fully responsive design optimized for paid traffic',
        'Clear, unmissable calls-to-action (forms/calls/chat)',
        'Fast-loading assets & zero script bloat',
      ],
      idealFor: 'Promotional campaigns, product launches, service offers, & lead capture.',
    },
    {
      number: '03',
      title: 'Website Redesigns',
      icon: RefreshCw,
      summary:
        'Transform an outdated website into a modern and professional digital presence.',
      features: [
        'Complete visual redesign aligned with modern standards',
        'Better content hierarchy & streamlined navigation',
        'Responsive improvements for modern smartphones',
        'Modern UI systems & typography overhaul',
        'Performance-focused development & clean code structure',
      ],
      idealFor: 'Businesses whose current website looks dated, slow, or broken on mobile.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 bg-transparent relative">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
            <div className="flex items-center space-x-2.5 text-xs font-mono font-semibold tracking-[0.2em] text-[var(--text-muted)] uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] inline-block shrink-0 shadow-[0_0_8px_var(--accent-blue)]"></span>
              <span>02 / WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
              Everything your business needs to look professional online.
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-body)] font-normal leading-relaxed font-body">
              We focus on clean, high-impact web design and development that helps small businesses establish credibility, communicate value, and win client trust.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Primary Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.number} delayMs={index * 120}>
                <div
                  className="group relative rounded-2xl bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] backdrop-blur-md p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_40px_rgba(0,10,25,0.7)] h-full"
                >
                  <div className="space-y-6">
                    {/* Top Bar: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-[var(--accent-blue)]">
                        {service.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0E243A]/80 border border-[var(--border-subtle)] flex items-center justify-center text-slate-300 group-hover:text-[var(--color-heading)] group-hover:border-[var(--accent-blue)]/50 transition-colors shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--color-heading)] tracking-tight group-hover:text-white transition-colors font-heading">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-[var(--text-body)] leading-relaxed font-normal font-body">
                        {service.summary}
                      </p>
                    </div>

                    {/* Feature Checklist */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] block">
                        Key Deliverables
                      </span>
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-[var(--text-body)]">
                          <Check className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For Note */}
                    <div className="pt-3 text-[11px] text-[var(--text-body)] bg-[var(--bg-mid)]/60 p-3.5 rounded-xl border border-[var(--border-subtle)]">
                      <span className="text-[var(--color-heading)] font-semibold">Best For: </span>
                      {service.idealFor}
                    </div>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="pt-8">
                    <button
                      onClick={() => onOpenInquiry(service.title)}
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#0E243A]/80 hover:bg-[var(--accent-blue)] text-white text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] transition-all duration-200 cursor-pointer shadow group-hover:shadow-md"
                    >
                      <span>Let&apos;s build yours</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
