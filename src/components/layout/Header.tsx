'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/lib/data';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Floating Logo */}
      <Link 
        href="/" 
        className="fixed top-4 left-4 z-50 w-16 h-16 rounded-full bg-surface-primary hover:bg-surface-secondary transition-colors duration-200 shadow-lg flex items-center justify-center overflow-hidden"
        aria-label="Go to homepage"
      >
        <Image
          src="/images/favicon.png"
          alt="Rafael Felix"
          width={48}
          height={48}
          className="w-10 h-10 object-contain"
        />
      </Link>

      {/* Floating Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-surface-secondary hover:bg-interactive-secondary transition-colors duration-200 shadow-lg flex items-center justify-center"
        aria-label="Toggle navigation menu"
      >
        <div className="flex flex-col space-y-1">
          <div className={cn(
            'w-5 h-0.5 bg-text-primary transition-all duration-200',
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          )}></div>
          <div className={cn(
            'w-5 h-0.5 bg-text-primary transition-all duration-200',
            isMenuOpen ? 'opacity-0' : ''
          )}></div>
          <div className={cn(
            'w-5 h-0.5 bg-text-primary transition-all duration-200',
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          )}></div>
        </div>
      </button>

      {/* Floating Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 right-4 z-40 bg-surface-primary rounded-lg shadow-xl border border-border-secondary p-4 min-w-48">
          <nav className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md',
                  pathname === item.href
                    ? 'text-text-secondary bg-surface-secondary'
                    : 'text-text-primary hover:text-text-secondary hover:bg-surface-secondary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
