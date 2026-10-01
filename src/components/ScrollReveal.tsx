import React, { useEffect, useRef, useState } from 'react';

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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user's OS accessibility preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    }

    if (motionQuery.matches) {
      return () => {
        if (motionQuery.removeEventListener) {
          motionQuery.removeEventListener('change', handleMotionChange);
        }
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      }
    };
  }, []);

  const getTransform = () => {
    if (prefersReducedMotion) {
      return 'opacity-100 transform-none';
    }
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-8 scale-[0.99]';
      case 'down':
        return 'opacity-0 -translate-y-8 scale-[0.99]';
      case 'left':
        return 'opacity-0 translate-x-8 scale-[0.99]';
      case 'right':
        return 'opacity-0 -translate-x-8 scale-[0.99]';
      case 'fade':
      default:
        return 'opacity-0 scale-[0.98]';
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};
