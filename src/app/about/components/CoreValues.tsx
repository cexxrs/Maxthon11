'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Value {
  title: string;
  description: string;
  icon: string;
  example: string;
  color: string;
}

interface CoreValuesProps {
  className?: string;
}

const CoreValues = ({ className = '' }: CoreValuesProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const values: Value[] = [
    {
      title: 'Innovation with Integrity',
      description: 'We push technological boundaries while maintaining unwavering ethical standards and transparency in every project.',
      icon: 'LightBulbIcon',
      example: 'Developed a blockchain-based supply chain solution that increased transparency by 95% for a Fortune 500 client.',
      color: 'accent',
    },
    {
      title: 'Security Without Compromise',
      description: 'Enterprise-grade security is not optional—it\'s embedded in every line of code we write and every solution we deliver.',
      icon: 'ShieldCheckIcon',
      example: 'Prevented 10,000+ security threats in 2023, maintaining 100% uptime for mission-critical client systems.',
      color: 'success',
    },
    {
      title: 'Client Success First',
      description: 'Your success is our signature. We measure our achievements by the transformative impact we create for your business.',
      icon: 'HeartIcon',
      example: 'Helped a fintech startup scale from 1,000 to 100,000 users in 6 months with zero downtime.',
      color: 'error',
    },
    {
      title: 'Continuous Excellence',
      description: 'We never settle. Every project is an opportunity to exceed expectations and set new standards of quality.',
      icon: 'TrophyIcon',
      example: 'Achieved 99.9% client satisfaction rating through rigorous quality assurance and proactive communication.',
      color: 'cta',
    },
    {
      title: 'Collaborative Partnership',
      description: 'We don\'t just work for you—we work with you as trusted advisors invested in your long-term success.',
      icon: 'UserGroupIcon',
      example: 'Established 5-year partnerships with 80% of our enterprise clients through transparent collaboration.',
      color: 'surface',
    },
    {
      title: 'Sustainable Innovation',
      description: 'Building solutions that not only solve today\'s challenges but adapt and scale for tomorrow\'s opportunities.',
      icon: 'ArrowTrendingUpIcon',
      example: 'Created modular architectures that reduced client maintenance costs by 40% while improving scalability.',
      color: 'warning',
    },
  ];

  return (
    <section className={`py-20 bg-primary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Core Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision, every line of code, and every client interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`relative bg-card/50 backdrop-blur-md border ${
                selectedValue === index ? 'border-accent glow-cyan' : 'border-accent/20'
              } rounded-xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer group`}
              onClick={() => isHydrated && setSelectedValue(selectedValue === index ? null : index)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full bg-${value.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={value.icon as any} size={32} className={`text-${value.color}`} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{value.description}</p>

              {selectedValue === index && (
                <div className="mt-6 pt-6 border-t border-accent/20">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={20} className="text-success mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground italic">{value.example}</p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-2 text-accent text-sm font-medium">
                <span>{selectedValue === index ? 'Hide Example' : 'View Example'}</span>
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transition-transform duration-300 ${selectedValue === index ? 'rotate-180' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;