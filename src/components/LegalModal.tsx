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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl md:max-w-2xl bg-[var(--bg-deep)]/95 border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] backdrop-blur-xl">
        <div className="shrink-0 px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--surface-card)]">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-[var(--accent-blue)]" />
            <span
              id="legal-modal-title"
              className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--color-heading)]"
            >
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal dialog"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-sm text-[var(--text-body)] leading-relaxed max-h-[70vh] overflow-y-auto">
          {type === 'privacy' ? (
            <>
              <h3 className="text-xl font-bold text-[var(--color-heading)]">Privacy Policy</h3>
              <p className="text-xs text-[var(--text-muted)] font-sans">Effective: 2025 / 2026</p>
              
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[var(--color-heading)]">1. Information Collection</h4>
                <p>
                  A&amp;H Devlo respects your privacy. When you submit a project inquiry, we collect your name, business details, email, and phone number solely to prepare project estimates and communicate with you about your website requirements.
                </p>

                <h4 className="text-base font-semibold text-[var(--color-heading)]">2. Use of Information</h4>
                <p>
                  Your information is never sold, leased, or distributed to third parties for marketing purposes. It is used strictly for direct business correspondence between your team and A&amp;H Devlo.
                </p>

                <h4 className="text-base font-semibold text-[var(--color-heading)]">3. Data Security &amp; Retention</h4>
                <p>
                  We store submitted information on encrypted, secure infrastructure. You may request the deletion of your inquiry data at any time by contacting us directly.
                </p>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-[var(--color-heading)]">Terms of Service</h3>
              <p className="text-xs text-[var(--text-muted)] font-sans">Effective: 2025 / 2026</p>

              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[var(--color-heading)]">1. Scope of Services</h4>
                <p>
                  A&amp;H Devlo provides bespoke web design, front-end development, website redesign, and landing page engineering under written project proposals and milestone agreements agreed upon before work commences.
                </p>

                <h4 className="text-base font-semibold text-[var(--color-heading)]">2. Intellectual Property &amp; Ownership</h4>
                <p>
                  Upon final milestone payment completion, clients retain full ownership of all customized graphics, source code, and design assets produced for their website deliverables.
                </p>

                <h4 className="text-base font-semibold text-[var(--color-heading)]">3. Estimates &amp; Delivery</h4>
                <p>
                  Project timelines and deliverables are outlined in mutually agreed project briefs. Both parties agree to timely reviews and constructive feedback to maintain schedule integrity.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-[var(--border-subtle)] text-right">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
