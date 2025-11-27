'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
  service: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrevious = () => {
    if (isHydrated) {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const handleNext = () => {
    if (isHydrated) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-surface rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="ChatBubbleLeftIcon" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-surface">
              Industry Leaders
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it—hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-premium overflow-hidden">
            <div className="absolute top-8 left-8 text-accent/20">
              <Icon name="ChatBubbleLeftIcon" size={80} variant="solid" />
            </div>

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    isHydrated && currentIndex === index
                      ? 'opacity-100 translate-x-0' :'opacity-0 absolute inset-0 translate-x-full'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-accent/30">
                        <AppImage
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Icon
                            key={i}
                            name="StarIcon"
                            size={20}
                            variant="solid"
                            className={
                              i < testimonial.rating
                                ? 'text-cta' :'text-muted-foreground'
                            }
                          />
                        ))}
                      </div>

                      <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>

                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full">
                          <Icon
                            name="BriefcaseIcon"
                            size={16}
                            className="text-accent"
                          />
                          <span className="text-sm text-accent">
                            {testimonial.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeftIcon" size={24} className="text-accent" />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => isHydrated && setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    isHydrated && currentIndex === index
                      ? 'w-8 h-2 bg-accent' :'w-2 h-2 bg-muted-foreground hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all duration-300"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRightIcon" size={24} className="text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;