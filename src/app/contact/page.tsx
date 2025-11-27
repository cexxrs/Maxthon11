import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ProjectInquiryForm from './components/ProjectInquiryForm';
import GlobalPresence from './components/GlobalPresence';
import FAQSection from './components/FAQSection';
import TrustSignals from './components/TrustSignals';

export const metadata: Metadata = {
  title: 'Contact Us - MaXToN Digital',
  description: 'Connect with MaXToN Digital through multiple channels. Get immediate consultation, project quotes, and expert assistance. Available 24/7 with response within 2 hours.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <TrustSignals />
      <ContactMethods />
      <ProjectInquiryForm />
      <GlobalPresence />
      <FAQSection />
    </main>
  );
}