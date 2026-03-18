"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/shop", label: "Collection" },
  { href: "/#about", label: "Our Story" },
  { href: "/#scents", label: "Scents" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-off-black focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "py-4 bg-off-black/80 backdrop-blur-md border-b border-gold/5" : "py-7"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-cream text-sm tracking-[0.25em] uppercase"
            aria-label="Crown Collection — Home"
          >
            Crown Collection
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/55 text-xs tracking-[0.18em] uppercase transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="border border-gold/60 text-gold text-xs tracking-[0.18em] uppercase px-6 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gold hover:text-off-black active:scale-[0.97]"
            >
              Shop Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-end gap-[5px] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span
              className={`block h-px bg-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "w-6 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-9"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-4xl text-cream transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-gold ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 70 + 80}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className={`mt-6 border border-gold text-gold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold hover:text-off-black transition-all duration-500 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 70 + 100}ms` : "0ms",
            }}
          >
            Shop Now
          </Link>

          <p
            className={`text-cream/25 text-xs tracking-[0.15em] uppercase mt-4 transition-all duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
          >
            @crown.collection.official
          </p>
        </nav>
      </div>
    </>
  );
}
