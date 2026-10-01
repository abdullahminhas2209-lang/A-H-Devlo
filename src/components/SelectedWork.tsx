import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectData } from '../types';
import { BrowserMockup } from './BrowserMockup';

interface SelectedWorkProps {
  projects: ProjectData[];
  onSelectProject: (projectId: string) => void;
  onOpenInquiry: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onSelectProject,
  onOpenInquiry,
}) => {
  return (
    <section id="work" className="py-24 sm:py-32 bg-[#0C0D0E] border-t border-[#22252A] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Selected Work &amp; Concepts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#F4F2ED] leading-tight font-heading">
            Design systems built for real clarity.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9298] font-body leading-relaxed">
            A selection of client templates, self-initiated design experiments, and technical benchmarks developed by A&amp;H Devlo.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="rounded-xl bg-[#141618]/50 border border-[#22252A] hover:border-[#363A42] transition-colors p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Preview Side (7 cols) */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${project.title} case breakdown`}
                    onClick={() => onSelectProject(project.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectProject(project.id);
                      }
                    }}
                    className={`lg:col-span-7 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <BrowserMockup
                      imageSrc={project.image}
                      title={project.title}
                      accentColor={project.accentColor}
                    />
                  </div>

                  {/* Project Information Side (5 cols) */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Tags & Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                          project.isConcept
                            ? 'bg-[#181A1D] border-[#22252A] text-[#8E9298]'
                            : 'bg-blue-950/40 border-blue-800/40 text-blue-400'
                        }`}
                      >
                        {project.isConcept ? 'Studio Concept' : 'Live Client Work'}
                      </span>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#181A1D] border border-[#22252A] text-[#8E9298] text-[10px] font-mono uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <div>
                      <span className="text-xs text-[#8E9298] font-mono block mb-1">
                        0{index + 1} — {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F2ED] tracking-tight font-heading">
                        <button
                          onClick={() => onSelectProject(project.id)}
                          className="text-left text-[#F4F2ED] hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:underline"
                        >
                          {project.title}
                        </button>
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#8E9298] text-sm leading-relaxed font-body">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-[#22252A]">
                      {project.highlights.slice(0, 2).map((item, hIdx) => (
                        <div key={hIdx} className="text-xs text-[#8E9298] flex items-start space-x-2">
                          <span className="text-[#F4F2ED] font-mono font-semibold">0{hIdx + 1}.</span>
                          <span>
                            <strong className="text-[#F4F2ED] font-medium">{item.title}:</strong> {item.description}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onSelectProject(project.id)}
                        aria-label={`View case breakdown: ${project.title}`}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#22252A] hover:border-[#F4F2ED] bg-[#141618] hover:bg-[#F4F2ED] text-[#F4F2ED] hover:text-[#0C0D0E] text-xs font-semibold transition-all duration-150 cursor-pointer"
                      >
                        <span>View case breakdown</span>
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-xl bg-[#141618] border border-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-[#F4F2ED] font-heading">
              Looking for a tailored build for your specific industry?
            </h4>
            <p className="text-xs sm:text-sm text-[#8E9298] font-body">
              Every website we deliver is planned specifically around your customer journey and booking flow.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer"
          >
            Start a project
          </button>
        </div>
      </div>
    </section>
  );
};
