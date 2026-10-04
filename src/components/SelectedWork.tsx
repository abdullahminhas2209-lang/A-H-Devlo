import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { ProjectData } from '../types';
import { BrowserMockup } from './BrowserMockup';
import { ScrollReveal } from './ScrollReveal';

interface SelectedWorkProps {
  projects: ProjectData[];
  onSelectProject: (projectId: string) => void;
  onOpenInquiry?: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onSelectProject,
}) => {
  return (
    <section id="work" className="py-16 md:py-24 bg-transparent relative scroll-mt-20">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-3 sm:space-y-4">
            <h2 className="section-title font-extrabold tracking-tight text-[var(--color-heading)] leading-tight font-heading">
              Selected <span className="text-[#D0FE1D]">Work</span> &amp; Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed max-w-2xl font-body">
              A curated selection of studio concept architectures and conversion-engineered digital flagships by A&amp;H Devlo Studio.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            return (
              <ScrollReveal key={project.id} delayMs={index * 100}>
                <div
                  onClick={() => onSelectProject(project.id)}
                  className="group relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col cursor-pointer h-full backdrop-blur-md"
                >
                  {/* Media Wrapper with 16:10 aspect ratio */}
                  <div className="relative p-3 sm:p-4 bg-[#00141F]/80 border-b border-[var(--border-subtle)] overflow-hidden">
                    <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                      <BrowserMockup
                        imageSrc={project.image}
                        title={project.title}
                        urlPreview={project.urlPreview}
                        accentColor={project.accentColor}
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      {/* Top Meta: Category Tag & Live Preview Pill */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[var(--accent-blue)] uppercase tracking-wider">
                            {project.category}
                          </span>
                          {project.isConcept && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono uppercase tracking-wider font-semibold">
                              CONCEPT
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] group-hover:text-[var(--color-heading)] transition-colors">
                          <span>Case Study</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-heading)] tracking-tight group-hover:text-cyan-200 transition-colors font-heading">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[var(--text-body)] leading-relaxed font-body line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Bullet Tags & Quick View Action */}
                    <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-[#0B3B61]/30 border border-[var(--border-subtle)] text-[var(--text-body)] text-xs font-mono uppercase tracking-wider font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-semibold text-[var(--color-heading)] group-hover:translate-x-0.5 transition-transform shrink-0 flex items-center gap-1">
                        <span>Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                      </span>
                    </div>
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

export default SelectedWork;
