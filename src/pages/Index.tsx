
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LogoBanner from '@/components/LogoBanner';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Booking from '@/components/Booking';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LogoBanner />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Booking />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
