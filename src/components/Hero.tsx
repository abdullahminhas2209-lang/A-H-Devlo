import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onViewWork,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 bg-[#0C0D0E] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 sm:space-y-10 max-w-4xl"
        >
          {/* Eyebrow Label */}
          <div className="flex items-center space-x-2.5 text-[11px] sm:text-xs uppercase tracking-widest text-[#8E9298] font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
            <span>Independent Web Design &amp; Development</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.035em] text-[#F4F2ED] leading-[1.08] font-heading">
            We design and build fast, custom websites for small businesses and independent practices.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#8E9298] max-w-2xl font-body leading-relaxed font-normal">
            Every site is designed from scratch around what your clients actually look for, built with clean code, and delivered in 2 to 3 weeks—with no templates, no proprietary lock-in, and full client ownership.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] font-semibold text-sm transition-all duration-150 shadow-sm active:scale-95 cursor-pointer font-body"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2]" />
            </button>

            <button
              onClick={onViewWork}
              className="inline-flex items-center space-x-2 text-sm text-[#8E9298] hover:text-[#F4F2ED] transition-colors py-2 cursor-pointer font-body group"
            >
              <span>Explore selected work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </motion.div>

        {/* Studio Specs Bar: Architectural Proof Points */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-28 pt-10 border-t border-[#22252A] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div>
            <span className="text-xs text-[#8E9298] font-mono block mb-1">01 / TIMELINE</span>
            <span className="text-sm sm:text-base font-semibold text-[#F4F2ED] block font-heading">2 to 3 weeks</span>
            <span className="text-xs text-[#8E9298] font-body mt-0.5 block">From kickoff to live launch</span>
          </div>

          <div>
            <span className="text-xs text-[#8E9298] font-mono block mb-1">02 / TEAM</span>
            <span className="text-sm sm:text-base font-semibold text-[#F4F2ED] block font-heading">Direct founders</span>
            <span className="text-xs text-[#8E9298] font-body mt-0.5 block">Work directly with Abdullah &amp; Hamza</span>
          </div>

          <div>
            <span className="text-xs text-[#8E9298] font-mono block mb-1">03 / CODE</span>
            <span className="text-sm sm:text-base font-semibold text-[#F4F2ED] block font-heading">Zero templates</span>
            <span className="text-xs text-[#8E9298] font-body mt-0.5 block">Clean React &amp; Tailwind, sub-second load</span>
          </div>

          <div>
            <span className="text-xs text-[#8E9298] font-mono block mb-1">04 / OWNERSHIP</span>
            <span className="text-sm sm:text-base font-semibold text-[#F4F2ED] block font-heading">100% yours</span>
            <span className="text-xs text-[#8E9298] font-body mt-0.5 block">Full code, assets, and DNS handover</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
