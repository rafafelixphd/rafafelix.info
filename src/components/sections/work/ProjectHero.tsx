'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/models/types';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ProjectOutcomes } from '@/components/ui/ProjectOutcomes';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <Section className="min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-16">
          {/* Left Side - Content */}
          <div className="space-y-8">

            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {project.title}
            </h1>

            {/* Key Metrics */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="space-y-6">

                {project.outcomes.length > 1 && (
                  <div className="space-y-3">
                    {project.outcomes.slice(1, 5).map((outcome, index) => {
                      const getMetricIcon = (outcome: string) => {
                        if (outcome.includes('accuracy') || outcome.includes('benchmark')) {
                          return (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          );
                        } else if (outcome.includes('latency') || outcome.includes('QPS')) {
                          return (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          );
                        } else if (outcome.includes('videos') || outcome.includes('scale')) {
                          return (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
                            </svg>
                          );
                        }
                        return (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        );
                      };

                      return (
                        <div 
                          key={index} 
                          className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border border-gray-200 dark:border-gray-700 group transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                              {getMetricIcon(outcome)}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                {outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Project Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Challenge Section */}
            {project.challenge && (
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">The Challenge</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {/* Solution Section */}
            {project.solution && (
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">The Solution</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Results Section */}
            {project.results && (
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">The Results</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}

            {/* Technical Achievements */}
            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Technical Achievements</h3>
                <div className="grid gap-4">
                  {project.technicalHighlights.map((highlight, index) => {
                    const getAchievementIcon = (highlight: string) => {
                      if (highlight.toLowerCase().includes('performance') || highlight.toLowerCase().includes('optimization')) {
                        return (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        );
                      } else if (highlight.toLowerCase().includes('scalability') || highlight.toLowerCase().includes('architecture')) {
                        return (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        );
                      } else if (highlight.toLowerCase().includes('security') || highlight.toLowerCase().includes('privacy')) {
                        return (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        );
                      } else if (highlight.toLowerCase().includes('integration') || highlight.toLowerCase().includes('api')) {
                        return (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        );
                      } else if (highlight.toLowerCase().includes('machine learning') || highlight.toLowerCase().includes('ai') || highlight.toLowerCase().includes('model')) {
                        return (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        );
                      } else if (highlight.toLowerCase().includes('database') || highlight.toLowerCase().includes('data')) {
                        return (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                          </svg>
                        );
                      }
                      return (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      );
                    };

                    const getAchievementBadge = (index: number) => {
                      const badges = ['🏆', '⭐', '🚀', '💎', '🎯', '🔥', '⚡', '🎖️'];
                      return badges[index % badges.length];
                    };

                    return (
                      <div 
                        key={index} 
                        className="group bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary-300 dark:hover:border-primary-600"
                      >
                        <div className="flex items-start space-x-4">
                          {/* Achievement Badge */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                              {getAchievementBadge(index)}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                              {highlight}
                            </p>
                          </div>
                          
                          {/* Progress Indicator */}
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

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
          <div className="space-y-8 sticky top-20">
            {/* Illustration */}
            <div className="relative">
              <Image
                src={project.images?.[0] || "/images/background.webp"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Project Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
              
              {/* Short Description */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Interactive Key Outcomes */}
              <ProjectOutcomes 
                outcomes={project.outcomes || []} 
                title="Key Outcomes"
                className="mt-6"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
