'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    industry: string;
    technologies: string[];
    image: string;
    alt: string;
    description: string;
    metrics: {
      label: string;
      value: string;
    }[];
    featured: boolean;
  };
  onViewDetails: (id: number) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-premium cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(project.id)}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-cta rounded-full flex items-center space-x-1">
          <Icon name="StarIcon" size={14} className="text-cta-foreground" />
          <span className="text-xs font-semibold text-cta-foreground">Featured</span>
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-90' : 'opacity-60'
        }`} />
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded border border-accent/30 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-muted/80 text-muted-foreground rounded backdrop-blur-sm">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground">{project.industry}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          {project.metrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <p className="text-2xl font-bold text-accent">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        <button
          className="w-full mt-4 px-4 py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 border border-accent/30 hover:border-accent/50 group-hover:glow-cyan"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(project.id);
          }}
        >
          <span>View Case Study</span>
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;