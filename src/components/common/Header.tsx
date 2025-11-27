'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Services', href: '/services', icon: 'CubeIcon' },
    { label: 'Projects', href: '/projects', icon: 'RectangleStackIcon' },
    { label: 'About', href: '/about', icon: 'InformationCircleIcon' },
    { label: 'Contact', href: '/contact', icon: 'EnvelopeIcon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-premium'
            : 'bg-transparent'
        } ${className}`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-12">
            <Link
              href="/homepage"
              className="flex items-center space-x-3 group"
            >
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
                    stroke="url(#logo-gradient)"
                    strokeWidth="2"
                    fill="none"
                    className="group-hover:fill-accent/10 transition-all duration-300"
                  />
                  <path
                    d="M20 10L30 16V24L20 30L10 24V16L20 10Z"
                    fill="url(#logo-gradient-inner)"
                    className="group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <defs>
                    <linearGradient
                      id="logo-gradient"
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
                      id="logo-gradient-inner"
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
                <span className="text-xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                  MaXToN
                </span>
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                  DIGITAL
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-md transition-all duration-300 border border-transparent group-hover:border-accent/30 glow-cyan opacity-0 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/personal-profile"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center space-x-2 group"
              >
                <Icon
                  name="UserCircleIcon"
                  size={20}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
                />
                <span>Profile</span>
              </Link>
              <Link
                href="/contact"
                className="relative px-6 py-2.5 text-sm font-semibold text-cta-foreground bg-cta rounded-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-cta/50 glow-gold"
              >
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cta to-warning opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="relative h-full flex flex-col pt-20 px-6 space-y-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-4 px-4 py-4 text-foreground hover:text-accent transition-all duration-300 rounded-lg hover:bg-accent/10 border border-transparent hover:border-accent/30 group"
                style={{
                  animation: `slide-in-right 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                <Icon
                  name={item.icon as any}
                  size={24}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
                />
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            ))}
            <div className="pt-6 space-y-3">
              <Link
                href="/personal-profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-4 px-4 py-4 text-foreground hover:text-accent transition-all duration-300 rounded-lg hover:bg-accent/10 border border-transparent hover:border-accent/30 group"
              >
                <Icon
                  name="UserCircleIcon"
                  size={24}
                  className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
                />
                <span className="text-lg font-medium">Profile</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 px-6 py-4 text-cta-foreground bg-cta rounded-lg font-semibold hover:shadow-lg hover:shadow-cta/50 transition-all duration-300 glow-gold"
              >
                <Icon name="RocketLaunchIcon" size={20} />
                <span>Start Project</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;