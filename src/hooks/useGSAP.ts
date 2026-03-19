'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared GSAP hook for scroll-triggered reveals.
 * Replaces all IntersectionObserver implementations.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal(containerRef: React.RefObject<HTMLElement | null>) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Show everything immediately
      el.querySelectorAll('.reveal, .reveal-scale').forEach((r) => {
        (r as HTMLElement).style.opacity = '1';
        (r as HTMLElement).style.transform = 'none';
      });
      return;
    }

    hasRun.current = true;

    const reveals = el.querySelectorAll('.reveal');
    const scaleReveals = el.querySelectorAll('.reveal-scale');

    reveals.forEach((reveal) => {
      gsap.from(reveal, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: reveal,
          start: 'top 85%',
          once: true,
        },
      });
    });

    scaleReveals.forEach((reveal) => {
      gsap.from(reveal, {
        scale: 0.97,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: reveal,
          start: 'top 85%',
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (el.contains(t.trigger as Element)) t.kill();
      });
    };
  }, [containerRef]);
}

/**
 * Counter animation for price numbers.
 */
export function animateCounter(element: HTMLElement, target: number, duration = 1) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    element.textContent = `$${target}`;
    return;
  }

  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = `$${Math.round(obj.value)}`;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
  });
}
