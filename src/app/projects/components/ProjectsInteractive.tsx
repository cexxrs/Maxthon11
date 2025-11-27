'use client';

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import ProjectModal from './ProjectModal';
import StatsSection from './StatsSection';
import Icon from '@/components/ui/AppIcon';

interface Project {
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
  featured: boolean;
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
}

const ProjectsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeTechnology, setActiveTechnology] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProjects: Project[] = [
  {
    id: 1,
    title: "SecureBank Digital Transformation",
    category: "Web Development",
    industry: "Finance",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Blockchain"],
    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    alt: "Modern banking dashboard interface showing financial analytics charts and transaction data on multiple screens",
    description: "Complete digital banking platform with advanced security features and real-time transaction processing.",
    fullDescription: "SecureBank approached us to modernize their entire digital infrastructure, requiring a complete overhaul of their legacy systems while maintaining 99.99% uptime. The project involved building a scalable microservices architecture capable of handling millions of daily transactions with enterprise-grade security protocols.",
    challenge: "The primary challenge was migrating 15 years of legacy data while maintaining continuous service availability. We needed to implement blockchain-based transaction verification, integrate with multiple payment gateways, and ensure compliance with international banking regulations including PCI DSS and GDPR.",
    solution: "We designed a phased migration strategy using a hybrid cloud architecture with AWS. The new platform features real-time fraud detection using machine learning, blockchain-verified transactions, and a progressive web app for seamless mobile banking. We implemented zero-downtime deployment strategies and comprehensive disaster recovery systems.",
    results: [
    "Reduced transaction processing time by 78% from 3.2 seconds to 0.7 seconds",
    "Achieved 99.99% uptime during 6-month migration period with zero data loss",
    "Increased mobile banking adoption by 245% within first quarter",
    "Prevented $2.3M in fraudulent transactions through AI-powered detection",
    "Reduced operational costs by 42% through automation and cloud optimization"],

    metrics: [
    { label: "Transaction Speed", value: "0.7s" },
    { label: "Uptime", value: "99.99%" },
    { label: "Cost Reduction", value: "42%" },
    { label: "User Growth", value: "245%" }],

    featured: true,
    testimonial: {
      quote: "MaXToN transformed our digital infrastructure beyond expectations. Their technical expertise and attention to security details gave us confidence throughout the entire migration process. The new platform has revolutionized how we serve our customers.",
      author: "Michael Chen",
      position: "Chief Technology Officer",
      company: "SecureBank International",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b96df5c7-1763298849215.png",
      avatarAlt: "Professional headshot of Asian man in navy suit with short black hair smiling confidently"
    },
    gallery: [
    {
      image: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
      alt: "Analytics dashboard showing real-time banking metrics with colorful charts and graphs"
    },
    {
      image: "https://images.unsplash.com/photo-1676245437659-2a05627080e4",
      alt: "Mobile banking app interface displaying account balance and recent transactions"
    },
    {
      image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
      alt: "Financial data visualization with multiple screens showing market trends"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_196d17d53-1764247923444.png",
      alt: "Business team reviewing banking platform analytics on large display screen"
    }]

  },
  {
    id: 2,
    title: "HealthCare Connect Platform",
    category: "Web Development",
    industry: "Healthcare",
    technologies: ["Next.js", "TypeScript", "MongoDB", "WebRTC", "HIPAA"],
    image: "https://images.unsplash.com/photo-1666214280577-5f90bc36be92",
    alt: "Modern telemedicine interface showing video consultation between doctor and patient with medical records",
    description: "HIPAA-compliant telemedicine platform enabling secure video consultations and electronic health records management.",
    fullDescription: "HealthCare Connect revolutionizes patient care by providing a comprehensive telemedicine solution that connects patients with healthcare providers through secure video consultations, digital prescriptions, and integrated health record management.",
    challenge: "Building a HIPAA-compliant platform that ensures patient data privacy while providing seamless real-time video consultations. Integration with existing hospital management systems and insurance providers required careful planning and execution.",
    solution: "We developed a fully encrypted platform using WebRTC for video consultations, implemented end-to-end encryption for all patient data, and created custom APIs for seamless integration with major EHR systems. The platform includes AI-powered symptom checkers and automated appointment scheduling.",
    results: [
    "Served over 50,000 patients in first 6 months of operation",
    "Reduced average wait time for consultations from 2 weeks to 24 hours",
    "Achieved 98.5% patient satisfaction rating",
    "Enabled healthcare access for rural communities with 300% increase in consultations",
    "Reduced no-show rates by 67% through automated reminders"],

    metrics: [
    { label: "Patients Served", value: "50K+" },
    { label: "Wait Time", value: "24hrs" },
    { label: "Satisfaction", value: "98.5%" },
    { label: "No-Show Reduction", value: "67%" }],

    featured: true,
    testimonial: {
      quote: "The platform MaXToN built has transformed how we deliver healthcare. The security measures and user experience are exceptional, making it easy for both our staff and patients to adopt the new system.",
      author: "Dr. Sarah Williams",
      position: "Chief Medical Officer",
      company: "HealthCare Connect",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_167a02761-1763296312845.png",
      avatarAlt: "Professional portrait of female doctor in white coat with stethoscope smiling warmly"
    },
    gallery: [
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1abf5abed-1764247923731.png",
      alt: "Telemedicine consultation screen showing doctor and patient in video call"
    },
    {
      image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684",
      alt: "Healthcare professional using tablet to access patient medical records"
    }]

  },
  {
    id: 3,
    title: "ForexPro Trading Platform",
    category: "Forex Trading",
    industry: "Finance",
    technologies: ["React", "Python", "TensorFlow", "Redis", "WebSocket"],
    image: "https://images.unsplash.com/photo-1630540926052-5c8a71baf0fb",
    alt: "Advanced forex trading platform showing multiple currency pair charts with technical indicators and real-time data",
    description: "AI-powered forex trading platform with real-time market analysis, automated trading strategies, and risk management tools.",
    fullDescription: "ForexPro is a sophisticated trading platform that combines artificial intelligence with traditional technical analysis to provide traders with actionable insights and automated trading capabilities across major currency pairs.",
    challenge: "Creating a platform that processes millions of data points per second while providing sub-millisecond trade execution. The system needed to handle high-frequency trading algorithms while maintaining stability during market volatility.",
    solution: "We built a distributed system using microservices architecture with Redis for caching and WebSocket for real-time data streaming. Machine learning models analyze market patterns and provide predictive insights. The platform includes advanced risk management tools and customizable trading strategies.",
    results: [
    "Achieved 99.98% uptime during high-volatility market conditions",
    "Processed over 10 million trades with average execution time of 0.3 seconds",
    "AI predictions achieved 73% accuracy rate for short-term market movements",
    "Reduced trading costs by 35% through optimized execution algorithms",
    "Grew user base to 25,000 active traders within 8 months"],

    metrics: [
    { label: "Execution Time", value: "0.3s" },
    { label: "AI Accuracy", value: "73%" },
    { label: "Active Traders", value: "25K" },
    { label: "Cost Reduction", value: "35%" }],

    featured: false,
    gallery: [
    {
      image: "https://images.unsplash.com/photo-1500401519266-0b71b29a05e0",
      alt: "Forex trading charts with candlestick patterns and technical indicators"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_149a1cbe2-1764247931479.png",
      alt: "Trading platform dashboard showing portfolio performance and market analysis"
    }]

  },
  {
    id: 4,
    title: "CyberShield Security Suite",
    category: "Cybersecurity",
    industry: "Technology",
    technologies: ["Python", "Kubernetes", "Elasticsearch", "AI/ML", "Zero Trust"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12200ae5e-1764247925279.png",
    alt: "Cybersecurity dashboard displaying network threat detection with real-time alerts and security metrics",
    description: "Enterprise-grade cybersecurity platform with AI-powered threat detection, automated response systems, and comprehensive security monitoring.",
    fullDescription: "CyberShield provides organizations with military-grade security infrastructure, combining artificial intelligence with human expertise to detect, prevent, and respond to cyber threats in real-time across all digital assets.",
    challenge: "Developing a system capable of analyzing billions of security events daily while minimizing false positives. The platform needed to integrate with diverse IT infrastructures and provide actionable intelligence without overwhelming security teams.",
    solution: "We implemented a zero-trust architecture with AI-powered behavioral analysis that learns normal patterns and identifies anomalies. The system uses machine learning to continuously improve threat detection accuracy and provides automated response playbooks for common attack vectors.",
    results: [
    "Detected and prevented 15,000+ security threats in first year",
    "Reduced false positive rate by 89% compared to traditional systems",
    "Decreased average incident response time from 4 hours to 12 minutes",
    "Protected over $500M in digital assets across 200+ enterprise clients",
    "Achieved SOC 2 Type II and ISO 27001 certifications"],

    metrics: [
    { label: "Threats Blocked", value: "15K+" },
    { label: "Response Time", value: "12min" },
    { label: "False Positives", value: "-89%" },
    { label: "Assets Protected", value: "$500M" }],

    featured: true,
    testimonial: {
      quote: "CyberShield has become our first line of defense. The AI-powered threat detection caught several sophisticated attacks that our previous system missed. MaXToN's expertise in cybersecurity is unmatched.",
      author: "James Rodriguez",
      position: "Chief Information Security Officer",
      company: "TechCorp Global",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_196b42d47-1763296935814.png",
      avatarAlt: "Professional headshot of Hispanic man in dark suit with confident expression"
    },
    gallery: [
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c2e1431-1764247925279.png",
      alt: "Security operations center with multiple screens showing threat monitoring"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b12ca7ba-1764247923735.png",
      alt: "Cybersecurity analyst reviewing threat intelligence dashboard"
    }]

  },
  {
    id: 5,
    title: "EduLearn Online Platform",
    category: "Web Development",
    industry: "Education",
    technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC", "AWS"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1667f738a-1764247920870.png",
    alt: "Modern e-learning platform interface showing interactive course content with video lessons and progress tracking",
    description: "Comprehensive online learning platform with live classes, interactive content, progress tracking, and AI-powered personalized learning paths.",
    fullDescription: "EduLearn transforms traditional education by providing an engaging online learning environment that adapts to each student's pace and learning style, featuring live interactive classes, gamified assessments, and comprehensive progress analytics.",
    challenge: "Creating an engaging learning experience that maintains student attention while accommodating different learning styles and paces. The platform needed to support thousands of concurrent live sessions while providing personalized content recommendations.",
    solution: "We developed an adaptive learning system using AI to analyze student performance and adjust content difficulty. The platform includes interactive whiteboards, breakout rooms for group work, and gamification elements to boost engagement. Real-time analytics help educators identify struggling students early.",
    results: [
    "Enrolled 100,000+ students across 50 countries in first year",
    "Achieved 92% course completion rate vs. industry average of 15%",
    "Improved student test scores by average of 34% compared to traditional methods",
    "Reduced teacher administrative workload by 60% through automation",
    "Generated $5M in revenue within 18 months of launch"],

    metrics: [
    { label: "Students", value: "100K+" },
    { label: "Completion Rate", value: "92%" },
    { label: "Score Improvement", value: "34%" },
    { label: "Revenue", value: "$5M" }],

    featured: false,
    gallery: [
    {
      image: "https://images.unsplash.com/photo-1604872436472-93d852afe82e",
      alt: "Student using laptop for online learning with course materials displayed"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_13774ee7b-1764247923720.png",
      alt: "Interactive virtual classroom with teacher and students in video conference"
    }]

  },
  {
    id: 6,
    title: "RetailMax E-Commerce",
    category: "Web Development",
    industry: "Retail",
    technologies: ["Next.js", "Shopify", "Stripe", "Redis", "Cloudflare"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1669a4385-1764247924040.png",
    alt: "Modern e-commerce website showing product catalog with shopping cart and checkout interface",
    description: "High-performance e-commerce platform with advanced product recommendations, seamless checkout, and inventory management integration.",
    fullDescription: "RetailMax delivers a premium online shopping experience with lightning-fast page loads, intelligent product recommendations, and a frictionless checkout process that maximizes conversion rates while providing comprehensive backend management tools.",
    challenge: "Building a platform capable of handling Black Friday traffic spikes while maintaining sub-second page load times. Integration with legacy inventory systems and multiple payment gateways required careful architecture planning.",
    solution: "We implemented a headless commerce architecture using Next.js for optimal performance and SEO. The platform uses edge computing for global content delivery, AI-powered product recommendations, and progressive web app technology for mobile users. Real-time inventory synchronization prevents overselling.",
    results: [
    "Handled 50,000 concurrent users during peak sales without downtime",
    "Increased conversion rate by 156% through optimized checkout flow",
    "Reduced cart abandonment rate from 68% to 23%",
    "Achieved average page load time of 1.2 seconds globally",
    "Generated $12M in sales within first 6 months"],

    metrics: [
    { label: "Conversion Rate", value: "+156%" },
    { label: "Page Load", value: "1.2s" },
    { label: "Cart Abandonment", value: "23%" },
    { label: "Sales", value: "$12M" }],

    featured: false,
    testimonial: {
      quote: "Our online sales have tripled since launching the new platform. The performance improvements and user experience enhancements have exceeded all expectations. MaXToN delivered a world-class solution.",
      author: "Emily Thompson",
      position: "Director of E-Commerce",
      company: "RetailMax",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_186600153-1763296403185.png",
      avatarAlt: "Professional portrait of woman with blonde hair in business attire smiling"
    },
    gallery: [
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb1546c8-1764247923726.png",
      alt: "E-commerce product page with high-quality images and add to cart button"
    },
    {
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d807e80-1764247923531.png",
      alt: "Shopping cart interface showing selected products and checkout options"
    }]

  }];


  const stats = [
  {
    icon: "RocketLaunchIcon",
    value: "200+",
    label: "Projects Completed",
    color: "accent"
  },
  {
    icon: "UserGroupIcon",
    value: "98%",
    label: "Client Satisfaction",
    color: "success"
  },
  {
    icon: "ChartBarIcon",
    value: "$50M+",
    label: "Revenue Generated",
    color: "cta"
  },
  {
    icon: "GlobeAltIcon",
    value: "35+",
    label: "Countries Served",
    color: "surface"
  }];


  const categories = ['All', 'Web Development', 'Cybersecurity', 'Forex Trading'];
  const industries = ['All', 'Finance', 'Healthcare', 'Technology', 'Education', 'Retail'];
  const technologies = ['All', 'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Blockchain'];

  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesIndustry = activeIndustry === 'All' || project.industry === activeIndustry;
    const matchesTechnology = activeTechnology === 'All' || project.technologies.includes(activeTechnology);
    const matchesSearch = searchQuery === '' ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesIndustry && matchesTechnology && matchesSearch;
  });

  const handleViewDetails = (id: number) => {
    if (!isHydrated) return;
    const project = mockProjects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (!isHydrated) return;
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleClearFilters = () => {
    if (!isHydrated) return;
    setActiveCategory('All');
    setActiveIndustry('All');
    setActiveTechnology('All');
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-32 pb-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="h-12 bg-muted/20 rounded-lg w-64 mx-auto animate-pulse" />
              <div className="h-6 bg-muted/20 rounded-lg w-96 mx-auto animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted/20 rounded-xl animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative pt-32 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-surface/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <Icon name="RocketLaunchIcon" size={20} className="text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Work
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-surface">Portfolio</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our collection of transformative digital solutions that have helped businesses achieve their maximum potential through cutting-edge technology and innovative design.
            </p>
          </div>

          <StatsSection stats={stats} />

          <FilterBar
            categories={categories}
            industries={industries}
            technologies={technologies}
            activeCategory={activeCategory}
            activeIndustry={activeIndustry}
            activeTechnology={activeTechnology}
            searchQuery={searchQuery}
            onCategoryChange={setActiveCategory}
            onIndustryChange={setActiveIndustry}
            onTechnologyChange={setActiveTechnology}
            onSearchChange={setSearchQuery}
            onClearFilters={handleClearFilters} />


          {filteredProjects.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) =>
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails} />

            )}
            </div> :

          <div className="text-center py-20">
              <Icon name="FolderOpenIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No Projects Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search query to find what you&apos;re looking for.
              </p>
              <button
              onClick={handleClearFilters}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300">

                Clear All Filters
              </button>
            </div>
          }
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal} />

    </div>);

};

export default ProjectsInteractive;