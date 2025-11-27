'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  features: Feature[];
  color: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  alt,
  icon,
  features,
  color,
}: ServiceCardProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleToggle = () => {
    if (isHydrated) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-${color}/50 transition-all duration-500 hover:shadow-premium`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

        <div
          className={`absolute top-6 left-6 w-16 h-16 bg-${color}/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-${color}/30`}
        >
          <Icon name={icon as any} size={32} className={`text-${color}`} />
        </div>
      </div>

      <div className="relative p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        <div
          className={`space-y-4 overflow-hidden transition-all duration-500 ${
            isHydrated && isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border/50">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300"
              >
                <Icon
                  name={feature.icon as any}
                  size={20}
                  className="text-accent mt-1 flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/50">
          <button
            onClick={handleToggle}
            className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
          >
            <span>{isHydrated && isExpanded ? 'Show Less' : 'Learn More'}</span>
            <Icon
              name="ChevronDownIcon"
              size={20}
              className={`transform transition-transform duration-300 ${
                isHydrated && isExpanded ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>

          <button className="px-6 py-2 bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent/20 transition-colors duration-300 flex items-center space-x-2">
            <span>Get Started</span>
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;