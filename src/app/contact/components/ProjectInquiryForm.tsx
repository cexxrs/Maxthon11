'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  requirements: string[];
}

interface ProjectInquiryFormProps {
  className?: string;
}

const ProjectInquiryForm = ({ className = '' }: ProjectInquiryFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'cybersecurity', label: 'Cybersecurity Solutions' },
    { value: 'forex-trading', label: 'Forex Trading Platform' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other Services' },
  ];

  const budgetRanges = [
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k+', label: '$250,000+' },
    { value: 'flexible', label: 'Flexible / To Discuss' },
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (< 1 month)' },
    { value: '1-3-months', label: '1-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-12-months', label: '6-12 Months' },
    { value: '12+months', label: '12+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' },
  ];

  const requirementOptions = [
    'Custom Design',
    'Mobile App',
    'API Integration',
    'Database Design',
    'Security Audit',
    'Cloud Hosting',
    'SEO Optimization',
    'Analytics Setup',
    'Payment Gateway',
    'User Authentication',
    'Admin Dashboard',
    'Third-party Integration',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!isHydrated) return;
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequirementToggle = (requirement: string) => {
    if (!isHydrated) return;
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter((r) => r !== requirement)
        : [...prev.requirements, requirement],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        requirements: [],
      });
    }, 3000);
  };

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-b from-background to-secondary ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-surface/10 border border-surface/30 rounded-full mb-6">
            <Icon name="DocumentTextIcon" size={20} className="text-surface" />
            <span className="text-sm font-mono text-surface tracking-wider">PROJECT INQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Start Your Project
            <span className="block mt-2 bg-gradient-to-r from-surface to-cta bg-clip-text text-transparent">
              With Confidence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 2 hours with a detailed proposal.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-premium">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 border-2 border-success rounded-full mb-6">
                <Icon name="CheckCircleIcon" size={40} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your inquiry has been received. We'll contact you within 2 hours.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Icon name="ClockIcon" size={16} />
                <span>Expected response time: 1-2 hours</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                  Project Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((time) => (
                    <option key={time.value} value={time.value}>
                      {time.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Project Requirements (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {requirementOptions.map((requirement) => (
                    <button
                      key={requirement}
                      type="button"
                      onClick={() => handleRequirementToggle(requirement)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isHydrated && formData.requirements.includes(requirement)
                          ? 'bg-accent/20 border-2 border-accent text-accent' :'bg-background border border-border text-muted-foreground hover:border-accent/50'
                      }`}
                    >
                      {requirement}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project goals, challenges, and what you're looking to achieve..."
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <Icon name="InformationCircleIcon" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. All information is encrypted and handled securely in compliance with GDPR regulations.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-accent to-surface text-foreground font-bold text-lg rounded-lg hover:shadow-premium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Inquiry</span>
                    <Icon name="PaperAirplaneIcon" size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectInquiryForm;