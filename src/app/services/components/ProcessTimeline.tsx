'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHydrated, steps.length]);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-surface/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="ClockIcon" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Process</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            From Concept to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-surface">
              Completion
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => isHydrated && setActiveStep(index)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  isHydrated && activeStep === index
                    ? 'bg-card border-2 border-accent shadow-premium'
                    : 'bg-card/50 border border-border hover:border-accent/30'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHydrated && activeStep === index
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground group-hover:bg-accent/20'
                    }`}
                  >
                    <Icon name={step.icon as any} size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${
                          isHydrated && activeStep === index
                            ? 'text-accent' :'text-foreground'
                        }`}
                      >
                        {step.number}. {step.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {isHydrated && activeStep === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-surface rounded-b-2xl" />
                )}
              </div>
            ))}
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-surface/10 rounded-3xl backdrop-blur-sm border border-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                        isHydrated && activeStep === index
                          ? 'opacity-100 scale-100' :'opacity-0 scale-75'
                      }`}
                    >
                      <div className="w-64 h-64 bg-gradient-to-br from-accent/20 to-surface/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-accent/30">
                        <Icon
                          name={step.icon as any}
                          size={120}
                          className="text-accent"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2" />
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-surface rounded-full transform -translate-x-1/2" />
                    <div className="absolute left-0 top-1/2 w-2 h-2 bg-cta rounded-full transform -translate-y-1/2" />
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-warning rounded-full transform -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;