import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-gold/10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-lg tracking-widest uppercase text-cream hover:text-gold transition-colors duration-300 block mb-4"
            >
              Crown Collection
            </Link>
            <p className="font-sans text-sm text-muted font-light leading-relaxed">
              Luxury skincare for Kings and Queens.
              <br />
              Handcrafted in small batches.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6 font-medium">
              Navigate
            </p>
            <ul className="space-y-3 list-none">
              {[
                { href: '/shop', label: 'Shop All' },
                { href: '/shop/black-oak', label: 'Black Oak' },
                { href: '/shop/soie-vanille', label: 'Soie Vanille' },
                { href: '/shop/moonlight', label: 'Moonlight' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-cream-dim hover:text-gold transition-colors duration-200 font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
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
                    className="font-sans text-sm text-cream-dim hover:text-gold transition-colors duration-200 font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-rule mb-8" aria-hidden="true" />
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
