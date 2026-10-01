import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectData } from '../types';
import { BrowserMockup } from './BrowserMockup';
import { ScrollReveal } from './ScrollReveal';

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
    <section id="work" className="py-24 md:py-36 bg-[#030B14] relative scroll-mt-24 sm:scroll-mt-28">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>01 / SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Work we&apos;re proud of.
            </h2>
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed font-body">
              A selection of websites and digital experiences designed and developed by A&amp;H Devlo.
            </p>
          </div>
        </ScrollReveal>

        {/* Large Format Project Showcases with Scroll Reveal */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={project.id} delayMs={index * 100}>
                <div
                  className="group relative rounded-2xl bg-[#081726]/90 border border-[#14304D] hover:border-cyan-500/50 transition-all duration-500 overflow-hidden p-6 sm:p-8 lg:p-12 shadow-xl hover:shadow-cyan-950/40"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                    {/* Visual Preview Side (7 cols) */}
                    <div
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${project.title} case study visual preview`}
                      onClick={() => onSelectProject(project.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelectProject(project.id);
                        }
                      }}
                      className={`lg:col-span-7 cursor-pointer transition-transform duration-500 ease-out group-hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <BrowserMockup
                        imageSrc={project.image}
                        title={project.title}
                        urlPreview={project.urlPreview}
                        accentColor={project.accentColor}
                      />
                    </div>

                    {/* Project Information Side (5 cols) */}
                    <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Tags & Badge */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.isConcept && (
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono uppercase tracking-widest font-semibold">
                            CONCEPT PROJECT
                          </span>
                        )}
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-[#0E243A] border border-[#163352] text-cyan-200 text-[10px] font-mono uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <div>
                        <span className="text-xs text-slate-400 font-mono block mb-1">
                          0{index + 1} — {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-heading">
                          <button
                            onClick={() => onSelectProject(project.id)}
                            className="text-left text-white hover:text-cyan-300 transition-colors cursor-pointer focus:outline-none focus:underline"
                          >
                            {project.title}
                          </button>
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                        {project.description}
                      </p>

                      {/* Highlights Preview */}
                      <div className="space-y-2 pt-2 border-t border-[#14304D]">
                        {project.highlights.slice(0, 2).map((item, hIdx) => (
                          <div key={hIdx} className="text-xs text-slate-300 flex items-start space-x-2">
                            <span className="text-cyan-400 font-mono font-semibold">0{hIdx + 1}.</span>
                            <span>
                              <strong className="text-white font-medium">{item.title}:</strong> {item.description}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Interaction Button */}
                      <div className="pt-2">
                        <button
                          onClick={() => onSelectProject(project.id)}
                          aria-label={`View Case Study: ${project.title}`}
                          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#0E243A] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold border border-[#163352] hover:border-blue-500 transition-all duration-200 group-hover:translate-x-1 cursor-pointer shadow focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Portfolio Bottom Strip */}
        <ScrollReveal delayMs={200}>
          <div className="mt-16 p-8 rounded-2xl bg-[#081726]/90 border border-[#14304D] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight font-heading">
                Looking for something tailored to your industry?
              </h4>
              <p className="text-sm text-slate-300 mt-1 font-body">
                Every website we build is designed specifically around your customer journey and business goals.
              </p>
            </div>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-900/30 hover:shadow-blue-600/40 shrink-0 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
