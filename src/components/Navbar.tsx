'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-off-black/95 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-lg tracking-widest uppercase text-cream hover:text-gold transition-colors duration-300"
          aria-label="Crown Collection — Home"
        >
          Crown Collection
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {[
            { href: '/shop', label: 'Shop' },
            { href: '/#scents', label: 'Scents' },
            { href: '/#story', label: 'Our Story' },
            { href: '/#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm tracking-widest uppercase text-cream-dim hover:text-gold transition-colors duration-300 font-sans"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/shop"
          className="hidden md:inline-flex items-center gap-2 border border-gold/60 text-gold text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-gold hover:text-off-black transition-all duration-300 font-sans font-medium"
        >
          Shop Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-dark-card border-t border-gold/10 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-8 gap-6 list-none">
          {[
            { href: '/shop', label: 'Shop' },
            { href: '/#scents', label: 'Scents' },
            { href: '/#story', label: 'Our Story' },
            { href: '/#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-cream-dim hover:text-gold transition-colors duration-300 font-sans"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/shop"
              onClick={() => setMenuOpen(false)}
              className="inline-flex border border-gold/60 text-gold text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-off-black transition-all duration-300 font-sans font-medium"
            >
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
