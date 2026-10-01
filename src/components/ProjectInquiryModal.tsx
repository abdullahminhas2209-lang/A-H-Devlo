import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import type { InquiryFormData } from '../types';

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

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift, realistic studio API transmission
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0F121A] border border-[#262F44] rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header Strip */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#232938] flex items-center justify-between bg-[#121622]">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Project Inquiry
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Confirmation State per Section 19 */
            <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Your project inquiry has been received.
                </h3>
                <p className="text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                  We&apos;ll review the details and get back to you.
                </p>
              </div>

              {/* Inquiry Summary Review Box */}
              <div className="bg-[#141824] border border-[#232938] rounded-xl p-5 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
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

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
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
