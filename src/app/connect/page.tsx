import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { profileData, socialLinks } from '@/lib/data';

export const metadata = {
  title: 'Connect - Rafael Felix',
  description: 'Connect with Rafael Felix through social media, email, and professional networks.',
};

export default function ConnectPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-background-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Let's{' '}
              <span className="text-interactive-primary">
                Connect
              </span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              I&apos;m always interested in discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <span className="font-medium">📍</span>
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">💼</span>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Links */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Connect With Me
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Follow me on social media and professional networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link) => (
              <Card key={link.platform} hover className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto">
                      {link.platform === 'LinkedIn' && (
                        <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {link.platform === 'GitHub' && (
                        <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                      {link.platform === 'X (Twitter)' && (
                        <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                      {link.platform === 'Email' && (
                        <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                        {link.platform}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                        {link.label}
                      </p>
                    </div>

                    <Button asChild className="w-full">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Connect
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* QR Code Section */}
      <Section className="bg-secondary-50 dark:bg-secondary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Quick Connect
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8">
              Scan the QR code to quickly access this page on your mobile device
            </p>
            
            <Card className="inline-block">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Image
                    src="/images/website-qrcode.png"
                    alt="QR Code for rafafelix.info"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Scan to visit rafafelix.info
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                Send a Message
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
                      placeholder="Tell me about your project or just say hello..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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
    </>
  );
}
