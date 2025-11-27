import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About Us - MaXToN Digital',
  description: 'Discover the story behind MaXToN Digital, meet our visionary founders, explore our core values, and learn about the talented team driving innovation in web development, cybersecurity, and forex trading solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <AboutInteractive />
      </div>
    </main>
  );
}