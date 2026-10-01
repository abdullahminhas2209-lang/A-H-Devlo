import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Smartphone,
  Tablet,
  X,
} from 'lucide-react';
import type { ProjectData, DeviceMode } from '../types';
import { BrowserMockup } from './BrowserMockup';

interface CaseStudyModalProps {
  project: ProjectData;
  allProjects: ProjectData[];
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onOpenInquiry: (serviceType?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onOpenInquiry,
}) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const prevProject = allProjects.find((p) => p.id === project.prevProjectId) || allProjects[0];
  const nextProject = allProjects.find((p) => p.id === project.nextProjectId) || allProjects[1];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0C10] text-[#F8FAFC] animate-in fade-in duration-200"
    >
      {/* Top Floating Utility Bar */}
      <div className="sticky top-0 z-40 bg-[#0B0C10]/90 backdrop-blur-md border-b border-[#232938] px-5 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Studio Overview</span>
        </button>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onOpenInquiry(project.category)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-tight transition-colors shadow"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#141824] border border-[#232938] text-slate-400 hover:text-white transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 md:py-20 space-y-16 md:space-y-24">
        {/* Header Block */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
              {project.category}
            </span>
            <span className="text-slate-600">•</span>
            {project.isConcept && (
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono uppercase tracking-widest font-semibold">
                CONCEPT PROJECT
              </span>
            )}
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Year: {project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-normal max-w-3xl leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Project Overview Metadata Grid */}
        <section className="rounded-xl bg-[#12151E] border border-[#232938] p-6 sm:p-8">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-6">
            Project Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <span className="text-slate-500 text-xs block mb-1">Client</span>
              <p className="font-semibold text-white">{project.client}</p>
            </div>
            <div>
              <span className="text-slate-500 text-xs block mb-1">Project Type</span>
              <p className="font-semibold text-white">{project.category}</p>
            </div>
            <div>
              <span className="text-slate-500 text-xs block mb-1">Services</span>
              <p className="font-semibold text-white">{project.tags.join(' / ')}</p>
            </div>
            <div>
              <span className="text-slate-500 text-xs block mb-1">Timeline &amp; Year</span>
              <p className="font-semibold text-white">{project.year} — Production Build</p>
            </div>
          </div>
        </section>

        {/* The Challenge & The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {/* The Challenge */}
          <section className="space-y-4 rounded-xl bg-[#12151E] border border-[#232938] p-6 sm:p-8">
            <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center text-red-400 font-mono text-xs font-bold">
              01
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">The Challenge</h2>
            <p className="text-slate-300 text-base leading-relaxed">{project.challenge}</p>
          </section>

          {/* The Solution */}
          <section className="space-y-4 rounded-xl bg-[#12151E] border border-[#232938] p-6 sm:p-8">
            <div className="w-8 h-8 rounded-lg bg-blue-950/40 border border-blue-900/40 flex items-center justify-center text-blue-400 font-mono text-xs font-bold">
              02
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">The Solution</h2>
            <p className="text-slate-300 text-base leading-relaxed">{project.solution}</p>
          </section>
        </div>

        {/* Final Design Section with Viewport Switcher */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#232938]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 block mb-1">
                Visual Artifacts
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Final Design Showcase
              </h2>
            </div>

            {/* Device Switcher (Desktop / Tablet / Mobile) */}
            <div className="flex items-center space-x-1 bg-[#141824] p-1.5 rounded-lg border border-[#232938] self-start sm:self-auto">
              <button
                onClick={() => setDevice('desktop')}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  device === 'desktop'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Desktop</span>
              </button>

              <button
                onClick={() => setDevice('tablet')}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  device === 'tablet'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Tablet className="w-4 h-4" />
                <span>Tablet</span>
              </button>

              <button
                onClick={() => setDevice('mobile')}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  device === 'mobile'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="py-6 px-4 sm:px-8 rounded-2xl bg-[#0F1117] border border-[#232938] overflow-hidden flex items-center justify-center min-h-[480px]">
            <BrowserMockup
              imageSrc={project.image}
              title={project.title}
              urlPreview={project.urlPreview}
              device={device}
              accentColor={project.accentColor}
            />
          </div>
          <p className="text-center text-xs text-slate-500 font-mono">
            Showing interactive {device} viewport layout for {project.title}. Responsive layout adapts cleanly without content truncation.
          </p>
        </section>

        {/* Project Details & Architectural Features */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 block mb-1">
              Engineering &amp; UX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Project Details &amp; Design Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#12151E] border border-[#232938] space-y-3"
              >
                <div className="text-xs font-mono text-blue-400 font-semibold">
                  DECISION 0{index + 1}
                </div>
                <h3 className="text-base font-bold text-white">{highlight.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Deliverables Checklist */}
          <div className="mt-8 p-6 sm:p-8 rounded-xl bg-[#12151E] border border-[#232938]">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
              Delivered Assets &amp; Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Project Navigation & Start a Project CTA */}
        <section className="pt-12 border-t border-[#232938] space-y-12">
          {/* CTA Box */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#161B28] via-[#12151E] to-[#0B0C10] border border-[#2B354D] text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to create something similar for your business?
            </h3>
            <p className="text-base text-slate-300 max-w-xl mx-auto">
              We design and develop clean, custom websites that solve business problems and make you look professional from day one.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry(project.category)}
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-xl shadow-blue-900/30 hover:shadow-blue-600/40 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Next / Prev Project Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className="text-left p-6 rounded-xl bg-[#12151E] border border-[#232938] hover:border-[#333E59] transition-all group cursor-pointer"
            >
              <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono mb-2">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>PREVIOUS PROJECT</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {prevProject.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1">{prevProject.category}</p>
            </button>

            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="text-right p-6 rounded-xl bg-[#12151E] border border-[#232938] hover:border-[#333E59] transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-end space-x-2 text-xs text-slate-500 font-mono mb-2">
                <span>NEXT PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1">{nextProject.category}</p>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
