'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 md:py-32 bg-primary ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface/20 to-cta/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-surface/30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-12 md:p-16 lg:p-20 text-center space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-cta/20 backdrop-blur-sm border border-cta/30 text-cta text-sm font-semibold mb-6">
                Ready to Transform Your Business?
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-accent via-surface to-cta bg-clip-text text-transparent">
                Extraordinary
              </span>{' '}
              Together
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partner with MaXToN Digital to unlock your maximum potential
              through cutting-edge technology, enterprise-grade security, and
              innovative digital solutions that drive real business results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/contact"
                className="group relative px-8 py-4 text-lg font-semibold text-cta-foreground bg-cta rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cta/50 glow-gold w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Schedule Consultation</span>
                  <Icon
                    name="CalendarIcon"
                    size={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cta to-warning opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/projects"
                className="group relative px-8 py-4 text-lg font-semibold text-foreground bg-transparent rounded-lg border-2 border-accent overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 glow-cyan w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View Our Work</span>
                  <Icon
                    name="EyeIcon"
                    size={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
              {[
                {
                  icon: 'ClockIcon',
                  title: '24/7 Support',
                  description: 'Round-the-clock technical assistance',
                },
                {
                  icon: 'ShieldCheckIcon',
                  title: 'Enterprise Security',
                  description: 'Bank-level data protection',
                },
                {
                  icon: 'RocketLaunchIcon',
                  title: 'Fast Delivery',
                  description: 'Agile development methodology',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 space-y-3"
                >
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-accent mx-auto"
                  />
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;