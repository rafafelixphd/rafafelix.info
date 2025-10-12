import { ServiceCard } from '@/lib/landing';

interface LandingServicesProps {
  data: ServiceCard[];
}

export default function LandingServices({ data }: LandingServicesProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Core Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Three flagship offers designed to move you from idea to impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((service) => (
            <div key={service.id} className="bg-surface-primary/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border-secondary overflow-hidden group">
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-interactive-tertiary font-medium">
                    {service.duration}
                  </p>
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-interactive-tertiary rounded-full"></div>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6 p-4 bg-surface-secondary/20 rounded-lg border border-border-secondary">
                  <p className="text-sm font-medium text-text-primary">
                    <strong>Outcome:</strong> {service.outcome}
                  </p>
                </div>
                
                <button className="w-full bg-surface-secondary text-text-primary py-3 rounded-lg font-semibold hover:bg-interactive-secondary transition-colors group-hover:scale-105 transform duration-200">
                  {service.ctaText} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
