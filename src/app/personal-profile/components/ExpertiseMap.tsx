'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  level: number;
  projects: number;
  icon: string;
  color: string;
}

interface ExpertiseCategory {
  category: string;
  skills: Skill[];
}

interface ExpertiseMapProps {
  expertise: ExpertiseCategory[];
}

export default function ExpertiseMap({ expertise }: ExpertiseMapProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="h-12 bg-muted/20 rounded-lg animate-pulse mb-12" />
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="h-96 bg-muted/20 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-surface rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <Icon name="CpuChipIcon" size={20} className="text-accent" />
              <span className="text-sm font-medium text-accent">
                Technical Mastery
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Expertise Map
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill portfolio spanning web development,
              cybersecurity, and digital innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon name="CodeBracketIcon" size={24} className="text-accent" />
                  </div>
                  <span>{category.category}</span>
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group cursor-pointer"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${
                              skill.color === 'accent' ?'bg-accent/10'
                                : skill.color === 'surface' ?'bg-surface/10' :'bg-cta/10'
                            }`}
                          >
                            <Icon
                              name={skill.icon as any}
                              size={20}
                              className={
                                skill.color === 'accent' ?'text-accent'
                                  : skill.color === 'surface' ?'text-surface' :'text-cta'
                              }
                            />
                          </div>
                          <span className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{skill.level}%</span>
                          <span className="flex items-center space-x-1">
                            <Icon name="BriefcaseIcon" size={14} />
                            <span>{skill.projects}</span>
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${
                            skill.color === 'accent' ?'bg-accent'
                              : skill.color === 'surface' ?'bg-surface' :'bg-cta'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300">
              <Icon
                name="AcademicCapIcon"
                size={40}
                className="text-accent mx-auto mb-4"
              />
              <p className="text-3xl font-bold text-foreground mb-2">25+</p>
              <p className="text-sm text-muted-foreground">
                Professional Certifications
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-surface/50 transition-all duration-300">
              <Icon
                name="RocketLaunchIcon"
                size={40}
                className="text-surface mx-auto mb-4"
              />
              <p className="text-3xl font-bold text-foreground mb-2">150+</p>
              <p className="text-sm text-muted-foreground">
                Projects Completed
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-cta/50 transition-all duration-300">
              <Icon
                name="UserGroupIcon"
                size={40}
                className="text-cta mx-auto mb-4"
              />
              <p className="text-3xl font-bold text-foreground mb-2">50+</p>
              <p className="text-sm text-muted-foreground">
                Speaking Engagements
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="relative max-w-md w-full bg-card border border-accent/30 rounded-2xl p-8 shadow-premium"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-lg hover:bg-destructive transition-colors duration-300"
            >
              <Icon name="XMarkIcon" size={20} className="text-foreground" />
            </button>
            <div className="text-center space-y-6">
              <div
                className={`inline-flex p-4 rounded-2xl ${
                  selectedSkill.color === 'accent' ?'bg-accent/10'
                    : selectedSkill.color === 'surface' ?'bg-surface/10' :'bg-cta/10'
                }`}
              >
                <Icon
                  name={selectedSkill.icon as any}
                  size={48}
                  className={
                    selectedSkill.color === 'accent' ?'text-accent'
                      : selectedSkill.color === 'surface' ?'text-surface' :'text-cta'
                  }
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {selectedSkill.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Proficiency Level
                  </p>
                  <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full ${
                        selectedSkill.color === 'accent' ?'bg-accent'
                          : selectedSkill.color === 'surface' ?'bg-surface' :'bg-cta'
                      }`}
                      style={{ width: `${selectedSkill.level}%` }}
                    />
                  </div>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {selectedSkill.level}%
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Projects Completed
                  </p>
                  <p className="text-3xl font-bold text-accent">
                    {selectedSkill.projects}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}