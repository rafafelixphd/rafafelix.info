import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
        const variants = {
          primary: 'bg-interactive-primary text-text-primary hover:bg-interactive-secondary focus:ring-interactive-primary',
          secondary: 'bg-surface-secondary text-text-primary hover:bg-surface-primary focus:ring-surface-secondary',
          outline: 'border border-border-primary text-interactive-primary hover:bg-interactive-primary hover:text-text-primary focus:ring-interactive-primary',
          ghost: 'text-interactive-primary hover:bg-surface-secondary focus:ring-interactive-primary',
        };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: cn(classes, (children as React.ReactElement).props?.className),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};
