import React from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  FileCheck,
  Globe,
  PenTool,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProcessProps {
  onOpenInquiry: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Fixed Scope',
      description:
        'We discuss your business, goals, and what your customers need. You receive a clear, fixed quote with agreed milestones and zero hidden fees.',
      icon: Compass,
      outcome: 'Clear project brief & flat quote',
    },
    {
      number: '02',
      title: 'Design & Visual Direction',
      description:
        'We craft bespoke layouts, typography, and visual brand assets. You review interactive design previews and give feedback directly.',
      icon: PenTool,
      outcome: 'Interactive preview & design sign-off',
    },
    {
      number: '03',
      title: 'Bespoke Build & Device Testing',
      description:
        'We build your site with clean, modern code and test it across mobile, tablet, and desktop screens for instant loading and responsive fluid behavior.',
      icon: Smartphone,
      outcome: 'Staging preview on all devices',
    },
    {
      number: '04',
      title: 'Launch & 100% Full Ownership',
      description:
        'We connect your domain, configure basic SEO, verify contact forms, and hand over all source code, logos, and design assets. You own everything.',
      icon: Globe,
      outcome: 'Live launch + complete file handoff',
    },
  ];

  const studioStandards = [
    {
      icon: Users,
      title: 'Direct Founder Access',
      text: 'You work directly with the two people designing and building your site. Zero account managers, fast replies, and clear communication.',
    },
    {
      icon: Zap,
      title: 'Fast & Mobile-First',
      text: 'Every layout is designed for real phones first, with quick load times and clean navigation that never frustrates customers.',
    },
    {
      icon: FileCheck,
      title: 'Predictable Flat Quotes',
      text: 'Milestone deliveries and clear flat project rates. You always know the exact scope and cost upfront with zero surprises.',
    },
    {
      icon: ShieldCheck,
      title: '100% Complete Ownership',
      text: 'All custom code, vector logos, and design files belong entirely to you upon completion. No vendor lock-in or recurring platform fees.',
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                Studio Workflow
              </span>
            </div>
            <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
              How the Studio <span className="text-[#D0FE1D]">Works</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
              A transparent, four-stage process with zero agency runaround. From first conversation to live launch and complete asset handoff.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Stage Connected Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <ScrollReveal key={step.number} delayMs={index * 80}>
                <div className="relative p-6 sm:p-7 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-xl hover:-translate-y-1">
                  
                  <div className="space-y-4">
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#0B3B61]/40 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-blue)] group-hover:scale-105 transition-transform shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-lime)]">
                        STAGE {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--color-heading)] tracking-tight group-hover:text-cyan-200 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>

                  {/* Outcome pill */}
                  <div className="mt-6 pt-3.5 border-t border-[var(--border-subtle)] flex items-start gap-2 text-xs text-[var(--text-body)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-sans font-medium text-[var(--color-heading)]">{step.outcome}</span>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Studio Standards Strip (Merged & Shortened from WhyDevlo, avoiding repetition) */}
        <ScrollReveal delayMs={150}>
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-[var(--border-subtle)] bg-[#00141F]/90 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border-subtle)]">
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--color-heading)] tracking-tight">
                  The Studio Standards
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-sans">
                  The principles that keep our projects on time, transparent, and hassle-free.
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--accent-blue)] font-semibold self-start sm:self-auto">
                No Middlemen · No Hidden Costs
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studioStandards.map((std, i) => {
                const StdIcon = std.icon;
                return (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <StdIcon className="w-4 h-4 text-[var(--accent-lime)] shrink-0" />
                      <h4 className="font-heading font-bold text-sm text-[var(--color-heading)]">
                        {std.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed font-body">
                      {std.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Process CTA Button */}
        <ScrollReveal delayMs={200}>
          <div className="text-center">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--accent-lime)] hover:text-white transition-colors cursor-pointer group font-heading"
            >
              <span>Have a project timeline in mind? Let&apos;s discuss</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Process;
