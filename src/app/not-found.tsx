import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata = {
  title: 'Page Not Found - Rafael Felix',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
      <Section className="min-h-screen flex items-center justify-center bg-background-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-interactive-primary">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Page Not Found
              </h2>
              <p className="text-xl text-text-secondary">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">Go Home</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">View My Work</Link>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-secondary-500 dark:text-secondary-500">
                If you believe this is an error, please{' '}
                <Link href="/connect" className="text-primary-600 dark:text-primary-400 hover:underline">
                  contact me
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
