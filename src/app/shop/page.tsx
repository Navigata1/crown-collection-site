import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { scents, sizes } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Shop Crown Collection whipped body butters. Three scents, three sizes — all handcrafted with organic ingredients.',
};

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
            Each scent is available in three sizes. Every jar is handcrafted — made to order,
            never mass-produced.
          </p>
        </div>

        {/* Divider */}
        <div className="gold-rule max-w-7xl mx-auto mb-20 md:mb-28" aria-hidden="true" />

        {/* Products grid — scents as rows, sizes as columns */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-48">
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
      </main>
      <Footer />
    </>
  );
}
