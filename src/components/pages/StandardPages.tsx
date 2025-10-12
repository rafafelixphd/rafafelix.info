import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BaseLayout } from '@/components/layout/BaseLayout';

// Standard page content interface
interface StandardPageContent {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  icon?: ReactNode;
  className?: string;
}

// Standard page wrapper component
export function StandardPage({ content }: { content: StandardPageContent }) {
  return (
    <BaseLayout>
      <Section className={`min-h-screen flex items-center justify-center bg-background-primary ${content.className || ''}`}>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                {content.icon && (
                  <div className="flex justify-center">
                    {content.icon}
                  </div>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
                  {content.title}
                </h1>
                {content.subtitle && (
                  <h2 className="text-2xl md:text-3xl font-semibold text-interactive-primary">
                    {content.subtitle}
                  </h2>
                )}
                <p className="text-xl text-text-secondary">
                  {content.description}
                </p>
              </div>
              
              {(content.primaryAction || content.secondaryAction) && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {content.primaryAction && (
                    <Button asChild size="lg">
                      <Link href={content.primaryAction.href}>
                        {content.primaryAction.label}
                      </Link>
                    </Button>
                  )}
                  {content.secondaryAction && (
                    <Button asChild variant="outline" size="lg">
                      <Link href={content.secondaryAction.href}>
                        {content.secondaryAction.label}
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}

// Error page component
interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export function ErrorPage({ error, reset }: ErrorPageProps) {
  const errorIcon = (
    <div className="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto">
      <svg className="w-12 h-12 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    </div>
  );

  return (
    <BaseLayout>
      <Section className="min-h-screen flex items-center justify-center bg-background-primary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                {errorIcon}
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
                  Something went wrong!
                </h1>
                <p className="text-xl text-text-secondary">
                  An unexpected error occurred. Don&apos;t worry, it&apos;s not your fault.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={reset} size="lg">
                  Try Again
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/">Go Home</Link>
                </Button>
              </div>
              
              <div className="pt-8">
                <details className="text-left bg-white dark:bg-secondary-800 p-4 rounded-lg">
                  <summary className="cursor-pointer text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Error Details (for debugging)
                  </summary>
                  <pre className="text-xs text-secondary-600 dark:text-secondary-400 overflow-x-auto">
                    {error.message}
                    {error.digest && `\nDigest: ${error.digest}`}
                  </pre>
                </details>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}

// Loading page component
export function LoadingPage() {
  const loadingIcon = (
    <div className="w-16 h-16 bg-surface-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
      <div className="w-8 h-8 bg-surface-secondary rounded-lg"></div>
    </div>
  );

  return (
    <BaseLayout>
      <Section className="min-h-screen flex items-center justify-center bg-background-primary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                {loadingIcon}
                <h1 className="text-2xl font-bold text-text-primary">
                  Loading...
                </h1>
                <p className="text-text-secondary">
                  Please wait while we load the content.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-interactive-primary"></div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}

// Not Found page component
export function NotFoundPage() {
  const notFoundIcon = (
    <h1 className="text-6xl md:text-8xl font-bold text-interactive-primary">
      404
    </h1>
  );

  return (
    <BaseLayout>
      <Section className="min-h-screen flex items-center justify-center bg-background-primary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                {notFoundIcon}
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
    </BaseLayout>
  );
}
