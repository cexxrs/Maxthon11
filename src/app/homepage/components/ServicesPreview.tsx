'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  link: string;
}

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Cutting-edge web applications with immersive 3D experiences, progressive web capabilities, and enterprise-grade performance optimization.',
      icon: 'CodeBracketIcon',
      color: 'accent',
      features: [
        'React & Next.js Expertise',
        '3D WebGL Integration',
        'Progressive Web Apps',
        'Performance Optimization',
      ],
      link: '/services',
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description:
        'Enterprise-grade security architecture with 24/7 threat monitoring, penetration testing, and compliance management for mission-critical systems.',
      icon: 'ShieldCheckIcon',
      color: 'surface',
      features: [
        'Threat Detection & Response',
        'Security Audits',
        'Compliance Management',
        'Incident Response',
      ],
      link: '/services',
    },
    {
      id: 3,
      title: 'Forex Trading Solutions',
      description:
        'Intelligent trading platforms with real-time market integration, algorithmic strategies, and institutional-grade risk management systems.',
      icon: 'ChartBarIcon',
      color: 'success',
      features: [
        'Algorithmic Trading',
        'Real-time Analytics',
        'Risk Management',
        'Market Intelligence',
      ],
      link: '/services',
    },
    {
      id: 4,
      title: 'Digital Innovation',
      description:
        'Transform your business with AI-powered solutions, blockchain integration, and custom digital products that drive competitive advantage.',
      icon: 'SparklesIcon',
      color: 'cta',
      features: [
        'AI & Machine Learning',
        'Blockchain Solutions',
        'Digital Transformation',
        'Custom Development',
      ],
      link: '/services',
    },
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className={`py-20 md:py-32 bg-secondary ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions that empower your business with
            cutting-edge technology and strategic innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => isHydrated && setHoveredService(service.id)}
              onMouseLeave={() => isHydrated && setHoveredService(null)}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-start justify-between">
                  <div
                    className={`p-4 rounded-xl bg-${service.color}/10 border border-${service.color}/30 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className={`text-${service.color}`}
                    />
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-${service.color}/20 text-${service.color} border border-${service.color}/30`}
                  >
                    Premium
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className={`text-${service.color} flex-shrink-0`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </Link>
              </div>

              <div
                className={`absolute -bottom-20 -right-20 w-40 h-40 bg-${service.color}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold text-foreground bg-transparent rounded-lg border-2 border-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 glow-cyan"
          >
            <span>View All Services</span>
            <Icon name="ArrowRightIcon" size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;