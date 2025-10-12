import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function Loading() {
  return (
      <Section className="min-h-screen flex items-center justify-center bg-background-primary">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-surface-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
                <div className="w-8 h-8 bg-surface-secondary rounded-lg"></div>
              </div>
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
  );
}
