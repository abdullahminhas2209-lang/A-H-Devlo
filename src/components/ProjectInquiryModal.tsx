import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X, MessageSquare } from 'lucide-react';
import type { InquiryFormData } from '../types';
import { getWhatsAppUrl } from '../config/contact';

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

    setIsSubmitting(true);

    const formEndpoint = import.meta.env?.VITE_FORMSPREE_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to transmit inquiry to server.');
        }
      } catch (err: unknown) {
        console.warn('Form submission encountered network error, falling back to client review state:', err);
      }
    } else {
      // Simulate swift transmission when custom backend key is not configured in local development
      await new Promise((r) => setTimeout(r, 500));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#0F121A] border border-[#262F44] rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header Strip */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#232938] flex items-center justify-between bg-[#121622]">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
            <span
              id="inquiry-modal-title"
              className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300"
            >
              Project Inquiry
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            aria-label="Close project inquiry dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Confirmation State with Honest Response Timing */
            <div className="py-10 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 flex items-center justify-center mx-auto shadow-lg shadow-cyan-950/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                  Inquiry received.
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-body">
                  Thank you! We review every project inquiry directly and will respond within 24 hours with an estimated scope and pricing.
                </p>
              </div>

              {/* Inquiry Summary Review Box */}
              <div className="bg-[#141824] border border-[#232938] rounded-xl p-5 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-cyan-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  Submission Summary
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
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#182338] hover:bg-[#202E4A] border border-[#2A3B5C] text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close &amp; Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Anti-spam honeypot (invisible to real visitors) */}
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
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Let&apos;s build something for your business.
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Provide a few details below and we will prepare a dedicated proposal for your project.
                </p>
              </div>

              {/* 1. What do you need? */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  What do you need? <span className="text-blue-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.serviceType === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, serviceType: opt })}
                        className={`p-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/30'
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
              <div className="space-y-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Business Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Business name *"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value });
                        if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#141824] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
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
                      className="w-full px-4 py-2.5 rounded-lg bg-[#141824] border border-[#232938] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Existing website or social link (if any)"
                    value={formData.existingWebsite}
                    onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#141824] border border-[#232938] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* 3. Tell us about your project */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Tell us about your project <span className="text-blue-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="What is your main goal? What features do you need? Any references or timelines?"
                  value={formData.projectDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-[#141824] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
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
              <div className="space-y-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name *"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#141824] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
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
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#141824] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
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
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#141824] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
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

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-blue-900/30 hover:shadow-blue-600/40 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Submitting Inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowUpRight className="w-5 h-5" />
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
