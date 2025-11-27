'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const dynamicTexts = [
    'Maximum Potential',
    'Digital Excellence',
    'Secure Innovation',
    'Future Technology',
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHydrated, dynamicTexts.length]);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-surface/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full" />
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 animate-float"
              >
                <path
                  d="M60 6L111 36V84L60 114L9 84V36L60 6Z"
                  stroke="url(#hero-logo-gradient)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M60 30L90 48V72L60 90L30 72V48L60 30Z"
                  fill="url(#hero-logo-gradient-inner)"
                />
                <defs>
                  <linearGradient
                    id="hero-logo-gradient"
                    x1="9"
                    y1="6"
                    x2="111"
                    y2="114"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00D4FF" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient
                    id="hero-logo-gradient-inner"
                    x1="30"
                    y1="30"
                    x2="90"
                    y2="90"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00D4FF" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              <span className="block">MaXToN Digital</span>
              <span className="block mt-2 bg-gradient-to-r from-accent via-surface to-cta bg-clip-text text-transparent">
                {isHydrated ? dynamicTexts[currentTextIndex] : dynamicTexts[0]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where innovation meets excellence. We architect digital
              experiences that drive business transformation through
              cutting-edge web development, enterprise cybersecurity, and
              intelligent trading solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/contact"
              className="group relative px-8 py-4 text-lg font-semibold text-cta-foreground bg-cta rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cta/50 glow-gold w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <Icon
                  name="RocketLaunchIcon"
                  size={24}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cta to-warning opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/services"
              className="group relative px-8 py-4 text-lg font-semibold text-foreground bg-transparent rounded-lg border-2 border-accent overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 glow-cyan w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Explore Services</span>
                <Icon
                  name="ArrowRightIcon"
                  size={24}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Security Monitoring' },
              { value: '50+', label: 'Enterprise Clients' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;