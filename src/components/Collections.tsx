'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitByWords } from '@/lib/splitText';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: 'king',
    crown: 'King Scent',
    headline: 'Indulge in the Majesty',
    descriptor: "Men's Collection",
    body:
      'Built for those who move through the world with quiet authority. Dark woods. Grounding amber. Scents that settle into the skin like a second nature — commanding without announcement.',
    cta: 'Shop the King Scent Line',
    align: 'left',
  },
  {
    id: 'queen',
    crown: 'Queen Scent',
    headline: 'Embrace the Elegance',
    descriptor: "Women's Collection",
    body:
      'For those who leave warmth in every room they enter. Silken vanilla, luminous florals, and clean musks composed to evolve with your skin throughout the day.',
    cta: 'Shop the Queen Scent Line',
    align: 'right',
  },
];

export default function Collections() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const kingCardRef = useRef<HTMLDivElement>(null);
  const queenCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.querySelectorAll('.reveal, .reveal-scale').forEach((r) => {
        (r as HTMLElement).style.opacity = '1';
        (r as HTMLElement).style.transform = 'none';
      });
      if (kingCardRef.current) kingCardRef.current.style.opacity = '1';
      if (queenCardRef.current) queenCardRef.current.style.opacity = '1';
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

      // King card from left — heavier, more physical
      gsap.from(kingCardRef.current, {
        x: -100,
        scale: 0.97,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: kingCardRef.current, start: 'top 85%', once: true },
      });

      // Queen card from right — offset timing for asymmetric drama
      gsap.from(queenCardRef.current, {
        x: 100,
        scale: 0.97,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: queenCardRef.current, start: 'top 82%', once: true },
      });

      // Reveals
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
      id="collections"
      className="py-32 md:py-48 bg-off-black overflow-hidden"
      aria-labelledby="collections-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <p className="reveal font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
            The Collections
          </p>
          <h2
            ref={headingRef}
            id="collections-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream max-w-2xl"
          >
            A crown for every throne. Which is yours?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* King Scent — larger card */}
          <div ref={kingCardRef} className="md:col-span-1 md:row-span-1">
            <Link
              href="/shop"
              className="group block h-full bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-300 gold-shadow-hover overflow-hidden"
              aria-label="Shop King Scent — Men's Collection"
              data-cursor-label="Shop"
            >
              {/* Top band */}
              <div
                className="relative h-40 md:h-56 flex items-end p-8 md:p-10"
                style={{
                  background:
                    'linear-gradient(145deg, #1A1008 0%, #0F0A05 60%, #0A0A0A 100%)',
                }}
                aria-hidden="true"
              >
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/30" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/30" />
                <span className="font-serif text-6xl md:text-8xl italic text-white/5 select-none leading-none">
                  King
                </span>
              </div>

              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium">
                      {collections[0].descriptor}
                    </p>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {collections[0].crown}
                  </h3>
                  <p className="font-sans text-sm tracking-wider uppercase text-muted mb-6 font-light">
                    {collections[0].headline}
                  </p>
                  <p className="font-sans text-base text-cream-dim font-light leading-relaxed max-w-sm">
                    {collections[0].body}
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-3 text-gold font-sans text-xs tracking-widest uppercase font-medium group-hover:gap-5 transition-all duration-300">
                  {collections[0].cta}
                  <span className="block w-8 h-px bg-gold transition-all duration-300" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </div>

          {/* Queen Scent — offset card */}
          <div ref={queenCardRef} className="md:mt-16">
            <Link
              href="/shop"
              className="group block h-full bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-300 gold-shadow-hover overflow-hidden"
              aria-label="Shop Queen Scent — Women's Collection"
              data-cursor-label="Shop"
            >
              <div
                className="relative h-40 md:h-56 flex items-end p-8 md:p-10"
                style={{
                  background:
                    'linear-gradient(145deg, #1A0A18 0%, #0F0508 60%, #0A0A0A 100%)',
                }}
                aria-hidden="true"
              >
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/30" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/30" />
                <span className="font-serif text-6xl md:text-8xl italic text-white/5 select-none leading-none self-end ml-auto">
                  Queen
                </span>
              </div>

              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium">
                      {collections[1].descriptor}
                    </p>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {collections[1].crown}
                  </h3>
                  <p className="font-sans text-sm tracking-wider uppercase text-muted mb-6 font-light">
                    {collections[1].headline}
                  </p>
                  <p className="font-sans text-base text-cream-dim font-light leading-relaxed max-w-sm">
                    {collections[1].body}
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-3 text-gold font-sans text-xs tracking-widest uppercase font-medium group-hover:gap-5 transition-all duration-300">
                  {collections[1].cta}
                  <span className="block w-8 h-px bg-gold transition-all duration-300" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="gold-rule max-w-sm mx-auto mt-20 md:mt-28" aria-hidden="true" />
      </div>
    </section>
  );
}
