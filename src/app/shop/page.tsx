import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { scents, sizes } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Shop Crown Collection whipped body butters. Limited batches, handcrafted with organic ingredients — when it is gone, it is gone.',
};

const tiers = [
  {
    id: 'standard',
    name: 'Standard Collection',
    status: 'available' as const,
    detail: 'White double-wall BPA-free jars',
    description:
      'The current Crown Collection vessel. Double-wall construction keeps the formula at perfect temperature. BPA-free, forever-chemical free.',
    badge: 'Available Now',
  },
  {
    id: 'elite',
    name: 'Elite Collection',
    status: 'coming-soon' as const,
    detail: 'Black jars with gold lids',
    description:
      'Obsidian black jars crowned with gold lids. The same rare formula — elevated to the next tier of presentation. Limited quantities, by design.',
    badge: 'Coming Soon',
  },
  {
    id: 'royal',
    name: 'Royal Collection',
    status: 'coming-soon' as const,
    detail: 'Dark amber glass containers',
    description:
      'Dark amber glass protects the formula from light degradation, preserving the integrity of every rare ingredient. The pinnacle of the Crown Collection tier system.',
    badge: 'Future Release',
  },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="bg-off-black min-h-[100dvh]">
        {/* Page header */}
        <div className="pt-40 pb-20 md:pt-52 md:pb-28 max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium animate-fade-in-up">
            Crown Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 animate-fade-in-up">
            The Collection
          </h1>
          <p className="font-sans text-cream-dim font-light text-lg max-w-xl leading-relaxed animate-fade-in-up">
            Crafted in limited batches. Every jar is handcrafted by hand — never mass-produced.
            When it is gone, it is gone.
          </p>
        </div>

        {/* Divider */}
        <div className="gold-rule max-w-7xl mx-auto mb-20 md:mb-28" aria-hidden="true" />

        {/* Products grid — scents as rows, sizes as columns */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Size legend */}
          <div className="hidden md:grid grid-cols-4 gap-6 mb-8 pb-6 border-b border-gold/10">
            <div />
            {sizes.map((size) => (
              <div key={size.size} className="text-center">
                <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium">
                  {size.size} — {size.label}
                </p>
                <p className="font-serif text-2xl text-cream mt-1">${size.price}</p>
              </div>
            ))}
          </div>

          {/* Scent rows */}
          <div className="space-y-4">
            {scents.map((scent) => (
              <Link
                key={scent.slug}
                href={`/shop/${scent.slug}`}
                className="group block bg-dark-card border border-gold/10 hover:border-gold/30 transition-all duration-300 gold-shadow-hover"
                aria-label={`Shop ${scent.name} — ${scent.tagline}`}
              >
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Scent info */}
                  <div className="flex items-center gap-6 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gold/10">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0"
                      style={{ backgroundColor: scent.color }}
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="font-serif text-xl text-cream group-hover:text-gold transition-colors duration-200">
                        {scent.name}
                      </h2>
                      <p className="font-sans text-xs text-muted uppercase tracking-wider font-light mt-0.5">
                        {scent.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Size cells */}
                  {sizes.map((size) => (
                    <div
                      key={size.size}
                      className="flex flex-col md:items-center md:justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-gold/10 last:border-r-0 last:border-b-0"
                    >
                      <div className="md:hidden mb-1">
                        <span className="font-sans text-xs tracking-widest uppercase text-muted">
                          {size.size} — {size.label}
                        </span>
                      </div>
                      <p className="font-serif text-2xl text-gold">${size.price}</p>
                      <p className="font-sans text-xs text-muted font-light mt-1 md:text-center">
                        {size.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 text-center">
            <div className="gold-rule max-w-xs mx-auto mb-8" aria-hidden="true" />
            <p className="font-sans text-sm text-muted font-light">
              All orders made by hand. Ships within 3–5 business days.
            </p>
          </div>
        </div>

        {/* Collection Tiers */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-20 md:pb-28">
          <div className="mb-16 md:mb-20">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              The Tier System
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream max-w-xl">
              Three collections.
              <br />
              <span className="italic">One rare formula.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier, i) => (
              <div
                key={tier.id}
                className={`relative bg-dark-card border p-8 md:p-10 ${
                  tier.status === 'available'
                    ? 'border-gold/30 gold-shadow'
                    : 'border-gold/10 opacity-80'
                }`}
              >
                {/* Corner accent on first card */}
                {i === 0 && (
                  <>
                    <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-gold/40" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-gold/40" aria-hidden="true" />
                  </>
                )}

                <div className="mb-6">
                  <span
                    className={`inline-block font-sans text-xs tracking-widest uppercase font-medium px-3 py-1 border ${
                      tier.status === 'available'
                        ? 'text-gold border-gold/40 bg-gold/5'
                        : 'text-muted border-gold/10'
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-cream mb-2">{tier.name}</h3>
                <p className="font-sans text-xs tracking-wider uppercase text-gold font-light mb-6">
                  {tier.detail}
                </p>
                <p className="font-sans text-sm text-cream-dim font-light leading-relaxed">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Scent CTA */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-48">
          <div className="gold-rule max-w-sm mx-auto mb-16" aria-hidden="true" />

          <div className="bg-dark-card border border-gold/20 p-10 md:p-14 text-center relative">
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/30" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/30" aria-hidden="true" />

            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              Custom Formulations
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              Your signature scent not listed?
            </h3>
            <p className="font-sans text-cream-dim font-light leading-relaxed max-w-lg mx-auto mb-10 text-base">
              Crown Collection offers custom scent formulations for those with a specific note in
              mind. Contact us — we will work with you to create something rare, something entirely
              yours.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 font-sans text-xs tracking-widest uppercase font-medium text-gold border border-gold/30 px-8 py-4 hover:bg-gold/5 transition-colors duration-300"
            >
              Inquire About Custom Scents
              <span className="block w-6 h-px bg-gold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
