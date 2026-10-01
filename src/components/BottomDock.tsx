import React from 'react';
import {
  House,
  Briefcase,
  LayoutGrid,
  ShieldCheck,
  Workflow,
  User,
  ArrowUpRight,
} from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomDockProps {
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export const BottomDock: React.FC<BottomDockProps> = ({
  activeSection = 'hero',
  onNavigate,
  onOpenInquiry,
}) => {
  const dockItems = [
    { id: 'hero', label: 'Home', fullLabel: 'Home', icon: House },
    { id: 'work', label: 'Work', fullLabel: 'Selected Work', icon: Briefcase },
    { id: 'services', label: 'Services', fullLabel: 'Services', icon: LayoutGrid },
    { id: 'why', label: 'Why Us', fullLabel: 'Why Us', icon: ShieldCheck },
    { id: 'process', label: 'Process', fullLabel: 'How We Work', icon: Workflow },
    { id: 'about', label: 'About', fullLabel: 'About Studio', icon: User },
  ];

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-1rem)] px-1 sm:px-0">
      {/* Ambient Glow behind dock */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full -z-10 pointer-events-none"></div>

      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-center bg-[#081726]/95 border border-[#163554] shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl px-2 sm:px-3 py-1.5 sm:py-2 gap-1 sm:gap-1.5 rounded-full overflow-x-auto max-w-full scrollbar-none"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              aria-label={`Navigate to ${item.fullLabel}`}
              className={cn(
                'relative flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full font-body text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400',
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/70 shadow-[0_0_12px_rgba(6,182,212,0.3)] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-[#102B48]/80 border border-transparent'
              )}
            >
              <Icon
                className={cn(
                  'w-4 h-4 shrink-0 transition-colors',
                  isActive ? 'text-cyan-300 stroke-[2.2]' : 'text-slate-400 hover:text-white stroke-[1.8]'
                )}
              />
              <span className="whitespace-nowrap font-body">
                <span className="sm:hidden">{item.label}</span>
                <span className="hidden sm:inline">{item.fullLabel}</span>
              </span>

              {/* Running active dot indicator */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] pointer-events-none"></span>
              )}
            </button>
          );
        })}

        {/* Separator */}
        <div className="w-[1px] h-5 sm:h-6 bg-[#163554] self-center mx-0.5 sm:mx-1 rounded-full shrink-0" />

        {/* Start a Project Direct Action Button */}
        <button
          onClick={onOpenInquiry}
          aria-label="Start a Project inquiry"
          className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-body text-xs sm:text-sm font-bold shadow-[0_0_16px_rgba(6,182,212,0.35)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-200 cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="whitespace-nowrap font-body">Start a Project</span>
          <ArrowUpRight className="w-4 h-4 text-slate-950 stroke-[2.6]" />
        </button>
      </nav>
    </div>
  );
};
