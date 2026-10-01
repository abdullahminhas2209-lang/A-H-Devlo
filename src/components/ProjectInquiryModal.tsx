import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, X } from 'lucide-react';
import type { InquiryFormData } from '../types';
import { CONTACT_CONFIG, getMailtoUrl, getWhatsAppUrl } from '../config/contact';
import { WhatsAppIcon, InstagramIcon } from './icons';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Silent spam bot rejection via honeypot
    if (honeypot) {
      console.warn('Bot submission blocked.');
      setIsSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    // Transmit inquiry (simulated studio pipeline)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Compact Dialog Box with guaranteed viewport height fit & permanent sticky cross button */}
      <div className="relative w-full max-w-lg bg-[#0F121A] border border-[#262F44] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] sm:max-h-[88vh] flex flex-col">
        {/* Sticky Header Strip — ALWAYS visible regardless of scroll or zoom level */}
        <div className="sticky top-0 z-30 shrink-0 px-5 sm:px-6 py-3.5 sm:py-4 border-b border-[#232938] flex items-center justify-between bg-[#121622] shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300">
              Project Inquiry
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
            aria-label="Close project inquiry dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-heading">
                  Your project inquiry has been received.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-body">
                  We will review your requirements and respond within 24 hours with timeline and scope recommendations.
                </p>
              </div>

              {/* Inquiry Summary Review Box */}
              <div className="bg-[#141824] border border-[#232938] rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                  Summary of Submission
                </div>
                <div className="flex justify-between border-b border-[#22283A] pb-1 text-slate-300">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-semibold text-white">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between border-b border-[#22283A] pb-1 text-slate-300">
                  <span className="text-slate-400">Business:</span>
                  <span className="font-semibold text-white">{formData.businessName}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Contact:</span>
                  <span className="font-semibold text-white">{formData.fullName} ({formData.email})</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Heading */}
              <div>
                <h2 id="inquiry-modal-title" className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-heading">
                  Let&apos;s build something for your business.
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 font-body">
                  Provide a few details below or email directly at{' '}
                  <a href={getMailtoUrl()} className="text-cyan-400 hover:underline">
                    {CONTACT_CONFIG.email}
                  </a>.
                </p>
              </div>

              {/* Honeypot Anti-Spam Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_website">Do not fill this field</label>
                <input
                  type="text"
                  id="hp_website"
                  name="hp_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* 1. What do you need? */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  What do you need? <span className="text-cyan-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.serviceType === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, serviceType: opt })}
                        className={`p-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md shadow-cyan-950/30'
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
              <div className="space-y-2.5">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Business Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label htmlFor="field-businessName" className="sr-only">
                      Business Name
                    </label>
                    <input
                      id="field-businessName"
                      type="text"
                      placeholder="Business name *"
                      aria-required="true"
                      aria-invalid={!!errors.businessName}
                      aria-describedby={errors.businessName ? 'error-businessName' : undefined}
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      className={`w-full px-3.5 py-2 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                        errors.businessName ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.businessName && (
                      <span id="error-businessName" role="alert" className="text-[11px] text-red-400 mt-1 block">
                        {errors.businessName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="field-industry" className="sr-only">
                      Industry
                    </label>
                    <input
                      id="field-industry"
                      type="text"
                      placeholder="Industry (e.g. Dining, Practice, Real Estate)"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-[#141824] border border-[#232938] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="field-website" className="sr-only">
                    Existing Website or Social Link
                  </label>
                  <input
                    id="field-website"
                    type="text"
                    placeholder="Existing website or social link (if any)"
                    value={formData.existingWebsite}
                    onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#141824] border border-[#232938] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* 3. Tell us about your project */}
              <div className="space-y-1.5">
                <label htmlFor="field-description" className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Tell us about your project <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="field-description"
                  rows={2.5}
                  placeholder="What is your main goal? What features do you need? Any references or timelines?"
                  aria-required="true"
                  aria-invalid={!!errors.projectDescription}
                  aria-describedby={errors.projectDescription ? 'error-description' : undefined}
                  value={formData.projectDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                  }}
                  className={`w-full px-3.5 py-2 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none ${
                    errors.projectDescription ? 'border-red-500' : 'border-[#232938]'
                  }`}
                />
                {errors.projectDescription && (
                  <span id="error-description" role="alert" className="text-[11px] text-red-400 block">
                    {errors.projectDescription}
                  </span>
                )}
              </div>

              {/* 4. Contact Information */}
              <div className="space-y-2">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Contact Information
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label htmlFor="field-fullName" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="field-fullName"
                      type="text"
                      placeholder="Your name *"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-3.5 py-2 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                        errors.fullName ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.fullName && (
                      <span id="error-fullName" role="alert" className="text-[11px] text-red-400 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="field-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      placeholder="Email address *"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-3.5 py-2 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                        errors.email ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.email && (
                      <span id="error-email" role="alert" className="text-[11px] text-red-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="field-phone" className="sr-only">
                      Phone or WhatsApp
                    </label>
                    <input
                      id="field-phone"
                      type="text"
                      placeholder="WhatsApp / Phone *"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-3.5 py-2 rounded-lg bg-[#141824] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 ${
                        errors.phone ? 'border-red-500' : 'border-[#232938]'
                      }`}
                    />
                    {errors.phone && (
                      <span id="error-phone" role="alert" className="text-[11px] text-red-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-cyan-950/40 flex items-center justify-center space-x-2 cursor-pointer font-heading focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin"></span>
                      <span>Submitting Inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>

              {/* Direct Alternative Contacts Strip */}
              <div className="pt-2 border-t border-[#1F2636] flex flex-wrap items-center justify-between gap-2.5 text-xs text-slate-400">
                <span className="font-mono text-[10px]">Or contact directly:</span>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={getMailtoUrl()}
                    className="inline-flex items-center space-x-1.5 text-cyan-400 hover:underline focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded px-1"
                    aria-label={`Email A&H Devlo directly at ${CONTACT_CONFIG.email}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{CONTACT_CONFIG.email}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl("Hi A&H Devlo, I would like to discuss a website project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-emerald-400 hover:underline focus:outline-none focus:ring-1 focus:ring-emerald-400 rounded px-1"
                    aria-label="Chat with A&H Devlo on WhatsApp (opens in a new tab)"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={CONTACT_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-pink-400 hover:underline focus:outline-none focus:ring-1 focus:ring-pink-400 rounded px-1"
                    aria-label="A&H Devlo on Instagram (opens in a new tab)"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                    <span>@{CONTACT_CONFIG.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
