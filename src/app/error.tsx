'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
      <Section className="min-h-screen flex items-center justify-center bg-background-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-12 h-12 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
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
  );
}
