import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Layout,
  Palette,
  Search,
  X,
  Layers,
  ChevronDown,
  Eye,
  CheckCircle2,
  FolderOpen,
} from 'lucide-react';
import type { ProjectData, GraphicDesignItem } from '../types';
import { BrowserMockup } from './BrowserMockup';
import { ScrollReveal } from './ScrollReveal';
import { PortfolioLightbox } from './PortfolioLightbox';
import { graphicDesignItems, brandSystems } from '../data/portfolio';

interface SelectedWorkProps {
  projects: ProjectData[];
  onSelectProject: (projectId: string) => void;
  onOpenInquiry?: (serviceType?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onSelectProject,
  onOpenInquiry,
}) => {
  // Master Tab: 'web' | 'graphic'
  const [activePortfolioTab, setActivePortfolioTab] = useState<'web' | 'graphic'>('web');

  // Sub-filter for Web projects
  const [webFilter, setWebFilter] = useState<'all' | 'hospitality' | 'ecommerce' | 'fitness' | 'corporate'>('all');

  // Sub-filter for Graphic Design
  const [graphicFilter, setGraphicFilter] = useState<
    'all' | 'logos' | 'brand-systems' | 'visiting-cards' | 'social'
  >('all');

  // Search query for Graphic Design
  const [searchQuery, setSearchQuery] = useState('');

  // Expandable view state for Graphic Design (curated top 12 vs all 25)
  const [isExpanded, setIsExpanded] = useState(false);

  // Lightbox selection
  const [selectedGraphicItem, setSelectedGraphicItem] = useState<GraphicDesignItem | null>(null);

  // Listen to hash changes (e.g. #graphic-work or #work)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#graphic-work' || hash === '#graphics') {
        setActivePortfolioTab('graphic');
      } else if (hash === '#web-work' || hash === '#websites') {
        setActivePortfolioTab('web');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Web projects
  const osteria = projects.find((p) => p.id === 'osteria-riva') || projects[0];
  const maison = projects.find((p) => p.id === 'maison-forme') || projects[1];
  const apex = projects.find((p) => p.id === 'apex-athletic-lab') || projects[2];
  const vanguard = projects.find((p) => p.id === 'vanguard-advisory') || projects[3];

  const showOsteria = webFilter === 'all' || webFilter === 'hospitality';
  const showMaison = webFilter === 'all' || webFilter === 'ecommerce';
  const showApex = webFilter === 'all' || webFilter === 'fitness';
  const showVanguard = webFilter === 'all' || webFilter === 'corporate';

  // Filtered Graphic Design items
  const filteredGraphicItems = useMemo(() => {
    let items = graphicDesignItems;

    // Category filter
    if (graphicFilter === 'logos') {
      items = items.filter((item) => item.category === 'logo');
    } else if (graphicFilter === 'visiting-cards') {
      items = items.filter((item) => item.category === 'visiting-card');
    } else if (graphicFilter === 'social') {
      items = items.filter((item) => item.category === 'social-media');
    } else if (graphicFilter === 'brand-systems') {
      items = items.filter((item) => Boolean(item.brandGroupId));
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.clientOrProjectName.toLowerCase().includes(q) ||
          item.subcategory.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q)) ||
          (item.finishDetails && item.finishDetails.toLowerCase().includes(q))
      );
    }

    return items;
  }, [graphicFilter, searchQuery]);

  // Curated vs Full view in 'all' category (when not searching)
  const displayedGraphicItems = useMemo(() => {
    if (graphicFilter !== 'all' || searchQuery.trim() || isExpanded) {
      return filteredGraphicItems;
    }
    // Curated 12 highlights: 6 logos, 3 visiting cards, 3 social posts
    const curatedIds = [
      'logo-orifice-medical',
      'logo-toes-to-nose',
      'logo-collab-and-connect',
      'logo-sigma-leathers',
      'logo-theta-teas',
      'logo-horizon-skyline',
      'visiting-card-gold-luxury',
      'visiting-card-executive-desk',
      'visiting-card-boxed-stationery',
      'social-post-orifice-team',
      'social-post-toes-to-nose-tailored',
      'social-post-orifice-discount',
    ];
    return filteredGraphicItems.filter((i) => curatedIds.includes(i.id));
  }, [filteredGraphicItems, graphicFilter, searchQuery, isExpanded]);

  return (
    <section id="work" className="py-14 sm:py-20 lg:py-24 bg-transparent relative scroll-mt-20">
      {/* Hairline subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-blue)] font-semibold">
                  Dual Studio Portfolio
                </span>
              </div>
              <h2 className="font-heading font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-[var(--color-heading)] leading-tight">
                Selected Work &amp; <span className="text-[#D0FE1D]">Craft</span>
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-body)] font-normal leading-relaxed font-body">
                Explore our full creative range across bespoke web architectures, custom vector brand identities, tactile business stationery, and social media campaigns.
              </p>
            </div>

            {/* Honest Disclosure Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#021F33]/60 border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] self-start md:self-auto font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span>Studio concepts and identity suites designed to demonstrate commercial craft.</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Master Dual Portfolio Tabs */}
        <ScrollReveal delayMs={50}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-2xl bg-[#011421]/90 border border-[var(--border-subtle)] backdrop-blur-xl shadow-xl">
            {/* Tabs List */}
            <div role="tablist" aria-label="Portfolio Disciplines" className="flex items-center gap-2">
              <button
                role="tab"
                aria-selected={activePortfolioTab === 'web'}
                aria-controls="panel-web"
                id="tab-web"
                onClick={() => setActivePortfolioTab('web')}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                  activePortfolioTab === 'web'
                    ? 'bg-[var(--accent-blue)] text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/20'
                    : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5'
                }`}
              >
                <Layout className="w-4 h-4 shrink-0" />
                <span>UI/UX &amp; Web Development</span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ml-1 ${
                  activePortfolioTab === 'web' ? 'bg-white/20 text-white' : 'bg-black/40 text-[var(--text-muted)]'
                }`}>
                  4
                </span>
              </button>

              <button
                role="tab"
                aria-selected={activePortfolioTab === 'graphic'}
                aria-controls="panel-graphic"
                id="tab-graphic"
                onClick={() => setActivePortfolioTab('graphic')}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer ${
                  activePortfolioTab === 'graphic'
                    ? 'bg-[#D0FE1D] text-[#00141F] shadow-lg shadow-lime-950/30 ring-1 ring-black/20'
                    : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5'
                }`}
              >
                <Palette className="w-4 h-4 shrink-0" />
                <span>Graphic Design &amp; Branding</span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ml-1 ${
                  activePortfolioTab === 'graphic' ? 'bg-[#00141F]/20 text-[#00141F] font-bold' : 'bg-black/40 text-[var(--text-muted)]'
                }`}>
                  25
                </span>
              </button>
            </div>

            {/* Context Sub-Label */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] px-3">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
              <span>
                {activePortfolioTab === 'web'
                  ? 'Custom Web Prototypes & Interactive Case Studies'
                  : 'Extracted Vector Logos, Business Cards & Social Posts'}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* TAB 1: UI/UX & WEB DEVELOPMENT                                            */}
        {/* ========================================================================= */}
        {activePortfolioTab === 'web' && (
          <div id="panel-web" role="tabpanel" aria-labelledby="tab-web" className="space-y-10 sm:space-y-12 animate-in fade-in duration-300">
            
            {/* Sub-Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Web Projects (4)' },
                { id: 'hospitality', label: 'Hospitality & Dining' },
                { id: 'ecommerce', label: 'Fashion & E-Commerce' },
                { id: 'fitness', label: 'Athletic & Booking' },
                { id: 'corporate', label: 'Corporate & Advisory' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setWebFilter(filter.id as typeof webFilter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-medium transition-all cursor-pointer ${
                    webFilter === filter.id
                      ? 'bg-[var(--accent-blue)] text-white shadow-sm'
                      : 'bg-[#021F33]/60 text-[var(--text-muted)] hover:text-white hover:bg-[#021F33]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* 1. Flagship Hero Feature: Osteria Riva */}
            {osteria && showOsteria && (
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
            {(showMaison || showApex) && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left: Maison Forme */}
                {maison && showMaison && (
                  <ScrollReveal delayMs={100} className={`${showApex ? 'lg:col-span-7' : 'lg:col-span-12'} flex`}>
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

                {/* Right: Apex Athletic Lab */}
                {apex && showApex && (
                  <ScrollReveal delayMs={150} className={`${showMaison ? 'lg:col-span-5' : 'lg:col-span-12'} flex`}>
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
            )}

            {/* 4. Vanguard Advisory */}
            {vanguard && showVanguard && (
              <ScrollReveal delayMs={200}>
                <div
                  data-project-id={vanguard.id}
                  onClick={() => onSelectProject(vanguard.id)}
                  className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-card)] backdrop-blur-xl hover:border-[var(--border-subtle-hover)] hover:bg-[var(--surface-card-hover)] p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    
                    {/* Left (5 cols): Corporate Positioning */}
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
        )}

        {/* ========================================================================= */}
        {/* TAB 2: GRAPHIC DESIGN & BRAND IDENTITY                                    */}
        {/* ========================================================================= */}
        {activePortfolioTab === 'graphic' && (
          <div id="panel-graphic" role="tabpanel" aria-labelledby="tab-graphic" className="space-y-8 animate-in fade-in duration-300">
            
            {/* Filter Bar & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#011421]/80 border border-[var(--border-subtle)]">
              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: 'All Graphics (25)' },
                  { id: 'logos', label: 'Logos & Marks (13)' },
                  { id: 'brand-systems', label: 'Brand Systems (3)' },
                  { id: 'visiting-cards', label: 'Visiting Cards (6)' },
                  { id: 'social', label: 'Social Media (6)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setGraphicFilter(tab.id as typeof graphicFilter);
                      setIsExpanded(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-heading font-medium transition-all cursor-pointer ${
                      graphicFilter === tab.id
                        ? 'bg-[#D0FE1D] text-[#00141F] font-bold shadow-sm'
                        : 'bg-[#021F33]/60 text-[var(--text-muted)] hover:text-white hover:bg-[#021F33]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative min-w-[240px] sm:min-w-[280px]">
                <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by brand, tag, or finish..."
                  className="w-full bg-[#00111a] border border-[var(--border-subtle)] rounded-xl pl-9 pr-8 py-2 text-xs text-[var(--color-heading)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-white cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* BRAND SYSTEMS SPECIAL EXPANDED VIEW */}
            {graphicFilter === 'brand-systems' && (
              <div className="space-y-8">
                {brandSystems.map((system) => {
                  const systemItems = graphicDesignItems.filter((i) => i.brandGroupId === system.id);
                  return (
                    <div
                      key={system.id}
                      className="p-6 sm:p-8 rounded-3xl bg-[#011421] border border-[var(--border-subtle)] space-y-6 shadow-xl"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[var(--accent-lime)]" />
                            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                              Unified Brand Identity Suite
                            </span>
                          </div>
                          <h3 className="font-heading font-extrabold text-2xl text-[var(--color-heading)] tracking-tight">
                            {system.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-[var(--text-body)]">
                            {system.description}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#021F33] border border-[var(--border-subtle)] text-xs font-mono text-cyan-300 self-start sm:self-auto">
                          {system.industry}
                        </span>
                      </div>

                      {/* Items Grid for this Brand System */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {systemItems.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setSelectedGraphicItem(item)}
                            className="group relative rounded-2xl bg-[#00111a] border border-[var(--border-subtle)] hover:border-[var(--accent-blue)] p-4 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-lg hover:shadow-cyan-950/20"
                          >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#000d14] p-3 flex items-center justify-center relative mb-3">
                              <img
                                src={item.thumbnailPath}
                                alt={item.title}
                                className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-[#00141F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-black/70 px-2.5 py-1 rounded-full border border-white/20">
                                  <Eye className="w-3 h-3" />
                                  <span>Inspect</span>
                                </span>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                                <span className="uppercase">{item.category}</span>
                                <span>{item.dimensions}</span>
                              </div>
                              <h4 className="font-heading font-bold text-xs text-[var(--color-heading)] group-hover:text-cyan-300 transition-colors line-clamp-1">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* STANDARD MASONRY / CARD GRID */}
            {graphicFilter !== 'brand-systems' && (
              <>
                {displayedGraphicItems.length === 0 ? (
                  <div className="text-center py-16 px-4 rounded-3xl bg-[#011421] border border-[var(--border-subtle)] space-y-3">
                    <FolderOpen className="w-10 h-10 text-[var(--text-muted)] mx-auto" />
                    <h3 className="font-heading font-bold text-base text-[var(--color-heading)]">
                      No matching graphic design assets found
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      Try searching with different keywords like &quot;healthcare&quot;, &quot;gold&quot;, &quot;apparel&quot;, or reset your filters.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setGraphicFilter('all');
                      }}
                      className="px-4 py-2 rounded-xl bg-[var(--accent-blue)] text-white text-xs font-semibold hover:brightness-110 transition cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {displayedGraphicItems.map((item) => {
                      const isLogo = item.category === 'logo';
                      const isVisitingCard = item.category === 'visiting-card';

                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedGraphicItem(item)}
                          className="group relative rounded-2xl bg-[#011421] border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] hover:bg-[#021827] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xl hover:shadow-cyan-950/20"
                        >
                          {/* Asset Visual Surface */}
                          <div
                            className={`rounded-xl overflow-hidden bg-[#00111a] border border-white/5 relative flex items-center justify-center transition-all ${
                              isLogo
                                ? 'min-h-[190px] sm:min-h-[210px] p-6'
                                : isVisitingCard
                                ? 'aspect-[1.4/1] p-2'
                                : 'aspect-square p-2'
                            }`}
                          >
                            <img
                              src={item.assetPath}
                              alt={item.title}
                              className={`max-w-full max-h-full object-contain filter group-hover:scale-[1.025] transition-transform duration-500 ${
                                isLogo ? 'max-h-24 sm:max-h-28' : ''
                              }`}
                              loading="lazy"
                            />

                            {/* Hover Reveal Action */}
                            <div className="absolute inset-0 bg-[#00141F]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D0FE1D] text-[#00141F] font-heading font-bold text-xs tracking-tight shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                                <span>Inspect Asset &amp; Specs</span>
                                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                              </span>
                            </div>

                            {/* Floating aspect indicator */}
                            <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[9px] font-mono text-[var(--text-muted)]">
                              {item.aspectRatio}
                            </div>
                          </div>

                          {/* Card Content & Metadata */}
                          <div className="pt-4 space-y-2.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold truncate max-w-[170px]">
                                {item.subcategory}
                              </span>
                              {item.brandGroupId && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)]/30 text-[9px] font-mono text-[var(--accent-blue)] shrink-0">
                                  <Layers className="w-2.5 h-2.5" />
                                  <span>System</span>
                                </span>
                              )}
                            </div>

                            <h4 className="font-heading font-bold text-base sm:text-lg text-[var(--color-heading)] group-hover:text-cyan-200 transition-colors line-clamp-1">
                              {item.title}
                            </h4>

                            <p className="text-xs text-[var(--text-body)] line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>

                            {/* Bottom specs / badges */}
                            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                              <span className="truncate max-w-[160px]">{item.clientOrProjectName}</span>
                              <span className="text-[var(--accent-blue)] group-hover:text-white transition-colors">
                                {isLogo ? 'Vector Mark' : isVisitingCard ? 'Print Mockup' : '1:1 Campaign'}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Expand / Collapse Control for 'All' category */}
                {graphicFilter === 'all' && !searchQuery.trim() && (
                  <div className="pt-6 text-center">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#021F33] hover:bg-[#0B3B61]/60 border border-[var(--border-subtle)] hover:border-[var(--border-subtle-hover)] text-xs sm:text-sm font-heading font-semibold text-[var(--color-heading)] transition-all cursor-pointer shadow-md group"
                    >
                      <span>
                        {isExpanded
                          ? 'Collapse to Curated Selection (12 Assets)'
                          : `View All ${filteredGraphicItems.length} Graphic Assets`}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--accent-lime)] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-2">
                      {isExpanded
                        ? `Displaying all ${filteredGraphicItems.length} extracted studio assets.`
                        : `Showing 12 curated highlights out of ${filteredGraphicItems.length} total extracted assets.`}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Quick Graphic Design Inquiry Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#011421] via-[#021F33] to-[#011421] border border-[var(--border-subtle)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold">
                    Custom Branding &amp; Graphic Retainers
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--color-heading)] tracking-tight">
                  Need custom logos, visiting cards, or social campaign graphics?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-body)]">
                  Every brand project includes full vector source files (SVG/EPS/AI), print-ready CMYK PDFs, responsive digital formats, and 100% intellectual property ownership transfer.
                </p>
              </div>

              <button
                onClick={() => onOpenInquiry?.('Brand Identity & Logo Design')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D0FE1D] hover:brightness-105 text-[#00141F] font-heading font-bold text-xs sm:text-sm tracking-tight shadow-lg transition-all cursor-pointer shrink-0"
              >
                <span>Request Brand Proposal</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        )}

      </div>

      {/* Interactive Lightbox for Graphic Design */}
      <PortfolioLightbox
        item={selectedGraphicItem}
        itemsList={displayedGraphicItems}
        onClose={() => setSelectedGraphicItem(null)}
        onSelectItem={(item) => setSelectedGraphicItem(item)}
        onOpenInquiry={onOpenInquiry}
      />
    </section>
  );
};

export default SelectedWork;
