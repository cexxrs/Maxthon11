'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 via-transparent to-surface/20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8 backdrop-blur-sm"
          style={{
            animation: isHydrated ? 'fade-in-up 0.6s ease-out both' : 'none',
          }}
        >
          <Icon name="RocketLaunchIcon" size={20} className="text-accent" />
          <span className="text-sm font-medium text-accent">
            Ready to Get Started?
          </span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          style={{
            animation: isHydrated
              ? 'fade-in-up 0.6s ease-out 0.1s both' :'none',
          }}
        >
          Transform Your Digital{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-surface to-cta">
            Presence Today
          </span>
        </h2>

        <p
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{
            animation: isHydrated
              ? 'fade-in-up 0.6s ease-out 0.2s both' :'none',
          }}
        >
          Join hundreds of satisfied clients who have elevated their business
          with our premium digital solutions. Let&apos;s build something
          extraordinary together.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          style={{
            animation: isHydrated
              ? 'fade-in-up 0.6s ease-out 0.3s both' :'none',
          }}
        >
          <button className="group relative px-10 py-5 bg-cta text-cta-foreground rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cta/50 glow-gold">
            <span className="relative z-10 flex items-center space-x-3">
              <span>Start Your Project</span>
              <Icon
                name="ArrowRightIcon"
                size={24}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cta to-warning opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group px-10 py-5 bg-transparent border-2 border-accent text-accent rounded-xl font-bold text-lg hover:bg-accent/10 transition-all duration-300 flex items-center space-x-3">
            <Icon name="CalendarIcon" size={24} />
            <span>Schedule Consultation</span>
          </button>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          style={{
            animation: isHydrated
              ? 'fade-in-up 0.6s ease-out 0.4s both' :'none',
          }}
        >
          <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
            <Icon name="ClockIcon" size={32} className="text-accent" />
            <h3 className="text-2xl font-bold text-foreground">24/7</h3>
            <p className="text-sm text-muted-foreground">Support Available</p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
            <Icon name="UserGroupIcon" size={32} className="text-accent" />
            <h3 className="text-2xl font-bold text-foreground">500+</h3>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>

          <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
            <Icon name="TrophyIcon" size={32} className="text-accent" />
            <h3 className="text-2xl font-bold text-foreground">98%</h3>
            <p className="text-sm text-muted-foreground">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;