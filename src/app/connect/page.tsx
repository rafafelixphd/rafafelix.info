import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { BaseLayout } from '@/components/layout/BaseLayout';
import { socialLinks } from '@/lib/data';

export const metadata = {
  title: 'Connect - Rafael Felix',
  description: 'Connect with Rafael Felix through social media, email, and professional networks.',
};

export default function ConnectPage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Let&apos;s{' '}
              <span className="text-interactive-tertiary">
                Connect
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              I&apos;m always interested in discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Social Links */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Connect With Me
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Follow me on social media and professional networks
            </p>
          </div>

          <SocialLinks 
            links={socialLinks} 
            variant="compact"
            className="mb-8"
          />
        </Container>
      </Section>


      {/* Additional Info */}
      <Section className="bg-secondary-50 dark:bg-secondary-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  Response Time
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  I typically respond within 24 hours
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  Availability
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Open to new opportunities and collaborations
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  Networking
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Always happy to meet new people in tech
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
