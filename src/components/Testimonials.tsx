import React from 'react';
import { Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        '[ADD REAL TESTIMONIAL 1 — "A&H Devlo transformed our online presence completely. Inquiries increased significantly within the first month after our website launch."]',
      client: '[ADD CLIENT NAME 1]',
      role: '[FOUNDER / OWNER]',
      business: '[ADD BUSINESS NAME 1]',
      category: 'Hospitality & Dining',
      status: 'VERIFIED CLIENT',
    },
    {
      id: 2,
      quote:
        '[ADD REAL TESTIMONIAL 2 — "Working with A&H Devlo was seamless. They delivered on schedule in 2 weeks and our new site looks ten times more professional than our competitors."]',
      client: '[ADD CLIENT NAME 2]',
      role: '[MANAGING DIRECTOR]',
      business: '[ADD BUSINESS NAME 2]',
      category: 'Advisory & Consulting',
      status: 'VERIFIED CLIENT',
    },
    {
      id: 3,
      quote:
        '[ADD REAL TESTIMONIAL 3 — "The speed and mobile responsiveness are outstanding. Zero fluff, transparent communication, and an exceptional final website."]',
      client: '[ADD CLIENT NAME 3]',
      role: '[STUDIO LEAD]',
      business: '[ADD BUSINESS NAME 3]',
      category: 'Health & Fitness',
      status: 'VERIFIED CLIENT',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#030B14] relative">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-14 md:mb-20 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-[0.2em] text-cyan-400 uppercase">
              <span className="w-5 h-[1.5px] bg-cyan-400 inline-block"></span>
              <span>04 / CLIENT REVIEWS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Trusted by business owners.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed font-body">
              Real feedback from clients who partnered with A&amp;H Devlo to build a stronger digital presence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.id} delayMs={index * 120}>
              <div className="h-full p-7 rounded-2xl bg-[#081726]/85 border border-[#14304D] hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-[10px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic font-body">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#14304D] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-white block font-heading">
                      {item.client}
                    </span>
                    <span className="text-xs text-slate-400 font-body block mt-0.5">
                      {item.role} • {item.business}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
