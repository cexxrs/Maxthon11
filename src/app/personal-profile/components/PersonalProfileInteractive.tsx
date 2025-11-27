'use client';

import { useState, useEffect } from 'react';
import ProfileHero from './ProfileHero';
import JourneyTimeline from './JourneyTimeline';
import AchievementGallery from './AchievementGallery';
import ThoughtLeadership from './ThoughtLeadership';
import ExpertiseMap from './ExpertiseMap';

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  followers: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

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

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  views: string;
  shares: string;
  featured: boolean;
}

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

export default function PersonalProfileInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const profileData = {
    name: 'Alexander Chen',
    title: 'Chief Technology Officer & Founder',
    tagline: 'Architecting the future of digital experiences',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14a083e27-1763293810125.png",
    imageAlt: 'Professional portrait of Asian male technology executive in navy suit with confident smile in modern office setting',
    bio: 'With over 15 years of experience in web development, cybersecurity, and digital innovation, I lead MaXToN Digital in creating transformative solutions for enterprises worldwide. My passion lies in bridging the gap between cutting-edge technology and business value.',
    socialLinks: [
    {
      platform: 'LinkedIn',
      icon: 'UserGroupIcon',
      url: 'https://linkedin.com',
      followers: '50K+ Followers'
    },
    {
      platform: 'Twitter',
      icon: 'ChatBubbleLeftIcon',
      url: 'https://twitter.com',
      followers: '25K+ Followers'
    },
    {
      platform: 'GitHub',
      icon: 'CodeBracketIcon',
      url: 'https://github.com',
      followers: '15K+ Stars'
    }],

    stats: [
    { label: 'Years Experience', value: '15+', icon: 'CalendarIcon' },
    { label: 'Projects Led', value: '200+', icon: 'RocketLaunchIcon' },
    { label: 'Industry Awards', value: '35+', icon: 'TrophyIcon' }]

  };

  const timelineEvents: TimelineEvent[] = [
  {
    year: '2024',
    title: 'Global Expansion & Innovation',
    company: 'MaXToN Digital',
    description: 'Leading company expansion into international markets while pioneering AI-driven cybersecurity solutions and next-generation web architectures.',
    achievements: [
    'Expanded operations to 15 countries across 4 continents',
    'Launched proprietary AI security platform serving Fortune 500 clients',
    'Achieved ISO 27001 and SOC 2 Type II certifications',
    'Grew team to 150+ professionals across multiple disciplines'],

    icon: 'GlobeAltIcon',
    color: 'accent'
  },
  {
    year: '2020',
    title: 'Founded MaXToN Digital',
    company: 'MaXToN Digital',
    description: 'Established premium digital agency combining web development excellence with enterprise-grade cybersecurity and forex trading solutions.',
    achievements: [
    'Secured $5M seed funding from leading venture capital firms',
    'Built core team of 25 senior engineers and security experts',
    'Delivered 50+ enterprise projects in first year',
    'Established partnerships with major cloud providers'],

    icon: 'BuildingOfficeIcon',
    color: 'surface'
  },
  {
    year: '2015',
    title: 'Head of Engineering',
    company: 'TechCorp Solutions',
    description: 'Led engineering division of 80+ developers, architecting scalable platforms serving millions of users globally.',
    achievements: [
    'Reduced infrastructure costs by 40% through cloud optimization',
    'Implemented DevOps practices reducing deployment time by 75%',
    'Mentored 30+ junior developers into senior positions',
    'Achieved 99.99% uptime across all production systems'],

    icon: 'CpuChipIcon',
    color: 'cta'
  },
  {
    year: '2012',
    title: 'Senior Security Architect',
    company: 'CyberShield Inc',
    description: 'Designed and implemented enterprise security architectures protecting critical infrastructure for government and financial institutions.',
    achievements: [
    'Prevented 500+ security incidents through proactive measures',
    'Developed proprietary threat detection algorithms',
    'Obtained CISSP and CEH certifications',
    'Published 15 security research papers'],

    icon: 'ShieldCheckIcon',
    color: 'accent'
  },
  {
    year: '2009',
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd',
    description: 'Built scalable web applications using cutting-edge technologies, establishing foundation for technical leadership career.',
    achievements: [
    'Developed 30+ production applications serving 1M+ users',
    'Mastered 10+ programming languages and frameworks',
    'Contributed to 20+ open-source projects',
    'Received Developer of the Year award'],

    icon: 'CodeBracketSquareIcon',
    color: 'surface'
  }];


  const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Global Technology Leadership Award',
    category: 'Industry Recognition',
    date: 'November 2024',
    description: 'Recognized as one of the top 50 technology leaders globally for innovation in cybersecurity and digital transformation.',
    image: "https://images.unsplash.com/photo-1652471180364-d5ec76afd40e",
    imageAlt: 'Golden trophy award on black pedestal with spotlight illumination against dark background',
    icon: 'TrophyIcon',
    metrics: [
    { label: 'Global Rank', value: '#12' },
    { label: 'Category', value: 'Tech' }]

  },
  {
    id: 2,
    title: 'Certified Information Systems Security Professional',
    category: 'Certification',
    date: 'March 2023',
    description: 'Advanced CISSP certification demonstrating expertise in designing, implementing, and managing cybersecurity programs.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f932ebae-1764247921069.png",
    imageAlt: 'Professional certification document with official seal and ribbon on wooden desk',
    icon: 'ShieldCheckIcon',
    metrics: [
    { label: 'Score', value: '98%' },
    { label: 'Validity', value: '3 Years' }]

  },
  {
    id: 3,
    title: 'TEDx Speaker - Future of Web Security',
    category: 'Speaking',
    date: 'September 2023',
    description: 'Delivered keynote presentation on emerging cybersecurity threats and AI-powered defense mechanisms to audience of 2,000+ professionals.',
    image: "https://images.unsplash.com/photo-1724827192883-95d0b50c81ce",
    imageAlt: 'Speaker presenting on stage with large audience in modern conference hall with red lighting',
    icon: 'MicrophoneIcon',
    metrics: [
    { label: 'Views', value: '500K+' },
    { label: 'Attendees', value: '2,000+' }]

  },
  {
    id: 4,
    title: 'AWS Solutions Architect Professional',
    category: 'Certification',
    date: 'January 2024',
    description: 'Expert-level AWS certification validating ability to design and deploy dynamically scalable, highly available systems.',
    image: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
    imageAlt: 'Digital cloud computing network visualization with glowing blue connections on dark background',
    icon: 'CloudIcon',
    metrics: [
    { label: 'Level', value: 'Expert' },
    { label: 'Score', value: '95%' }]

  },
  {
    id: 5,
    title: 'Published Author - Cybersecurity Handbook',
    category: 'Publication',
    date: 'June 2023',
    description: 'Co-authored comprehensive guide on modern cybersecurity practices, sold 50,000+ copies worldwide and translated into 12 languages.',
    image: "https://images.unsplash.com/photo-1651563516395-d765b5a25a45",
    imageAlt: 'Stack of hardcover books with cybersecurity themed covers on wooden library table',
    icon: 'BookOpenIcon',
    metrics: [
    { label: 'Copies Sold', value: '50K+' },
    { label: 'Languages', value: '12' }]

  },
  {
    id: 6,
    title: 'Innovation Excellence Award',
    category: 'Industry Recognition',
    date: 'December 2023',
    description: 'Honored for pioneering AI-driven security solutions that reduced cyber threats by 85% for enterprise clients.',
    image: "https://images.unsplash.com/photo-1729669126982-d194f8b25b63",
    imageAlt: 'Modern glass trophy with blue LED lighting on reflective surface in elegant setting',
    icon: 'LightBulbIcon',
    metrics: [
    { label: 'Impact', value: '85%' },
    { label: 'Clients', value: '200+' }]

  }];


  const articles: Article[] = [
  {
    id: 1,
    title: 'The Future of Web Development: AI-Powered Architectures',
    category: 'Web Development',
    date: 'November 15, 2024',
    readTime: '12 min read',
    excerpt: 'Exploring how artificial intelligence is revolutionizing web architecture, from automated code generation to intelligent performance optimization and predictive user experiences.',
    image: "https://images.unsplash.com/photo-1660554253786-63fa532248bd",
    imageAlt: 'Futuristic digital interface with AI neural network visualization and glowing blue code on dark screen',
    views: '25K',
    shares: '1.2K',
    featured: true
  },
  {
    id: 2,
    title: 'Zero Trust Security: Implementation Guide for Enterprises',
    category: 'Cybersecurity',
    date: 'November 10, 2024',
    readTime: '15 min read',
    excerpt: 'Comprehensive guide to implementing zero trust security architecture in enterprise environments, including practical strategies and real-world case studies.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f71bb91e-1764247922270.png",
    imageAlt: 'Digital security lock icon with glowing blue circuit patterns on dark technology background',
    views: '18K',
    shares: '890',
    featured: false
  },
  {
    id: 3,
    title: 'Forex Trading Platforms: Technical Architecture Deep Dive',
    category: 'Forex Trading',
    date: 'November 5, 2024',
    readTime: '10 min read',
    excerpt: 'Technical analysis of modern forex trading platform architectures, covering real-time data processing, low-latency execution, and regulatory compliance.',
    image: "https://images.unsplash.com/photo-1583373325529-501e03a3a8e7",
    imageAlt: 'Financial trading charts with candlestick patterns and technical indicators on multiple computer monitors',
    views: '15K',
    shares: '720',
    featured: false
  },
  {
    id: 4,
    title: 'Microservices vs Monoliths: Making the Right Choice',
    category: 'Web Development',
    date: 'October 28, 2024',
    readTime: '8 min read',
    excerpt: 'Practical comparison of microservices and monolithic architectures, helping teams make informed decisions based on project requirements and organizational maturity.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c0a88cb-1764247920848.png",
    imageAlt: 'Abstract architectural diagram showing interconnected service modules with glowing connection lines',
    views: '22K',
    shares: '1.1K',
    featured: false
  },
  {
    id: 5,
    title: 'Quantum Computing Threats to Current Encryption',
    category: 'Cybersecurity',
    date: 'October 20, 2024',
    readTime: '14 min read',
    excerpt: 'Analyzing the impact of quantum computing on current encryption standards and exploring post-quantum cryptography solutions for future-proof security.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_105261b1e-1764247932311.png",
    imageAlt: 'Quantum computer processor with glowing blue quantum bits in high-tech laboratory environment',
    views: '30K',
    shares: '1.5K',
    featured: false
  },
  {
    id: 6,
    title: 'Building Scalable Real-Time Applications with WebSockets',
    category: 'Web Development',
    date: 'October 12, 2024',
    readTime: '11 min read',
    excerpt: 'Technical guide to implementing WebSocket-based real-time applications that scale to millions of concurrent connections with optimal performance.',
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f",
    imageAlt: 'Network visualization showing real-time data flow with glowing connection nodes on dark background',
    views: '19K',
    shares: '950',
    featured: false
  }];


  const expertise: ExpertiseCategory[] = [
  {
    category: 'Web Development',
    skills: [
    { name: 'React & Next.js', level: 98, projects: 85, icon: 'CodeBracketIcon', color: 'accent' },
    { name: 'TypeScript', level: 95, projects: 120, icon: 'CommandLineIcon', color: 'surface' },
    { name: 'Node.js & APIs', level: 92, projects: 95, icon: 'ServerIcon', color: 'cta' },
    { name: 'Cloud Architecture', level: 90, projects: 75, icon: 'CloudIcon', color: 'accent' }]

  },
  {
    category: 'Cybersecurity',
    skills: [
    { name: 'Penetration Testing', level: 96, projects: 65, icon: 'ShieldCheckIcon', color: 'surface' },
    { name: 'Security Architecture', level: 94, projects: 80, icon: 'LockClosedIcon', color: 'accent' },
    { name: 'Threat Intelligence', level: 91, projects: 55, icon: 'EyeIcon', color: 'cta' },
    { name: 'Compliance & Auditing', level: 88, projects: 45, icon: 'DocumentCheckIcon', color: 'surface' }]

  }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse space-y-8 p-8">
          <div className="h-96 bg-muted/20 rounded-2xl" />
          <div className="h-64 bg-muted/20 rounded-2xl" />
          <div className="h-64 bg-muted/20 rounded-2xl" />
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <ProfileHero {...profileData} />
      <JourneyTimeline events={timelineEvents} />
      <AchievementGallery achievements={achievements} />
      <ThoughtLeadership articles={articles} />
      <ExpertiseMap expertise={expertise} />
    </div>);

}