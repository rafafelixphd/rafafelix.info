import { Collaboration } from '@/lib/landing';
import Image from 'next/image';

interface LandingCollaborationsProps {
  data: Collaboration[];
}

export default function LandingCollaborations({ data }: LandingCollaborationsProps) {
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
        <div className="relative w-full h-[600px] bg-surface-primary/5 backdrop-blur-sm rounded-2xl overflow-hidden">
          {/* Background Neural Network */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-interactive-tertiary)" stopOpacity="0.3" />
                <stop offset="30%" stopColor="var(--color-surface-secondary)" stopOpacity="0.25" />
                <stop offset="70%" stopColor="var(--color-interactive-tertiary)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-surface-secondary)" stopOpacity="0.15" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Flowing neural network pattern - organic curves */}
            <path d="M 50,100 Q 200,50 350,120 T 650,80 T 950,100" stroke="url(#neuralGradient)" strokeWidth="1.5" fill="none" filter="url(#glow)" />
            <path d="M 100,150 Q 250,100 400,180 T 700,140 T 900,160" stroke="url(#neuralGradient)" strokeWidth="1.2" fill="none" filter="url(#glow)" />
            <path d="M 80,200 Q 300,180 500,220 T 800,200 T 920,180" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" filter="url(#glow)" />
            
            <path d="M 50,250 Q 180,200 350,280 T 600,240 T 850,260" stroke="url(#neuralGradient)" strokeWidth="1.3" fill="none" filter="url(#glow)" />
            <path d="M 120,300 Q 280,250 450,320 T 700,280 T 900,300" stroke="url(#neuralGradient)" strokeWidth="1.1" fill="none" filter="url(#glow)" />
            <path d="M 100,350 Q 320,320 500,380 T 750,340 T 950,360" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" filter="url(#glow)" />
            
            <path d="M 80,400 Q 250,350 400,420 T 650,380 T 900,400" stroke="url(#neuralGradient)" strokeWidth="1.4" fill="none" filter="url(#glow)" />
            <path d="M 150,450 Q 300,400 500,480 T 750,440 T 920,460" stroke="url(#neuralGradient)" strokeWidth="1.2" fill="none" filter="url(#glow)" />
            <path d="M 120,500 Q 350,480 550,520 T 800,480 T 950,500" stroke="url(#neuralGradient)" strokeWidth="1" fill="none" filter="url(#glow)" />
            
            {/* Additional flowing lines for depth */}
            <path d="M 0,120 Q 150,80 300,140 T 500,100 T 700,120 T 1000,100" stroke="url(#neuralGradient)" strokeWidth="0.8" fill="none" filter="url(#glow)" />
            <path d="M 0,200 Q 200,160 400,220 T 600,180 T 800,200 T 1000,180" stroke="url(#neuralGradient)" strokeWidth="0.7" fill="none" filter="url(#glow)" />
            <path d="M 0,280 Q 180,240 380,300 T 580,260 T 780,280 T 1000,260" stroke="url(#neuralGradient)" strokeWidth="0.6" fill="none" filter="url(#glow)" />
            <path d="M 0,360 Q 220,320 420,380 T 620,340 T 820,360 T 1000,340" stroke="url(#neuralGradient)" strokeWidth="0.8" fill="none" filter="url(#glow)" />
            <path d="M 0,440 Q 160,400 360,460 T 560,420 T 760,440 T 1000,420" stroke="url(#neuralGradient)" strokeWidth="0.7" fill="none" filter="url(#glow)" />
            <path d="M 0,520 Q 240,480 440,540 T 640,500 T 840,520 T 1000,500" stroke="url(#neuralGradient)" strokeWidth="0.6" fill="none" filter="url(#glow)" />
            
            {/* More complex interweaving connections */}
            <path d="M 0,80 Q 120,60 250,100 T 400,70 T 550,90 T 700,60 T 850,80 T 1000,70" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            <path d="M 0,140 Q 80,120 200,160 T 350,130 T 500,150 T 650,120 T 800,140 T 1000,130" stroke="url(#neuralGradient)" strokeWidth="0.6" fill="none" filter="url(#glow)" />
            <path d="M 0,180 Q 100,160 220,200 T 370,170 T 520,190 T 670,160 T 820,180 T 1000,170" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            <path d="M 0,240 Q 60,220 180,260 T 330,230 T 480,250 T 630,220 T 780,240 T 1000,230" stroke="url(#neuralGradient)" strokeWidth="0.7" fill="none" filter="url(#glow)" />
            <path d="M 0,320 Q 140,300 260,340 T 410,310 T 560,330 T 710,300 T 860,320 T 1000,310" stroke="url(#neuralGradient)" strokeWidth="0.6" fill="none" filter="url(#glow)" />
            <path d="M 0,380 Q 90,360 210,400 T 360,370 T 510,390 T 660,360 T 810,380 T 1000,370" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            <path d="M 0,460 Q 110,440 230,480 T 380,450 T 530,470 T 680,440 T 830,460 T 1000,450" stroke="url(#neuralGradient)" strokeWidth="0.6" fill="none" filter="url(#glow)" />
            <path d="M 0,540 Q 130,520 250,560 T 400,530 T 550,550 T 700,520 T 850,540 T 1000,530" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            
            {/* Diagonal flowing connections */}
            <path d="M 0,50 Q 200,150 400,100 T 600,200 T 800,150 T 1000,250" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 0,150 Q 300,250 500,200 T 700,300 T 900,250 T 1000,350" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            <path d="M 0,250 Q 250,350 450,300 T 650,400 T 850,350 T 1000,450" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 0,350 Q 350,450 550,400 T 750,500 T 950,450 T 1000,550" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            
            {/* Reverse diagonal connections */}
            <path d="M 1000,50 Q 800,150 600,100 T 400,200 T 200,150 T 0,250" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 1000,150 Q 700,250 500,200 T 300,300 T 100,250 T 0,350" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            <path d="M 1000,250 Q 750,350 550,300 T 350,400 T 150,350 T 0,450" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 1000,350 Q 650,450 450,400 T 250,500 T 50,450 T 0,550" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            
            {/* Vertical flowing connections */}
            <path d="M 150,0 Q 200,150 180,300 T 200,450 T 180,600" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            <path d="M 300,0 Q 350,200 320,400 T 350,600" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 500,0 Q 550,180 520,360 T 550,600" stroke="url(#neuralGradient)" strokeWidth="0.6" fill="none" filter="url(#glow)" />
            <path d="M 700,0 Q 750,220 720,440 T 750,600" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            <path d="M 850,0 Q 900,160 880,320 T 900,600" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            
            {/* Additional horizontal flowing connections */}
            <path d="M 0,60 Q 250,40 500,80 T 750,60 T 1000,80" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            <path d="M 0,100 Q 200,80 400,120 T 600,100 T 800,120 T 1000,100" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 0,160 Q 300,140 600,180 T 900,160 T 1000,180" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            <path d="M 0,220 Q 150,200 350,240 T 550,220 T 750,240 T 1000,220" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            <path d="M 0,300 Q 400,280 800,320 T 1000,300" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 0,360 Q 250,340 500,380 T 750,360 T 1000,380" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            <path d="M 0,420 Q 350,400 700,440 T 1000,420" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)" />
            <path d="M 0,480 Q 200,460 400,500 T 600,480 T 800,500 T 1000,480" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 0,540 Q 300,520 600,560 T 900,540 T 1000,560" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            
            {/* Curved corner connections */}
            <path d="M 0,0 Q 100,100 200,0" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 800,0 Q 900,100 1000,0" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 0,600 Q 100,500 200,600" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            <path d="M 800,600 Q 900,500 1000,600" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
            
            {/* Spiral-like connections */}
            <path d="M 250,100 Q 400,200 250,300 Q 100,200 250,100" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            <path d="M 750,200 Q 900,300 750,400 Q 600,300 750,200" stroke="url(#neuralGradient)" strokeWidth="0.3" fill="none" filter="url(#glow)" />
            <path d="M 500,300 Q 650,400 500,500 Q 350,400 500,300" stroke="url(#neuralGradient)" strokeWidth="0.4" fill="none" filter="url(#glow)" />
          </svg>
          
          {/* Organization Nodes */}
          <div className="relative w-full h-full">
            {data.map((collaboration, index) => {
              // Generate random positions with collision detection
              const generateRandomPosition = () => {
                const x = Math.random() * 70 + 15; // 15% to 85% of width
                const y = Math.random() * 70 + 15; // 15% to 85% of height
                return { x, y };
              };
              
              let position = generateRandomPosition();
              
              // Enhanced collision detection - regenerate if too close to existing positions
              const minDistance = 18; // Increased minimum distance to 18% between icons
              let attempts = 0;
              while (attempts < 50) { // Increased attempts for better distribution
                let tooClose = false;
                for (let i = 0; i < index; i++) {
                  const existingPos = data[i]?.position;
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
              
              // If still too close after attempts, use a fallback grid position
              if (attempts >= 50) {
                const gridPositions = [
                  { x: 20, y: 20 }, { x: 40, y: 20 }, { x: 60, y: 20 }, { x: 80, y: 20 },
                  { x: 20, y: 40 }, { x: 40, y: 40 }, { x: 60, y: 40 }, { x: 80, y: 40 },
                  { x: 20, y: 60 }, { x: 40, y: 60 }, { x: 60, y: 60 }, { x: 80, y: 60 },
                  { x: 20, y: 80 }, { x: 40, y: 80 }, { x: 60, y: 80 }, { x: 80, y: 80 }
                ];
                position = gridPositions[index % gridPositions.length];
              }
              
              // Store position for collision detection
              if (!data[index].position) {
                data[index].position = position;
              }
              
              return (
                <div
                  key={collaboration.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`
                  }}
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
