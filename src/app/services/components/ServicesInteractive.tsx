'use client';

import { useState, useEffect } from 'react';
import ServiceHero from './ServiceHero';
import ServiceCard from './ServiceCard';
import TechStack from './TechStack';
import ProcessTimeline from './ProcessTimeline';
import PricingComparison from './PricingComparison';
import TestimonialsCarousel from './TestimonialsCarousel';
import CTASection from './CTASection';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  color: string;
}

interface Technology {
  name: string;
  icon: string;
  category: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Array<{
    name: string;
    included: boolean;
  }>;
  highlighted: boolean;
  icon: string;
}

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

const ServicesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
    'Transform your vision into stunning, high-performance web applications with cutting-edge technologies and modern frameworks.',
    image: "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f",
    alt: 'Modern workspace with multiple monitors displaying colorful code and web development interfaces',
    icon: 'CodeBracketIcon',
    color: 'accent',
    features: [
    {
      icon: 'CpuChipIcon',
      title: 'Live Code Visualization',
      description:
      'Watch your code come to life with real-time syntax highlighting and compilation demos'
    },
    {
      icon: 'RocketLaunchIcon',
      title: 'Performance Optimization',
      description:
      'Lightning-fast load times with advanced caching and optimization techniques'
    },
    {
      icon: 'DevicePhoneMobileIcon',
      title: 'Responsive Design',
      description:
      'Pixel-perfect experiences across all devices and screen sizes'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Security First',
      description:
      'Enterprise-grade security measures built into every line of code'
    }]

  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description:
    'Protect your digital assets with comprehensive security solutions, threat monitoring, and vulnerability assessments.',
    image: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
    alt: 'Digital security concept with glowing blue lock icon and network connections on dark background',
    icon: 'ShieldCheckIcon',
    color: 'surface',
    features: [
    {
      icon: 'BugAntIcon',
      title: 'Threat Simulation',
      description:
      'Interactive demos showing real-time threat detection and response'
    },
    {
      icon: 'ChartBarIcon',
      title: 'Security Assessment',
      description:
      'Comprehensive vulnerability scanning and penetration testing'
    },
    {
      icon: 'EyeIcon',
      title: 'Real-time Monitoring',
      description:
      '24/7 threat monitoring with instant alert systems'
    },
    {
      icon: 'DocumentCheckIcon',
      title: 'Compliance Management',
      description:
      'GDPR, HIPAA, and industry-specific compliance solutions'
    }]

  },
  {
    id: 'forex-trading',
    title: 'Forex Trading Platforms',
    description:
    'Advanced trading solutions with real-time market data, algorithmic trading, and comprehensive analytics.',
    image: "https://images.unsplash.com/photo-1583373325529-501e03a3a8e7",
    alt: 'Financial trading dashboard with multiple charts showing forex market data and candlestick patterns',
    icon: 'ChartBarIcon',
    color: 'cta',
    features: [
    {
      icon: 'ArrowTrendingUpIcon',
      title: 'Real-time Integration',
      description:
      'Live market data feeds with millisecond-level accuracy'
    },
    {
      icon: 'CalculatorIcon',
      title: 'Trading Simulators',
      description:
      'Practice strategies with realistic market simulations'
    },
    {
      icon: 'PresentationChartLineIcon',
      title: 'Market Analysis',
      description:
      'Advanced technical indicators and predictive analytics'
    },
    {
      icon: 'CogIcon',
      title: 'Algorithmic Trading',
      description:
      'Automated trading bots with customizable strategies'
    }]

  },
  {
    id: 'digital-projects',
    title: 'Digital Project Solutions',
    description:
    'End-to-end digital transformation services including mobile apps, cloud solutions, and enterprise software.',
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
    alt: 'Creative team collaborating on digital project with laptops and design sketches on modern office desk',
    icon: 'RectangleStackIcon',
    color: 'success',
    features: [
    {
      icon: 'CubeIcon',
      title: '3D Portfolio Showcase',
      description:
      'Interactive case studies with immersive 3D visualizations'
    },
    {
      icon: 'FunnelIcon',
      title: 'Project Filtering',
      description:
      'Advanced filtering by technology, industry, and complexity'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Client Success Stories',
      description:
      'Detailed testimonials with measurable business impact'
    },
    {
      icon: 'CloudIcon',
      title: 'Cloud Integration',
      description:
      'Seamless deployment on AWS, Azure, and Google Cloud'
    }]

  }];


  const technologies: Technology[] = [
  { name: 'React', icon: 'CodeBracketIcon', category: 'Frontend' },
  { name: 'Next.js', icon: 'RocketLaunchIcon', category: 'Frontend' },
  { name: 'TypeScript', icon: 'CommandLineIcon', category: 'Frontend' },
  { name: 'Node.js', icon: 'ServerIcon', category: 'Backend' },
  { name: 'Python', icon: 'CodeBracketSquareIcon', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'CircleStackIcon', category: 'Database' },
  { name: 'MongoDB', icon: 'TableCellsIcon', category: 'Database' },
  { name: 'AWS', icon: 'CloudIcon', category: 'Cloud' },
  { name: 'Docker', icon: 'CubeIcon', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'CubeTransparentIcon', category: 'DevOps' },
  { name: 'GraphQL', icon: 'ShareIcon', category: 'API' },
  { name: 'REST API', icon: 'ArrowsRightLeftIcon', category: 'API' }];


  const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
    'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
    icon: 'MagnifyingGlassIcon',
    duration: '1-2 weeks'
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
    'Our design team creates stunning mockups and interactive prototypes that bring your vision to life before development begins.',
    icon: 'PaintBrushIcon',
    duration: '2-3 weeks'
  },
  {
    number: '03',
    title: 'Development & Testing',
    description:
    'Expert developers build your solution using best practices, with continuous testing to ensure flawless functionality.',
    icon: 'CodeBracketIcon',
    duration: '4-8 weeks'
  },
  {
    number: '04',
    title: 'Deployment & Launch',
    description:
    'We handle the entire deployment process, ensuring a smooth launch with zero downtime and comprehensive monitoring.',
    icon: 'RocketLaunchIcon',
    duration: '1 week'
  },
  {
    number: '05',
    title: 'Support & Optimization',
    description:
    'Post-launch support includes performance monitoring, bug fixes, and continuous optimization based on user feedback.',
    icon: 'WrenchScrewdriverIcon',
    duration: 'Ongoing'
  }];


  const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$2,999',
    period: 'project',
    description: 'Perfect for small businesses and startups',
    icon: 'SparklesIcon',
    highlighted: false,
    features: [
    { name: 'Responsive Web Design', included: true },
    { name: 'Up to 5 Pages', included: true },
    { name: 'Basic SEO Optimization', included: true },
    { name: 'Contact Form Integration', included: true },
    { name: '30 Days Support', included: true },
    { name: 'Advanced Analytics', included: false },
    { name: 'E-commerce Features', included: false },
    { name: 'Custom Integrations', included: false }]

  },
  {
    name: 'Professional',
    price: '$7,999',
    period: 'project',
    description: 'Ideal for growing businesses',
    icon: 'BriefcaseIcon',
    highlighted: true,
    features: [
    { name: 'Custom Web Application', included: true },
    { name: 'Up to 15 Pages', included: true },
    { name: 'Advanced SEO & Analytics', included: true },
    { name: 'CMS Integration', included: true },
    { name: '90 Days Support', included: true },
    { name: 'E-commerce Features', included: true },
    { name: 'API Integrations', included: true },
    { name: 'Priority Support', included: false }]

  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'quote',
    description: 'Tailored solutions for large organizations',
    icon: 'BuildingOfficeIcon',
    highlighted: false,
    features: [
    { name: 'Unlimited Pages', included: true },
    { name: 'Custom Architecture', included: true },
    { name: 'Advanced Security', included: true },
    { name: 'Dedicated Team', included: true },
    { name: '1 Year Support', included: true },
    { name: 'Custom Integrations', included: true },
    { name: 'White-label Solutions', included: true },
    { name: '24/7 Priority Support', included: true }]

  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'TechVision Inc',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_141b6fda2-1763295319855.png",
    alt: 'Professional woman with shoulder-length brown hair in navy blazer smiling confidently',
    quote:
    'MaXToN Digital transformed our entire web infrastructure. Their expertise in cybersecurity gave us peace of mind, and the performance improvements were beyond our expectations.',
    rating: 5,
    service: 'Web Development & Cybersecurity'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'TradeFlow Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1de8d0400-1763294237371.png",
    alt: 'Asian businessman in charcoal suit with glasses looking professional in modern office',
    quote:
    'The forex trading platform they built for us is exceptional. Real-time data integration is flawless, and our clients love the intuitive interface. Best investment we ever made.',
    rating: 5,
    service: 'Forex Trading Platform'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Digital Strategy',
    company: 'Global Ventures',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1faff2fd5-1763296215078.png",
    alt: 'Hispanic woman with long dark hair in burgundy blazer with warm smile in corporate setting',
    quote:
    'Working with MaXToN was a game-changer. They delivered a complex enterprise solution on time and within budget. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    service: 'Digital Project Solutions'
  }];


  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Premium Digital Services"
        subtitle="Excellence in Every Line of Code"
        description="Elevate your business with our comprehensive suite of digital solutions—from cutting-edge web development to enterprise-grade cybersecurity and advanced trading platforms." />


      <section className="py-24 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-surface">
                Core Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to drive your business
              forward
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) =>
            <ServiceCard key={service.id} {...service} />
            )}
          </div>
        </div>
      </section>

      <TechStack technologies={technologies} />

      <ProcessTimeline steps={processSteps} />

      <PricingComparison tiers={pricingTiers} />

      <TestimonialsCarousel testimonials={testimonials} />

      <CTASection />
    </div>);

};

export default ServicesInteractive;