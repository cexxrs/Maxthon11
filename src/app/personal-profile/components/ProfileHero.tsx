'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  followers: string;
}

interface ProfileHeroProps {
  name: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  bio: string;
  socialLinks: SocialLink[];
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export default function ProfileHero({
  name,
  title,
  tagline,
  image,
  imageAlt,
  bio,
  socialLinks,
  stats,
}: ProfileHeroProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-surface rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="h-12 bg-muted/20 rounded-lg animate-pulse" />
                <div className="h-8 bg-muted/20 rounded-lg animate-pulse w-3/4" />
                <div className="h-32 bg-muted/20 rounded-lg animate-pulse" />
              </div>
              <div className="h-96 bg-muted/20 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-surface rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                  <Icon name="SparklesIcon" size={20} className="text-accent" />
                  <span className="text-sm font-medium text-accent">
                    Industry Thought Leader
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  {name}
                </h1>
                <p className="text-2xl lg:text-3xl text-accent font-semibold">
                  {title}
                </p>
                <p className="text-xl text-muted-foreground italic">
                  "{tagline}"
                </p>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed">
                {bio}
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isHydrated && typeof window !== 'undefined') {
                        window.open(social.url, '_blank');
                      }
                    }}
                    className="group relative px-6 py-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center space-x-3">
                      <Icon
                        name={social.icon as any}
                        size={20}
                        className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
                      />
                      <div className="text-left">
                        <p className="text-sm font-medium text-foreground">
                          {social.platform}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {social.followers}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="relative p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    <div className="relative space-y-2">
                      <Icon
                        name={stat.icon as any}
                        size={24}
                        className="text-accent"
                      />
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-surface/20 rounded-2xl blur-2xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-accent/30 shadow-premium">
                <AppImage
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="h-2 bg-accent/30 rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full w-3/4 animate-pulse" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Profile Completion: 95%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}