'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitByWords } from '@/lib/splitText';
import { scents } from '@/lib/products';

gsap.registerPlugin(ScrollTrigger);

export default function Scents() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.querySelectorAll('.reveal, .reveal-scale, .scent-card').forEach((r) => {
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

      // Alternating scent cards slide from left/right — more physical
      const cards = el.querySelectorAll('.scent-card');
      cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.from(card, {
          x: fromLeft ? -100 : 100,
          autoAlpha: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        });

        // Scent profile tags stagger pop-in — more spring
        const tags = card.querySelectorAll('.scent-tag');
        gsap.from(tags, {
          scale: 0.7,
          autoAlpha: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: card, start: 'top 75%', once: true },
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
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="scents"
      className="py-32 md:py-48 bg-off-black overflow-hidden"
      aria-labelledby="scents-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <p className="reveal font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
            The Scents
          </p>
          <h2
            ref={headingRef}
            id="scents-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream max-w-2xl"
          >
            Three worlds. One for yours.
          </h2>
        </div>

        {/* Scent cards — staggered layout */}
        <div className="space-y-6 md:space-y-8">
          {scents.map((scent, i) => (
            <article
              key={scent.slug}
              className="scent-card group"
              data-cursor-label="View"
            >
              <Link
                href={`/shop/${scent.slug}`}
                className="block bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-300 gold-shadow-hover overflow-hidden"
                aria-label={`Explore ${scent.name} — ${scent.tagline}`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Color swatch column */}
                  <div
                    className={`relative h-48 md:h-auto min-h-[200px] flex items-end p-8 md:p-12 overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}
                    style={{ background: `${scent.color}` }}
                    aria-hidden="true"
                  >
                    {/* Subtle radial overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 30% 70%, rgba(197,165,114,0.15) 0%, transparent 60%)',
                      }}
                    />
                    <span className="relative font-serif text-5xl md:text-7xl italic text-white/10 select-none pointer-events-none">
                      {scent.name}
                    </span>
                  </div>

                  {/* Text column */}
                  <div
                    className={`p-8 md:p-12 lg:p-16 flex flex-col justify-between ${i % 2 === 1 ? 'md:order-1' : ''}`}
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#CFA855' }}
                          aria-hidden="true"
                        />
                        <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium">
                          {String(i + 1).padStart(2, '0')}
                        </p>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-cream mb-3">
                        {scent.name}
                      </h3>
                      <p className="font-sans text-sm tracking-wider uppercase text-muted mb-8 font-light">
                        {scent.tagline}
                      </p>
                      <p className="font-sans text-base text-cream-dim font-light leading-relaxed mb-8 max-w-md">
                        {scent.description}
                      </p>

                      {/* Scent profile */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {scent.profile.map((note) => (
                          <span
                            key={note}
                            className="scent-tag font-sans text-xs tracking-wider text-muted border border-gold/15 px-3 py-1"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mood + CTA */}
                    <div>
                      <p className="font-serif italic text-cream-dim text-sm mb-6">
                        &ldquo;{scent.mood}&rdquo;
                      </p>
                      <div className="inline-flex items-center gap-3 text-gold font-sans text-xs tracking-widest uppercase font-medium group-hover:gap-5 transition-all duration-300">
                        Explore {scent.name}
                        <span className="block w-8 h-px bg-gold transition-all duration-300" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
