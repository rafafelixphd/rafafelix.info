import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { projects } from '@/lib/data';
import { ProjectHero } from '@/components/sections/work/ProjectHero';
import { FloatingContentBox } from '@/components/sections/work/FloatingContentBox';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Rafael Felix`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

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
      <ProjectHero project={project} />

      {/* Project Details */}
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
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Challenge */}
                {project.challenge && (
                  <FloatingContentBox position="center" variant="default" className="w-full max-w-none">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        The Challenge
                      </h2>
                      <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300">
                        <p>{project.challenge}</p>
                      </div>
                    </div>
                  </FloatingContentBox>
                )}

                {/* Solution */}
                {project.solution && (
                  <FloatingContentBox position="center" variant="default" className="w-full max-w-none">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        The Solution
                      </h2>
                      <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300">
                        <p>{project.solution}</p>
                      </div>
                    </div>
                  </FloatingContentBox>
                )}

                {/* Results */}
                {project.results && (
                  <FloatingContentBox position="center" variant="default" className="w-full max-w-none">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        The Results
                      </h2>
                      <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300">
                        <p>{project.results}</p>
                      </div>
                    </div>
                  </FloatingContentBox>
                )}

                {/* Description */}
                {project.longDescription && (
                  <FloatingContentBox position="center" variant="default" className="w-full max-w-none">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        About This Project
                      </h2>
                      <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300">
                        <p>{project.longDescription}</p>
                      </div>
                    </div>
                  </FloatingContentBox>
                )}

                {/* Technical Highlights */}
                {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                  <FloatingContentBox position="center" variant="default" className="w-full max-w-none">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        Technical Highlights
                      </h2>
                      <ul className="space-y-3">
                        {project.technicalHighlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary-600 dark:text-primary-400 text-sm font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <span className="text-secondary-700 dark:text-secondary-300">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FloatingContentBox>
                )}

                {/* Technologies */}
                <FloatingContentBox position="center" variant="default" className="w-full max-w-none">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </FloatingContentBox>

                {/* Outcomes */}
                {project.outcomes && project.outcomes.length > 0 && (
                  <FloatingContentBox position="center" variant="default" className="w-full max-w-none">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        Key Outcomes
                      </h2>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary-600 dark:text-primary-400 text-sm font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <span className="text-secondary-700 dark:text-secondary-300">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FloatingContentBox>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <FloatingContentBox position="center" variant="default" className="w-full">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      Project Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Status</span>
                        <p className="text-secondary-900 dark:text-white capitalize">
                          {project.status.replace('-', ' ')}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Start Date</span>
                        <p className="text-secondary-900 dark:text-white">{project.startDate}</p>
                      </div>
                      {project.endDate && (
                        <div>
                          <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">End Date</span>
                          <p className="text-secondary-900 dark:text-white">{project.endDate}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </FloatingContentBox>

                {/* Links */}
                <FloatingContentBox position="center" variant="default" className="w-full">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {project.demoUrl && (
                        <Button asChild className="w-full">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            View Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" className="w-full">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            View Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </FloatingContentBox>

                {/* Back to Work */}
                <FloatingContentBox position="center" variant="default" className="w-full">
                  <div className="text-center">
                    <Button asChild variant="ghost" className="w-full">
                      <Link href="/work">
                        ← Back to All Projects
                      </Link>
                    </Button>
                  </div>
                </FloatingContentBox>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
