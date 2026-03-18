'use client';

import { useEffect, useRef } from 'react';

export default function About() {
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-32 md:py-48 bg-off-black overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative vertical line */}
      <div
        className="absolute left-8 md:left-20 top-0 bottom-0 w-px opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #C5A572 30%, #C5A572 70%, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
          {/* Left — text */}
          <div>
            <p className="reveal font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              The Story
            </p>
            <h2
              id="about-heading"
              className="reveal reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream mb-10"
            >
              Made by hand.
              <br />
              <span className="italic text-gold">Worn like a crown.</span>
            </h2>
            <div className="reveal reveal-delay-2 space-y-6 text-cream-dim font-sans font-light leading-relaxed text-base md:text-lg">
              <p>
                Crown Collection began with a simple belief: that what you put on your skin
                should be worthy of you. Not mass-produced. Not compromised. Made with care,
                in small batches, with every ingredient chosen for a reason.
              </p>
              <p>
                Each jar of whipped body butter is handcrafted — blended, poured, and finished
                by hand. The result is a texture that no machine has yet replicated. Airy.
                Rich. Something that disappears into the skin rather than sitting on top of it.
              </p>
              <p>
                This is skincare for Kings and Queens. People who know the difference between
                luxury and the performance of it.
              </p>
            </div>
          </div>

          {/* Right — asymmetric decorative block */}
          <div className="reveal reveal-delay-3 relative">
            {/* Large dark card */}
            <div className="bg-dark-card gold-shadow p-12 md:p-16 relative">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/40" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/40" aria-hidden="true" />

              <div className="space-y-10">
                {[
                  { label: 'Handcrafted', detail: 'Every batch made to order' },
                  { label: 'No fillers', detail: 'Zero water, zero alcohol, zero compromise' },
                  { label: 'Seven ingredients', detail: 'Each chosen for a specific purpose' },
                  { label: 'Three scents', detail: 'Composed to evolve with your skin' },
                ].map(({ label, detail }) => (
                  <div key={label} className="border-b border-gold/10 pb-8 last:border-0 last:pb-0">
                    <p className="font-serif text-xl text-gold mb-1">{label}</p>
                    <p className="font-sans text-sm text-muted font-light">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent element */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 border border-gold/20"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
