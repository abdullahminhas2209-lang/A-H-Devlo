import React, { useState, useEffect, Suspense, lazy } from 'react';
import { projects } from './data/projects';
import type { ProjectData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { WhyDevlo } from './components/WhyDevlo';
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

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to update activeSection in the dock as user scrolls
  useEffect(() => {
    const sectionIds = ['hero', 'work', 'services', 'why', 'process', 'about'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
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

  // Update hash when project changes without reloading
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#D0FE1D] focus:text-[#00141F] focus:font-bold focus:rounded-full focus:shadow-[0_0_20px_rgba(208,254,29,0.5)] focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Header with Brand Logo & Quick Action */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Studio Landing Body */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onViewWork={() => handleNavigate('work')}
          onNavigate={handleNavigate}
          activeSection={activeSection}
          onSelectProject={handleSelectProject}
        />

        {/* 2. Selected Work Section */}
        <SelectedWork
          projects={projects}
          onSelectProject={handleSelectProject}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 3. Services Section */}
        <Services onOpenInquiry={handleOpenInquiry} />

        {/* 4. Why A&H Devlo (4 Principles) */}
        <WhyDevlo />

        {/* 5. Process Section (5 Steps) */}
        <Process onOpenInquiry={() => handleOpenInquiry()} />

        {/* 6. About Section */}
        <About onOpenInquiry={() => handleOpenInquiry()} />

        {/* 7. Final CTA */}
        <FinalCTA
          onOpenInquiry={() => handleOpenInquiry()}
          onViewWork={() => handleNavigate('work')}
        />
      </main>


      {/* Reusable Case Study View */}
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

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenLegal={(type) => setLegalType(type)}
      />
    </div>
  );
};

export default App;
