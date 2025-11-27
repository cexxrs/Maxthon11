'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
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
    <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary ${className}`}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-surface/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cta/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {isHydrated && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full glow-cyan" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cta rounded-full glow-gold" />
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-surface rounded-full" />
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent rounded-full glow-cyan" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 glow-cyan">
          <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-accent" />
          <span className="text-sm font-mono text-accent tracking-wider">CONTACT COMMAND CENTER</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Let's Build Something
          <span className="block mt-2 bg-gradient-to-r from-accent via-surface to-cta bg-clip-text text-transparent">
            Extraordinary Together
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Connect with our team of experts through multiple channels. We're available 24/7 to discuss your project, answer questions, and provide immediate consultation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 border border-success/30 rounded-lg">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-success">Available Now</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-card/50 border border-border rounded-lg">
            <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Response within 2 hours</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-card/50 border border-border rounded-lg">
            <Icon name="ShieldCheckIcon" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Secure & Encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;