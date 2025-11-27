import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProjectsInteractive from './components/ProjectsInteractive';

export const metadata: Metadata = {
  title: 'Projects - MaXToN Digital',
  description: 'Explore our portfolio of transformative digital solutions including web development, cybersecurity, forex trading platforms, and enterprise applications that have helped businesses achieve maximum potential through cutting-edge technology.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsInteractive />
    </>
  );
}