'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitByWords } from '@/lib/splitText';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const vertLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.querySelectorAll('.reveal, .reveal-scale').forEach((r) => {
        (r as HTMLElement).style.opacity = '1';
        (r as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Left text slides from left
      gsap.from(leftColRef.current, {
        x: -60,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: leftColRef.current, start: 'top 85%', once: true },
      });

      // Heading word animation
      if (headingRef.current) {
        const words = splitByWords(headingRef.current);
        gsap.from(words, {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
        });
      }

      // Right card slides from right
      gsap.from(rightColRef.current, {
        x: 60,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: rightColRef.current, start: 'top 85%', once: true },
      });

      // Gold corner accents draw in
      const corners = el.querySelectorAll('.corner-accent');
      corners.forEach((corner) => {
        gsap.from(corner, {
          scaleX: 0,
          scaleY: 0,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: corner, start: 'top 90%', once: true },
        });
      });

      // Vertical gold line parallax
      if (vertLineRef.current) {
        gsap.to(vertLineRef.current, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Reveal remaining elements
      el.querySelectorAll('.reveal').forEach((reveal) => {
        gsap.from(reveal, {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: reveal, start: 'top 85%', once: true },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-32 md:py-48 overflow-hidden section-bg-gradient"
      aria-labelledby="about-heading"
    >
      {/* Decorative vertical line */}
      <div
        ref={vertLineRef}
        className="absolute left-8 md:left-20 top-0 bottom-0 w-px opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #CFA855 30%, #CFA855 70%, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
          {/* Left — text */}
          <div ref={leftColRef}>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              The Story
            </p>
            <h2
              ref={headingRef}
              id="about-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream mb-10"
            >
              Made by hand. Worn like a crown.
            </h2>
            <div className="space-y-6 text-cream-dim font-sans font-light leading-relaxed text-base md:text-lg">
              <p>
                Crown Collection began with a simple belief: that what you put on your skin
                should be worthy of you. Not mass-produced. Not compromised. Crafted in limited
                batches, with every ingredient chosen for a reason.
              </p>
              <p>
                Each jar of whipped body butter is handcrafted — blended, poured, and finished
                by hand. The result is a texture that no machine has yet replicated. Airy.
                Rich. Something that disappears into the skin rather than sitting on top of it.
                When a batch is gone, it is gone.
              </p>
              <p>
                This is rare skincare — for Kings and Queens who know the difference between
                luxury and the performance of it.
              </p>
            </div>
          </div>

          {/* Right — asymmetric decorative block */}
          <div ref={rightColRef} className="relative">
            {/* Large dark card */}
            <div className="bg-dark-card gold-shadow p-12 md:p-16 relative">
              {/* Corner accent */}
              <div className="corner-accent absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/40 origin-top-right" aria-hidden="true" />
              <div className="corner-accent absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/40 origin-bottom-left" aria-hidden="true" />

              <div className="space-y-10">
                {[
                  { label: 'Limited batches', detail: 'When it is gone, it is gone' },
                  { label: 'No fillers', detail: 'Zero water, zero alcohol, zero compromise' },
                  { label: 'Rare ingredients', detail: 'Each chosen for a specific purpose' },
                  { label: 'Four scents', detail: 'Composed to evolve with your skin' },
                ].map(({ label, detail }) => (
                  <div key={label} className="border-b border-gold/10 pb-8 last:border-0 last:pb-0">
                    <p className="font-serif text-xl text-gold mb-1">{label}</p>
                    <p className="font-sans text-sm text-muted font-light">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent element */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 border border-gold/20"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
