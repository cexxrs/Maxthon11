'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about' },
      { label: 'Careers', href: '/contact' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Web Development', href: '/services' },
      { label: 'Cybersecurity', href: '/services' },
      { label: 'Forex Trading', href: '/services' },
      { label: 'Digital Innovation', href: '/services' },
    ],
    resources: [
      { label: 'Projects', href: '/projects' },
      { label: 'Case Studies', href: '/projects' },
      { label: 'Blog', href: '/contact' },
      { label: 'Documentation', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms of Service', href: '/contact' },
      { label: 'Security', href: '/services' },
      { label: 'Compliance', href: '/services' },
    ],
  };

  const socialLinks = [
    { icon: 'EnvelopeIcon', href: 'mailto:contact@maxton.digital', label: 'Email' },
    { icon: 'PhoneIcon', href: 'tel:+1234567890', label: 'Phone' },
  ];

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className={`bg-primary border-t border-border ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/homepage" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-all duration-300" />
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10"
                >
                  <path
                    d="M20 2L37 12V28L20 38L3 28V12L20 2Z"
                    stroke="url(#footer-logo-gradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M20 10L30 16V24L20 30L10 24V16L20 10Z"
                    fill="url(#footer-logo-gradient-inner)"
                  />
                  <defs>
                    <linearGradient
                      id="footer-logo-gradient"
                      x1="3"
                      y1="2"
                      x2="37"
                      y2="38"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00D4FF" />
                      <stop offset="1" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient
                      id="footer-logo-gradient-inner"
                      x1="10"
                      y1="10"
                      x2="30"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00D4FF" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">
                  MaXToN
                </span>
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                  DIGITAL
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Empowering businesses through cutting-edge technology, enterprise
              security, and innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
                  aria-label={social.label}
                >
                  <Icon
                    name={social.icon as any}
                    size={20}
                    className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {isHydrated ? currentYear : '2025'} MaXToN Digital. All
              rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={16} className="text-success" />
                <span className="text-sm text-muted-foreground">
                  ISO 27001 Certified
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="LockClosedIcon" size={16} className="text-accent" />
                <span className="text-sm text-muted-foreground">
                  SOC 2 Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;