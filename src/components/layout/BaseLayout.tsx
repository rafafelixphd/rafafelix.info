import { ReactNode } from 'react';
import Image from 'next/image';
import { Header } from './Header';
import { Footer } from './Footer';

interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

export function BaseLayout({ children, className = '' }: BaseLayoutProps) {
  return (
    <div className={`min-h-screen bg-background-primary ${className}`}>
      {/* Global Background Image */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <Image
          src="/images/assets_task_01k7b1r2v6ezmbw7gjn1mq1gpe_1760233852_img_1.webp"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
