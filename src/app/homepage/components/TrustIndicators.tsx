'use client';

import { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TrustIndicatorsProps {
  className?: string;
}

const TrustIndicators = ({ className = '' }: TrustIndicatorsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  const clientLogos = [
  {
    name: 'TechCorp Global',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10c623eea-1764247920867.png",
    alt: 'TechCorp Global logo with blue geometric design on white background'
  },
  {
    name: 'FinanceHub',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f321f719-1764247921788.png",
    alt: 'FinanceHub logo featuring gold coin symbol with modern typography'
  },
  {
    name: 'SecureNet',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_16c66b4f1-1764247920429.png",
    alt: 'SecureNet logo with shield icon and green security badge'
  },
  {
    name: 'DataFlow Systems',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14510fca6-1764247923564.png",
    alt: 'DataFlow Systems logo with flowing data stream visualization in purple'
  },
  {
    name: 'CloudVision',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18121b84f-1764247921422.png",
    alt: 'CloudVision logo with cloud computing icon and cyan accent colors'
  },
  {
    name: 'InnovateLabs',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c93294ee-1764247921820.png",
    alt: 'InnovateLabs logo featuring abstract innovation symbol in orange'
  }];


  const certifications = [
  { icon: 'ShieldCheckIcon', label: 'ISO 27001 Certified', color: 'accent' },
  { icon: 'LockClosedIcon', label: 'SOC 2 Compliant', color: 'surface' },
  { icon: 'CheckBadgeIcon', label: 'PCI DSS Level 1', color: 'success' },
  { icon: 'StarIcon', label: 'AWS Partner', color: 'cta' }];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className={`py-20 md:py-32 bg-primary ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted by <span className="text-accent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 50+ enterprise clients who trust MaXToN Digital for their
            mission-critical digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {clientLogos.map((client, index) =>
          <div
            key={index}
            className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center">

              <div className="relative w-full h-16 overflow-hidden rounded-lg">
                <AppImage
                src={client.logo}
                alt={client.alt}
                className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" />

              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) =>
          <div
            key={index}
            className={`p-6 rounded-xl bg-card border border-${cert.color}/30 hover:border-${cert.color}/50 transition-all duration-300 hover:shadow-lg hover:shadow-${cert.color}/20 text-center space-y-4`}>

              <div className="flex justify-center">
                <div
                className={`p-4 rounded-full bg-${cert.color}/10 border border-${cert.color}/30`}>

                  <Icon
                  name={cert.icon as any}
                  size={32}
                  className={`text-${cert.color}`} />

                </div>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {cert.label}
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-accent/10 to-surface/10 border border-accent/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">
                {isHydrated ? '99.9%' : '99.9%'}
              </div>
              <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-surface">
                {isHydrated ? '&lt;2s' : '<2s'}
              </div>
              <p className="text-sm text-muted-foreground">
                Average Response Time
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">
                {isHydrated ? '0' : '0'}
              </div>
              <p className="text-sm text-muted-foreground">
                Security Breaches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustIndicators;