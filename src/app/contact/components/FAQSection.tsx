'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 'faq-1',
      question: 'What is your typical response time for inquiries?',
      answer: 'We guarantee a response within 2 hours during business hours (9AM-6PM EST, Monday-Friday). For urgent matters, our 24/7 emergency line ensures immediate assistance. Weekend inquiries are typically responded to within 4 hours.',
      category: 'general',
    },
    {
      id: 'faq-2',
      question: 'How do you handle project confidentiality and security?',
      answer: 'All client communications and project data are encrypted end-to-end. We sign NDAs before any detailed discussions and maintain strict GDPR compliance. Our security infrastructure includes multi-factor authentication, regular security audits, and ISO 27001 certification.',
      category: 'security',
    },
    {
      id: 'faq-3',
      question: 'What information do you need to provide a project quote?',
      answer: 'To provide an accurate quote, we need: project scope and objectives, desired timeline, budget range, technical requirements, target audience, and any existing systems or integrations. Our project inquiry form captures all necessary details for a comprehensive proposal.',
      category: 'pricing',
    },
    {
      id: 'faq-4',
      question: 'Do you offer consultation calls before starting a project?',
      answer: 'Yes! We offer free 30-minute consultation calls to discuss your project needs, answer questions, and determine if we\'re the right fit. You can schedule a call directly through our contact form or calendar integration.',
      category: 'general',
    },
    {
      id: 'faq-5',
      question: 'What payment methods do you accept?',
      answer: 'We accept wire transfers, ACH payments, major credit cards, and cryptocurrency for international clients. Payment terms are typically 50% upfront and 50% upon completion, with milestone-based payments available for larger projects.',
      category: 'pricing',
    },
    {
      id: 'faq-6',
      question: 'How do you handle different time zones?',
      answer: 'With offices in New York, London, and Singapore, plus remote teams worldwide, we provide 24/7 coverage. We schedule meetings at mutually convenient times and maintain flexible communication channels to accommodate all time zones.',
      category: 'general',
    },
    {
      id: 'faq-7',
      question: 'What happens after I submit a contact form?',
      answer: 'Within 2 hours, you\'ll receive an acknowledgment email with a unique inquiry ID. Within 24 hours, a senior team member will reach out to schedule a detailed discussion. We\'ll then provide a comprehensive proposal within 3-5 business days.',
      category: 'general',
    },
    {
      id: 'faq-8',
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! All projects include 30 days of complimentary support. We also offer monthly maintenance packages, priority support plans, and dedicated account management for long-term partnerships.',
      category: 'support',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: 'QuestionMarkCircleIcon' },
    { id: 'general', label: 'General', icon: 'InformationCircleIcon' },
    { id: 'pricing', label: 'Pricing', icon: 'CurrencyDollarIcon' },
    { id: 'security', label: 'Security', icon: 'ShieldCheckIcon' },
    { id: 'support', label: 'Support', icon: 'LifebuoyIcon' },
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (faqId: string) => {
    if (!isHydrated) return;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-surface/10 border border-surface/30 rounded-full mb-6">
            <Icon name="QuestionMarkCircleIcon" size={20} className="text-surface" />
            <span className="text-sm font-mono text-surface tracking-wider">FREQUENTLY ASKED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Questions &
            <span className="block mt-2 bg-gradient-to-r from-surface to-accent bg-clip-text text-transparent">
              Quick Answers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we work with clients.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => isHydrated && setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent/20 border-2 border-accent text-accent' :'bg-card border border-border text-muted-foreground hover:border-accent/50'
              }`}
            >
              <Icon name={category.icon as any} size={16} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/50"
              style={{
                animation: isHydrated ? `slide-up 0.4s ease-out ${index * 0.1}s both` : 'none',
              }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/80 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon
                  name={openFAQ === faq.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={24}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isHydrated && openFAQ === faq.id && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-xl p-8">
            <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Reach out and we'll get back to you within 2 hours.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-accent to-surface text-foreground font-semibold rounded-lg hover:shadow-premium transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Contact Support</span>
              <Icon name="ArrowRightIcon" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;