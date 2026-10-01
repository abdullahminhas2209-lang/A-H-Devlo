import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Mail, MessageSquare } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FinalCTAProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry, onViewWork }) => {
  return (
    <section className="py-24 md:py-36 bg-[#030B14] relative overflow-hidden">
      {/* Section Transition Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="p-8 sm:p-14 lg:p-20 rounded-3xl bg-gradient-to-b from-[#081726] via-[#06121E] to-[#030B14] border border-[#14304D] text-center space-y-8 relative shadow-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>GET IN TOUCH</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto font-heading">
              Ready to build your online presence?
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto font-body">
              Tell us about your business goals. We review all requirements and respond within 24 hours with a transparent, fixed-scope proposal.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-cyan-950/50 hover:shadow-cyan-400/30 hover:-translate-y-0.5 cursor-pointer font-heading focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="https://wa.me/923000000000?text=Hi%20A%26H%20Devlo,%20I%20am%20interested%20in%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-[#0E243A] hover:bg-[#133252] text-emerald-400 hover:text-emerald-300 font-semibold text-base border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer font-body focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onViewWork}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-base border border-[#14304D] hover:border-cyan-500/50 transition-all duration-200 cursor-pointer font-body focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Our Work</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Direct Channel Alternatives */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-[#14304D]/80">
              <a
                href="mailto:hello@ahdevlo.com"
                className="inline-flex items-center space-x-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Direct: hello@ahdevlo.com</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="font-mono text-slate-400">⚡ Typical turnaround: 2–3 weeks</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="font-mono text-slate-400">100% full client code ownership</span>
            </div>

            {/* Reassurance points */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Prompt 24-hour review</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Transparent fixed quotes</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Direct designer &amp; developer contact</span>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
