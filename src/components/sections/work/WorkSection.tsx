'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { loadProjects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/models/types';

export function WorkSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const loadedProjects = await loadProjects();
        setProjects(loadedProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Section>
        <Container>
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading projects...</p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Section>
        <Container>
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

      {/* Projects Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
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
