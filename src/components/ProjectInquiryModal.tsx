import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import type { InquiryFormData } from '../types';
import { getMailtoUrl, getWhatsAppUrl } from '../config/contact';
import { WhatsAppIcon } from './icons';

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
    'Website Rebuild',
    'Other / Custom',
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 – $2,000',
    '$2,000 – $3,500',
    'Flexible / Discuss',
  ];

  const timelineOptions = [
    'Next 2–3 weeks',
    'Next month',
    'Flexible',
  ];

  const [formData, setFormData] = useState<InquiryFormData>({
    serviceType: initialService,
    fullName: '',
    email: '',
    businessName: '',
    budget: '$1,000 – $2,000',
    timeline: 'Next 2–3 weeks',
    projectDescription: '',
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project or website goals.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Build structured inquiry text
    const inquiryBody = `Project Inquiry from: ${formData.fullName} (${formData.email})
Business: ${formData.businessName || 'Not specified'}
Service: ${formData.serviceType}
Budget: ${formData.budget || 'Flexible'}
Timeline: ${formData.timeline || 'Flexible'}

Project Details:
${formData.projectDescription}`;

    // Trigger mailto link so the inquiry is directly opened in client's mail client
    const mailto = getMailtoUrl(`Website Project Inquiry — ${formData.fullName}`, inquiryBody);
    window.open(mailto, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 300);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      serviceType: 'Business Website',
      fullName: '',
      email: '',
      businessName: '',
      budget: '$1,000 – $2,000',
      timeline: 'Next 2–3 weeks',
      projectDescription: '',
      phone: '',
    });
    setErrors({});
    onClose();
  };

  const getWhatsAppInquiryMessage = () => {
    return `Hi Abdullah & Hamza, I'd like to discuss a ${formData.serviceType} project for ${formData.businessName || 'my business'}. My budget is ${formData.budget} and target timeline is ${formData.timeline}.`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-lg bg-[#0C0D0E] border border-[#22252A] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 shrink-0 px-5 sm:px-6 py-4 border-b border-[#22252A] flex items-center justify-between bg-[#141618]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F2ED]">
              Start a Project
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-[#8E9298] hover:text-[#F4F2ED] hover:bg-[#22252A] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="py-8 text-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#181A1D] border border-[#22252A] text-[#F4F2ED] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F2ED] tracking-tight font-heading">
                  Inquiry Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9298] max-w-sm mx-auto leading-relaxed font-body">
                  Thank you, {formData.fullName}. We review all project details directly and will reply within 24 hours.
                </p>
              </div>

              {/* Fast WhatsApp Followup Option */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl(getWhatsAppInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#141618] hover:bg-[#181A1D] text-[#F4F2ED] border border-[#22252A] text-xs font-semibold transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#F4F2ED]" />
                  <span>Send via WhatsApp as well</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h2 id="inquiry-modal-title" className="text-xl sm:text-2xl font-bold text-[#F4F2ED] tracking-tight font-heading">
                  Tell us about your project.
                </h2>
                <p className="mt-1 text-xs text-[#8E9298] font-body">
                  You work directly with founders Abdullah and Hamza. We respond within 24 hours with a transparent, fixed quote.
                </p>
              </div>

              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_input">Leave empty</label>
                <input
                  type="text"
                  id="hp_input"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Service Type Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase text-[#8E9298]">
                  Service Needed <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.serviceType === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, serviceType: opt })}
                        className={`p-2 rounded-md text-xs font-medium border text-center transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#22252A] text-[#F4F2ED] border-[#363A42]'
                            : 'bg-[#141618] text-[#8E9298] border-[#22252A] hover:text-[#F4F2ED]'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase text-[#8E9298]">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Elena Vance"
                    className="w-full px-3 py-2 rounded-md bg-[#141618] border border-[#22252A] text-sm text-[#F4F2ED] placeholder-[#8E9298]/50 focus:outline-none focus:border-[#F4F2ED]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="inquiry-email" className="block text-xs font-mono uppercase text-[#8E9298]">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 rounded-md bg-[#141618] border border-[#22252A] text-sm text-[#F4F2ED] placeholder-[#8E9298]/50 focus:outline-none focus:border-[#F4F2ED]"
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>
              </div>

              {/* Business Name */}
              <div className="space-y-1">
                <label htmlFor="inquiry-business" className="block text-xs font-mono uppercase text-[#8E9298]">
                  Business or Practice Name <span className="text-[#8E9298] text-[10px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="inquiry-business"
                  value={formData.businessName || ''}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Vance Architecture"
                  className="w-full px-3 py-2 rounded-md bg-[#141618] border border-[#22252A] text-sm text-[#F4F2ED] placeholder-[#8E9298]/50 focus:outline-none focus:border-[#F4F2ED]"
                />
              </div>

              {/* Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase text-[#8E9298]">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-[#141618] border border-[#22252A] text-xs text-[#F4F2ED] focus:outline-none focus:border-[#F4F2ED]"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-[#141618] text-[#F4F2ED]">{b}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase text-[#8E9298]">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-[#141618] border border-[#22252A] text-xs text-[#F4F2ED] focus:outline-none focus:border-[#F4F2ED]"
                  >
                    {timelineOptions.map((t) => (
                      <option key={t} value={t} className="bg-[#141618] text-[#F4F2ED]">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Goals */}
              <div className="space-y-1">
                <label htmlFor="inquiry-desc" className="block text-xs font-mono uppercase text-[#8E9298]">
                  Project Notes &amp; Goals <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="inquiry-desc"
                  required
                  rows={3}
                  value={formData.projectDescription}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                  }}
                  placeholder="Describe your current site or what you want to achieve with this website..."
                  className="w-full px-3 py-2 rounded-md bg-[#141618] border border-[#22252A] text-sm text-[#F4F2ED] placeholder-[#8E9298]/50 focus:outline-none focus:border-[#F4F2ED]"
                />
                {errors.projectDescription && <p className="text-[11px] text-red-400">{errors.projectDescription}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#8E9298]">
                  Direct review by Abdullah &amp; Hamza
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-[#F4F2ED] hover:bg-white text-[#0C0D0E] font-semibold text-xs sm:text-sm transition-all duration-150 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
