'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProjectOutcomesProps {
  outcomes: string[];
  className?: string;
  title?: string;
}

interface OutcomeItemProps {
  outcome: string;
  index: number;
  isVisible: boolean;
}

const OutcomeItem: React.FC<OutcomeItemProps> = ({ outcome, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        'group relative p-4 rounded-lg transition-all duration-300 cursor-pointer',
        'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        'border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600',
        'transform hover:scale-105 hover:shadow-lg',
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      )}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-3">
        {/* Number indicator */}
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary-600 dark:text-primary-400 text-sm font-bold">
              {index + 1}
            </span>
          </div>
        </div>
        
        {/* Outcome text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
            {outcome}
          </p>
        </div>
        
        {/* Success indicator */}
        <div className="flex-shrink-0">
          <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Animated progress bar */}
      <div className="mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full bg-gradient-to-r from-primary-500 to-green-500 rounded-full transition-all duration-1000 ease-out',
            isVisible ? 'w-full' : 'w-0'
          )}
          style={{ 
            transitionDelay: `${index * 150 + 300}ms`,
            width: isVisible ? `${Math.min(85 + Math.random() * 15, 100)}%` : '0%'
          }}
        />
      </div>
      
      {/* Hover effect overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-primary-500/5 dark:bg-primary-400/5 rounded-lg pointer-events-none" />
      )}
    </div>
  );
};

export const ProjectOutcomes: React.FC<ProjectOutcomesProps> = ({ 
  outcomes, 
  className,
  title = "Key Outcomes"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!outcomes || outcomes.length === 0) {
    return null;
  }

  return (
    <div className={cn('space-y-4', className)}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-green-500 rounded-full mx-auto"></div>
      </div>
      
      <div className="space-y-3">
        {outcomes.slice(0, 3).map((outcome, index) => (
          <OutcomeItem
            key={index}
            outcome={outcome}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
      
      {outcomes.length > 3 && (
        <div className="text-center pt-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{outcomes.length - 3} more outcomes
          </span>
        </div>
      )}
    </div>
  );
};
