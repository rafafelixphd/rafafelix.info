'use client';

import { useState, useEffect } from 'react';
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
              <span className="text-interactive-tertiary">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              A collection of projects showcasing my skills in software development, research, and innovation.
            </p>
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
    </>
  );
}
