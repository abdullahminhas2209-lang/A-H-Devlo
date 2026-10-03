import React from 'react';
import { ArrowUpRight, CheckCircle2, Globe, PenTool, Route, Terminal } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProcessProps {
  onOpenInquiry: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'We align on your business model, customer journeys, target conversion actions, and sitemap requirements.',
      icon: Route,
      outcome: 'Project roadmap & scope architecture',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description:
        'We create bespoke high-fidelity layouts, typography hierarchies, and mobile previews tailored to your brand.',
      icon: PenTool,
      outcome: 'Interactive Figma review & approval',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'We write clean, high-performance code with sub-second speeds, full responsiveness, and smooth micro-interactions.',
      icon: Terminal,
      outcome: 'Production build & multi-device audit',
    },
    {
      number: '04',
      title: 'Launch & Handoff',
      description:
        'We connect your custom domain, implement essential SEO metadata, configure SSL, and verify analytics tracking.',
      icon: Globe,
      outcome: 'Live verified website deployment',
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="section-title font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
              A Disciplined Four-Stage Journey to Launch
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed max-w-2xl font-body">
              Transparent milestones, regular staging previews, and zero guesswork from initial architectural discovery to final verified deployment.
            </p>
          </div>
        </ScrollReveal>

        {/* Connected Step Tracker (Horizontal on desktop / Vertical on mobile) */}
        <div className="relative">
          {/* Desktop Connecting Hairline Line */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[5%] right-[5%] h-px bg-[var(--border-subtle)] -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={step.number} delayMs={index * 100}>
                  <div
                    className="relative p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] backdrop-blur-md transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      {/* Step Indicator Header with Icon & Counter */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#0B3B61]/40 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-blue)] group-hover:scale-105 transition-transform shadow">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--color-heading)] transition-colors">
                          STAGE {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[var(--color-heading)] tracking-tight mb-2 group-hover:text-cyan-200 transition-colors font-heading">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-body">
                        {step.description}
                      </p>
                    </div>

                    {/* Outcome Box */}
                    <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex items-start gap-2 text-xs text-[var(--text-body)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs font-sans font-medium leading-snug">{step.outcome}</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <ScrollReveal delayMs={200}>
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--accent-blue)] hover:text-white transition-colors cursor-pointer group"
            >
              <span>Ready to begin? Let&apos;s map out your timeline</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Process;
