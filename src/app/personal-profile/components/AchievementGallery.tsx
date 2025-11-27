'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface AchievementGalleryProps {
  achievements: Achievement[];
}

export default function AchievementGallery({
  achievements,
}: AchievementGalleryProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="h-12 bg-muted/20 rounded-lg animate-pulse mb-12" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-muted/20 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const categories = ['All', ...Array.from(new Set(achievements.map((a) => a.category)))];
  const filteredAchievements = achievements.filter((a) =>
    selectedCategory === 'All' ? true : a.category === selectedCategory
  );

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-surface rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full mb-6">
              <Icon name="TrophyIcon" size={20} className="text-cta" />
              <span className="text-sm font-medium text-cta">
                Recognition & Awards
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Achievement Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating milestones, certifications, and industry recognition
              that define excellence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-premium'
                    : 'bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                    src={achievement.image}
                    alt={achievement.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 p-3 bg-card/90 backdrop-blur-sm rounded-lg border border-border">
                    <Icon
                      name={achievement.icon as any}
                      size={24}
                      className="text-accent"
                    />
                  </div>
                </div>
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {achievement.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {achievement.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {achievement.description}
                  </p>
                  {achievement.metrics && (
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                      {achievement.metrics.map((metric, index) => (
                        <div key={index}>
                          <p className="text-xs text-muted-foreground">
                            {metric.label}
                          </p>
                          <p className="text-lg font-bold text-accent">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-accent/30 rounded-2xl overflow-hidden shadow-premium"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/90 backdrop-blur-sm rounded-lg hover:bg-destructive transition-colors duration-300"
            >
              <Icon name="XMarkIcon" size={24} className="text-foreground" />
            </button>
            <div className="aspect-video overflow-hidden">
              <AppImage
                src={selectedAchievement.image}
                alt={selectedAchievement.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                  {selectedAchievement.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {selectedAchievement.date}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                {selectedAchievement.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedAchievement.description}
              </p>
              {selectedAchievement.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
                  {selectedAchievement.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-accent">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
