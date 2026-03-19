'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Scent, Size, Ingredient } from '@/lib/products';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  scent: Scent;
  sizes: Size[];
  ingredients: Ingredient[];
}

export default function ScentPageClient({ scent, sizes, ingredients }: Props) {
  const [selectedSize, setSelectedSize] = useState<Size>(sizes[1]); // default: Everyday
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevSizeRef = useRef<string>(sizes[1].size);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.querySelectorAll('.reveal, .reveal-scale').forEach((r) => {
        (r as HTMLElement).style.visibility = 'visible';
        (r as HTMLElement).style.opacity = '1';
        (r as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Stagger reveal on load
      const reveals = el.querySelectorAll('.reveal');
      gsap.from(reveals, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1,
      });

      const scaleReveals = el.querySelectorAll('.reveal-scale');
      gsap.from(scaleReveals, {
        scale: 0.97,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Scent profile tags pop-in
      const tags = el.querySelectorAll('.scent-tag');
      gsap.from(tags, {
        scale: 0.8,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'back.out(1.4)',
        delay: 0.6,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Size selector spring animation
  useEffect(() => {
    if (selectedSize.size === prevSizeRef.current) return;
    prevSizeRef.current = selectedSize.size;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const priceEl = sectionRef.current?.querySelector('.price-display');
    if (priceEl) {
      gsap.fromTo(priceEl, 
        { scale: 1.2, color: '#EDD37A' },
        { scale: 1, color: '#CFA855', duration: 0.5, ease: 'back.out(2.5)' }
      );
    }
    // Spring the selected size button
    const selectedBtn = sectionRef.current?.querySelector('[aria-pressed="true"]');
    if (selectedBtn) {
      gsap.fromTo(selectedBtn,
        { scale: 0.95 },
        { scale: 1, duration: 0.4, ease: 'back.out(3)' }
      );
    }
  }, [selectedSize]);

  return (
    <div ref={sectionRef}>
      {/* Hero */}
      <div className="relative min-h-[55dvh] flex items-end overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: scent.color }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Large watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-serif text-[20vw] italic text-white/5 whitespace-nowrap">
            {scent.name}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-40 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="reveal mb-8">
            <ol className="flex items-center gap-2 list-none">
              <li>
                <Link href="/shop" className="font-sans text-xs tracking-widest uppercase text-cream-dim hover:text-gold transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="text-muted mx-1">/</span>
              </li>
              <li>
                <span className="font-sans text-xs tracking-widest uppercase text-gold">
                  {scent.name}
                </span>
              </li>
            </ol>
          </nav>

          <p className="reveal font-sans text-xs tracking-widest uppercase text-gold mb-4 font-medium">
            {scent.tagline}
          </p>
          <h1 className="reveal font-serif text-5xl md:text-7xl lg:text-8xl text-cream">
            {scent.name}
          </h1>
        </div>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — description */}
          <div>
            <p className="reveal font-sans text-cream-dim font-light leading-relaxed text-base md:text-lg mb-8">
              {scent.description}
            </p>

            {/* Mood quote */}
            <blockquote className="reveal border-l-2 border-gold/40 pl-6 mb-10">
              <p className="font-serif italic text-cream-dim text-lg">{scent.mood}</p>
            </blockquote>

            {/* Scent profile */}
            <div className="reveal">
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4 font-medium">
                Scent Profile
              </p>
              <div className="flex flex-wrap gap-2">
                {scent.profile.map((note) => (
                  <span
                    key={note}
                    className="scent-tag font-sans text-xs tracking-wider text-cream-dim border border-gold/20 px-4 py-2"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — purchase */}
          <div className="reveal">
            <div className="bg-dark-card border border-gold/10 p-8 md:p-10 gold-shadow">
              {/* Corner accents */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-muted mb-1">
                    Whipped Body Butter
                  </p>
                  <p className="font-serif text-3xl text-cream">{scent.name}</p>
                </div>
                <span className="price-display font-serif text-3xl text-gold">${selectedSize.price}</span>
              </div>

              {/* Size selector */}
              <fieldset className="mb-8">
                <legend className="font-sans text-xs tracking-widest uppercase text-muted mb-4 font-medium">
                  Select Size
                </legend>
                <div className="grid grid-cols-3 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size)}
                      className={`border text-center py-4 px-3 transition-all duration-200 active:scale-95 ${
                        selectedSize.size === size.size
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-gold/20 text-cream-dim hover:border-gold/40 hover:text-cream'
                      }`}
                      aria-pressed={selectedSize.size === size.size}
                    >
                      <p className="font-serif text-lg">{size.size}</p>
                      <p className="font-sans text-xs text-muted mt-0.5">{size.label}</p>
                      <p className="font-serif text-sm text-gold mt-1">${size.price}</p>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Selected size description */}
              <p className="font-sans text-sm text-muted font-light mb-8 leading-relaxed">
                {selectedSize.description}
              </p>

              {/* Divider */}
              <div className="gold-rule mb-8" aria-hidden="true" />

              {/* Add to cart CTA */}
              <button
                data-magnetic
                className="w-full bg-gold text-off-black font-sans text-xs tracking-widest uppercase font-semibold py-4 hover:bg-gold-light active:scale-95 transition-all duration-200 mb-4"
                aria-label={`Add ${scent.name} ${selectedSize.size} ${selectedSize.label} to cart — $${selectedSize.price}`}
              >
                Add to Cart — ${selectedSize.price}
              </button>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { label: 'Handcrafted', sub: 'Small batches' },
                  { label: 'No fillers', sub: 'Pure formula' },
                  { label: '3–5 days', sub: 'Small batch' },
                ].map(({ label, sub }) => (
                  <div key={label} className="text-center">
                    <p className="font-sans text-xs text-cream-dim font-medium">{label}</p>
                    <p className="font-sans text-xs text-muted font-light">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients strip */}
        <div className="reveal mt-20 md:mt-32 pt-16 border-t border-gold/10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-8 font-medium">
            What&apos;s Inside
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient) => (
              <div key={ingredient.name} className="border-l border-gold/20 pl-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <p className="font-serif text-base text-cream">{ingredient.name}</p>
                  {ingredient.origin && (
                    <span className="font-sans text-xs text-gold uppercase tracking-wider">
                      {ingredient.origin}
                    </span>
                  )}
                </div>
                <p className="font-sans text-xs text-muted font-light leading-relaxed">
                  {ingredient.why.slice(0, 90)}...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other scents */}
        <div className="reveal mt-20 md:mt-32 pt-16 border-t border-gold/10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-8 font-medium">
            Explore Other Scents
          </p>
          <div className="flex flex-wrap gap-4">
            {['black-oak', 'soie-vanille', 'moonlight']
              .filter((s) => s !== scent.slug)
              .map((s) => {
                const name = s
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ')
                  .replace('Soie Vanille', 'Soie Vanille');
                return (
                  <Link
                    key={s}
                    href={`/shop/${s}`}
                    data-magnetic
                    className="border border-gold/30 text-cream hover:border-gold hover:text-gold text-xs tracking-widest uppercase font-sans font-medium px-6 py-3 transition-all duration-200 active:scale-95"
                  >
                    {name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
