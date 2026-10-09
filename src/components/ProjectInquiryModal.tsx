import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, X } from 'lucide-react';
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
  initialService = 'Custom Business Website',
}) => {
  const serviceOptions = [
    'Custom Business Website',
    'Conversion Landing Page',
    'Branding & Logo Design',
    'Social Media & Graphic Design',
    'Complete Studio Package',
    'Website Redesign',
  ];

  const budgetOptions = [
    '$1,000 – $2,500',
    '$2,500 – $5,000',
    '$5,000+',
    'Flexible / Need Advice',
  ];

  const timelineOptions = [
    'ASAP (2–3 weeks)',
    'Next 1–2 months',
    'Flexible timeline',
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
    budgetTier: '$2,500 – $5,000',
    timeline: 'ASAP (2–3 weeks)',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [prevService, setPrevService] = useState(initialService);
  if (initialService !== prevService) {
    setPrevService(initialService);
    setFormData((prev) => ({ ...prev, serviceType: initialService }));
  }

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
      newErrors.businessName = 'Please enter your business or company name.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please briefly describe what you need.';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

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
            phone: formData.phone || 'Not provided',
            businessName: formData.businessName,
            serviceType: formData.serviceType,
            budgetTier: formData.budgetTier,
            timeline: formData.timeline,
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
            'Failed to transmit inquiry. Please try again.';
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
      await new Promise((r) => setTimeout(r, 500));
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      serviceType: 'Custom Business Website',
      businessName: '',
      industry: '',
      existingWebsite: '',
      projectDescription: '',
      fullName: '',
      email: '',
      phone: '',
      budgetTier: '$2,500 – $5,000',
      timeline: 'ASAP (2–3 weeks)',
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
      <div className="relative w-full max-w-xl md:max-w-2xl bg-[var(--bg-deep)] border border-[var(--border-subtle)] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[88vh] backdrop-blur-xl">
        
        {/* Header Strip */}
        <div className="shrink-0 px-5 sm:px-6 py-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[#021F33]/90 backdrop-blur-md z-10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-lime)]" />
            <span
              id="inquiry-modal-title"
              className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--color-heading)]"
            >
              Start a Project with A&amp;H Devlo
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] cursor-pointer"
            aria-label="Close project inquiry dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 md:p-8 overflow-y-auto overscroll-contain">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-950/60 border border-[var(--accent-blue)]/50 text-[var(--accent-blue)] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-heading)] tracking-tight font-heading">
                  Inquiry received!
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-body)] max-w-md mx-auto leading-relaxed font-body">
                  Thank you. Abdullah &amp; Hassan will review your project details directly and reply within 24 hours with an estimated scope and quote.
                </p>
              </div>

              {/* Inquiry Summary Review Box */}
              <div className="bg-[#021F33]/80 border border-[var(--border-subtle)] rounded-2xl p-4 text-left text-xs space-y-2 max-w-md mx-auto font-sans">
                <div className="text-[var(--accent-lime)] font-mono text-[11px] uppercase tracking-wider font-semibold">
                  Submission Summary
                </div>
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1 text-[var(--text-body)]">
                  <span className="text-[var(--text-muted)]">Service:</span>
                  <span className="font-semibold text-[var(--color-heading)]">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-subtle)] pb-1 text-[var(--text-body)]">
                  <span className="text-[var(--text-muted)]">Budget Tier:</span>
                  <span className="font-semibold text-[var(--color-heading)]">{formData.budgetTier}</span>
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

              {/* Follow-up channels */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl(`Hi A&H Devlo, I just submitted an inquiry for ${formData.businessName || 'my business'} regarding ${formData.serviceType}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Follow up on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#021F33] hover:bg-[#0B3B61] border border-[var(--border-subtle)] text-[var(--text-body)] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Tell us about your project.
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)] font-sans">
                  We reply within 24 hours with ideas, scope recommendations, and a flat project quote.
                </p>
              </div>

              {/* 1. Service Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold">
                  What do you need? <span className="text-[var(--accent-lime)]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.serviceType === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, serviceType: opt })}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer font-sans ${
                          isSelected
                            ? 'bg-[var(--accent-blue)] text-white border-[var(--accent-blue)] font-semibold shadow'
                            : 'bg-[#00141F] text-[var(--text-body)] border-[var(--border-subtle)] hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Budget Tier & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={formData.budgetTier}
                    onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--color-heading)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-[#00141F] text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--color-heading)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans"
                  >
                    {timelineOptions.map((t) => (
                      <option key={t} value={t} className="bg-[#00141F] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Business Information */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold">
                  Business Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      autoComplete="organization"
                      placeholder="Business or brand name *"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                        errors.businessName ? 'border-red-500' : 'border-[var(--border-subtle)]'
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
                      placeholder="Industry (e.g. Dining, Fashion, Fitness)"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border border-[var(--border-subtle)] text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    autoComplete="url"
                    placeholder="Existing website or Instagram handle (if any)"
                    value={formData.existingWebsite}
                    onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border border-[var(--border-subtle)] text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans"
                  />
                </div>
              </div>

              {/* 4. Project Description */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold">
                  What are you looking to achieve? <span className="text-[var(--accent-lime)]">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you'd like to build, any key features, or reference websites you like..."
                  value={formData.projectDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                    errors.projectDescription ? 'border-red-500' : 'border-[var(--border-subtle)]'
                  }`}
                />
                {errors.projectDescription && (
                  <span className="text-[11px] text-red-400 block">
                    {errors.projectDescription}
                  </span>
                )}
              </div>

              {/* 5. Contact Information */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-heading)] font-semibold">
                  Your Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Your name *"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                        errors.fullName ? 'border-red-500' : 'border-[var(--border-subtle)]'
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
                      autoComplete="email"
                      placeholder="Email address *"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans ${
                        errors.email ? 'border-red-500' : 'border-[var(--border-subtle)]'
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
                      type="tel"
                      autoComplete="tel"
                      placeholder="WhatsApp / Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#00141F] border border-[var(--border-subtle)] text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)] font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Error */}
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

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#D0FE1D] hover:brightness-105 disabled:opacity-50 text-[#00141F] font-bold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-lime-950/20 hover:scale-[1.01] flex items-center justify-center space-x-2 cursor-pointer font-heading"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-[#00141F]/40 border-t-[#00141F] rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
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

export default ProjectInquiryModal;
