'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { BaseLayout } from '@/components/layout/BaseLayout';
import { publications } from '@/lib/data';
import { Publication } from '@/models/types';
import { researchContent } from '@/lib/research';

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const categories = ['all', 'journal', 'conference', 'preprint'];
  const years = ['all', ...Array.from(new Set(publications.map(p => p.year.toString()))).sort((a, b) => b.localeCompare(a))];

  const filteredPublications = publications.filter((publication) => {
    const categoryMatch = selectedCategory === 'all' || publication.category === selectedCategory;
    const yearMatch = selectedYear === 'all' || publication.year.toString() === selectedYear;
    return categoryMatch && yearMatch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'journal':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'conference':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'workshop':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'preprint':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      case 'book':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-300';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'journal':
        return 'Journal Article';
      case 'conference':
        return 'Conference Paper';
      case 'workshop':
        return 'Workshop Paper';
      case 'preprint':
        return 'Preprint';
      case 'book':
        return 'Book Chapter';
      default:
        return category;
    }
  };

  const totalCitations = publications.reduce((sum, pub) => sum + (pub.citations || 0), 0);
  const hIndex = calculateHIndex(publications);

  function calculateHIndex(pubs: Publication[]): number {
    const citations = pubs
      .map(p => p.citations || 0)
      .sort((a, b) => b - a);
    
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= i + 1) {
        h = i + 1;
      } else {
        break;
      }
    }
    return h;
  }

  return (
    <BaseLayout>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              {researchContent.hero.title.split(' & ')[0]} &{' '}
              <span className="text-interactive-tertiary">
                {researchContent.hero.title.split(' & ')[1]}
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              {researchContent.hero.description}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <span className="font-medium">📚</span>
                <span>{publications.length} Publications</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">📊</span>
                <span> 600+ Citations</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">🎯</span>
                <span>H-index: 5</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Research Areas */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              My research focuses on the intersection of machine learning, software engineering, and practical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchContent.researchAreas.map((area) => (
              <Card key={area.id} hover>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={area.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>


      {/* Publications */}
      <Section className="bg-secondary-50 dark:bg-secondary-800">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              {researchContent.publications.title}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              {researchContent.publications.description}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mr-2">Type:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                  }`}
                >
                  {category === 'all' ? 'All' : getCategoryLabel(category)}
                </button>
              ))}
            </div>

          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((publication) => (
              <Card key={publication.id} hover>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                          {publication.title}
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-400 mb-2">
                          {publication.authors.join(', ')}
                        </p>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {publication.venue} • {publication.year}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(publication.category)}`}>
                          {getCategoryLabel(publication.category)}
                        </span>
                        {publication.citations && (
                          <span className="text-sm text-secondary-500 dark:text-secondary-500">
                            {publication.citations} citations
                          </span>
                        )}
                      </div>
                    </div>

                    {publication.abstract && (
                      <p className="text-secondary-700 dark:text-secondary-300 text-sm leading-relaxed">
                        {publication.abstract}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-secondary-500 dark:text-secondary-500">
                        {publication.doi && (
                          <span>DOI: {publication.doi}</span>
                        )}
                      </div>
                      <div className="flex space-x-3">
                        {publication.url && (
                          <Button asChild size="sm" variant="outline">
                            <a href={publication.url} target="_blank" rel="noopener noreferrer">
                              View Paper
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 dark:text-secondary-400">
                No publications found matching the selected filters.
              </p>
            </div>
          )}
        </Container>
      </Section>


    </BaseLayout>
  );
}
