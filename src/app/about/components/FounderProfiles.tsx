'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  year: string;
  title: string;
  description: string;
}

interface Founder {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
  expertise: string[];
  achievements: Achievement[];
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

interface FounderProfilesProps {
  className?: string;
}

const FounderProfiles = ({ className = '' }: FounderProfilesProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const founders: Founder[] = [
  {
    name: 'Alexander Chen',
    role: 'Founder & CEO',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b96df5c7-1763298849215.png",
    alt: 'Professional headshot of Asian man with short black hair in navy suit smiling confidently',
    bio: 'Visionary technologist with 15+ years of experience in enterprise software development and cybersecurity. Former lead architect at Fortune 100 companies, Alexander founded MaXToN to bridge the gap between cutting-edge technology and business transformation.',
    expertise: ['Enterprise Architecture', 'Cybersecurity', 'Digital Transformation', 'Strategic Leadership'],
    achievements: [
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Named "Top 40 Under 40" technology leaders by Tech Innovation Magazine'
    },
    {
      year: '2022',
      title: 'Security Excellence',
      description: 'Led development of security framework adopted by 50+ enterprise clients'
    },
    {
      year: '2021',
      title: 'Thought Leadership',
      description: 'Published "The Future of Enterprise Security" - bestselling technical book'
    },
    {
      year: '2020',
      title: 'Patent Innovation',
      description: 'Awarded 3 patents for innovative cybersecurity methodologies'
    }],

    social: {
      linkedin: 'https://linkedin.com/in/alexanderchen',
      twitter: 'https://twitter.com/alexchen',
      github: 'https://github.com/alexanderchen'
    }
  },
  {
    name: 'Sarah Martinez',
    role: 'Co-Founder & CTO',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b933913-1763299161094.png",
    alt: 'Professional portrait of Hispanic woman with long brown hair in black blazer with confident smile',
    bio: 'Full-stack development expert and AI specialist with a passion for creating scalable, intelligent systems. Sarah brings deep technical expertise in modern web technologies and machine learning to drive innovation at MaXToN.',
    expertise: ['Full-Stack Development', 'AI & Machine Learning', 'Cloud Architecture', 'DevOps'],
    achievements: [
    {
      year: '2023',
      title: 'AI Innovation',
      description: 'Developed proprietary AI-powered code optimization system reducing deployment time by 60%'
    },
    {
      year: '2022',
      title: 'Open Source Contribution',
      description: 'Core contributor to 5 major open-source projects with 100K+ downloads'
    },
    {
      year: '2021',
      title: 'Conference Speaker',
      description: 'Keynote speaker at 10+ international technology conferences'
    },
    {
      year: '2020',
      title: 'Technical Excellence',
      description: 'Led migration of 20+ legacy systems to modern cloud architecture'
    }],

    social: {
      linkedin: 'https://linkedin.com/in/sarahmartinez',
      twitter: 'https://twitter.com/sarahdev',
      github: 'https://github.com/sarahmartinez'
    }
  },
  {
    name: 'David Thompson',
    role: 'Co-Founder & Head of Forex Trading',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17ccdddbd-1763295801231.png",
    alt: 'Professional headshot of Caucasian man with short blonde hair in charcoal suit with friendly expression',
    bio: 'Former Wall Street quantitative analyst with expertise in algorithmic trading and financial technology. David leads MaXToN\'s forex trading division, developing sophisticated trading platforms for institutional clients.',
    expertise: ['Algorithmic Trading', 'Financial Technology', 'Risk Management', 'Market Analysis'],
    achievements: [
    {
      year: '2023',
      title: 'Trading Platform Excellence',
      description: 'Developed trading platform processing $500M+ daily transactions with 99.99% uptime'
    },
    {
      year: '2022',
      title: 'Risk Management Innovation',
      description: 'Created proprietary risk assessment algorithms reducing client losses by 45%'
    },
    {
      year: '2021',
      title: 'Industry Partnership',
      description: 'Established partnerships with 15 major financial institutions'
    },
    {
      year: '2020',
      title: 'Regulatory Compliance',
      description: 'Led compliance initiatives achieving certifications in 12 international markets'
    }],

    social: {
      linkedin: 'https://linkedin.com/in/davidthompson',
      twitter: 'https://twitter.com/davidtrader',
      github: 'https://github.com/davidthompson'
    }
  }];


  return (
    <section className={`py-20 bg-gradient-to-b from-secondary to-primary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-accent">Founders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary leaders driving innovation and excellence at MaXToN Digital.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/3 space-y-4">
            {founders.map((founder, index) =>
            <button
              key={index}
              onClick={() => isHydrated && setSelectedFounder(index)}
              className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
              selectedFounder === index ?
              'bg-card border-2 border-accent glow-cyan' : 'bg-card/50 border border-accent/20 hover:border-accent/50'}`
              }>

                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <AppImage
                    src={founder.image}
                    alt={founder.alt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{founder.name}</h3>
                    <p className="text-sm text-accent">{founder.role}</p>
                  </div>
                </div>
              </button>
            )}
          </div>

          <div className="lg:w-2/3">
            <div className="bg-card/80 backdrop-blur-md border border-accent/20 rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="relative w-full md:w-48 h-64 rounded-xl overflow-hidden flex-shrink-0">
                  <AppImage
                    src={founders[selectedFounder].image}
                    alt={founders[selectedFounder].alt}
                    className="w-full h-full object-cover" />

                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {founders[selectedFounder].name}
                  </h3>
                  <p className="text-xl text-accent mb-4">{founders[selectedFounder].role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {founders[selectedFounder].bio}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={founders[selectedFounder].social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors duration-300">

                      <Icon name="LinkIcon" size={20} className="text-accent" />
                    </a>
                    <a
                      href={founders[selectedFounder].social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors duration-300">

                      <Icon name="ChatBubbleLeftIcon" size={20} className="text-accent" />
                    </a>
                    <a
                      href={founders[selectedFounder].social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors duration-300">

                      <Icon name="CodeBracketIcon" size={20} className="text-accent" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {founders[selectedFounder].expertise.map((skill, index) =>
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">

                      {skill}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-6">Professional Timeline</h4>
                <div className="space-y-6">
                  {founders[selectedFounder].achievements.map((achievement, index) =>
                  <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-accent font-bold text-lg">
                        {achievement.year}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-foreground mb-2">
                          {achievement.title}
                        </h5>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FounderProfiles;