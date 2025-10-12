import { TimelineStep } from '@/lib/landing';
import Image from 'next/image';

interface LandingTimelineProps {
  data: TimelineStep[];
}

export default function LandingTimeline({ data }: LandingTimelineProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            From Idea to MVP
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every phase comes with risk mapping, cost tracking, and measurable ROI targets.
          </p>
        </div>
        
        <div className="space-y-12">
          {data.map((step, index) => (
            <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className="flex-1">
                <div className="bg-surface-primary/50 backdrop-blur-sm rounded-2xl p-8 border border-border-secondary">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-surface-secondary text-text-primary rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="text-interactive-tertiary font-medium">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Deliverables:</h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-interactive-tertiary rounded-full"></div>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Visual */}
              <div className="flex-1 max-w-lg mx-auto">
                <div className="aspect-[4/3] bg-surface-primary/30 rounded-2xl border border-border-secondary overflow-hidden">
                  <Image
                    src={step.images[0]}
                    alt={step.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
