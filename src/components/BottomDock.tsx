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
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';
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
    { id: 'hero', label: 'Home', icon: House },
    { id: 'work', label: 'Selected Work', icon: Briefcase },
    { id: 'services', label: 'Services', icon: LayoutGrid },
    { id: 'why', label: 'Why Us', icon: ShieldCheck },
    { id: 'process', label: 'How We Work', icon: Workflow },
    { id: 'about', label: 'About Studio', icon: User },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      {/* Ambient Glow behind dock */}
      <div className="absolute inset-0 bg-[var(--accent-blue)]/15 blur-xl rounded-full -z-10 pointer-events-none"></div>

      <Dock
        magnification={64}
        distance={130}
        panelHeight={56}
        className="items-center justify-center bg-[var(--bg-deep)]/90 border border-[var(--border-subtle)] shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl px-3 sm:px-4 py-2 gap-2 sm:gap-2.5 rounded-full"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <DockItem
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'relative aspect-square rounded-full flex items-center justify-center transition-colors',
                isActive
                  ? 'bg-[var(--accent-blue)]/20 border border-[var(--accent-blue)] text-[var(--color-heading)] shadow-[0_0_12px_rgba(47,123,255,0.35)]'
                  : 'bg-[#0B1E32]/70 hover:bg-[#102B48] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-white'
              )}
            >
              <DockLabel>{item.label}</DockLabel>
              <DockIcon>
                <Icon
                  className={cn(
                    'w-full h-full transition-colors',
                    isActive ? 'text-[var(--color-heading)] stroke-[2.2]' : 'text-slate-300 stroke-[1.8]'
                  )}
                />
              </DockIcon>

              {/* Running App active dot indicator matching Apple macOS dock */}
              {isActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_8px_var(--accent-blue)] pointer-events-none"></span>
              )}
            </DockItem>
          );
        })}

        {/* Apple Dock Separator */}
        <div className="w-[1px] h-6 bg-[var(--border-subtle)] self-center mx-0.5 rounded-full shrink-0" />

        {/* Start a Project Direct Action */}
        <DockItem
          onClick={onOpenInquiry}
          className="relative aspect-square rounded-full flex items-center justify-center bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white border border-blue-400/40 shadow-[0_0_16px_rgba(47,123,255,0.4)] transition-all"
        >
          <DockLabel>Start a Project</DockLabel>
          <DockIcon>
            <ArrowUpRight className="w-full h-full text-white stroke-[2.6]" />
          </DockIcon>
        </DockItem>
      </Dock>
    </div>
  );
};
