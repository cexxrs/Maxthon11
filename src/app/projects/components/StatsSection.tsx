import Icon from '@/components/ui/AppIcon';

interface StatsSectionProps {
  stats: {
    icon: string;
    value: string;
    label: string;
    color: string;
  }[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          
          <div className="relative z-10 space-y-3">
            <div className={`inline-flex p-3 rounded-lg bg-${stat.color}/10 border border-${stat.color}/30`}>
              <Icon
                name={stat.icon as any}
                size={24}
                className={`text-${stat.color}`}
              />
            </div>
            <div>
              <p className={`text-3xl font-bold text-${stat.color} mb-1`}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;