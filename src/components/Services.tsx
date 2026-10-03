import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Code2, Compass, RefreshCw } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  onOpenInquiry: (serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const serviceList = [
    {
      number: '01',
      title: 'Custom Web Development',
      icon: Code2,
      summary:
        'High performance, responsive, scalable code engineered from scratch to establish instant market authority.',
      features: [
        'Bespoke visual architecture (zero cookie-cutter templates)',
        'Responsive mobile, tablet & desktop development',
        'Built for Core Web Vitals and lightning load speeds',
        'Integrated lead capture forms & booking systems',
        'Clean, accessible, semantic code structure',
      ],
      turnaround: 'Delivered in 10–20 business days',
    },
    {
      number: '02',
      title: 'Conversion Landing Pages',
      icon: Compass,
      summary:
        'Focused, high-impact pages designed around a single campaign, product launch, or qualified lead generation goal.',
      features: [
        'Conversion-optimized visual hierarchy & message pacing',
        'Attention-grabbing hero sections with friction-free CTAs',
        'Mobile-first responsive UX optimized for paid campaigns',
        'Social proof, client testimonials & trust architectures',
        'Sub-second initial load speeds with zero bloat',
      ],
      turnaround: 'Delivered in 5–10 business days',
    },
    {
      number: '03',
      title: 'UI/UX Redesign & Optimization',
      icon: RefreshCw,
      summary:
        'Modernizing outdated websites into sleek, professional digital storefronts that win client trust.',
      features: [
        'Complete visual & typographic overhaul',
        'Streamlined user journeys and navigation pathways',
        'Mobile optimization pass eliminating viewport bugs',
        'Modern design tokens, micro-interactions & feedback states',
        'SEO preservation & smooth DNS migration assistance',
      ],
      turnaround: 'Delivered in 7–14 business days',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-3 sm:space-y-4">
            <h2 className="section-title font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
              Capabilities &amp; Studio Offerings
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed max-w-2xl font-body">
              We architect custom digital platforms and high-converting landing pages tailored to elevate commercial positioning, build trust, and drive client acquisition.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Primary Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceList.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.number} delayMs={index * 120}>
                <div
                  className="group relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-md hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 h-full"
                >
                  <div className="space-y-5">
                    {/* Top: Custom Icon Badge & Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#0B3B61]/40 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--color-heading)] group-hover:text-[var(--accent-blue)] group-hover:border-[var(--accent-blue)]/50 transition-colors shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title & Summary */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-heading)] tracking-tight group-hover:text-cyan-200 transition-colors font-heading">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-body)] leading-relaxed font-body">
                        {service.summary}
                      </p>
                    </div>

                    {/* Feature Checklist with CheckCircle2 */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] block">
                        What&apos;s Included
                      </span>
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-sm text-[var(--text-body)] font-body">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue)] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Turnaround Time Pill */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00141F]/80 border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-body)] font-medium">
                        <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{service.turnaround}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="pt-6">
                    <button
                      onClick={() => onOpenInquiry(service.title)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-full bg-[#0B3B61]/40 hover:bg-[var(--accent-blue)] text-[var(--color-heading)] hover:text-white text-xs sm:text-sm font-semibold border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] transition-all duration-200 cursor-pointer shadow group-hover:shadow-md active:scale-95 font-heading"
                    >
                      <span>Inquire About This</span>
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

export default Services;
