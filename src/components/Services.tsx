import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionTransition } from './SectionTransition';

interface ServicesProps {
  onOpenInquiry: (serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const serviceList = [
    {
      number: '01',
      title: 'Business Websites',
      timeline: '2–3 weeks',
      price: 'From $1,200',
      description:
        'Bespoke multi-page websites built from scratch around your brand and business goals. Designed to communicate what you do clearly and turn casual visitors into paying clients.',
      deliverables: [
        'Custom visual design (zero pre-made templates)',
        'Responsive layout for desktop, tablet, and mobile',
        'Lead capture form with spam protection',
        'Essential SEO metadata, Open Graph, and sitemap',
        'Direct DNS configuration and domain launch',
      ],
      idealFor: 'Small businesses, professional practices, clinics, and independent consultants.',
    },
    {
      number: '02',
      title: 'Landing Pages',
      timeline: '5–7 business days',
      price: 'From $650',
      description:
        'Single-page websites focused on a specific offer, campaign, or product. Structured for quick reading, fast loading, and direct inquiry or booking conversion.',
      deliverables: [
        'High-impact visual storytelling',
        'Focused conversion hierarchy (forms, WhatsApp, or booking links)',
        'Sub-second load times with zero script bloat',
        'Optimized for mobile traffic and ad campaigns',
      ],
      idealFor: 'Service launches, promotional campaigns, and targeted marketing pushes.',
    },
    {
      number: '03',
      title: 'Website Rebuilds',
      timeline: '2–3 weeks',
      price: 'From $1,200',
      description:
        'Complete overhaul of slow, outdated, or template-bloated websites. We rewrite everything in modern semantic code to fix layout bugs and boost mobile performance.',
      deliverables: [
        'Modern visual redesign preserving existing brand equity',
        'Performance upgrade targeting 95+ mobile scores',
        'Mobile navigation and touch target overhaul',
        'Full asset and codebase handover with zero lock-in',
      ],
      idealFor: 'Established businesses whose current site looks dated or performs poorly on mobile.',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0C0D0E] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTransition>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Services &amp; Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#F4F2ED] leading-tight font-heading">
            Fixed scopes, transparent timelines, zero surprise hourly bills.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9298] font-body leading-relaxed">
            Every tier includes bespoke design, responsive engineering, SEO setup, and post-launch support. You work directly with Abdullah and Hamza from kickoff to delivery.
          </p>
        </div>

        {/* Architectural Services Table / List (Not 3 identical cards) */}
        <div className="border-t border-[#22252A] divide-y divide-[#22252A]">
          {serviceList.map((service) => (
            <div
              key={service.number}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-colors hover:bg-[#141618]/30 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
            >
              {/* Column 1: Index & Title (4 cols) */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-mono text-[#8E9298]">
                  {service.number} / SERVICE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F2ED] tracking-tight font-heading">
                  {service.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="text-xs font-body px-2.5 py-1 rounded bg-[#181A1D] border border-[#22252A] text-[#F4F2ED]">
                    {service.timeline}
                  </span>
                  <span className="text-xs font-body font-semibold px-2.5 py-1 rounded bg-[#181A1D] border border-[#22252A] text-[#2563EB]">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Column 2: Description & Deliverables (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <p className="text-sm sm:text-base text-[#8E9298] font-body leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F4F2ED] block font-semibold">
                    What we deliver:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#8E9298] font-body">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#2563EB] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-[#8E9298] pt-1 font-body">
                  <strong className="text-[#F4F2ED]">Best for: </strong>
                  {service.idealFor}
                </p>
              </div>

              {/* Column 3: Action (3 cols) */}
              <div className="lg:col-span-3 lg:flex lg:justify-end pt-2 lg:pt-0">
                <button
                  onClick={() => onOpenInquiry(service.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full border border-[#22252A] hover:border-[#F4F2ED] bg-[#141618] hover:bg-[#F4F2ED] text-[#F4F2ED] hover:text-[#0C0D0E] text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            </div>
          ))}
        </div>
        </SectionTransition>
      </div>
    </section>
  );
};
