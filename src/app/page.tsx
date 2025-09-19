import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
      <About />
      <CTASection />
      <Footer />
    </main>
  );
}
