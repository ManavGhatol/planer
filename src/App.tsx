import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationMap } from './components/DestinationMap';
import { FeaturedJourneys } from './components/FeaturedJourneys';
import { SeasonalAlmanac } from './components/SeasonalAlmanac';
import { EcoPledge } from './components/EcoPledge';
import { HorizontalStory } from './components/HorizontalStory';
import { LiveTripExplorer } from './components/LiveTripExplorer';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { WhyParikrama } from './components/WhyParikrama';
import { InstagramGrid } from './components/InstagramGrid';
import { CinematicGallery } from './components/CinematicGallery';
import { StoriesFromTrail } from './components/StoriesFromTrail';
import { CommunityMetrics } from './components/CommunityMetrics';
import { AdventureFinder } from './components/AdventureFinder';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { TripDetailModal } from './components/TripDetailModal';
import { BookingModal } from './components/BookingModal';
import { NatureThemeProvider } from './context/NatureThemeContext';
import { NatureFloatingParticles } from './components/NatureFloatingParticles';
import { NatureMoodSwitcher } from './components/NatureMoodSwitcher';
import { Journey } from './types';

export default function App() {
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedBookingJourney, setPreselectedBookingJourney] = useState<Journey | null>(null);

  const handleOpenJourneyDetails = (journey: Journey) => {
    setSelectedJourney(journey);
  };

  const handleOpenBooking = (journey?: Journey) => {
    if (journey) {
      setPreselectedBookingJourney(journey);
    }
    setIsBookingOpen(true);
  };

  const handleSelectRegion = (_regionId: string) => {
    // Smooth scroll to journeys
    const journeysSection = document.getElementById('journeys');
    if (journeysSection) {
      journeysSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NatureThemeProvider>
      <div className="relative min-h-screen bg-[#0a0d0c] text-[#f4f5f0] selection:bg-[#22c55e] selection:text-[#0a0d0c]">
        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Dynamic Nature Mood Environmental Particles (Rain, leaves, fireflies, golden dust) */}
        <NatureFloatingParticles />

        {/* Floating Creative Nature Atmosphere & Audio Switcher */}
        <NatureMoodSwitcher />

        {/* Navigation with Embedded Procedural Soundscape Engine */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* 1. Cinematic Hero */}
        <Hero
          onExploreJourneys={() => {
            const el = document.getElementById('journeys');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onPlanAdventure={() => {
            const el = document.getElementById('plan');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Interactive Destination Map */}
        <DestinationMap onSelectRegion={handleSelectRegion} />

        {/* 3. Featured Journeys - Large Editorial Panels with Eco Scores */}
        <FeaturedJourneys
          onSelectJourney={handleOpenJourneyDetails}
          onBookJourney={handleOpenBooking}
        />

        {/* 4. Seasonal Nature Almanac: Flora, Fauna, Weather & Phenomenon */}
        <SeasonalAlmanac
          onExploreJourneys={() => {
            const el = document.getElementById('journeys');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Horizontal Storytelling Journey (Trek -> Camp -> Sunset -> Bonfire -> Summit) */}
        <HorizontalStory />

        {/* 6. Live Upcoming Trips Explorer with real-time seat availability */}
        <LiveTripExplorer
          onBookJourney={handleOpenBooking}
          onExploreJourney={handleOpenJourneyDetails}
        />

        {/* 7. Eco-Pledge & Live Environmental Footprint Calculator */}
        <EcoPledge />

        {/* 8. Brand Philosophy: THIS IS NOT TOURISM. THIS IS EXPERIENCE. */}
        <BrandPhilosophy />

        {/* 9. Why Parikrama - Minimalist Editorial Blocks with hover photo reveal */}
        <WhyParikrama />

        {/* 10. Interactive Adventure Recommendation Engine */}
        <AdventureFinder
          onSelectJourney={handleOpenJourneyDetails}
          onBookJourney={handleOpenBooking}
        />

        {/* 11. Instagram Visual Connection Feed */}
        <InstagramGrid />

        {/* 12. Massive Cinematic Documentary Gallery */}
        <CinematicGallery />

        {/* 13. Stories from the Trail */}
        <StoriesFromTrail />

        {/* 14. Community Metrics Counters */}
        <CommunityMetrics />

        {/* 15. Final CTA: THE WILD IS WAITING. ARE YOU READY? */}
        <FinalCTA
          onStartJourney={() => handleOpenBooking()}
          onExploreDestinations={() => {
            const el = document.getElementById('destinations');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 16. Premium Oversized Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Deep Expedition Package Detail Modal */}
        <TripDetailModal
          journey={selectedJourney}
          onClose={() => setSelectedJourney(null)}
          onBook={(journey) => {
            setSelectedJourney(null);
            handleOpenBooking(journey);
          }}
        />

        {/* Reservation & Booking Desk Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => {
            setIsBookingOpen(false);
            setPreselectedBookingJourney(null);
          }}
          preselectedJourney={preselectedBookingJourney}
        />
      </div>
    </NatureThemeProvider>
  );
}
