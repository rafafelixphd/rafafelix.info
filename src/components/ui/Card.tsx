import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'bg-surface-primary rounded-xl border border-border-subtle shadow-sm',
        hover && 'hover:shadow-md hover:border-border-primary transition-all duration-200',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={cn('p-6 pt-4', className)}>
      {children}
    </div>
  );
};
