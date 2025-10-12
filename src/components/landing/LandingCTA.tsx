import { CTASection } from '@/lib/landing';

interface LandingCTAProps {
  data: CTASection;
}

export default function LandingCTA({ data }: LandingCTAProps) {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          {data.headline}
        </h2>
        
        <p className="text-xl text-text-secondary mb-12 leading-relaxed">
          {data.subheading}
        </p>
        
        <button className="bg-surface-secondary text-text-primary px-12 py-4 rounded-lg font-semibold text-xl hover:bg-interactive-secondary transition-colors transform hover:scale-105 duration-200">
          {data.ctaText} →
        </button>
        
        <div className="mt-16 pt-8 border-t border-border-secondary">
          <p className="text-text-secondary">
            {data.footer}
          </p>
          <p className="text-text-muted text-sm mt-2">
            © 2025 Rafael Felix, Ph.D.
          </p>
        </div>
      </div>
    </section>
  );
}
