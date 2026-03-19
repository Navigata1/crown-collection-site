'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.querySelectorAll('.reveal, .reveal-scale').forEach((r) => {
        (r as HTMLElement).style.opacity = '1';
        (r as HTMLElement).style.transform = 'none';
      });
      if (instagramRef.current) instagramRef.current.style.opacity = '1';
      if (contactCardsRef.current) contactCardsRef.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      // Instagram section scales in
      gsap.from(instagramRef.current, {
        scale: 0.92,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: instagramRef.current, start: 'top 85%', once: true },
      });

      // Contact cards stagger from right
      if (contactCardsRef.current) {
        const cards = contactCardsRef.current.children;
        gsap.from(cards, {
          x: 60,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: contactCardsRef.current, start: 'top 85%', once: true },
        });
      }

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
      id="contact"
      className="py-32 md:py-48 bg-off-black"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Instagram CTA */}
        <div ref={instagramRef} className="text-center mb-24 md:mb-32">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
            Follow the Crown
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-8"
          >
            The ritual, documented.
          </h2>
          <p className="font-sans text-cream-dim font-light text-lg max-w-lg mx-auto leading-relaxed mb-12">
            See how others wear the Crown. Tag us. Share the experience.
          </p>
          <Link
            href="https://www.instagram.com/crown.collection.official"
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs tracking-widest uppercase font-sans font-medium px-10 py-4 hover:bg-gold hover:text-off-black active:scale-95 transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            @crown.collection.official
          </Link>
        </div>

        {/* Divider */}
        <div className="gold-rule mb-24 md:mb-32" aria-hidden="true" />

        {/* Contact block */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="reveal font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              Get in Touch
            </p>
            <h3 className="reveal font-serif text-3xl md:text-4xl text-cream mb-6">
              Questions. Orders. Wholesale.
            </h3>
            <p className="reveal font-sans text-cream-dim font-light leading-relaxed text-base md:text-lg">
              Custom orders, bulk pricing, events — we are here. Every message
              is answered by the person who made the product.
            </p>
          </div>

          <div ref={contactCardsRef} className="space-y-6">
            <div className="bg-dark-card border border-gold/10 p-8">
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">
                Email
              </p>
              <a
                href="mailto:hello@crowncollection.co"
                className="font-serif text-xl text-gold hover:text-gold-light transition-colors duration-200"
              >
                hello@crowncollection.co
              </a>
            </div>

            <div className="bg-dark-card border border-gold/10 p-8">
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">
                Instagram
              </p>
              <Link
                href="https://www.instagram.com/crown.collection.official"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-gold hover:text-gold-light transition-colors duration-200"
              >
                @crown.collection.official
              </Link>
            </div>

            <div className="bg-dark-card border border-gold/10 p-8">
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">
                Shipping
              </p>
              <p className="font-sans text-cream-dim font-light">
                Small batch crafted. Ships within 3–5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
