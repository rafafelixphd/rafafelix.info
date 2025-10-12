'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { SkillCategory } from '@/models/types';
import { cn } from '@/lib/utils';

interface SkillsProps {
  skills: SkillCategory[];
  className?: string;
}

interface SkillItemProps {
  item: string;
  index: number;
  isVisible: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        'group relative p-3 rounded-lg transition-all duration-300 cursor-pointer',
        'bg-surface-primary/50 hover:bg-surface-primary border border-border-subtle hover:border-interactive-primary',
        'transform hover:scale-105 hover:shadow-lg',
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary group-hover:text-interactive-primary transition-colors duration-200">
          {item}
        </span>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-interactive-primary opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
          <div className="w-2 h-2 rounded-full bg-interactive-primary opacity-40 group-hover:opacity-80 transition-opacity duration-200"></div>
          <div className="w-2 h-2 rounded-full bg-interactive-primary opacity-20 group-hover:opacity-60 transition-opacity duration-200"></div>
        </div>
      </div>
      
      {/* Animated progress bar */}
      <div className="mt-2 h-1 bg-surface-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            'h-full bg-gradient-to-r from-interactive-primary to-interactive-secondary rounded-full transition-all duration-1000 ease-out',
            isVisible ? 'w-full' : 'w-0'
          )}
          style={{ 
            transitionDelay: `${index * 100 + 200}ms`,
            width: isVisible ? `${Math.min(85 + Math.random() * 15, 100)}%` : '0%'
          }}
        />
      </div>
      
      {/* Hover effect overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-interactive-primary/10 rounded-lg pointer-events-none" />
      )}
    </div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ skills, className }) => {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCategories(prev => new Set([...prev, index]));
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [skills]);

  return (
    <div className={cn('space-y-8', className)}>
      {skills.map((skill, categoryIndex) => (
        <Card
          key={skill.category}
          className={cn(
            'relative overflow-hidden transition-all duration-500',
            'bg-surface-primary/30 hover:bg-surface-primary/50',
            'border-border-subtle hover:border-interactive-primary',
            'transform hover:scale-[1.02] hover:shadow-xl',
            visibleCategories.has(categoryIndex) ? 'animate-fade-in-up' : 'opacity-0'
          )}
          style={{ animationDelay: `${categoryIndex * 200}ms` }}
          onMouseEnter={() => setHoveredCategory(categoryIndex)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-text-primary group-hover:text-interactive-primary transition-colors duration-200">
                {skill.category}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">
                  {skill.items.length} skills
                </span>
                <div className="w-8 h-8 bg-surface-secondary rounded-lg flex items-center justify-center">
                  <span className="text-interactive-primary font-bold text-sm">
                    {skill.category.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skill.items.map((item, itemIndex) => (
                <SkillItem
                  key={item}
                  item={item}
                  index={itemIndex}
                  isVisible={visibleCategories.has(categoryIndex)}
                />
              ))}
            </div>
          </CardContent>
          
          {/* Category hover effect */}
          {hoveredCategory === categoryIndex && (
            <div className="absolute inset-0 bg-gradient-to-r from-interactive-primary/5 to-interactive-secondary/5 pointer-events-none" />
          )}
        </Card>
      ))}
    </div>
  );
};
