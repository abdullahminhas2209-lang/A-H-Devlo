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
                  ? 'bg-white/10 border border-white/20 text-white'
                  : 'bg-[#0B1E32]/60 hover:bg-[#102B48]/80 border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-white'
              )}
            >
              <DockLabel>{item.label}</DockLabel>
              <DockIcon>
                <Icon
                  className={cn(
                    'w-full h-full transition-colors',
                    isActive ? 'text-white stroke-[2.2]' : 'text-slate-400 stroke-[1.8]'
                  )}
                />
              </DockIcon>

              {/* Clean minimal active indicator dot */}
              {isActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80 pointer-events-none"></span>
              )}
            </DockItem>
          );
        })}

        {/* Apple Dock Separator */}
        <div className="w-[1px] h-6 bg-[var(--border-subtle)] self-center mx-0.5 rounded-full shrink-0" />

        {/* Start a Project Direct Action */}
        <DockItem
          onClick={onOpenInquiry}
          className="relative aspect-square rounded-full flex items-center justify-center bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white border border-blue-400/30 shadow-md transition-all"
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
