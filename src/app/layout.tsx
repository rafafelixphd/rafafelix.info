import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Felix - Research Scientist',
  description: 'Personal website of Rafael Felix, Ph.D., Research Scientist specializing in multimodal AI for Trust & Safety and Robotics.',
  keywords: ['Rafael Felix', 'Research Scientist', 'AI', 'Machine Learning', 'Multimodal AI', 'Robotics', 'Trust & Safety'],
  authors: [{ name: 'Rafael Felix' }],
  creator: 'Rafael Felix',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rafafelix.info',
    title: 'Rafael Felix - Research Scientist',
    description: 'Personal website of Rafael Felix, Ph.D., Research Scientist specializing in multimodal AI for Trust & Safety and Robotics.',
    siteName: 'Rafael Felix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Felix - Research Scientist',
    description: 'Personal website of Rafael Felix, Ph.D., Research Scientist specializing in multimodal AI for Trust & Safety and Robotics.',
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