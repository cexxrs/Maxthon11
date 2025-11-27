'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  icon: string;
  category: string;
}

interface TechStackProps {
  technologies: Technology[];
}

const TechStack = ({ technologies }: TechStackProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = ['All', ...Array.from(new Set(technologies.map((t) => t.category)))];

  const filteredTech =
    activeCategory === 'All'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="CpuChipIcon" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Technology Stack
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Powered by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-surface">
              Cutting-Edge Technology
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the most advanced tools and frameworks to deliver
            exceptional results
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => isHydrated && setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isHydrated && activeCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/30'
                  : 'bg-card text-muted-foreground hover:bg-muted border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredTech.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-premium"
              style={{
                animation: isHydrated
                  ? `fade-in-up 0.5s ease-out ${index * 0.05}s both`
                  : 'none',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-surface/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon
                    name={tech.icon as any}
                    size={32}
                    className="text-accent"
                  />
                </div>

                <span className="text-sm font-medium text-foreground text-center group-hover:text-accent transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;