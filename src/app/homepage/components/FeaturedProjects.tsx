'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  results: string;
  link: string;
}

interface FeaturedProjectsProps {
  className?: string;
}

const FeaturedProjects = ({ className = '' }: FeaturedProjectsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Trading Platform',
    category: 'Forex Trading',
    description:
    'Real-time algorithmic trading platform with institutional-grade risk management and multi-asset support for high-frequency trading operations.',
    image:
    "https://images.unsplash.com/photo-1589560989620-61bf48e97abb",
    alt: 'Modern trading platform dashboard showing real-time forex charts with green and red candlesticks on dark interface',
    technologies: ['React', 'WebSocket', 'Node.js', 'PostgreSQL'],
    results: '300% increase in trading efficiency',
    link: '/projects'
  },
  {
    id: 2,
    title: 'Global Security Infrastructure',
    category: 'Cybersecurity',
    description:
    'Enterprise-wide security architecture with 24/7 threat monitoring, automated incident response, and compliance management for Fortune 500 client.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1424ee516-1764247923740.png",
    alt: 'Cybersecurity command center with multiple monitors displaying network security analytics and threat detection systems',
    technologies: ['Python', 'Kubernetes', 'Elasticsearch', 'AI/ML'],
    results: '99.99% threat prevention rate',
    link: '/projects'
  },
  {
    id: 3,
    title: 'Immersive E-Commerce Experience',
    category: 'Web Development',
    description:
    '3D product visualization platform with AR integration, personalized recommendations, and seamless checkout experience driving conversion rates.',
    image:
    "https://images.unsplash.com/photo-1635405074683-96d6921a2a68",
    alt: 'Modern e-commerce website interface with 3D product displays and interactive shopping cart on laptop screen',
    technologies: ['Next.js', 'Three.js', 'Stripe', 'AWS'],
    results: '250% increase in conversions',
    link: '/projects'
  }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, projects.length]);

  return (
    <section className={`py-20 md:py-32 bg-secondary ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming businesses through innovative digital solutions that
            deliver measurable results and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
            <AppImage
              src={projects[activeProject].image}
              alt={projects[activeProject].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-sm font-semibold mb-4">
                {projects[activeProject].category}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {projects[activeProject].title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {projects[activeProject].description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech, index) =>
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-surface/20 border border-surface/30 text-surface text-sm font-medium">

                    {tech}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-success/10 border border-success/30">
                <Icon name="ChartBarIcon" size={24} className="text-success" />
                <span className="text-success font-semibold">
                  {projects[activeProject].results}
                </span>
              </div>
            </div>

            <Link
              href={projects[activeProject].link}
              className="inline-flex items-center space-x-2 px-6 py-3 text-lg font-semibold text-foreground bg-transparent rounded-lg border-2 border-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 glow-cyan">

              <span>View Case Study</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          {projects.map((_, index) =>
          <button
            key={index}
            onClick={() => isHydrated && setActiveProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeProject === index ?
            'bg-accent w-12' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
            }
            aria-label={`View project ${index + 1}`} />

          )}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold text-cta-foreground bg-cta rounded-lg hover:shadow-2xl hover:shadow-cta/50 transition-all duration-300 glow-gold">

            <span>View All Projects</span>
            <Icon name="ArrowRightIcon" size={24} />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;