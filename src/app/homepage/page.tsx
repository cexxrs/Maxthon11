import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import TrustIndicators from './components/TrustIndicators';
import FeaturedProjects from './components/FeaturedProjects';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'MaXToN Digital - Maximum Potential Through Technology',
  description:
    'Ultra-premium digital agency combining cutting-edge 3D web experiences with enterprise-grade security architecture. Specializing in web development, cybersecurity, forex trading solutions, and digital innovation for enterprises and high-net-worth individuals.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <TrustIndicators />
        <FeaturedProjects />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}