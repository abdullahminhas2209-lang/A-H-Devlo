import React, { useEffect } from 'react';
import { Shield, X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#0F121A] border border-[#262F44] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Sticky Header Strip */}
        <div className="sticky top-0 z-30 shrink-0 px-5 sm:px-6 py-3.5 border-b border-[#232938] flex items-center justify-between bg-[#121622] shadow-sm">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <h2 id="legal-modal-title" className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5 text-sm text-slate-300 leading-relaxed overflow-y-auto flex-1">
          {type === 'privacy' ? (
            <>
              <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
              <p className="text-xs text-slate-400 font-mono">Effective: 2025 / 2026</p>
              
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-white">1. Information Collection</h4>
                <p>
                  A&amp;H Devlo respects your privacy. When you submit a project inquiry, we collect your name, business details, email, and phone number solely to prepare project estimates and communicate with you about your website requirements.
                </p>

                <h4 className="text-base font-semibold text-white">2. Use of Information</h4>
                <p>
                  Your information is never sold, leased, or distributed to third parties for marketing purposes. It is used strictly for direct business correspondence between your team and A&amp;H Devlo.
                </p>

                <h4 className="text-base font-semibold text-white">3. Data Security &amp; Retention</h4>
                <p>
                  We store submitted information on encrypted, secure infrastructure. You may request the deletion of your inquiry data at any time by contacting us directly.
                </p>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-white">Terms of Service</h3>
              <p className="text-xs text-slate-400 font-mono">Effective: 2025 / 2026</p>

              <div className="space-y-4">
                <h4 className="text-base font-semibold text-white">1. Scope of Services</h4>
                <p>
                  A&amp;H Devlo provides bespoke web design, front-end development, website redesign, and landing page engineering under written project proposals and milestone agreements agreed upon before work commences.
                </p>

                <h4 className="text-base font-semibold text-white">2. Intellectual Property &amp; Ownership</h4>
                <p>
                  Upon final milestone payment completion, clients retain full ownership of all customized graphics, source code, and design assets produced for their website deliverables.
                </p>

                <h4 className="text-base font-semibold text-white">3. Estimates &amp; Delivery</h4>
                <p>
                  Project timelines and deliverables are outlined in mutually agreed project briefs. Both parties agree to timely reviews and constructive feedback to maintain schedule integrity.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-[#22283A] text-right">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
