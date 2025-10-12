import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BaseLayout } from '@/components/layout/BaseLayout';
import { EnhancedBusinessCard } from '@/components/ui/EnhancedBusinessCard';

export function LandingPage() {
  return (
    <BaseLayout>
      {/* Enhanced Business Card Inspired Homepage */}
      <Section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <Container>
          <div className="max-w-2xl mx-auto">
            <EnhancedBusinessCard />
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
