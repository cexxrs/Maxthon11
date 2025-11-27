'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    industry: string;
    technologies: string[];
    image: string;
    alt: string;
    description: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: {
      label: string;
      value: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
      company: string;
      avatar: string;
      avatarAlt: string;
    };
    gallery: {
      image: string;
      alt: string;
    }[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl border border-border shadow-premium overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full transition-colors duration-300 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} className="text-foreground" />
        </button>

        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
          <div className="relative h-96">
            <AppImage
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-accent/20 text-accent rounded-full border border-accent/30 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {project.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-accent font-semibold">{project.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{project.industry}</span>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-3xl font-bold text-accent mb-1">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="DocumentTextIcon" size={24} className="text-accent" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="ExclamationTriangleIcon" size={24} className="text-warning" />
                  <span>The Challenge</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="LightBulbIcon" size={24} className="text-success" />
                  <span>Our Solution</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="ChartBarIcon" size={24} className="text-accent" />
                  <span>Results & Impact</span>
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project.testimonial && (
              <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                <div className="flex items-start space-x-4">
                  <AppImage
                    src={project.testimonial.avatar}
                    alt={project.testimonial.avatarAlt}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-accent mb-3" />
                    <p className="text-foreground italic mb-4 leading-relaxed">
                      &quot;{project.testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="text-foreground font-semibold">{project.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {project.testimonial.position}, {project.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.gallery.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="PhotoIcon" size={24} className="text-accent" />
                  <span>Project Gallery</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((item, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300">
                      <AppImage
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--color-muted);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-accent);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-accent);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;