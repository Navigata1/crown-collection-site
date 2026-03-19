'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { splitByChars } from '@/lib/splitText';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowTopRef = useRef<HTMLDivElement>(null);
  const glowBottomRef = useRef<HTMLDivElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const crownRef = useRef<HTMLSpanElement>(null);
  const collectionRef = useRef<HTMLSpanElement>(null);
  const taglinesRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Show everything immediately
      const els = containerRef.current?.querySelectorAll('.hero-animate');
      els?.forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Split text for Crown and Collection
    const crownChars = crownRef.current ? splitByChars(crownRef.current) : [];
    const collectionChars = collectionRef.current ? splitByChars(collectionRef.current) : [];

    // Set initial states
    gsap.set([glowTopRef.current, glowBottomRef.current], { autoAlpha: 0 });
    gsap.set(goldLineRef.current, { autoAlpha: 0, scaleX: 0 });
    gsap.set(eyebrowRef.current, { autoAlpha: 0, y: 20 });
    gsap.set(crownChars, { autoAlpha: 0, y: 60 });
    gsap.set(collectionChars, { autoAlpha: 0, y: 60, rotation: 8 });
    gsap.set(taglinesRef.current, { autoAlpha: 0 });
    gsap.set(ctasRef.current, { autoAlpha: 0, scale: 0.9 });
    gsap.set(scrollIndicatorRef.current, { autoAlpha: 0 });

    // Phase 0: Background glow orbs
    tl.to([glowTopRef.current, glowBottomRef.current], {
      autoAlpha: 1,
      duration: 1.2,
    }, 0);

    // Phase 1: Gold line
    tl.to(goldLineRef.current, {
      autoAlpha: 1,
      scaleX: 1,
      duration: 0.8,
    }, 0.2);

    // Phase 2: Eyebrow
    tl.to(eyebrowRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
    }, 0.4);

    // Phase 3: "Crown" chars
    tl.to(crownChars, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.04,
    }, 0.6);

    // Phase 4: "Collection" chars with rotation
    tl.to(collectionChars, {
      autoAlpha: 1,
      y: 0,
      rotation: 0,
      duration: 0.6,
      stagger: 0.03,
    }, 0.8);

    // Phase 5: Taglines fade in from sides
    if (taglinesRef.current) {
      const tagChildren = taglinesRef.current.children;
      if (tagChildren.length >= 3) {
        gsap.set(tagChildren[0], { autoAlpha: 0, x: -30 });
        gsap.set(tagChildren[2], { autoAlpha: 0, x: 30 });
        tl.to(taglinesRef.current, { autoAlpha: 1, duration: 0.1 }, 1.0);
        tl.to(tagChildren[0], { autoAlpha: 1, x: 0, duration: 0.6 }, 1.0);
        tl.to(tagChildren[2], { autoAlpha: 1, x: 0, duration: 0.6 }, 1.0);
      } else {
        tl.to(taglinesRef.current, { autoAlpha: 1, duration: 0.6 }, 1.0);
      }
    }

    // Phase 6: CTAs scale in
    tl.to(ctasRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
    }, 1.2);

    // Phase 7: Scroll indicator
    tl.to(scrollIndicatorRef.current, {
      autoAlpha: 1,
      duration: 0.6,
    }, 1.4);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-off-black"
      aria-label="Hero"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gold glow — top right */}
        <div
          ref={glowTopRef}
          className="hero-animate absolute -top-1/4 right-0 w-[60vw] h-[60vw] rounded-full opacity-[0.07] hero-glow-orb"
          style={{ background: 'radial-gradient(circle, #CFA855 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        {/* Radial glow — bottom left */}
        <div
          ref={glowBottomRef}
          className="hero-animate absolute bottom-0 -left-1/4 w-[50vw] h-[50vw] rounded-full opacity-[0.05] hero-glow-orb"
          style={{ background: 'radial-gradient(circle, #CFA855 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        {/* Thin horizontal gold line */}
        <div
          ref={goldLineRef}
          className="hero-animate absolute top-1/2 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(to right, transparent, #CFA855 30%, #CFA855 70%, transparent)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <p ref={eyebrowRef} className="hero-animate font-sans text-xs tracking-widest uppercase text-gold mb-8 font-medium">
          Handcrafted in Small Batches
        </p>

        {/* Headline */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-8">
          <span ref={crownRef} className="block text-cream">Crown</span>
          <span ref={collectionRef} className="block gold-text italic">Collection</span>
        </h1>

        {/* Taglines */}
        <div ref={taglinesRef} className="hero-animate flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-14">
          <span className="font-serif italic text-cream-dim text-lg md:text-xl">
            Embrace the Elegance
          </span>
          <span className="hidden sm:block w-px h-8 bg-gold/30" aria-hidden="true" />
          <span className="font-serif italic text-cream-dim text-lg md:text-xl">
            Indulge in the Majesty
          </span>
        </div>

        {/* CTAs */}
        <div ref={ctasRef} className="hero-animate flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            data-magnetic
            className="inline-flex items-center justify-center bg-gold text-off-black text-xs tracking-widest uppercase font-sans font-semibold px-10 py-4 hover:bg-gold-light active:scale-95 transition-all duration-200 min-w-[180px]"
          >
            Explore the Collection
          </Link>
          <Link
            href="/#story"
            data-magnetic
            className="inline-flex items-center justify-center border border-gold/40 text-cream text-xs tracking-widest uppercase font-sans font-medium px-10 py-4 hover:border-gold hover:text-gold active:scale-95 transition-all duration-200 min-w-[180px]"
          >
            Our Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="hero-animate absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent" aria-hidden="true" />
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className="text-gold animate-bounce"
              aria-label="Scroll down"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
