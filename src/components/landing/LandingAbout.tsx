import { AboutSection, ImageAssets } from '@/lib/landing';
import Image from 'next/image';

interface LandingAboutProps {
  data: AboutSection;
  images: ImageAssets;
}

export default function LandingAbout({ data, images }: LandingAboutProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="aspect-[4/3] bg-surface-primary/50 backdrop-blur-sm rounded-2xl border border-border-secondary overflow-hidden">
              <Image
                src={images.placeholder}
                alt="AI Researcher in Lab"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              {data.headline}
            </h2>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              {data.bio}
            </p>
            
            {/* Quick Facts */}
            <div className="flex flex-wrap gap-4 pt-4">
              {data.facts.map((fact, index) => (
                <div key={index} className="flex items-center space-x-2 bg-surface-primary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border-secondary">
                  <span className="text-lg">{fact.icon}</span>
                  <span className="text-sm font-medium text-text-primary">{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
