'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

interface JourneyTimelineProps {
  events: TimelineEvent[];
}

export default function JourneyTimeline({ events }: JourneyTimelineProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-12 bg-muted/20 rounded-lg animate-pulse mb-12" />
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-muted/20 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-surface rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <Icon name="ClockIcon" size={20} className="text-accent" />
              <span className="text-sm font-medium text-accent">
                Professional Journey
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Career Evolution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of growth, innovation, and industry leadership spanning
              over a decade of excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-surface to-accent" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div
                      className={`group relative p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 cursor-pointer ${
                        activeEvent === index ? 'border-accent shadow-premium' : ''
                      }`}
                      onClick={() => setActiveEvent(index)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      <div className="relative space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-accent">
                            {event.year}
                          </span>
                          <div
                            className={`p-3 rounded-lg ${
                              event.color === 'accent' ?'bg-accent/10'
                                : event.color === 'surface' ?'bg-surface/10' :'bg-cta/10'
                            }`}
                          >
                            <Icon
                              name={event.icon as any}
                              size={24}
                              className={
                                event.color === 'accent' ?'text-accent'
                                  : event.color === 'surface' ?'text-surface' :'text-cta'
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-lg text-accent font-semibold mb-3">
                            {event.company}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                        {activeEvent === index && (
                          <div className="pt-4 border-t border-border space-y-2">
                            <p className="text-sm font-semibold text-foreground mb-3">
                              Key Achievements:
                            </p>
                            {event.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start space-x-2">
                                <Icon
                                  name="CheckCircleIcon"
                                  size={16}
                                  className="text-success mt-1 flex-shrink-0"
                                />
                                <p className="text-sm text-muted-foreground">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-16 h-16 bg-card border-4 border-accent rounded-full flex items-center justify-center shadow-premium">
                    <Icon
                      name={event.icon as any}
                      size={24}
                      className="text-accent"
                    />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}