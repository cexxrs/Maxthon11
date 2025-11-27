'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  categories: string[];
  industries: string[];
  technologies: string[];
  activeCategory: string;
  activeIndustry: string;
  activeTechnology: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onIndustryChange: (industry: string) => void;
  onTechnologyChange: (technology: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const FilterBar = ({
  categories,
  industries,
  technologies,
  activeCategory,
  activeIndustry,
  activeTechnology,
  searchQuery,
  onCategoryChange,
  onIndustryChange,
  onTechnologyChange,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) => {
  const hasActiveFilters = activeCategory !== 'All' || activeIndustry !== 'All' || activeTechnology !== 'All' || searchQuery !== '';

  return (
    <div className="space-y-6">
      <div className="relative">
        <Icon
          name="MagnifyingGlassIcon"
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Search projects by name, description, or technology..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Category
          </label>
          <select
            value={activeCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Industry
          </label>
          <select
            value={activeIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 cursor-pointer"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Technology
          </label>
          <select
            value={activeTechnology}
            onChange={(e) => onTechnologyChange(e.target.value)}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 cursor-pointer"
          >
            {technologies.map((technology) => (
              <option key={technology} value={technology}>
                {technology}
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center justify-between p-4 bg-accent/10 border border-accent/30 rounded-lg">
          <p className="text-sm text-accent font-medium">
            Active filters applied
          </p>
          <button
            onClick={onClearFilters}
            className="px-4 py-2 text-sm font-semibold text-accent hover:text-accent-foreground hover:bg-accent rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <Icon name="XMarkIcon" size={16} />
            <span>Clear All</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;