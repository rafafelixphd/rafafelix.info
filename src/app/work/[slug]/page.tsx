import { notFound } from 'next/navigation';
import { BaseLayout } from '@/components/layout/BaseLayout';
import { projects } from '@/lib/data';
import { ProjectHero } from '@/components/sections/work/ProjectHero';

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

  return (
    <BaseLayout>
      <ProjectHero project={project} />
    </BaseLayout>
  );
}