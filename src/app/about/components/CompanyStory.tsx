'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface CompanyStoryProps {
  className?: string;
}

const CompanyStory = ({ className = '' }: CompanyStoryProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const milestones: Milestone[] = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'MaXToN Digital was founded with a vision to revolutionize web development and cybersecurity services for enterprises.',
      icon: 'RocketLaunchIcon',
      color: 'accent',
    },
    {
      year: '2019',
      title: 'First Enterprise Client',
      description: 'Secured our first Fortune 500 client, delivering a mission-critical trading platform with zero downtime.',
      icon: 'BuildingOfficeIcon',
      color: 'surface',
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across 15 countries, establishing partnerships with leading technology providers.',
      icon: 'GlobeAltIcon',
      color: 'cta',
    },
    {
      year: '2021',
      title: 'Cybersecurity Excellence',
      description: 'Achieved ISO 27001 certification and prevented over 10,000 security threats for our clients.',
      icon: 'ShieldCheckIcon',
      color: 'success',
    },
    {
      year: '2022',
      title: 'Innovation Hub',
      description: 'Launched our R&D division focusing on AI-powered web solutions and blockchain integration.',
      icon: 'LightBulbIcon',
      color: 'warning',
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple awards for excellence in web development, cybersecurity, and client satisfaction.',
      icon: 'TrophyIcon',
      color: 'accent',
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Continuing to push boundaries with cutting-edge 3D web experiences and enterprise-grade security solutions.',
      icon: 'SparklesIcon',
      color: 'surface',
    },
  ];

  return (
    <section className={`py-20 bg-gradient-to-b from-secondary to-primary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a bold vision to a global leader in digital innovation, discover the milestones that shaped MaXToN Digital.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-surface to-cta" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col gap-8`}
                onMouseEnter={() => isHydrated && setActiveIndex(index)}
              >
                <div className="lg:w-1/2 w-full">
                  <div
                    className={`bg-card/80 backdrop-blur-md border ${
                      activeIndex === index ? 'border-accent glow-cyan' : 'border-accent/20'
                    } rounded-xl p-8 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-${milestone.color}/20 flex items-center justify-center`}>
                        <Icon name={milestone.icon as any} size={24} className={`text-${milestone.color}`} />
                      </div>
                      <span className="text-3xl font-bold text-accent">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-primary shadow-lg shadow-accent/50" />

                <div className="lg:w-1/2 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;