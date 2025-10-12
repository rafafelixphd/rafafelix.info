'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/models/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {

  return (
    <Link href={`/work/${project.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800 h-96 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.images?.[0] || "/images/background.webp"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110 opacity-40"
            priority={project.featured}
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        {/* Floating Content Box */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 dark:border-gray-700/20">
            {/* Status and Category Tags */}
            {/* Project Title */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* View Project Link */}
            <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
              <span>View Project</span>
              <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
