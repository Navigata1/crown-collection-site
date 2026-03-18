import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Scents from '@/components/Scents';
import Ingredients from '@/components/Ingredients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Scents />
        <Ingredients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
