import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Smartphone,
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
      if (e.key === 'Escape') {
        onClose();
      }
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
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0C0D0E] text-[#F4F2ED] animate-in fade-in duration-150"
    >
      {/* Top Utility Bar */}
      <div className="sticky top-0 z-40 bg-[#0C0D0E]/95 backdrop-blur-md border-b border-[#22252A] px-5 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#8E9298] hover:text-[#F4F2ED] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to studio</span>
        </button>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onOpenInquiry(project.category)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[#22252A] text-[#8E9298] hover:text-[#F4F2ED] hover:bg-[#141618] transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 md:py-20 space-y-16">
        {/* Header Block */}
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E9298]">
              {project.category}
            </span>
            <span className="text-[#22252A]">•</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                project.isConcept
                  ? 'bg-[#181A1D] border-[#22252A] text-[#8E9298]'
                  : 'bg-blue-950/40 border-blue-800/40 text-blue-400'
              }`}
            >
              {project.isConcept ? 'Studio Concept' : 'Live Client Work'}
            </span>
          </div>

          <h2 id="case-study-title" className="text-3xl sm:text-5xl font-bold text-[#F4F2ED] tracking-[-0.03em] font-heading leading-tight">
            {project.title}
          </h2>

          <p className="text-lg sm:text-xl text-[#8E9298] font-body max-w-3xl leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Project Metadata Table */}
        <div className="border-t border-b border-[#22252A] py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm font-body">
          <div>
            <span className="text-[#8E9298] block mb-1">Context</span>
            <p className="font-medium text-[#F4F2ED]">{project.client}</p>
          </div>
          <div>
            <span className="text-[#8E9298] block mb-1">Category</span>
            <p className="font-medium text-[#F4F2ED]">{project.category}</p>
          </div>
          <div>
            <span className="text-[#8E9298] block mb-1">Services</span>
            <p className="font-medium text-[#F4F2ED]">{project.tags.join(' / ')}</p>
          </div>
          <div>
            <span className="text-[#8E9298] block mb-1">Timeline</span>
            <p className="font-medium text-[#F4F2ED]">{project.year} Build</p>
          </div>
        </div>

        {/* The Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-xl bg-[#141618] border border-[#22252A] space-y-3">
            <span className="text-xs font-mono text-[#8E9298] block">01 / CHALLENGE</span>
            <h3 className="text-xl font-bold text-[#F4F2ED] font-heading">The Problem</h3>
            <p className="text-sm text-[#8E9298] leading-relaxed font-body">{project.challenge}</p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-[#141618] border border-[#22252A] space-y-3">
            <span className="text-xs font-mono text-[#8E9298] block">02 / SOLUTION</span>
            <h3 className="text-xl font-bold text-[#F4F2ED] font-heading">The Approach</h3>
            <p className="text-sm text-[#8E9298] leading-relaxed font-body">{project.solution}</p>
          </div>
        </div>

        {/* Design Viewport Switcher & Screenshot */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#22252A]">
            <h3 className="text-xl font-bold text-[#F4F2ED] font-heading">
              Layout &amp; Responsive Hierarchy
            </h3>

            <div className="flex items-center space-x-1 border border-[#22252A] rounded-md p-1 bg-[#141618]">
              <button
                onClick={() => setDevice('desktop')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                  device === 'desktop'
                    ? 'bg-[#22252A] text-[#F4F2ED]'
                    : 'text-[#8E9298] hover:text-[#F4F2ED]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>

              <button
                onClick={() => setDevice('mobile')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                  device === 'mobile'
                    ? 'bg-[#22252A] text-[#F4F2ED]'
                    : 'text-[#8E9298] hover:text-[#F4F2ED]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-8 rounded-xl bg-[#141618] border border-[#22252A] flex items-center justify-center">
            <BrowserMockup
              imageSrc={project.image}
              title={project.title}
              device={device}
              accentColor={project.accentColor}
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#F4F2ED] font-heading">
            Key Architecture Decisions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="p-6 rounded-xl bg-[#141618] border border-[#22252A] space-y-2">
                <span className="text-xs font-mono text-[#8E9298]">DECISION 0{index + 1}</span>
                <h4 className="text-base font-semibold text-[#F4F2ED] font-heading">{highlight.title}</h4>
                <p className="text-xs sm:text-sm text-[#8E9298] font-body leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#141618] border border-[#22252A]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E9298] block mb-4">
              Scope of Deliverables
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center space-x-2 text-xs text-[#8E9298] font-body">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next / Prev Project Navigation */}
        <div className="pt-8 border-t border-[#22252A] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="text-left p-5 rounded-lg border border-[#22252A] bg-[#141618] hover:border-[#363A42] transition-colors cursor-pointer group"
          >
            <div className="flex items-center space-x-2 text-xs text-[#8E9298] font-mono mb-1">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>PREVIOUS</span>
            </div>
            <span className="font-semibold text-sm text-[#F4F2ED] block">{prevProject.title}</span>
            <span className="text-xs text-[#8E9298]">{prevProject.category}</span>
          </button>

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="text-right p-5 rounded-lg border border-[#22252A] bg-[#141618] hover:border-[#363A42] transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-end space-x-2 text-xs text-[#8E9298] font-mono mb-1">
              <span>NEXT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <span className="font-semibold text-sm text-[#F4F2ED] block">{nextProject.title}</span>
            <span className="text-xs text-[#8E9298]">{nextProject.category}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
