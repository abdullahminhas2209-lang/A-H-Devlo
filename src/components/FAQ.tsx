import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        'Most small business websites are completed within 2 to 3 weeks from kickoff to launch. Single landing pages typically launch in 5 to 7 business days. We operate with focused sprints so your project never gets lost in an agency queue.',
    },
    {
      question: 'What is your pricing model and starting cost?',
      answer:
        'We work on fixed, transparent quotes so you never receive unexpected hourly invoices. Custom business websites start from $1,200, and standalone landing pages start from $650. Every quote includes design, development, mobile optimization, SEO foundations, and launch handover.',
    },
    {
      question: 'Who will I be working with directly?',
      answer:
        'You work directly with the two founders, Abdullah Minhas and Hamza. We handle both the design and the front-end engineering ourselves, ensuring clear communication, zero misunderstandings, and fast iteration.',
    },
    {
      question: 'Do I own the code, design, and domain after launch?',
      answer:
        'Yes, 100%. Upon completion, full ownership of the codebase, design files, domains, and hosting configurations belongs to you. We do not lock you into proprietary site builders or recurring hosting markups.',
    },
    {
      question: 'What technologies do you build with?',
      answer:
        'We build with modern web standards: semantic HTML, React 19, TypeScript, and Tailwind CSS, deployed on global edge networks like Vercel. This delivers sub-second page loads, 95+ mobile Lighthouse scores, and robust security with zero fragile plugins.',
    },
    {
      question: 'Are revisions and post-launch support included?',
      answer:
        'Yes. Every tier includes structured feedback rounds during design and development. After going live, we include 14 days of dedicated post-launch support to monitor analytics, verify contact forms, and make any final adjustments.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0C0D0E] border-t border-[#22252A] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-14">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-[#8E9298] font-body">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#F4F2ED] leading-tight font-heading">
            Clear answers about our studio.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9298] font-body leading-relaxed">
            Straightforward details on how we scope, price, build, and support our web projects.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#22252A] divide-y divide-[#22252A]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded py-1"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#F4F2ED] tracking-tight font-heading">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-full border border-[#22252A] text-[#8E9298] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#F4F2ED] bg-[#141618]' : ''
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
                    className="pt-4 text-sm sm:text-base text-[#8E9298] leading-relaxed font-body pr-8"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="p-6 rounded-xl bg-[#141618] border border-[#22252A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#8E9298] font-body">
            Have a question about your project requirements or current website?
          </p>
          <button
            onClick={onOpenInquiry}
            className="text-xs sm:text-sm font-semibold text-[#F4F2ED] hover:underline cursor-pointer"
          >
            Ask us directly →
          </button>
        </div>
      </div>
    </section>
  );
};
