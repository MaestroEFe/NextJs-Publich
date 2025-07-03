import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutOrisGate from '@/components/AboutOrisGate';
import ServicesGrid from '@/components/ServicesGrid';
import QuickStats from '@/components/QuickStats';
import PartnerLogos from '@/components/PartnerLogos';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutOrisGate />
      <ServicesGrid />
      <QuickStats />
      <PartnerLogos />
      <Footer />
    </main>
  );
}

