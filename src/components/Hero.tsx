'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
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
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
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
          className="absolute -top-1/4 right-0 w-[60vw] h-[60vw] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #CFA855 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        {/* Radial glow — bottom left */}
        <div
          className="absolute bottom-0 -left-1/4 w-[50vw] h-[50vw] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #CFA855 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        {/* Thin horizontal gold line */}
        <div className="absolute top-1/2 left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(to right, transparent, #CFA855 30%, #CFA855 70%, transparent)' }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <p className="reveal reveal-delay-1 font-sans text-xs tracking-widest uppercase text-gold mb-8 font-medium">
          Handcrafted in Small Batches
        </p>

        {/* Headline */}
        <h1 className="reveal reveal-delay-2 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-8">
          <span className="block text-cream">Crown</span>
          <span className="block gold-text italic">Collection</span>
        </h1>

        {/* Taglines */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-14">
          <span className="font-serif italic text-cream-dim text-lg md:text-xl">
            Embrace the Elegance
          </span>
          <span className="hidden sm:block w-px h-8 bg-gold/30" aria-hidden="true" />
          <span className="font-serif italic text-cream-dim text-lg md:text-xl">
            Indulge in the Majesty
          </span>
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-gold text-off-black text-xs tracking-widest uppercase font-sans font-semibold px-10 py-4 hover:bg-gold-light active:scale-95 transition-all duration-200 min-w-[180px]"
          >
            Explore the Collection
          </Link>
          <Link
            href="/#story"
            className="inline-flex items-center justify-center border border-gold/40 text-cream text-xs tracking-widest uppercase font-sans font-medium px-10 py-4 hover:border-gold hover:text-gold active:scale-95 transition-all duration-200 min-w-[180px]"
          >
            Our Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-5 absolute bottom-12 left-1/2 -translate-x-1/2">
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
