'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
  value: string;
  availability: string;
  responseTime: string;
  action: string;
  color: string;
}

interface ContactMethodsProps {
  className?: string;
}

const ContactMethods = ({ className = '' }: ContactMethodsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const contactMethods: ContactMethod[] = [
    {
      id: 'email',
      icon: 'EnvelopeIcon',
      title: 'Email Us',
      description: 'Send us a detailed message and we\'ll respond within 2 hours during business hours.',
      value: 'contact@maxtondigital.com',
      availability: '24/7 Monitoring',
      responseTime: '< 2 hours',
      action: 'Send Email',
      color: 'accent',
    },
    {
      id: 'phone',
      icon: 'PhoneIcon',
      title: 'Call Us',
      description: 'Speak directly with our team for immediate assistance and consultation.',
      value: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now',
      color: 'success',
    },
    {
      id: 'video',
      icon: 'VideoCameraIcon',
      title: 'Video Consultation',
      description: 'Schedule a face-to-face video call to discuss your project in detail.',
      value: 'Book a Meeting',
      availability: 'Flexible Scheduling',
      responseTime: 'Same Day',
      action: 'Schedule Call',
      color: 'surface',
    },
    {
      id: 'chat',
      icon: 'ChatBubbleLeftEllipsisIcon',
      title: 'Live Chat',
      description: 'Get instant answers from our AI assistant or connect with a human expert.',
      value: 'Start Chatting',
      availability: 'Always Online',
      responseTime: '< 1 minute',
      action: 'Open Chat',
      color: 'cta',
    },
  ];

  const handleMethodClick = (methodId: string) => {
    if (!isHydrated) return;
    setSelectedMethod(methodId === selectedMethod ? null : methodId);
  };

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your
            <span className="block mt-2 bg-gradient-to-r from-accent to-surface bg-clip-text text-transparent">
              Communication Channel
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to connect with our team. Select the method that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={method.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                isHydrated && selectedMethod === method.id ? 'scale-105' : ''
              }`}
              onClick={() => handleMethodClick(method.id)}
              style={{
                animation: isHydrated ? `slide-up 0.6s ease-out ${index * 0.1}s both` : 'none',
              }}
            >
              <div className="relative h-full bg-card border border-border rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-premium group-hover:bg-card/80">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-${method.color}/10 border border-${method.color}/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={method.icon as any} size={28} className={`text-${method.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {method.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="text-foreground font-medium">{method.availability}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Response:</span>
                      <span className={`text-${method.color} font-medium`}>{method.responseTime}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground font-mono text-sm mb-3">{method.value}</p>
                    <button className={`w-full px-4 py-2.5 bg-${method.color}/10 border border-${method.color}/30 rounded-lg text-${method.color} font-semibold text-sm hover:bg-${method.color}/20 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg`}>
                      <span>{method.action}</span>
                      <Icon name="ArrowRightIcon" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg">
            <Icon name="ShieldCheckIcon" size={20} className="text-success" />
            <span className="text-sm text-muted-foreground">
              All communications are encrypted and GDPR compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;