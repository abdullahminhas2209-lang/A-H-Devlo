import React from 'react';
import { ChevronRight, Layers, Rocket, Search, Sliders, Wand2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProcessProps {
  onOpenInquiry: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      headline: 'We understand your business, audience and goals.',
      description:
        'We begin by analyzing your offerings, target customers, and business objectives. We map out content requirements and key conversion actions before drawing a single wireframe.',
      icon: Search,
      deliverable: 'Project scope, content blueprint & site architecture',
    },
    {
      number: '02',
      title: 'DESIGN',
      headline: 'We create the visual direction and website structure.',
      description:
        'We craft high-fidelity desktop and mobile layouts using bespoke typography, disciplined whitespace, and strong visual hierarchy tailored specifically to your brand identity.',
      icon: Wand2,
      deliverable: 'Interactive Figma design mockups & review walkthrough',
    },
    {
      number: '03',
      title: 'DEVELOP',
      headline: 'We turn the approved design into a functional website.',
      description:
        'We write clean, semantic code with ultra-fast page speeds, mobile responsiveness, and modern interactions. No bloated themes or fragile plugins.',
      icon: Layers,
      deliverable: 'Production codebase, CMS or inquiry integration',
    },
    {
      number: '04',
      title: 'REFINE',
      headline: 'We polish the details, responsiveness and interactions.',
      description:
        'We test every viewport (iPhone, iPad, laptop, ultra-wide), audit form submissions, verify touch targets, and calibrate animations for a smooth visitor experience.',
      icon: Sliders,
      deliverable: 'Cross-browser audit, speed test & client feedback pass',
    },
    {
      number: '05',
      title: 'LAUNCH',
      headline: 'Your website goes live and is ready for your customers.',
      description:
        'We connect your custom domain, implement essential SEO metadata, configure SSL certificates, and ensure everything is running at peak performance.',
      icon: Rocket,
      deliverable: 'Live website deployment, DNS handover & post-launch support',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 bg-[#030B14] relative">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>04 / HOW WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              From idea to launch.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed font-body">
              A transparent five-step process designed to keep your project on schedule, stress-free, and aligned with your business goals.
            </p>
          </div>
        </ScrollReveal>

        {/* Sequential Timeline Layout */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <ScrollReveal key={step.number} delayMs={index * 60}>
                <div
                  className="group relative rounded-2xl bg-[#081726]/80 border border-[#14304D] hover:border-cyan-500/40 hover:bg-[#0C1F35]/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-md"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Step Indicator & Icon (3 cols) */}
                    <div className="lg:col-span-3 flex items-center space-x-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">
                        {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#0C1F35] border border-[#14304D] flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase block font-semibold">
                          STAGE
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight font-heading">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Step Description & Headline (6 cols) */}
                    <div className="lg:col-span-6 space-y-2">
                      <h4 className="text-base sm:text-lg font-semibold text-slate-200 font-heading">
                        {step.headline}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed font-body">
                        {step.description}
                      </p>
                    </div>

                    {/* Key Deliverable Box (3 cols) */}
                    <div className="lg:col-span-3 bg-[#030B14]/80 p-4 rounded-xl border border-[#14304D]/80">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1 font-semibold">
                        Outcome
                      </span>
                      <p className="text-xs text-slate-300 leading-snug font-body">
                        {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Timeline Bottom CTA */}
        <ScrollReveal delayMs={200}>
          <div className="mt-12 text-center">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
            >
              <span>Have a project in mind? Let&apos;s map out your timeline</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
