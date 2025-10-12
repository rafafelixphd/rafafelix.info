import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  id,
  padding = 'lg' 
}) => {
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  return (
    <section 
      id={id}
      className={cn(paddings[padding], className)}
    >
      {children}
    </section>
  );
};
