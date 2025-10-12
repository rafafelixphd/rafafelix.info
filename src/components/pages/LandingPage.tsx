import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BaseLayout } from '@/components/layout/BaseLayout';
import { profileData, siteConfig } from '@/lib/data';

export function LandingPage() {
  return (
    <BaseLayout>
      {/* Business Card Inspired Homepage */}
      <Section className="min-h-screen flex items-center justify-center p-4">
        <Container>
          <div className="max-w-xl mx-auto">
            {/* Main Business Card Container */}
            <div className="bg-surface-primary/95 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-border-secondary">
              <div className="text-center space-y-6">
                {/* Profile Photo */}
                <div className="flex justify-center">
                  <div className="w-60 h- rounded-full overflow-hidden border-4 border-border-secondary shadow-lg">
                    <Image
                      src={profileData.profileImage}
                      alt={profileData.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-text-primary">
                    {siteConfig.name.toUpperCase().replace('RAFAEL', 'RAFA')}
                  </h1>
                  <p className="text-sm text-text-secondary font-medium">
                    {siteConfig.title.toUpperCase()}
                  </p>
                  <p className="text-xs text-text-secondary italic">
                    {siteConfig.tagline}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-text-secondary text-sm">contact@rafafelix.info</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent-blue-gray flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-text-secondary text-sm">in/rafafelixphd</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <span className="text-text-secondary text-sm">rafafelix.info</span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-2">
                  <Button asChild className="bg-interactive-primary hover:bg-interactive-secondary text-text-primary text-xs py-2">
                    <Link href="/profile">Profile</Link>
                  </Button>
                  <Button asChild className="bg-interactive-primary hover:bg-interactive-secondary text-text-primary text-xs py-2">
                    <Link href="/connect">Connect</Link>
                  </Button>
                  <Button asChild className="bg-interactive-primary hover:bg-interactive-secondary text-text-primary text-xs py-2">
                    <Link href="/work">Work</Link>
                  </Button>
                  <Button asChild className="bg-interactive-primary hover:bg-interactive-secondary text-text-primary text-xs py-2">
                    <Link href="/connect">Advising</Link>
                  </Button>
                  <Button asChild className="bg-interactive-primary hover:bg-interactive-secondary text-text-primary text-xs py-2">
                    <Link href="/research">Research</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </BaseLayout>
  );
}
