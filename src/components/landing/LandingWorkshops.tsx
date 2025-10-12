import { WorkshopModule } from '@/lib/landing';

interface LandingWorkshopsProps {
  data: WorkshopModule[];
}

export default function LandingWorkshops({ data }: LandingWorkshopsProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Teach Your Team to Think Like AI Builders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Four 90-minute clinics to align your team's strategy and language around practical AI.
          </p>
          <div className="bg-surface-primary/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-border-secondary">
            <p className="text-text-primary font-medium">
              <strong>Outcome:</strong> Walk away with shared frameworks, working templates, and faster execution.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((module) => (
            <div key={module.id} className="bg-surface-primary/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border-secondary overflow-hidden group cursor-pointer">
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-interactive-tertiary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {module.description}
                  </p>
                </div>
                
                  <div className="mt-6 pt-4 border-t border-border-secondary">
                  <button className="w-full text-interactive-tertiary font-semibold hover:text-interactive-secondary transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
