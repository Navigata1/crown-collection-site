import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { scents, sizes, getScentBySlug, ingredients } from '@/lib/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScentPageClient from './ScentPageClient';

interface Props {
  params: Promise<{ scent: string }>;
}

export async function generateStaticParams() {
  return scents.map((s) => ({ scent: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scent: slug } = await params;
  const scent = getScentBySlug(slug);
  if (!scent) return {};

  return {
    title: scent.name,
    description: `${scent.name} — ${scent.tagline}. ${scent.description.slice(0, 120)}...`,
  };
}

export default async function ScentPage({ params }: Props) {
  const { scent: slug } = await params;
  const scent = getScentBySlug(slug);
  if (!scent) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-off-black min-h-[100dvh]">
        <ScentPageClient scent={scent} sizes={sizes} ingredients={ingredients} />
      </main>
      <Footer />
    </>
  );
}
