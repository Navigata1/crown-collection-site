import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Scents from '@/components/Scents';
import Collections from '@/components/Collections';
import Ingredients from '@/components/Ingredients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Products />
        <SectionDivider />
        <Scents />
        <SectionDivider />
        <Collections />
        <SectionDivider />
        <Ingredients />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
