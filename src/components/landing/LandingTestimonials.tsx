import { Testimonial } from '@/lib/landing';

interface LandingTestimonialsProps {
  data: Testimonial[];
}

export default function LandingTestimonials({ data }: LandingTestimonialsProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            What Clients Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((testimonial) => (
            <div key={testimonial.id} className="bg-surface-primary/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border-secondary">
              <div className="mb-6">
                <svg className="w-8 h-8 text-interactive-tertiary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-text-secondary leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="border-t border-border-secondary pt-6">
                <div className="font-semibold text-text-primary">
                  {testimonial.author}
                </div>
                <div className="text-interactive-tertiary text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
