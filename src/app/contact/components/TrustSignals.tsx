import Icon from '@/components/ui/AppIcon';

interface TrustSignal {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface TrustSignalsProps {
  className?: string;
}

const TrustSignals = ({ className = '' }: TrustSignalsProps) => {
  const trustSignals: TrustSignal[] = [
    {
      id: 'encryption',
      icon: 'LockClosedIcon',
      title: 'End-to-End Encryption',
      description: 'All communications are encrypted with military-grade AES-256 encryption',
      color: 'accent',
    },
    {
      id: 'gdpr',
      icon: 'ShieldCheckIcon',
      title: 'GDPR Compliant',
      description: 'Full compliance with EU data protection regulations and privacy standards',
      color: 'success',
    },
    {
      id: 'iso',
      icon: 'DocumentCheckIcon',
      title: 'ISO 27001 Certified',
      description: 'International standard for information security management systems',
      color: 'surface',
    },
    {
      id: 'nda',
      icon: 'DocumentTextIcon',
      title: 'NDA Protection',
      description: 'Confidentiality agreements signed before any project discussions',
      color: 'cta',
    },
  ];

  return (
    <section className={`py-12 bg-secondary/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((signal) => (
            <div
              key={signal.id}
              className="flex items-start space-x-4 p-4 bg-card/50 border border-border rounded-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className={`flex-shrink-0 w-10 h-10 bg-${signal.color}/10 border border-${signal.color}/30 rounded-lg flex items-center justify-center`}>
                <Icon name={signal.icon as any} size={20} className={`text-${signal.color}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{signal.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;