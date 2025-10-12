'use client';

import { BaseLayout } from '@/components/layout/BaseLayout';
import Image from 'next/image';

export default function QRPage() {
  return (
    <BaseLayout>
      <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-blue-gray/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-blue-gray/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-blue-gray/8 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        {/* Main QR Container */}
        <div className="relative z-10">
          {/* QR Code Card */}
          <div className="bg-surface-primary/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-border-secondary/50 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
            {/* QR Code Frame */}
            <div className="relative">
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent-blue-gray rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent-blue-gray rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent-blue-gray rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent-blue-gray rounded-br-lg"></div>
              
              {/* QR Code */}
              <div className="relative bg-primary p-6 rounded-2xl shadow-inner">
                <Image
                  src="/images/qr.png"
                  alt="QR Code"
                  width={600}
                  height={600}
                  className="mx-auto rounded-xl"
                  priority
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-blue-gray/5 rounded-xl pointer-events-none"></div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="mt-8 text-center space-y-3">
              <h1 className="text-2xl font-bold text-text-primary tracking-wide">
                SCAN TO CONNECT
              </h1>
              <p className="text-text-secondary text-sm max-w-xs mx-auto leading-relaxed">
                Scan this QR code to visit my website and explore my research portfolio
              </p>
              
              {/* Animated dots */}
              <div className="flex justify-center space-x-1 mt-4">
                <div className="w-2 h-2 bg-accent-blue-gray rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-accent-blue-gray rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-accent-blue-gray rounded-full animate-bounce delay-200"></div>
              </div>
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
    </BaseLayout>
  );
}
