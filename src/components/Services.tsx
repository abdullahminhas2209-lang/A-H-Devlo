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
    <section id="services" className="py-24 md:py-36 bg-[#030B14] relative scroll-mt-24 sm:scroll-mt-28">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>02 / WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Everything your business needs to look professional online.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed font-body">
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
                  className="group relative rounded-2xl bg-[#081726]/90 border border-[#14304D] hover:border-cyan-500/50 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-950/40 h-full"
                >
                  <div className="space-y-6">
                    {/* Top Bar: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-cyan-400">
                        {service.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0E243A] border border-[#163352] flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-colors shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors font-heading">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal font-body">
                        {service.summary}
                      </p>
                    </div>

                    {/* Feature Checklist */}
                    <div className="pt-4 border-t border-[#14304D] space-y-2.5">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                        Key Deliverables
                      </span>
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For Note */}
                    <div className="pt-3 text-[11px] text-slate-300 bg-[#040E1A] p-3.5 rounded-xl border border-[#0E243A]">
                      <span className="text-cyan-300 font-semibold">Best For: </span>
                      {service.idealFor}
                    </div>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="pt-8">
                    <button
                      onClick={() => onOpenInquiry(service.title)}
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#0E243A] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold border border-[#163352] hover:border-blue-500 transition-all duration-200 cursor-pointer shadow group-hover:shadow-md"
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
