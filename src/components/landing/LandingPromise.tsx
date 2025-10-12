import { PromiseSection } from '@/lib/landing';

interface LandingPromiseProps {
  data: PromiseSection;
}

export default function LandingPromise({ data }: LandingPromiseProps) {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
          {data.headline}
        </h2>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          {data.description}
        </p>
        
        {/* Three Questions */}
        <div className="space-y-6 mb-12">
          {data.questions.map((question, index) => (
            <div key={index} className="flex items-center justify-center space-x-4">
              <div className="w-8 h-8 bg-surface-secondary text-text-primary rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p className="text-lg font-medium text-text-primary">{question}</p>
            </div>
          ))}
        </div>
        
        {/* Process */}
        <div className="bg-surface-primary/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border-secondary">
          <p className="text-lg text-text-secondary leading-relaxed">
            {data.process}
          </p>
        </div>
      </div>
    </section>
  );
}
