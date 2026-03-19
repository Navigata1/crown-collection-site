'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitByWords } from '@/lib/splitText';
import { ingredients } from '@/lib/products';

gsap.registerPlugin(ScrollTrigger);

export default function Ingredients() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.querySelectorAll('.reveal, .reveal-scale, .ingredient-row').forEach((r) => {
        (r as HTMLElement).style.opacity = '1';
        (r as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
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

      // Each ingredient row slides in from alternating sides
      const rows = el.querySelectorAll('.ingredient-row');
      rows.forEach((row, i) => {
        gsap.from(row, {
          x: i % 2 === 0 ? -60 : 60,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: row, start: 'top 88%', once: true },
        });
      });

      // Remaining reveals
      el.querySelectorAll('.reveal').forEach((reveal) => {
        gsap.from(reveal, {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: reveal, start: 'top 85%', once: true },
        });
      });

      // Gold rule dividers
      el.querySelectorAll('.gold-rule').forEach((rule) => {
        gsap.from(rule, {
          scaleX: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: rule, start: 'top 90%', once: true },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ingredients"
      className="py-32 md:py-48 section-bg-card-gradient overflow-x-hidden"
      aria-labelledby="ingredients-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 md:mb-28 items-end">
          <div>
            <p className="reveal font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              The Formula
            </p>
            <h2
              ref={headingRef}
              id="ingredients-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream"
            >
              Seven ingredients. Every one chosen.
            </h2>
          </div>
          <p className="reveal font-sans text-cream-dim font-light leading-relaxed text-base md:text-lg">
            There are no fillers here. No water to thin it, no alcohol to dry you out.
            Every ingredient in Crown Collection exists because it earns its place.
          </p>
        </div>

        {/* Ingredient list */}
        <div className="space-y-0">
          {ingredients.map((ingredient, i) => (
            <div
              key={ingredient.name}
              className="ingredient-row border-t border-gold/10 last:border-b py-8 md:py-10"
            >
              <div className="grid md:grid-cols-3 gap-4 md:gap-12 items-start">
                {/* Number + Name */}
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-xs text-muted font-light tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-cream">{ingredient.name}</h3>
                    {ingredient.origin && (
                      <p className="font-sans text-xs tracking-widest uppercase text-gold mt-1 font-light">
                        {ingredient.origin}
                      </p>
                    )}
                  </div>
                </div>

                {/* Rationale */}
                <p className="font-sans text-cream-dim font-light leading-relaxed text-sm md:text-base md:col-span-2">
                  {ingredient.why}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-16 text-center">
          <div className="gold-rule max-w-sm mx-auto mb-8" aria-hidden="true" />
          <p className="font-serif italic text-cream-dim text-lg">
            Handcrafted. Uncompromised. For you.
          </p>
        </div>
      </div>
    </section>
  );
}
