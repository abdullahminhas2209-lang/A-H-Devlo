import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onViewWork,
  onSelectProject,
}) => {
  // 0: Restaurant (center), 1: Fashion (top-back), 2: Fitness (front-left)
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-[#030B14] scroll-mt-24 sm:scroll-mt-28">
      {/* Subtle Studio Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[350px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[600px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Headline & Actions matching user reference */}
          <div className="lg:col-span-6 space-y-8 z-20">
            {/* Top Eyebrow */}
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>WEB DESIGN × DEVELOPMENT</span>
            </div>

            {/* Stacked Editorial Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-white leading-[1.02] font-heading">
              Websites<br />
              that make<br />
              small<br />
              businesses<br />
              look<br />
              professional.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-md font-body leading-relaxed font-normal">
              We design and develop clean, modern websites and landing pages that help businesses build credibility and stand out online.
            </p>

            {/* Pill Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all duration-200 shadow-xl shadow-cyan-950/50 hover:shadow-cyan-400/30 hover:-translate-y-0.5 cursor-pointer font-heading"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onViewWork}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-white font-medium text-sm border border-white/20 hover:border-white/40 transition-all duration-200 cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowDown className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Bottom Eyebrow matching reference */}
            <div className="pt-6 flex items-center space-x-2 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              <span className="w-4 h-[1px] bg-slate-600 inline-block"></span>
              <span>SMALL STUDIO. SERIOUS WEBSITES.</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Layered Angled Browser Mockup Deck matching user reference */}
          <div className="lg:col-span-6 relative min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center">
            
            {/* CARD 1: Top-Back Layer (Fashion / Atelier) */}
            <div
              role="button"
              tabIndex={0}
              aria-label="View case study for Maison Forme"
              onMouseEnter={() => setActiveCard(1)}
              onClick={() => onSelectProject('maison-forme')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject('maison-forme');
                }
              }}
              className={`absolute top-4 sm:top-8 left-4 sm:left-10 w-[82%] sm:w-[72%] max-w-[430px] rounded-2xl overflow-hidden border transition-all duration-700 ease-out cursor-pointer shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                activeCard === 1
                  ? 'z-30 scale-105 rotate-0 border-cyan-400 shadow-cyan-950/60 translate-y-0'
                  : 'z-10 -rotate-6 scale-95 border-[#2A344A] hover:border-cyan-400/50 shadow-black/80'
              }`}
              style={{
                background: '#8FA0B5',
              }}
            >
              {/* Browser Window Chrome */}
              <div className="h-7 bg-[#7D90A6] px-3 flex items-center space-x-1.5 border-b border-[#6E8096]">
                <div className="w-2 h-2 rounded-full bg-slate-200/70"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200/70"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200/70"></div>
              </div>

              {/* Card Body Content (Atelier lookbook) */}
              <div className="p-5 text-slate-900 space-y-3 aspect-[16/11] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-slate-700 font-bold">
                    ATELIER / 04
                  </div>
                  <div className="text-xl font-extrabold tracking-tight text-slate-900 mt-1 font-heading">
                    Maison Forme
                  </div>
                </div>

                <div className="space-y-1.5 opacity-60">
                  <div className="w-3/4 h-2 bg-slate-800 rounded"></div>
                  <div className="w-1/2 h-2 bg-slate-800 rounded"></div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-800 font-semibold border-t border-slate-700/20">
                  <span>AUTUMN CAMPAIGN</span>
                  <span className="text-blue-900">Explore Collection ↗</span>
                </div>
              </div>
            </div>

            {/* CARD 2: Large Dominant Center-Right Layer (Restaurant / Osteria Riva) */}
            <div
              role="button"
              tabIndex={0}
              aria-label="View case study for Osteria Riva"
              onMouseEnter={() => setActiveCard(0)}
              onClick={() => onSelectProject('osteria-riva')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject('osteria-riva');
                }
              }}
              className={`absolute top-12 sm:top-16 right-0 sm:right-4 w-[90%] sm:w-[82%] max-w-[490px] rounded-2xl overflow-hidden border transition-all duration-700 ease-out cursor-pointer shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                activeCard === 0
                  ? 'z-30 scale-100 rotate-0 border-amber-400/80 shadow-amber-950/40 translate-y-0'
                  : 'z-20 rotate-3 scale-95 border-[#3E3832] hover:border-amber-400/60 shadow-black/90'
              }`}
              style={{
                background: '#EAE4D9',
              }}
            >
              {/* Browser Window Chrome */}
              <div className="h-8 bg-[#DDD5C7] px-3 flex items-center space-x-1.5 border-b border-[#CFC5B4]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B8ADA0]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B8ADA0]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B8ADA0]"></div>
                <span className="text-[10px] text-[#7A7062] font-mono pl-3">osteriariva.com</span>
              </div>

              {/* Card Body Content (Warm cream restaurant) */}
              <div className="p-6 text-[#1A1815] space-y-4 aspect-[16/11] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[#8A7E6E] font-bold">
                    OSTERIA RIVA
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1A1815] mt-1 font-heading leading-tight">
                    A TABLE WORTH MAKING TIME FOR.
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow">
                    Book a table
                  </span>
                  <span className="text-xs text-[#7A7062] font-medium">Tasting Menu &amp; Cellar</span>
                </div>

                {/* Split preview columns */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 rounded-lg bg-[#DCD4C4] space-y-1">
                    <div className="text-[10px] font-mono font-bold text-[#554D40]">CENA / DINNER</div>
                    <div className="text-[10px] text-[#7A7062]">Handmade Tagliatelle</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#DCD4C4] space-y-1">
                    <div className="text-[10px] font-mono font-bold text-[#554D40]">CARTA DEI VINI</div>
                    <div className="text-[10px] text-[#7A7062]">Barolo DOCG 2017</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Foreground Left Floating Layer (Fitness / Train With Intent) */}
            <div
              role="button"
              tabIndex={0}
              aria-label="View case study for Apex Athletic Lab"
              onMouseEnter={() => setActiveCard(2)}
              onClick={() => onSelectProject('apex-athletic-lab')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject('apex-athletic-lab');
                }
              }}
              className={`absolute bottom-2 sm:bottom-6 left-2 sm:left-8 w-[72%] sm:w-[62%] max-w-[360px] rounded-2xl overflow-hidden border transition-all duration-700 ease-out cursor-pointer shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                activeCard === 2
                  ? 'z-30 scale-105 rotate-0 border-emerald-400 shadow-emerald-950/60 translate-y-0'
                  : 'z-25 -rotate-2 scale-95 border-[#3E4D2B] hover:border-emerald-400/70 shadow-black/90'
              }`}
              style={{
                background: '#DCE8A6',
              }}
            >
              {/* Browser Window Chrome */}
              <div className="h-7 bg-[#CCD894] px-3 flex items-center space-x-1.5 border-b border-[#B8C67C]">
                <div className="w-2 h-2 rounded-full bg-[#8A9652]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8A9652]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8A9652]"></div>
              </div>

              {/* Card Body Content (Lime fitness studio) */}
              <div className="p-5 text-[#192405] space-y-3 aspect-[16/12] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#54681E] font-bold">
                    APEX ATHLETIC LAB
                  </div>
                  <div className="text-lg sm:text-xl font-extrabold tracking-tight text-[#192405] mt-1 font-heading">
                    TRAIN WITH INTENT.
                  </div>
                </div>

                <div className="space-y-1 text-xs text-[#3E4F12]">
                  <p>Strength • Conditioning • Recovery</p>
                </div>

                <div>
                  <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow">
                    Start here ↗
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
