import { landingContent } from '@/lib/landing';
import LandingHero from '@/components/landing/LandingHero';
import LandingAbout from '@/components/landing/LandingAbout';
import LandingPromise from '@/components/landing/LandingPromise';
import LandingServices from '@/components/landing/LandingServices';
import LandingResults from '@/components/landing/LandingResults';
import LandingTimeline from '@/components/landing/LandingTimeline';
import LandingWorkshops from '@/components/landing/LandingWorkshops';
import LandingTestimonials from '@/components/landing/LandingTestimonials';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingCollaborations from '@/components/landing/LandingCollaborations';
import { BaseLayout } from '@/components/layout/BaseLayout';

export default function LandingPage() {
  return (
    <BaseLayout>
      <main className="scroll-smooth scroll-snap-y scroll-snap-mandatory">
        <div className="scroll-snap-center">
          <LandingHero data={landingContent.hero} />
        </div>
        <div className="scroll-snap-center">
          <LandingAbout data={landingContent.about} images={landingContent.images} />
        </div>
        <div className="scroll-snap-center">
          <LandingPromise data={landingContent.promise} />
        </div>
        <div className="scroll-snap-center">
          <LandingServices data={landingContent.services} />
        </div>
        <div className="scroll-snap-center">
          <LandingResults data={landingContent.results} />
        </div>
        <div className="scroll-snap-center">
          <LandingTimeline data={landingContent.timeline} />
        </div>
        <div className="scroll-snap-center">
          <LandingWorkshops data={landingContent.workshops} />
        </div>
        <div className="scroll-snap-center">
          <LandingTestimonials data={landingContent.testimonials} />
        </div>
        <div className="scroll-snap-center">
          <LandingCollaborations data={landingContent.collaborations} />
        </div>
        <div className="scroll-snap-center">
          <LandingCTA data={landingContent.cta} />
        </div>
      </main>
    </BaseLayout>
  );
}
