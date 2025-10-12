'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { projects } from '@/lib/data';
import { Project } from '@/models/types';
import { ProjectCard } from '@/components/sections/work/ProjectCard';

export default function WorkPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const statuses = ['all', 'completed', 'in-progress', 'planned'];

  const filteredProjects = projects.filter((project) => {
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return statusMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'planned':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-300';
    }
  };


  return (
    <>
      {/* Hero Section */}
      <Section className="bg-background-primary relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
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
              My{' '}
              <span className="text-interactive-primary">
                Work
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              A collection of projects showcasing my skills in software development, research, and innovation.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <span className="font-medium">📊</span>
                <span>{projects.length} Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">🎯</span>
                <span>{projects.filter(p => p.featured).length} Featured</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Filters */}
      <Section className="bg-background-primary relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mr-2">Status:</span>
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedStatus === status
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                  }`}
                >
                  {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 dark:text-secondary-400">
                No projects found matching the selected filters.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-background-primary relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">Total Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">Featured</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">Technologies</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
