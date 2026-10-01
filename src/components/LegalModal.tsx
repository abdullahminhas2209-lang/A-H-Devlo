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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-lg bg-[#0C0D0E] border border-[#22252A] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Sticky Header Strip */}
        <div className="sticky top-0 z-30 shrink-0 px-5 sm:px-6 py-4 border-b border-[#22252A] flex items-center justify-between bg-[#141618]">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-[#8E9298]" />
            <h2 id="legal-modal-title" className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F2ED]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-[#8E9298] hover:text-[#F4F2ED] hover:bg-[#22252A] transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5 text-sm text-[#8E9298] leading-relaxed overflow-y-auto flex-1 font-body">
          {type === 'privacy' ? (
            <>
              <h3 className="text-xl font-bold text-[#F4F2ED] font-heading">Privacy Policy</h3>
              <p className="text-xs text-[#8E9298] font-mono">Last updated: 2026</p>
              
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[#F4F2ED]">1. Information Collection</h4>
                <p>
                  A&amp;H Devlo respects your privacy. When you submit a project inquiry, we collect your name, business details, email, and project scope solely to prepare project estimates and communicate with you directly.
                </p>

                <h4 className="text-base font-semibold text-[#F4F2ED]">2. Use of Information</h4>
                <p>
                  We do not sell, rent, or trade your contact information. Your details are used exclusively by founders Abdullah Minhas and Hamza to evaluate project feasibility and deliver web design and development services.
                </p>

                <h4 className="text-base font-semibold text-[#F4F2ED]">3. Analytics &amp; Cookies</h4>
                <p>
                  We do not use tracking cookies or invasive third-party ad pixels. Any site performance metrics collected are anonymized and privacy-friendly.
                </p>

                <h4 className="text-base font-semibold text-[#F4F2ED]">4. Contact</h4>
                <p>
                  For privacy inquiries, contact us directly at devlobyah@gmail.com.
                </p>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-[#F4F2ED] font-heading">Terms of Service</h3>
              <p className="text-xs text-[#8E9298] font-mono">Last updated: 2026</p>
              
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-[#F4F2ED]">1. Studio Services</h4>
                <p>
                  A&amp;H Devlo provides bespoke web design, front-end development, website rebuilds, and landing page engineering under written project proposals and milestone agreements agreed upon before work commences.
                </p>

                <h4 className="text-base font-semibold text-[#F4F2ED]">2. Client Ownership</h4>
                <p>
                  Upon receipt of final project payment, full ownership of custom code, design files, and domain connections transfers to the client with zero proprietary lock-in.
                </p>

                <h4 className="text-base font-semibold text-[#F4F2ED]">3. Scope &amp; Revisions</h4>
                <p>
                  Each fixed quote includes structured feedback and revision rounds outlined in the project scope. Additional requests outside the agreed scope are quoted transparently before execution.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
