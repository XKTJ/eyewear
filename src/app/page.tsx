import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Products from '@/components/Products';
import VisitReasons from '@/components/VisitReasons';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import StickyConversionBar from '@/components/StickyConversionBar';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <VisitReasons />
      <Products />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
      <StickyConversionBar />
    </div>
  );
}
