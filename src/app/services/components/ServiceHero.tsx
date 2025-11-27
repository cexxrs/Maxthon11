'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceHero = ({ title, subtitle, description }: ServiceHeroProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHydrated]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-surface/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cta/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)`,
          transform: isHydrated
            ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            : 'translate(0, 0)',
          transition: 'transform 0.3s ease-out',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8 backdrop-blur-sm">
          <Icon name="SparklesIcon" size={20} className="text-accent" />
          <span className="text-sm font-medium text-accent">{subtitle}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className="inline-block"
              style={{
                animation: isHydrated
                  ? `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group relative px-8 py-4 bg-cta text-cta-foreground rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cta/50 glow-gold">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Start Your Project</span>
              <Icon
                name="ArrowRightIcon"
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cta to-warning opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-lg font-semibold text-lg hover:bg-accent/10 transition-all duration-300 flex items-center space-x-2">
            <Icon name="PlayIcon" size={20} />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-accent/50" />
      </div>
    </section>
  );
};

export default ServiceHero;