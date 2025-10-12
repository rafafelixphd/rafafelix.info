import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { projects } from '@/lib/data';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug);
  
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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug);

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

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'web':
        return 'Web Development';
      case 'mobile':
        return 'Mobile Apps';
      case 'research':
        return 'Research';
      case 'other':
        return 'Other';
      default:
        return category;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                      {getCategoryLabel(project.category)}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-secondary-600 dark:text-secondary-300">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.demoUrl && (
                    <Button asChild size="lg">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="lg">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>

                <div className="flex items-center space-x-6 text-sm text-secondary-600 dark:text-secondary-400">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">📅</span>
                    <span>{project.startDate} - {project.endDate || 'Present'}</span>
                  </div>
                </div>
              </div>

              {project.images.length > 0 && (
                <div className="relative">
                  <div className="relative w-full h-96 bg-secondary-100 dark:bg-secondary-800 rounded-2xl overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                {project.longDescription && (
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        About This Project
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300">
                        <p>{project.longDescription}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Technologies */}
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      Technologies Used
                    </h2>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>

                {/* Outcomes */}
                {project.outcomes && project.outcomes.length > 0 && (
                  <Card>
                    <CardHeader>
                      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                        Key Outcomes
                      </h2>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      Project Information
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Status</span>
                      <p className="text-secondary-900 dark:text-white capitalize">
                        {project.status.replace('-', ' ')}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">Category</span>
                      <p className="text-secondary-900 dark:text-white">
                        {getCategoryLabel(project.category)}
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
                  </CardContent>
                </Card>

                {/* Links */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      Project Links
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
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
                  </CardContent>
                </Card>

                {/* Back to Work */}
                <Card>
                  <CardContent className="p-6">
                    <Button asChild variant="ghost" className="w-full">
                      <Link href="/work">
                        ← Back to All Projects
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
