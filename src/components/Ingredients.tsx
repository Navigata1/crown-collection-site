'use client';

import { useEffect, useRef } from 'react';
import { ingredients } from '@/lib/products';

export default function Ingredients() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal, .reveal-scale');
            reveals.forEach((r) => r.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ingredients"
      className="py-32 md:py-48 bg-dark-card"
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
              id="ingredients-heading"
              className="reveal reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl text-cream"
            >
              Seven ingredients.
              <br />
              <span className="italic">Every one chosen.</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 font-sans text-cream-dim font-light leading-relaxed text-base md:text-lg">
            There are no fillers here. No water to thin it, no alcohol to dry you out.
            Every ingredient in Crown Collection exists because it earns its place.
          </p>
        </div>

        {/* Ingredient list */}
        <div className="space-y-0">
          {ingredients.map((ingredient, i) => (
            <div
              key={ingredient.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} border-t border-gold/10 last:border-b py-8 md:py-10`}
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
