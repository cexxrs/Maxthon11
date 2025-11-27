'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Office {
  id: string;
  city: string;
  country: string;
  timezone: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
  availability: string;
  team: number;
}

interface GlobalPresenceProps {
  className?: string;
}

const GlobalPresence = ({ className = '' }: GlobalPresenceProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<string>('headquarters');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [isHydrated]);

  const offices: Office[] = [
    {
      id: 'headquarters',
      city: 'New York',
      country: 'United States',
      timezone: 'EST (UTC-5)',
      address: '350 Fifth Avenue, Suite 7600\nNew York, NY 10118',
      phone: '+1 (555) 123-4567',
      email: 'ny@maxtondigital.com',
      coordinates: { lat: 40.748817, lng: -73.985428 },
      availability: 'Mon-Fri 9AM-6PM',
      team: 45,
    },
    {
      id: 'london',
      city: 'London',
      country: 'United Kingdom',
      timezone: 'GMT (UTC+0)',
      address: '1 Canada Square\nCanary Wharf, London E14 5AB',
      phone: '+44 20 7946 0958',
      email: 'london@maxtondigital.com',
      coordinates: { lat: 51.505, lng: -0.0209 },
      availability: 'Mon-Fri 9AM-6PM',
      team: 32,
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      timezone: 'SGT (UTC+8)',
      address: '1 Marina Boulevard\n#28-00, Singapore 018989',
      phone: '+65 6789 1234',
      email: 'sg@maxtondigital.com',
      coordinates: { lat: 1.2816, lng: 103.8636 },
      availability: 'Mon-Fri 9AM-6PM',
      team: 28,
    },
    {
      id: 'remote',
      city: 'Remote Teams',
      country: 'Global Coverage',
      timezone: 'All Timezones',
      address: 'Distributed Worldwide\n24/7 Coverage',
      phone: '+1 (555) 999-0000',
      email: 'remote@maxtondigital.com',
      coordinates: { lat: 0, lng: 0 },
      availability: '24/7 Available',
      team: 67,
    },
  ];

  const selectedOfficeData = offices.find((office) => office.id === selectedOffice) || offices[0];

  return (
    <section className={`py-16 lg:py-24 bg-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full mb-6">
            <Icon name="GlobeAltIcon" size={20} className="text-cta" />
            <span className="text-sm font-mono text-cta tracking-wider">GLOBAL PRESENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We're Available
            <span className="block mt-2 bg-gradient-to-r from-cta to-accent bg-clip-text text-transparent">
              Around the Clock
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With offices across three continents and remote teams worldwide, we provide 24/7 coverage for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => isHydrated && setSelectedOffice(office.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  selectedOffice === office.id
                    ? 'bg-card border-2 border-accent shadow-premium'
                    : 'bg-card/50 border border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{office.city}</h3>
                    <p className="text-sm text-muted-foreground">{office.country}</p>
                  </div>
                  {selectedOffice === office.id && (
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  )}
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="ClockIcon" size={14} />
                  <span>{office.timezone}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                  <Icon name="UsersIcon" size={14} />
                  <span>{office.team} Team Members</span>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-premium">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${selectedOfficeData.city} Office Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${selectedOfficeData.coordinates.lat},${selectedOfficeData.coordinates.lng}&z=14&output=embed`}
                  className="absolute inset-0"
                />
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedOfficeData.city} Office
                  </h3>
                  <p className="text-muted-foreground">{selectedOfficeData.country}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center">
                      <Icon name="MapPinIcon" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Address</p>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {selectedOfficeData.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-success/10 border border-success/30 rounded-lg flex items-center justify-center">
                      <Icon name="PhoneIcon" size={20} className="text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                      <p className="text-sm text-muted-foreground">{selectedOfficeData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-surface/10 border border-surface/30 rounded-lg flex items-center justify-center">
                      <Icon name="EnvelopeIcon" size={20} className="text-surface" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">{selectedOfficeData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-cta/10 border border-cta/30 rounded-lg flex items-center justify-center">
                      <Icon name="ClockIcon" size={20} className="text-cta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Availability</p>
                      <p className="text-sm text-muted-foreground">{selectedOfficeData.availability}</p>
                      {isHydrated && currentTime && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Current time: {currentTime}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-success">Currently Available</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="UsersIcon" size={16} />
                      <span>{selectedOfficeData.team} team members</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 border border-accent/30 rounded-xl mb-4">
              <Icon name="GlobeAltIcon" size={28} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
            <p className="text-sm text-muted-foreground">Global Coverage</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-success/10 border border-success/30 rounded-xl mb-4">
              <Icon name="UsersIcon" size={28} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">172+</h3>
            <p className="text-sm text-muted-foreground">Team Members Worldwide</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-cta/10 border border-cta/30 rounded-xl mb-4">
              <Icon name="ClockIcon" size={28} className="text-cta" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">&lt; 2hrs</h3>
            <p className="text-sm text-muted-foreground">Average Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;