'use client';

import { Collaboration } from '@/lib/landing';
import Image from 'next/image';
import { useState, useRef } from 'react';

interface LandingCollaborationsProps {
  data: Collaboration[];
}

export default function LandingCollaborations({ data }: LandingCollaborationsProps) {
  const [positions, setPositions] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const generateRandomPosition = () => {
    const x = Math.random() * 70 + 15; // 15% to 85% of width
    const y = Math.random() * 70 + 15; // 15% to 85% of height
    return { x, y };
  };

  const getPosition = (index: number, collaboration: Collaboration) => {
    const key = collaboration.id;
    if (positions[key]) return positions[key];
    
    let position = generateRandomPosition();
    
    // Enhanced collision detection - avoid recursion
    const minDistance = 18;
    let attempts = 0;
    while (attempts < 50) {
      let tooClose = false;
      for (let i = 0; i < index; i++) {
        const existingPos = positions[data[i].id];
        if (existingPos) {
          const distance = Math.sqrt(
            Math.pow(position.x - existingPos.x, 2) + 
            Math.pow(position.y - existingPos.y, 2)
          );
          if (distance < minDistance) {
            tooClose = true;
            break;
          }
        }
      }
      if (!tooClose) break;
      position = generateRandomPosition();
      attempts++;
    }
    
    // Fallback grid position
    if (attempts >= 50) {
      const gridPositions = [
        { x: 20, y: 20 }, { x: 40, y: 20 }, { x: 60, y: 20 }, { x: 80, y: 20 },
        { x: 20, y: 40 }, { x: 40, y: 40 }, { x: 60, y: 40 }, { x: 80, y: 40 },
        { x: 20, y: 60 }, { x: 40, y: 60 }, { x: 60, y: 60 }, { x: 80, y: 60 },
        { x: 20, y: 80 }, { x: 40, y: 80 }, { x: 60, y: 80 }, { x: 80, y: 80 }
      ];
      position = gridPositions[index % gridPositions.length];
    }
    
    setPositions(prev => ({ ...prev, [key]: position }));
    return position;
  };

  const handleMouseDown = (e: React.MouseEvent, collaborationId: string) => {
    e.preventDefault();
    setDragging(collaborationId);
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const currentPos = positions[collaborationId] || { x: 50, y: 50 };
      setDragOffset({
        x: e.clientX - rect.left - (currentPos.x * rect.width / 100),
        y: e.clientY - rect.top - (currentPos.y * rect.height / 100)
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left - dragOffset.x) / rect.width) * 100;
    const y = ((e.clientY - rect.top - dragOffset.y) / rect.height) * 100;
    
    // Constrain to container bounds
    const constrainedX = Math.max(5, Math.min(95, x));
    const constrainedY = Math.max(5, Math.min(95, y));
    
    setPositions(prev => ({
      ...prev,
      [dragging]: { x: constrainedX, y: constrainedY }
    }));
  };

  const handleMouseUp = () => {
    setDragging(null);
    setDragOffset({ x: 0, y: 0 });
  };
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From research institutions to global tech companies, organizations trust my expertise in AI and robotics.
          </p>
        </div>
        
        {/* Neural Network Visualization */}
        <div 
          ref={containerRef}
          className="relative w-full h-[600px] bg-surface-primary/5 backdrop-blur-sm rounded-2xl overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >

          
          {/* Organization Nodes */}
          <div className="relative w-full h-full">
            {data.map((collaboration, index) => {
              const position = getPosition(index, collaboration);
              
              return (
                <div
                  key={collaboration.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group ${
                    dragging === collaboration.id ? 'cursor-grabbing z-50' : 'cursor-grab'
                  }`}
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transition: dragging === collaboration.id ? 'none' : 'all 0.3s ease'
                  }}
                  onMouseDown={(e) => handleMouseDown(e, collaboration.id)}
                >
                  <div className="w-28 h-28 bg-surface-primary/90 backdrop-blur-sm rounded-full border-2 border-border-secondary flex items-center justify-center hover:border-interactive-tertiary hover:bg-surface-primary transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110 overflow-hidden">
                    {collaboration.logo ? (
                      <Image
                        src={collaboration.logo}
                        alt={`${collaboration.name} logo`}
                        width={80}
                        height={80}
                        className="w-18 h-18 object-contain"
                      />
                    ) : (
                      <span className="text-text-primary font-bold text-3xl">
                        {collaboration.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="bg-surface-primary/95 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-text-primary whitespace-nowrap border border-border-secondary shadow-lg">
                      <div className="font-medium">{collaboration.name}</div>
                      <div className="text-xs text-text-secondary capitalize">{collaboration.type}</div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-surface-primary/95 border-l border-t border-border-secondary rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
