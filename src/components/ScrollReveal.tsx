import React, { useEffect, useRef } from 'react';

// Single shared observer across the entire application to eliminate CPU overhead
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (typeof window === 'undefined') return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px',
      }
    );
  }
  return sharedObserver;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
}) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // If already revealed or user prefers reduced motion
    if (el.classList.contains('revealed') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }

    const observer = getSharedObserver();
    if (observer) {
      observer.observe(el);
    } else {
      el.classList.add('revealed');
    }

    return () => {
      if (el && sharedObserver) {
        sharedObserver.unobserve(el);
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case 'down':
        return 'scroll-reveal-down';
      case 'left':
        return 'scroll-reveal-left';
      case 'right':
        return 'scroll-reveal-right';
      case 'fade':
        return 'scroll-reveal-fade';
      case 'up':
      default:
        return 'scroll-reveal-up';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`scroll-reveal ${getDirectionClass()} ${className}`}
    >
      {children}
    </div>
  );
};
