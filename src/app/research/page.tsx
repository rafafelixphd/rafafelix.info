'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { publications } from '@/lib/data';
import { Publication } from '@/models/types';

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const categories = ['all', 'journal', 'conference', 'workshop', 'preprint', 'book'];
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
    <>
      {/* Hero Section */}
             <Section className="bg-background-primary relative overflow-hidden">
               {/* Background Image */}
               <div className="absolute inset-0 opacity-10">
                 <Image
                   src="/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"
                   alt="Background pattern"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Research &{' '}
              <span className="text-interactive-primary">
                Publications
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Academic contributions and research work in computer science, machine learning, and software engineering.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <span className="font-medium">📚</span>
                <span>{publications.length} Publications</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">📊</span>
                <span>{totalCitations} Citations</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">🎯</span>
                <span>H-index: {hIndex}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Research Areas */}
      <Section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              My research focuses on the intersection of machine learning, software engineering, and practical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  Machine Learning
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Scalable ML platforms, algorithm optimization, and practical applications in real-world scenarios.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  AI Research
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  System architecture, development methodologies, and tools for building robust software solutions.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  Blockchain Technology
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Consensus mechanisms, scalability solutions, and applications in distributed systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Publications */}
      <Section className="bg-secondary-50 dark:bg-secondary-800">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Publications
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Peer-reviewed papers, conference proceedings, and academic contributions
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
            
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mr-2">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedYear === year
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                  }`}
                >
                  {year}
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

      {/* Research Timeline */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Research Timeline
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Key milestones and contributions over the years
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
              
              <div className="space-y-8">
                {publications
                  .sort((a, b) => b.year - a.year)
                  .map((publication, index) => (
                    <div key={publication.id} className="relative flex items-start space-x-6">
                      {/* Timeline dot */}
                      <div className="relative z-10 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {publication.year}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <Card>
                          <CardContent className="p-6">
                            <div className="space-y-2">
                              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                                {publication.title}
                              </h3>
                              <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                                {publication.authors.join(', ')}
                              </p>
                              <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                                {publication.venue}
                              </p>
                              {publication.citations && (
                                <p className="text-secondary-500 dark:text-secondary-500 text-sm">
                                  {publication.citations} citations
                                </p>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-secondary-50 dark:bg-secondary-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {publications.length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">Total Publications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {totalCitations}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">Total Citations</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {hIndex}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">H-index</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {new Set(publications.map(p => p.venue)).size}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">Venues</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
