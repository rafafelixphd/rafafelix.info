import { HeroSection } from '@/lib/landing';

interface LandingHeroProps {
  data: HeroSection;
}

export default function LandingHero({ data }: LandingHeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
          {data.headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
          {data.subheading}
        </p>
        
        <p className="text-lg text-text-secondary mb-12 font-medium">
          {data.proof}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-surface-secondary text-text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-interactive-secondary transition-colors">
            {data.ctaPrimary} →
          </button>
          <button className="border-2 border-border-secondary text-text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-surface-primary transition-colors">
            {data.ctaSecondary} ↓
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
