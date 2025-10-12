import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Skills } from '@/components/ui/Skills';
import { profileData } from '@/lib/data';

export const metadata = {
  title: 'Profile - Rafael Felix',
  description: 'Learn more about Rafael Felix, Ph.D., Research Scientist specializing in multimodal AI for Trust & Safety and Robotics.',
};

export default function ProfilePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-background-primary relative overflow-hidden">
               {/* Background Image */}
               <div className="absolute inset-0 opacity-10">
                 <Image
                   src="/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"
                   alt="Background pattern"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                  About{' '}
                  <span className="text-interactive-tertiary">
                    Rafael Felix
                  </span>
                </h1>
                <p className="text-xl text-text-secondary">
                  {profileData.title}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href={profileData.resumeUrl || '#'} download>
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/connect">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-surface-secondary rounded-2xl transform rotate-3"></div>
                <div className="relative bg-surface-primary rounded-2xl p-8 shadow-xl">
                  <Image
                    src={profileData.profileImage}
                    alt={profileData.name}
                    width={300}
                    height={300}
                    className="rounded-xl w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bio Section */}
      <Section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  Biography
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {profileData.bio}
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section className="py-16 bg-background-primary">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              My <span className="text-interactive-tertiary">Skills</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Technologies and expertise across different domains, with interactive skill indicators
            </p>
          </div>
          <Skills skills={profileData.skills} />
        </Container>
      </Section>


      {/* Professional Interests Section */}
      <Section className="py-16 bg-background-primary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Professional <span className="text-interactive-tertiary">Interests</span>
              </h2>
              <p className="text-text-secondary">
                Areas I'm passionate about and actively exploring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profileData.interests.map((interest, index) => {
                // Define icons for each interest
                const getInterestIcon = (interest: string) => {
                  if (interest.includes('Multimodal')) {
                    return (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    );
                  } else if (interest.includes('Human-in-the-loop')) {
                    return (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    );
                  } else if (interest.includes('Gen AI')) {
                    return (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    );
                  } else if (interest.includes('Efficient model')) {
                    return (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    );
                  }
                  return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  );
                };

                return (
                  <Card 
                    key={index} 
                    hover 
                    className="p-6 group transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up"
                  >
                    <CardContent>
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-surface-secondary to-interactive-secondary rounded-xl flex items-center justify-center text-interactive-primary group-hover:scale-110 transition-transform duration-300">
                          {getInterestIcon(interest)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-text-primary group-hover:text-interactive-tertiary transition-colors duration-300">
                            {interest}
                          </h3>
                          <div className="mt-2 h-1 bg-gradient-to-r from-interactive-primary to-interactive-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section className="bg-secondary-50 dark:bg-secondary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8">
              I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-surface-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-interactive-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Email</h3>
              <p className="text-text-secondary">{profileData.email}</p>
            </div>

            <Button asChild size="lg">
              <Link href="/connect">Get In Touch</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
