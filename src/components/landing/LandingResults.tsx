import { ResultsSection } from '@/lib/landing';

interface LandingResultsProps {
  data: ResultsSection;
}

export default function LandingResults({ data }: LandingResultsProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Real Results
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {data.tagline}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data.metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-surface-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-surface-primary/30 transition-colors border border-border-secondary">
                <span className="text-3xl">{metric.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {metric.value}
              </div>
              <p className="text-text-secondary text-sm font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
