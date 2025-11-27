'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  views: string;
  shares: string;
  featured: boolean;
}

interface ThoughtLeadershipProps {
  articles: Article[];
}

export default function ThoughtLeadership({
  articles,
}: ThoughtLeadershipProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="h-12 bg-muted/20 rounded-lg animate-pulse mb-12" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 bg-muted/20 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured);

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-surface rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-surface/10 border border-surface/30 rounded-full mb-6">
              <Icon name="LightBulbIcon" size={20} className="text-surface" />
              <span className="text-sm font-medium text-surface">Industry Insights</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Thought Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert perspectives on technology trends, cybersecurity, and digital innovation
            </p>
          </div>

          <div className="mb-12 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <Icon
                name="MagnifyingGlassIcon"
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-surface text-surface-foreground shadow-premium'
                      : 'bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {featuredArticle && selectedCategory === 'All' && !searchQuery && (
            <div className="mb-12 group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <AppImage
                    src={featuredArticle.image}
                    alt={featuredArticle.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-cta text-cta-foreground text-sm font-bold rounded-full">
                    Featured Article
                  </div>
                </div>
                <div className="relative p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span>{featuredArticle.date}</span>
                    <span className="flex items-center space-x-1">
                      <Icon name="ClockIcon" size={16} />
                      <span>{featuredArticle.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-2">
                        <Icon name="EyeIcon" size={16} />
                        <span>{featuredArticle.views}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <Icon name="ShareIcon" size={16} />
                        <span>{featuredArticle.shares}</span>
                      </span>
                    </div>
                    <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center space-x-2">
                      <span>Read Article</span>
                      <Icon name="ArrowRightIcon" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles
              .filter((a) => !a.featured || selectedCategory !== 'All' || searchQuery)
              .map((article) => (
                <div
                  key={article.id}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative aspect-video overflow-hidden">
                    <AppImage
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                  </div>
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Icon name="ClockIcon" size={14} />
                          <span>{article.readTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Icon name="EyeIcon" size={14} />
                          <span>{article.views}</span>
                        </span>
                      </div>
                      <button className="text-accent hover:text-accent/80 transition-colors duration-300 flex items-center space-x-1">
                        <span className="text-sm font-semibold">Read</span>
                        <Icon name="ArrowRightIcon" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <Icon name="DocumentTextIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No articles found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
