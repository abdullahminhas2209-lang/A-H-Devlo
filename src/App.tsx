import React, { useState, useEffect, Suspense, lazy } from 'react';
import { projects } from './data/projects';
import type { ProjectData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { VisualDesignShowcase } from './components/VisualDesignShowcase';
import { Process } from './components/Process';
import { About } from './components/About';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Code-split heavy modals to optimize initial bundle size
const CaseStudyModal = lazy(() =>
  import('./components/CaseStudyModal').then((m) => ({ default: m.CaseStudyModal }))
);
const ProjectInquiryModal = lazy(() =>
  import('./components/ProjectInquiryModal').then((m) => ({ default: m.ProjectInquiryModal }))
);
const LegalModal = lazy(() =>
  import('./components/LegalModal').then((m) => ({ default: m.LegalModal }))
);

declare global {
  interface Window {
    __REACT_HYDRATED__?: boolean;
    __PENDING_ACTION__?:
      | { type: 'inquiry'; service?: string }
      | { type: 'project'; id: string }
      | { type: 'legal'; legalType: 'privacy' | 'terms' }
      | null;
  }
}

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(() => {
    if (typeof window !== 'undefined' && window.__PENDING_ACTION__?.type === 'project') {
      const pid = window.__PENDING_ACTION__.id;
      return projects.find((p) => p.id === pid) || null;
    }
    return null;
  });
  const [isInquiryOpen, setIsInquiryOpen] = useState(() => {
    return typeof window !== 'undefined' && window.__PENDING_ACTION__?.type === 'inquiry';
  });
  const [inquiryService, setInquiryService] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined' && window.__PENDING_ACTION__?.type === 'inquiry') {
      return window.__PENDING_ACTION__.service;
    }
    return undefined;
  });
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(() => {
    if (typeof window !== 'undefined' && window.__PENDING_ACTION__?.type === 'legal') {
      return window.__PENDING_ACTION__.legalType;
    }
    return null;
  });
  const [activeSection, setActiveSection] = useState('hero');

  // Mark React hydrated and clear pending action
  useEffect(() => {
    window.__REACT_HYDRATED__ = true;
    window.__PENDING_ACTION__ = null;
  }, []);

  // Scroll spy to update activeSection in navigation
  useEffect(() => {
    const sectionIds = ['hero', 'work', 'services', 'design', 'process', 'about', 'contact'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + window.innerHeight * 0.35;
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection((prev) => (prev !== sectionIds[i] ? sectionIds[i] : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle direct hash navigation & deep links (e.g. #work, #project-osteria-riva, #contact)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      if (hash === 'contact') {
        setIsInquiryOpen(true);
      } else if (hash.startsWith('project-')) {
        const pId = hash.replace('project-', '');
        const found = projects.find((p) => p.id === pId);
        if (found) setSelectedProject(found);
      } else if (hash === 'graphic-work' || hash === 'graphics') {
        const el = document.getElementById('work');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection('work');
        }
      } else {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectProject = (projectId: string) => {
    const found = projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
      window.history.pushState(null, '', `#project-${projectId}`);
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  const handleOpenInquiry = (serviceType?: string) => {
    setInquiryService(serviceType);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  const handleNavigate = (sectionId: string) => {
    if (selectedProject) {
      setSelectedProject(null);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-body)] flex flex-col font-sans selection:bg-[#D0FE1D] selection:text-[#00141F] relative">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#D0FE1D] focus:text-[#00141F] focus:font-bold focus:rounded-full focus:outline-none"
      >
        Skip to main content
      </a>

      {/* 1. Minimal Distinctive Navigation */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Studio Landing Body */}
      <main id="main-content" className="flex-1">
        {/* 2. Memorable Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onViewWork={() => handleNavigate('work')}
          onNavigate={handleNavigate}
          activeSection={activeSection}
          onSelectProject={handleSelectProject}
        />

        {/* 3. Large Selected Work Portfolio */}
        <SelectedWork
          projects={projects}
          onSelectProject={handleSelectProject}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 4. Clear Services Section (Web & Graphics) */}
        <Services onOpenInquiry={handleOpenInquiry} />

        {/* 5. Brand Identity & Visual Design Showcase */}
        <VisualDesignShowcase onOpenInquiry={handleOpenInquiry} />

        {/* 6. How the Studio Works (Workflow & Standards merged) */}
        <Process onOpenInquiry={() => handleOpenInquiry()} />

        {/* 7. Compact Founders Section */}
        <About onOpenInquiry={() => handleOpenInquiry()} />

        {/* 8. Strong Contact CTA */}
        <FinalCTA
          onOpenInquiry={() => handleOpenInquiry()}
          onViewWork={() => handleNavigate('work')}
        />
      </main>

      {/* Reusable Case Study Modal with Device Switcher */}
      <Suspense fallback={null}>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            allProjects={projects}
            onClose={handleCloseProject}
            onSelectProject={handleSelectProject}
            onOpenInquiry={(service) => {
              handleCloseProject();
              handleOpenInquiry(service);
            }}
          />
        )}

        {/* Structured Project Inquiry Modal */}
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={handleCloseInquiry}
          initialService={inquiryService}
        />

        {/* Legal Disclosures Modal */}
        <LegalModal
          isOpen={legalType !== null}
          type={legalType}
          onClose={() => setLegalType(null)}
        />
      </Suspense>

      {/* 9. Clean Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
        onOpenLegal={(type) => setLegalType(type)}
      />
    </div>
  );
};

export default App;
