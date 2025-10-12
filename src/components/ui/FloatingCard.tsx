import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface FloatingCardData {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface FloatingCardProps {
  data: FloatingCardData;
  position: {
    top: string;
    left?: string;
    right?: string;
    zIndex: number;
    rotation: number;
  };
  className?: string;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  data,
  position,
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute w-64 h-80 bg-surface-primary rounded-2xl shadow-xl border border-border-secondary transition-all duration-500 hover:rotate-0 hover:scale-105',
        className
      )}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        zIndex: position.zIndex,
        transform: `rotate(${position.rotation}deg)`,
      }}
    >
      <div className="relative h-48 rounded-t-2xl overflow-hidden">
        <Image
          src={data.image}
          alt={data.alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {data.title}
        </h3>
        <p className="text-text-secondary text-sm">
          {data.description}
        </p>
      </div>
    </div>
  );
};

interface FloatingCardsContainerProps {
  cards: FloatingCardData[];
  className?: string;
  containerHeight?: string;
}

export const FloatingCardsContainer: React.FC<FloatingCardsContainerProps> = ({
  cards,
  className,
  containerHeight = 'h-96',
}) => {
  const positions = [
    { top: '0', left: '0', zIndex: 10, rotation: 3 },
    { top: '5rem', right: '0', zIndex: 20, rotation: -2 },
    { top: '15rem', left: '25%', zIndex: 30, rotation: 1 },
    { top: '20rem', right: '25%', zIndex: 40, rotation: -1 },
  ];

  return (
    <div className={cn('relative', className)}>
      {cards.map((card, index) => (
        <FloatingCard
          key={card.id}
          data={card}
          position={positions[index] || positions[0]}
        />
      ))}
      {/* Spacer to maintain layout */}
      <div className={containerHeight}></div>
    </div>
  );
};
