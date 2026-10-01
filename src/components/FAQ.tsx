import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FAQProps {
  onOpenInquiry: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How long does a website take to design and launch?',
      answer:
        'Most small business websites and landing pages are completed within 2 to 3 weeks from kickoff to deployment. Standalone landing pages can often launch in 5 to 7 business days. We maintain a strict single-client sprint schedule to avoid lengthy agency delays.',
    },
    {
      question: 'What is your pricing model or starting cost?',
      answer:
        'We work on fixed, transparent project quotes so you never face surprise hourly invoices or hidden maintenance fees. Projects typically start from [ADD YOUR STARTING PRICE, e.g. $1,800] depending on page count and custom integrations. Every quote includes design, development, SEO setup, and launch support.',
    },
    {
      question: 'Do I retain full ownership of my website and domain?',
      answer:
        'Yes, 100%. Upon project completion, full ownership of code, design files, domain connections, and hosting accounts is transferred directly to your business. We do not lock you into proprietary site builders or recurring hosting markups.',
    },
    {
      question: 'What do I need to prepare before we start?',
      answer:
        'Only the essentials: a brief overview of your business, any current brand assets (logo, brand colors, photography if available), and your primary service offerings. If you do not have complete copywriting yet, we provide structured questionnaires and copy direction to guide you.',
    },
    {
      question: 'What technologies and platforms do you use?',
      answer:
        'We build using modern web standards—semantic HTML5, React, TypeScript, and modern CSS—deployed on global edge content delivery networks like Vercel. This architecture guarantees sub-second page loads, 95+ mobile Lighthouse performance, and zero dependency on vulnerable third-party plugins.',
    },
    {
      question: 'Are revisions and post-launch support included?',
      answer:
        'Yes. Every project includes structured feedback rounds during both design and development stages. After going live, we include 14 days of complimentary support to handle any adjustments, verify analytics, and ensure everything runs smoothly.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#030B14] relative scroll-mt-24 sm:scroll-mt-28">
      {/* Section Top Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-14 md:mb-18 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>06 / COMMON QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Frequently asked questions.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed font-body">
              Clear, transparent answers about our process, timelines, pricing model, and deliverables.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal key={idx} delayMs={idx * 60}>
                <div className="rounded-2xl bg-[#081726]/80 border border-[#14304D] hover:border-cyan-500/40 transition-colors overflow-hidden">
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight font-heading">
                      {faq.question}
                    </span>
                    <span
                      className={`p-2 rounded-full bg-[#0E243A] text-cyan-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-300' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-slate-300 leading-relaxed font-body border-t border-[#14304D]/60 pt-4 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <ScrollReveal delayMs={300}>
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#081726] to-[#0B1E32] border border-[#163554] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                  Have a specific question about your project?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-body">
                  We are happy to review your current site and discuss requirements directly.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer font-heading shadow"
              >
                Ask a Question
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
