import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { profileData } from '@/lib/data';

export const metadata = {
  title: 'Profile - Rafael Felix',
  description: 'Learn more about Rafael Felix, his background, skills, and professional experience.',
};

export default function ProfilePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-background-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                  About{' '}
                  <span className="text-interactive-primary">
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
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                  Biography
                </h2>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-secondary-700 dark:text-secondary-300">
                  <p className="mb-6">
                    {profileData.bio}
                  </p>
                  <p className="mb-6">
                    With a strong foundation in computer science and hands-on experience in modern web technologies, 
                    I'm dedicated to building impactful digital experiences that solve real-world problems. My work 
                    spans across full-stack development, machine learning, and academic research.
                  </p>
                  <p>
                    I believe in the power of technology to create positive change and am passionate about 
                    contributing to open-source projects and mentoring the next generation of developers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section className="bg-secondary-50 dark:bg-secondary-800">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Technologies and tools I work with across different domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Programming Languages
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['JavaScript', 'TypeScript', 'Python', 'Node.js'].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-secondary-700 dark:text-secondary-300">{skill}</span>
                      <div className="w-24 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Libraries */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Frameworks & Libraries
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['React', 'Next.js', 'Tailwind CSS', 'TensorFlow'].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-secondary-700 dark:text-secondary-300">{skill}</span>
                      <div className="w-24 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Tools & Technologies
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Git', 'Docker', 'AWS', 'Agile'].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-secondary-700 dark:text-secondary-300">{skill}</span>
                      <div className="w-24 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Interests Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                Professional Interests
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                Areas I'm passionate about and actively exploring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profileData.interests.map((interest, index) => (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                          {interest.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                        {interest}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Email</h3>
                <p className="text-secondary-600 dark:text-secondary-400">{profileData.email}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Location</h3>
                <p className="text-secondary-600 dark:text-secondary-400">{profileData.location}</p>
              </div>
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
