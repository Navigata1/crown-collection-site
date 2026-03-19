'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitByWords } from '@/lib/splitText';
import { sizes } from '@/lib/products';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      // Section heading word split — refined
      if (headingRef.current) {
        const words = splitByWords(headingRef.current);
        gsap.from(words, {
          y: 40,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
        });
      }

      // Cards stagger from bottom with scale — more physical
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.product-card');
        gsap.from(cards, {
          y: 80,
          scale: 0.93,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true },
        });
      }

      // Price counter animations
      const priceEls = el.querySelectorAll('.price-counter');
      priceEls.forEach((priceEl) => {
        const target = parseFloat((priceEl as HTMLElement).dataset.price || '0');
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 1,
          ease: 'power2.out',
          onUpdate: () => {
            (priceEl as HTMLElement).textContent = `$${Math.round(obj.value)}`;
          },
          scrollTrigger: { trigger: priceEl, start: 'top 85%', once: true },
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

      // Gold rule dividers — animate width
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
      id="products"
      className="py-32 md:py-48 bg-dark-card"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <p className="reveal font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
            The Collection
          </p>
          <h2
            ref={headingRef}
            id="products-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream"
          >
            Whipped Body Butter
          </h2>
          <p className="reveal mt-6 text-cream-dim font-sans font-light text-lg max-w-xl mx-auto leading-relaxed">
            One formula. Three sizes. Every scent. Choose the ritual that fits your life.
          </p>
        </div>

        {/* Size cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {sizes.map((size) => (
            <article
              key={size.size}
              className="product-card group bg-off-black border border-gold/10 hover:border-gold/40 gold-shadow-hover transition-all duration-300 p-8 md:p-10 flex flex-col"
              data-cursor-label="Shop"
            >
              {/* Price badge */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-muted mb-1">
                    {size.size}
                  </p>
                  <p className="font-serif text-2xl text-cream">{size.label}</p>
                </div>
                <span className="price-counter font-serif text-3xl text-gold" data-price={size.price}>
                  ${size.price}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-muted font-light leading-relaxed flex-1 mb-10">
                {size.description}
              </p>

              {/* Divider */}
              <div className="gold-rule mb-8" aria-hidden="true" />

              {/* CTA */}
              <Link
                href="/shop"
                className="font-sans text-xs tracking-widest uppercase text-gold hover:text-cream transition-colors duration-200 font-medium inline-flex items-center gap-3 group"
              >
                Choose a Scent
                <span
                  className="block w-6 h-px bg-gold group-hover:w-10 transition-all duration-300"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-20">
          <Link
            href="/shop"
            data-magnetic
            className="inline-flex items-center justify-center border border-gold/40 text-gold text-xs tracking-widest uppercase font-sans font-medium px-10 py-4 hover:bg-gold hover:text-off-black active:scale-95 transition-all duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
