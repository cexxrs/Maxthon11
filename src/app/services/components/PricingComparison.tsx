'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted: boolean;
  icon: string;
}

interface PricingComparisonProps {
  tiers: PricingTier[];
}

const PricingComparison = ({ tiers }: PricingComparisonProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-primary via-secondary to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="CurrencyDollarIcon" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Transparent Pricing
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-surface">
              Perfect Plan
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business needs
          </p>

          <div className="inline-flex items-center space-x-4 p-2 bg-card rounded-full border border-border">
            <button
              onClick={() => isHydrated && setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isHydrated && billingCycle === 'monthly' ?'bg-accent text-accent-foreground shadow-lg' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => isHydrated && setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isHydrated && billingCycle === 'annual' ?'bg-accent text-accent-foreground shadow-lg' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-accent/10 to-surface/10 border-2 border-accent shadow-premium scale-105'
                  : 'bg-card border border-border hover:border-accent/30 hover:shadow-lg'
              }`}
              style={{
                animation: isHydrated
                  ? `fade-in-up 0.6s ease-out ${index * 0.15}s both`
                  : 'none',
              }}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-surface py-2 text-center">
                  <span className="text-sm font-bold text-accent-foreground">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`p-8 ${tier.highlighted ? 'pt-16' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon
                      name={tier.icon as any}
                      size={28}
                      className="text-accent"
                    />
                  </div>
                  {tier.highlighted && (
                    <Icon
                      name="StarIcon"
                      size={24}
                      variant="solid"
                      className="text-cta"
                    />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>

                <p className="text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      /{tier.period}
                    </span>
                  </div>
                  {isHydrated && billingCycle === 'annual' && tier.price !== 'Custom' && (
                    <p className="text-sm text-success mt-2">
                      Save ${(parseFloat(tier.price.replace('$', '').replace(',', '')) * 12 * 0.2).toFixed(0)} annually
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                    tier.highlighted
                      ? 'bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30'
                      : 'bg-muted text-foreground hover:bg-accent/10 border border-border'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Icon
                        name={
                          feature.included
                            ? 'CheckCircleIcon' :'XCircleIcon'
                        }
                        size={20}
                        variant="solid"
                        className={
                          feature.included ? 'text-success' : 'text-muted-foreground'
                        }
                      />
                      <span
                        className={
                          feature.included
                            ? 'text-foreground'
                            : 'text-muted-foreground line-through'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            <span>Contact Sales</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;