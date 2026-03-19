'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Stagger footer columns
      const cols = el.querySelectorAll('.footer-col');
      gsap.from(cols, {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });

      // Animate the gold rule
      const rule = el.querySelector('.footer-glow-line');
      if (rule) {
        gsap.from(rule, {
          scaleX: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: rule, start: 'top 95%', once: true },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-dark-card border-t border-gold/10 py-16 md:py-24 overflow-hidden">
      {/* Subtle radial glow in footer */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #CFA855 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="footer-col md:col-span-1">
            <Link
              href="/"
              className="font-serif text-lg tracking-widest uppercase text-cream hover:text-gold transition-colors duration-300 block mb-4 link-underline"
            >
              Crown Collection
            </Link>
            <p className="font-sans text-sm text-muted font-light leading-relaxed mb-6">
              Luxury skincare for Kings and Queens.
              <br />
              Handcrafted in small batches.
            </p>
            {/* Social — Instagram */}
            <Link
              href="https://www.instagram.com/crown.collection.official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors duration-300"
              aria-label="Follow on Instagram"
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
              <span className="font-sans text-xs tracking-wider">@crown.collection.official</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              Navigate
            </p>
            <ul className="space-y-3 list-none">
              {[
                { href: '/shop', label: 'Shop All' },
                { href: '/shop/black-oak', label: 'Black Oak' },
                { href: '/shop/soie-vanille', label: 'Soie Vanille' },
                { href: '/shop/moonlight', label: 'Moonlight' },
                { href: '/shop/pure', label: 'Pure' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-cream-dim hover:text-gold transition-colors duration-200 font-light link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="footer-col">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              Information
            </p>
            <ul className="space-y-3 list-none">
              {[
                { href: '/#story', label: 'Our Story' },
                { href: '/#ingredients', label: 'Ingredients' },
                { href: '/#contact', label: 'Contact' },
                {
                  href: 'https://www.instagram.com/crown.collection.official',
                  label: 'Instagram',
                  external: true,
                },
              ].map(({ href, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="font-sans text-sm text-cream-dim hover:text-gold transition-colors duration-200 font-light link-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tagline block */}
          <div className="footer-col">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              The Standard
            </p>
            <p className="font-sans text-sm text-cream-dim font-light leading-relaxed mb-4">
              No fillers. No shortcuts. No compromise.
            </p>
            <p className="font-serif italic text-cream-dim/60 text-sm">
              When it&apos;s gone, it&apos;s gone.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-glow-line mb-8" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted font-light">
            &copy; {new Date().getFullYear()} Crown Collection. All rights reserved.
          </p>
          <p className="font-serif italic text-xs text-muted">
            Made with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
