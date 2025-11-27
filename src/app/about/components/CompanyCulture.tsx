'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CultureHighlight {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
}

interface CompanyCultureProps {
  className?: string;
}

const CompanyCulture = ({ className = '' }: CompanyCultureProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % cultureHighlights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const cultureHighlights: CultureHighlight[] = [
  {
    title: 'Innovation Lab',
    description: 'Our state-of-the-art workspace designed for creativity and collaboration, featuring the latest technology and ergonomic design.',
    image: "https://images.unsplash.com/photo-1637621982007-44aaf9f9b0c6",
    alt: 'Modern open office space with glass walls, standing desks, and collaborative work areas with natural lighting',
    icon: 'LightBulbIcon'
  },
  {
    title: 'Team Collaboration',
    description: 'Regular brainstorming sessions and hackathons where our team comes together to solve complex challenges and innovate.',
    image: "https://images.unsplash.com/photo-1573497161854-72447225081d",
    alt: 'Diverse team of professionals gathered around conference table with laptops and whiteboards during collaborative meeting',
    icon: 'UserGroupIcon'
  },
  {
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth through workshops, conferences, and certification programs to stay at the cutting edge.',
    image: "https://images.unsplash.com/photo-1637743408246-ac98bc90d68b",
    alt: 'Professional training session with instructor presenting to engaged audience in modern conference room',
    icon: 'AcademicCapIcon'
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements, wellness programs, and team activities that prioritize mental and physical well-being.',
    image: "https://images.unsplash.com/photo-1720766397483-0300a1749770",
    alt: 'Team members enjoying outdoor team building activity in park with casual attire and relaxed atmosphere',
    icon: 'HeartIcon'
  },
  {
    title: 'Celebrating Success',
    description: 'We recognize achievements, celebrate milestones, and foster a culture of appreciation and recognition.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_196c3f91f-1764247933810.png",
    alt: 'Team celebration with colleagues raising glasses in toast at company event with decorative lighting',
    icon: 'TrophyIcon'
  }];


  const benefits = [
  { icon: 'BriefcaseIcon', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
  { icon: 'HeartIcon', title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
  { icon: 'AcademicCapIcon', title: 'Learning Budget', description: 'Annual budget for courses, conferences, and certifications' },
  { icon: 'HomeModernIcon', title: 'Remote Flexibility', description: 'Hybrid work model with flexible hours' },
  { icon: 'GlobeAltIcon', title: 'Global Opportunities', description: 'Work with international clients and teams' },
  { icon: 'SparklesIcon', title: 'Innovation Time', description: '20% time for personal projects and experimentation' }];


  return (
    <section className={`py-20 bg-gradient-to-b from-primary to-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Culture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A workplace where innovation thrives, collaboration flourishes, and every team member is empowered to excel.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            {cultureHighlights.map((highlight, index) =>
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'}`
              }>

                <AppImage
                src={highlight.image}
                alt={highlight.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center">
                      <Icon name={highlight.icon as any} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">{highlight.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl">{highlight.description}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {cultureHighlights.map((_, index) =>
            <button
              key={index}
              onClick={() => isHydrated && setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'w-12 bg-accent' : 'w-2 bg-muted-foreground/30'}`
              }
              aria-label={`Go to slide ${index + 1}`} />

            )}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Join <span className="text-accent">MaXToN</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) =>
            <div
              key={index}
              className="bg-card/50 backdrop-blur-md border border-accent/20 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:scale-105 group">

                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={benefit.icon as any} size={32} className="text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/10 via-surface/10 to-cta/10 border border-accent/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We\'re always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-cta text-cta-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-cta/50 transition-all duration-300 glow-gold">

              <Icon name="BriefcaseIcon" size={24} />
              <span>Explore Careers</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default CompanyCulture;