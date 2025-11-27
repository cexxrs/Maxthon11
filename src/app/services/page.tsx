import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - MaXToN Digital',
  description:
    'Explore our comprehensive digital services including web development with live code visualization, cybersecurity solutions with threat simulation, forex trading platforms with real-time integration, and digital project solutions with 3D portfolio showcases.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <ServicesInteractive />
      </div>
    </main>
  );
}