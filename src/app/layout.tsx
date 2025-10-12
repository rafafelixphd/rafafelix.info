import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Felix - Software Engineer & Researcher',
  description: 'Personal website of Rafael Felix, showcasing projects, research, and professional experience in software engineering and academic research.',
  keywords: ['Rafael Felix', 'Software Engineer', 'Researcher', 'Web Development', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Rafael Felix' }],
  creator: 'Rafael Felix',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rafafelix.info',
    title: 'Rafael Felix - Software Engineer & Researcher',
    description: 'Personal website of Rafael Felix, showcasing projects, research, and professional experience.',
    siteName: 'Rafael Felix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Felix - Software Engineer & Researcher',
    description: 'Personal website of Rafael Felix, showcasing projects, research, and professional experience.',
    creator: '@rafafelix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background-primary text-text-primary`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}