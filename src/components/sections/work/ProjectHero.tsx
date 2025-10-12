'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/models/types';
import { FloatingContentBox } from './FloatingContentBox';
import { Button } from '@/components/ui/Button';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">

            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            {/* Key Metric */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400">
                {project.outcomes[0]}
              </div>
            )}

            {/* Project Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              {project.demoUrl && (
                <Button
                  asChild
                  variant="primary"
                  className="bg-primary-600 text-white hover:bg-primary-700 font-semibold px-8 py-3"
                >
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    View Demo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </Button>
              )}
              
              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-8 py-3"
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Right Side - Illustration and Quick Summary */}
          <div className="space-y-8">
            {/* Illustration */}
            <div className="relative">
              <Image
                src={project.images?.[0] || "/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Quick Summary Sidebar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Results</h3>
              <div className="space-y-3">
                {project.outcomes?.slice(0, 4).map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-600 dark:text-primary-400 text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Project Meta */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  {project.startDate && (
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(project.startDate).getFullYear()}</span>
                      {project.endDate && (
                        <span> - {new Date(project.endDate).getFullYear()}</span>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{project.outcomes?.length || 0} key outcomes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
