import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PersonalProfileInteractive from './components/PersonalProfileInteractive';

export const metadata: Metadata = {
  title: 'Personal Profile - MaXToN Digital',
  description: 'Explore the professional journey, achievements, and thought leadership of Alexander Chen, CTO and Founder of MaXToN Digital. Discover expertise in web development, cybersecurity, and digital innovation.',
};

export default function PersonalProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PersonalProfileInteractive />
    </main>
  );
}