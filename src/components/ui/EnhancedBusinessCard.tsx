'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { profileData, siteConfig } from '@/lib/data';

interface EnhancedBusinessCardProps {
  className?: string;
}

export function EnhancedBusinessCard({ className = '' }: EnhancedBusinessCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-blue-gray/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-blue-gray/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-blue-gray/8 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Main Business Card Container */}
      <div className="relative z-10 bg-surface-primary/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-border-secondary/50 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl w-full max-w-5xl mx-auto">
        {/* Decorative corner elements - moved inside */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent-blue-gray rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent-blue-gray rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent-blue-gray rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent-blue-gray rounded-br-lg"></div>

        <div className="text-center space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-border-secondary shadow-lg bg-white p-2">
                <Image
                  src={profileData.profileImage}
                  alt={profileData.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue-gray/20 via-transparent to-accent-blue-gray/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-text-primary tracking-wide">
              {siteConfig.name.toUpperCase().replace('RAFAEL', 'RAFA')}
            </h1>
            <p className="text-sm text-text-secondary font-medium tracking-wider">
              {siteConfig.title.toUpperCase()}
            </p>
            <p className="text-xs text-text-secondary italic max-w-sm mx-auto leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 text-left bg-white/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-accent-blue-gray/10 rounded-full flex items-center justify-center group-hover:bg-accent-blue-gray/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-accent-blue-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-text-secondary text-sm font-medium">contact@rafafelix.info</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-accent-blue-gray/10 rounded-full flex items-center justify-center group-hover:bg-accent-blue-gray/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-accent-blue-gray" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="text-text-secondary text-sm font-medium">in/rafafelixphd</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-accent-blue-gray/10 rounded-full flex items-center justify-center group-hover:bg-accent-blue-gray/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-accent-blue-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <span className="text-text-secondary text-sm font-medium">rafafelix.info</span>
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <div className="space-y-4 pt-4">
            {/* Primary Actions Row - Connect & Portfolio */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="group bg-gradient-to-r from-accent-blue-gray/15 to-accent-blue-gray/10 hover:from-accent-blue-gray/25 hover:to-accent-blue-gray/15 text-text-primary text-sm py-4 px-8 rounded-2xl border border-accent-blue-gray/30 hover:border-accent-blue-gray/50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex-1 max-w-xs mx-auto sm:mx-0">
                <Link href="/connect">
                  <span className="flex items-center justify-center space-x-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Connect</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </Button>
              <Button asChild className="group bg-gradient-to-r from-accent-blue-gray/15 to-accent-blue-gray/10 hover:from-accent-blue-gray/25 hover:to-accent-blue-gray/15 text-text-primary text-sm py-4 px-8 rounded-2xl border border-accent-blue-gray/30 hover:border-accent-blue-gray/50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex-1 max-w-xs mx-auto sm:mx-0">
                <Link href="/work">
                  <span className="flex items-center justify-center space-x-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    <span>Portfolio</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </Button>
            </div>
            
            {/* Secondary Actions Row */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="group bg-gradient-to-r from-accent-blue-gray/10 to-accent-blue-gray/5 hover:from-accent-blue-gray/20 hover:to-accent-blue-gray/10 text-text-primary text-sm py-3 px-6 rounded-xl border border-accent-blue-gray/20 hover:border-accent-blue-gray/40 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 max-w-xs mx-auto sm:mx-0">
                <Link href="/profile">
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Profile</span>
                  </span>
                </Link>
              </Button>
              <Button asChild className="group bg-gradient-to-r from-accent-blue-gray/10 to-accent-blue-gray/5 hover:from-accent-blue-gray/20 hover:to-accent-blue-gray/10 text-text-primary text-sm py-3 px-6 rounded-xl border border-accent-blue-gray/20 hover:border-accent-blue-gray/40 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 max-w-xs mx-auto sm:mx-0">
                <Link href="/research">
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Research</span>
                  </span>
                </Link>
              </Button>

            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent-blue-gray/10 rounded-full blur-sm animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-blue-gray/15 rounded-full blur-sm animate-float delay-1000"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
