'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { sizes } from '@/lib/products';

export default function Products() {
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
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
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
            id="products-heading"
            className="reveal reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl text-cream"
          >
            Whipped Body Butter
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-cream-dim font-sans font-light text-lg max-w-xl mx-auto leading-relaxed">
            One formula. Three sizes. Every scent. Choose the ritual that fits your life.
          </p>
        </div>

        {/* Size cards */}
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {sizes.map((size, i) => (
            <article
              key={size.size}
              className={`reveal reveal-delay-${i + 1} reveal-scale group bg-off-black border border-gold/10 hover:border-gold/40 gold-shadow-hover transition-all duration-300 p-8 md:p-10 flex flex-col`}
            >
              {/* Price badge */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-muted mb-1">
                    {size.size}
                  </p>
                  <p className="font-serif text-2xl text-cream">{size.label}</p>
                </div>
                <span className="font-serif text-3xl text-gold">${size.price}</span>
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
            className="inline-flex items-center justify-center border border-gold/40 text-gold text-xs tracking-widest uppercase font-sans font-medium px-10 py-4 hover:bg-gold hover:text-off-black active:scale-95 transition-all duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
