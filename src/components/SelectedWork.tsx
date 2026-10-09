import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectData } from '../types';
import { BrowserMockup } from './BrowserMockup';
import { ScrollReveal } from './ScrollReveal';

interface SelectedWorkProps {
  projects: ProjectData[];
  onSelectProject: (projectId: string) => void;
  onOpenInquiry?: (serviceType?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onSelectProject,
}) => {
  const osteria = projects.find((p) => p.id === 'osteria-riva') || projects[0];
  const maison = projects.find((p) => p.id === 'maison-forme') || projects[1];
  const apex = projects.find((p) => p.id === 'apex-athletic-lab') || projects[2];
  const vanguard = projects.find((p) => p.id === 'vanguard-advisory') || projects[3];

  return (
    <section id="work" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[var(--border-subtle)]">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
                  Portfolio &amp; Case Studies
                </span>
              </div>
              <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
                Selected Work &amp; <span className="text-[#D0FE1D]">Concepts</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
                Carefully crafted website concepts designed for dining rooms, fashion houses, fitness studios, and corporate practices.
              </p>
            </div>

            {/* Honest Disclosure Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#021F33]/60 border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] self-start md:self-auto font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span>Studio concept prototypes designed to demonstrate real-world craft.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 1. Flagship Hero Feature: Osteria Riva (Wide Editorial Spread) */}
        {osteria && (
          <ScrollReveal>
            <div
              data-project-id={osteria.id}
              onClick={() => onSelectProject(osteria.id)}
              className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left (7 cols): Large Browser Mockup Preview */}
                <div className="lg:col-span-7">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    <BrowserMockup
                      imageSrc={osteria.image}
                      title={osteria.title}
                      urlPreview={osteria.urlPreview}
                      accentColor={osteria.accentColor}
                    />
                  </div>
                </div>

                {/* Right (5 cols): Editorial Story, Metadata, Direct Trigger */}
                <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-[var(--accent-blue)] uppercase tracking-wider font-mono">
                        {osteria.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono uppercase font-semibold">
                        Concept Prototype
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--color-heading)] tracking-tight group-hover:text-cyan-200 transition-colors">
                      {osteria.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed font-body">
                      {osteria.overview}
                    </p>

                    <div className="p-4 rounded-xl bg-[#00141F]/80 border border-[var(--border-subtle)] space-y-1.5">
                      <span className="text-[11px] font-mono text-[var(--accent-lime)] font-semibold uppercase tracking-wider block">
                        Commercial Solution
                      </span>
                      <p className="text-xs text-[var(--text-body)] leading-relaxed font-sans">
                        Replaced frustrating PDF menu downloads with an instant, mobile-friendly digital menu and a direct two-step table reservation drawer.
                      </p>
                    </div>

                    {/* Deliverables tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {osteria.services.map((svc) => (
                        <span
                          key={svc}
                          className="px-2.5 py-1 rounded-md bg-[#0B3B61]/30 border border-[var(--border-subtle)] text-[11px] font-sans text-[var(--text-body)] font-medium"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Trigger */}
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      Completed 2025 · Custom UI
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent-lime)] group-hover:translate-x-0.5 transition-transform font-heading">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 2 & 3: Asymmetric Editorial Duo (Maison Forme + Apex Athletic Lab) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Maison Forme (7 cols) - Clean Fashion Atelier */}
          {maison && (
            <ScrollReveal delayMs={100} className="lg:col-span-7 flex">
              <div
                data-project-id={maison.id}
                onClick={() => onSelectProject(maison.id)}
                className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 cursor-pointer w-full"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[var(--accent-blue)] uppercase tracking-wider font-mono">
                      {maison.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono uppercase font-semibold">
                      Concept Prototype
                    </span>
                  </div>

                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    <BrowserMockup
                      imageSrc={maison.image}
                      title={maison.title}
                      urlPreview={maison.urlPreview}
                      accentColor={maison.accentColor}
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl text-[var(--color-heading)] tracking-tight group-hover:text-cyan-200 transition-colors">
                      {maison.title}
                    </h3>
                    <p className="text-sm text-[var(--text-body)] leading-relaxed font-body">
                      {maison.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {maison.services.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#0B3B61]/30 border border-[var(--border-subtle)] text-[11px] font-sans text-[var(--text-body)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    E-Commerce &amp; Editorial Lookbook
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-heading)] group-hover:text-[var(--accent-lime)] transition-colors font-heading">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Right: Apex Athletic Lab (5 cols) - Focused Athletic Studio */}
          {apex && (
            <ScrollReveal delayMs={150} className="lg:col-span-5 flex">
              <div
                data-project-id={apex.id}
                onClick={() => onSelectProject(apex.id)}
                className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 cursor-pointer w-full"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                      {apex.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono uppercase font-semibold">
                      Concept Prototype
                    </span>
                  </div>

                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    <BrowserMockup
                      imageSrc={apex.image}
                      title={apex.title}
                      urlPreview={apex.urlPreview}
                      accentColor={apex.accentColor}
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl text-[var(--color-heading)] tracking-tight group-hover:text-cyan-200 transition-colors">
                      {apex.title}
                    </h3>
                    <p className="text-sm text-[var(--text-body)] leading-relaxed font-body">
                      {apex.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#00141F]/80 border border-[var(--border-subtle)] text-xs text-[var(--text-body)]">
                    <span className="font-semibold text-emerald-400 block mb-0.5">Key Feature</span>
                    Interactive weekly class timetable paired with an instant one-tap trial pass funnel.
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    High-Impact Landing Page
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-heading)] group-hover:text-[var(--accent-lime)] transition-colors font-heading">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}

        </div>

        {/* 4. Vanguard Advisory (Clean Architectural Feature Strip) */}
        {vanguard && (
          <ScrollReveal delayMs={200}>
            <div
              data-project-id={vanguard.id}
              onClick={() => onSelectProject(vanguard.id)}
              className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left (5 cols): Corporate Positioning & Decision Highlights */}
                <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[var(--accent-blue)] uppercase tracking-wider font-mono">
                      {vanguard.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono uppercase font-semibold">
                      Concept Prototype
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--color-heading)] tracking-tight group-hover:text-cyan-200 transition-colors">
                    {vanguard.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed font-body">
                    {vanguard.overview}
                  </p>

                  <div className="p-4 rounded-xl bg-[#00141F]/80 border border-[var(--border-subtle)] space-y-1">
                    <span className="text-[11px] font-mono text-cyan-300 font-semibold uppercase tracking-wider block">
                      Information Architecture
                    </span>
                    <p className="text-xs text-[var(--text-body)] leading-relaxed font-sans">
                      Modular advisory practice breakdown (M&amp;A, Capital Markets) paired with a confidential consultation intake interface.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      Corporate Website Design
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent-lime)] group-hover:translate-x-0.5 transition-transform font-heading">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Right (7 cols): Mockup Viewport */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    <BrowserMockup
                      imageSrc={vanguard.image}
                      title={vanguard.title}
                      urlPreview={vanguard.urlPreview}
                      accentColor={vanguard.accentColor}
                    />
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};

export default SelectedWork;
