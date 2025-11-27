'use client';

import { useEffect, useState } from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
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
    <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-surface/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="transform transition-transform duration-300"
          style={
            isHydrated
              ? {
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }
              : undefined
          }
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-accent via-surface to-cta bg-clip-text text-transparent">
              About MaXToN
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where maximum potential meets technological excellence. We architect digital experiences that transform businesses and empower innovation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '50+', label: 'Enterprise Clients' },
            { value: '15+', label: 'Countries Served' },
            { value: '99.9%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-md border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 glow-cyan"
            >
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;