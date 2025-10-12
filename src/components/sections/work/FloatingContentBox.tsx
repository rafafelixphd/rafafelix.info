'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingContentBoxProps {
  children: ReactNode;
  className?: string;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'center-left' | 'center-right' | 'center';
  variant?: 'default' | 'dark' | 'glass';
}

export function FloatingContentBox({ 
  children, 
  className = '', 
  position = 'bottom-left',
  variant = 'default'
}: FloatingContentBoxProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'bottom-right':
        return 'bottom-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'center-left':
        return 'top-1/2 left-6 -translate-y-1/2';
      case 'center-right':
        return 'top-1/2 right-6 -translate-y-1/2';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      default:
        return 'bottom-6 left-6';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-gray-900/95 text-white border-gray-700/20';
      case 'glass':
        return 'bg-white/10 dark:bg-gray-900/10 text-white backdrop-blur-md border-white/20 dark:border-gray-700/20';
      default:
        return 'bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white border-white/20 dark:border-gray-700/20';
    }
  };

  return (
    <div className={cn(`absolute ${getPositionClasses()}`, className)}>
      <div className={cn(`
        ${getVariantClasses()}
        backdrop-blur-sm rounded-xl p-6 shadow-2xl border max-w-md
        transition-all duration-300 hover:shadow-3xl hover:scale-105
      `)}>
        {children}
      </div>
    </div>
  );
}
