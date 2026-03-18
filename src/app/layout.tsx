import type { Metadata } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Crown Collection — Premium Handmade Body Butters',
    template: '%s | Crown Collection',
  },
  description:
    'Handcrafted whipped body butters for Kings and Queens. Made with organic shea, kokum, and jojoba — luxuriously formulated without compromise.',
  keywords: [
    'body butter',
    'handmade skincare',
    'luxury body care',
    'whipped body butter',
    'organic skincare',
    'Crown Collection',
  ],
  openGraph: {
    title: 'Crown Collection — Premium Handmade Body Butters',
    description: 'Luxury skincare for Kings and Queens. Handcrafted with intention.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="bg-off-black text-cream antialiased">{children}</body>
    </html>
  );
}
