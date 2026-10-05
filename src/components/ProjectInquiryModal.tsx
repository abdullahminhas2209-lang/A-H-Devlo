import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X, MessageSquare } from 'lucide-react';
import type { InquiryFormData } from '../types';
import { getWhatsAppUrl, CONTACT_CONFIG } from '../config/contact';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Business Website',
}) => {
  const serviceOptions = [
    'Business Website',
    'Landing Page',
    'Website Redesign',
    'Other',
  ];

  const [formData, setFormData] = useState<InquiryFormData>({
    serviceType: initialService,
    businessName: '',
    industry: '',
    existingWebsite: '',
    projectDescription: '',
    fullName: '',
    email: '',
    phone: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business name.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project goals or needs.';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a phone or WhatsApp number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Silent bot trap rejection
    if (honeypot.trim() !== '') {
      setIsSubmitted(true);
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);

    const formEndpoint =
      import.meta.env?.VITE_FORMSPREE_ENDPOINT || CONTACT_CONFIG.formspreeEndpoint;

    if (formEndpoint && formEndpoint !== 'https://formspree.io/f/your_form_id') {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            businessName: formData.businessName,
            serviceType: formData.serviceType,
            industry: formData.industry || 'Not specified',
            existingWebsite: formData.existingWebsite || 'None provided',
            projectDescription: formData.projectDescription,
            message: formData.projectDescription,
            _subject: `New Project Inquiry: ${formData.businessName || formData.fullName} (${formData.serviceType})`,
            _replyto: formData.email,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          const errorMsg =
            errorData?.error ||
            (errorData?.errors && Array.isArray(errorData.errors)
              ? errorData.errors.map((item: { message?: string }) => item.message || '').filter(Boolean).join(', ')
              : null) ||
            'Failed to transmit inquiry to server. Please try again.';
          throw new Error(errorMsg);
        }

        setIsSubmitted(true);
      } catch (err: unknown) {
        console.error('Form submission error:', err);
        setSubmitError(
          err instanceof Error
            ? err.message
            : 'Network error submitting inquiry. Please try again or reach out directly on WhatsApp.'
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulate swift transmission when custom backend key is not configured in local development
      await new Promise((r) => setTimeout(r, 500));
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      serviceType: 'Business Website',
      businessName: '',
      industry: '',
      existingWebsite: '',
      projectDescription: '',
      fullName: '',
      email: '',
      phone: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl md:max-w-2xl bg-[var(--bg-deep)]/95 border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh] backdrop-blur-xl">
        {/* Header Strip - Sticky/Fixed at Top so Cross X is ALWAYS visible in view */}
        <div className="shrink-0 px-5 sm:px-6 py-3.5 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--surface-card)]/90 backdrop-blur-md z-10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] shadow-[0_0_8px_var(--accent-blue)]"></div>
            <span
              id="inquiry-modal-title"
              className="text-xs font-sans font-semibold uppercase tracking-wider text-[var(--color-heading)]"
            >
              Project Inquiry
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] cursor-pointer"
            aria-label="Close project inquiry dialog"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Content Body - Internally scrollable so modal never overflows screen */}
        <div className="p-5 sm:p-6 md:p-7 overflow-y-auto overscroll-contain">
          {isSubmitted ? (
            /* Confirmation State with Honest Response Timing */
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-950/60 border border-[var(--accent-blue)]/50 text-[var(--accent-blue)] flex items-center justify-center mx-auto shadow-lg shadow-blue-950/50">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-heading)] tracking-tight font-heading">
                  Inquiry received.
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-body)] max-w-md mx-auto leading-relaxed font-body">
                  Thank you! We review every project inquiry directly and will respond within 24 hours with an estimated scope and pricing.
                </p>
              </div>

              {/* Inquiry Summary Review Box */}
              <div className="bg-[var(--surface-card)] border border-[var(--border-subtle)] rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto font-sans">
                <div className="text-[var(--accent-blue)] font-sans text-[11px] uppercase tracking-wider font-semibold">
                  Submission Summary
                </div>
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1 text-[var(--text-body)]">
                  <span className="text-[var(--text-muted)]">Service:</span>
                  <span className="font-semibold text-[var(--color-heading)]">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1 text-[var(--text-body)]">
                  <span className="text-[var(--text-muted)]">Business:</span>
                  <span className="font-semibold text-[var(--color-heading)]">{formData.businessName}</span>
                </div>
                <div className="flex justify-between text-[var(--text-body)]">
                  <span className="text-[var(--text-muted)]">Contact:</span>
                  <span className="font-semibold text-[var(--color-heading)]">{formData.fullName} ({formData.email})</span>
                </div>
              </div>

              {/* Fast Direct Follow-up Channels */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hi A&H Devlo, I just submitted an inquiry for ${formData.businessName || 'my business'} regarding a ${formData.serviceType}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Follow up on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[var(--surface-card)] hover:bg-[#1E293B] border border-[var(--border-subtle)] text-[var(--text-body)] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close &amp; Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Anti-spam honeypot */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="website_hp">Leave this empty</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Form Heading */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-heading)] tracking-tight font-heading">
                  Let&apos;s build something for your business.
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">
                  Provide a few details below and we will prepare a dedicated proposal for your project.
                </p>
              </div>

              {/* 1. What do you need? */}
              <div className="space-y-2.5">
                <label className="block text-xs font-sans uppercase tracking-wider text-slate-300 font-semibold">
                  What do you need? <span className="text-[var(--accent-blue)]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.serviceType === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, serviceType: opt })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer font-sans ${
                          isSelected
                            ? 'bg-[var(--accent-blue)] text-white border-blue-400 shadow-md shadow-blue-900/30 font-semibold'
                            : 'bg-[#141824] text-slate-300 border-[#232938] hover:border-[#38435C] hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Business Information */}
              <div className="space-y-3">
                <label className="block text-xs font-sans uppercase tracking-wider text-slate-300 font-semibold">
                  Business Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Business name *"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      className={`w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                        errors.businessName ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.businessName && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.businessName}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Industry (e.g. Dining, Fashion, Medical)"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-[#141824] border border-[#232938] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Existing website or social link (if any)"
                    value={formData.existingWebsite}
                    onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                    className="w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-[#141824] border border-[#232938] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans"
                  />
                </div>
              </div>

              {/* 3. Tell us about your project */}
              <div className="space-y-1.5">
                <label className="block text-xs font-sans uppercase tracking-wider text-slate-300 font-semibold">
                  Tell us about your project <span className="text-[var(--accent-blue)]">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="What is your main goal? What features do you need? Any references or timelines?"
                  value={formData.projectDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                    errors.projectDescription ? 'border-red-500' : 'border-[#232938]'
                  }`}
                />
                {errors.projectDescription && (
                  <span className="text-[11px] text-red-400 block">
                    {errors.projectDescription}
                  </span>
                )}
              </div>

              {/* 4. Contact Information */}
              <div className="space-y-3">
                <label className="block text-xs font-sans uppercase tracking-wider text-slate-300 font-semibold">
                  Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name *"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                        errors.fullName ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email address *"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                        errors.email ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="WhatsApp / Phone *"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-3.5 py-2 sm:py-2.5 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                        errors.phone ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Error Alert */}
              {submitError && (
                <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  <span className="leading-snug">{submitError}</span>
                  <a
                    href={getWhatsAppUrl(`Hi A&H Devlo, I experienced an issue submitting the project form for ${formData.businessName || 'my business'}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white font-semibold hover:text-emerald-400 shrink-0"
                  >
                    Send via WhatsApp
                  </a>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-[#D0FE1D] hover:brightness-105 disabled:opacity-50 text-[#00141F] font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-lime-950/20 hover:shadow-[0_0_20px_rgba(208,254,29,0.3)] flex items-center justify-center space-x-2 cursor-pointer font-heading"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-[#00141F]/40 border-t-[#00141F] rounded-full animate-spin"></span>
                      <span>Submitting Inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <span className="text-[#00141F]">Send Project Inquiry</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#00141F]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
