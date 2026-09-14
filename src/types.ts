export type Difficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';

export interface ItineraryDay {
  day: number;
  title: string;
  distance?: string;
  duration?: string;
  description: string;
  mealsIncluded: string[];
  keyHighlights: string[];
}

export interface Journey {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  location: string;
  duration: string;
  nightsDays: string;
  difficulty: Difficulty;
  altitude: string;
  price: number;
  originalPrice?: number;
  availableDates: string[];
  seatsLeft: number;
  totalSeats: number;
  heroImage: string;
  galleryImages: string[];
  description: string;
  tags: string[];
  category: 'Trek' | 'Camp' | 'Safari' | 'Waterfall' | 'Mountains' | 'Weekend Escape';
  ecoScore?: number;
  treesPlanted?: number;
  plasticSaved?: number;
  floraFauna?: string[];
  ecoCertification?: string;
  included: string[];
  notIncluded: string[];
  carryList: { category: string; items: string[] }[];
  itinerary: ItineraryDay[];
  meetingPoints: { city: string; pickupLocation: string; pickupTime: string }[];
  faqs: { question: string; answer: string }[];
}

export interface DestinationRegion {
  id: string;
  name: string;
  state: string;
  tag: string;
  journeysCount: number;
  coordinates: { x: number; y: number }; // percentage on India map
  description: string;
  image: string;
  elevation: string;
  bestSeason: string;
}

export interface Story {
  id: string;
  author: string;
  authorRole: string;
  location: string;
  destination: string;
  quote: string;
  fullStory: string;
  avatar: string;
  trekDate: string;
  photosCount: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  ratio: 'portrait' | 'landscape' | 'square' | 'panoramic' | 'tall vertical';
  elevation: string;
  date: string;
}

export interface HorizontalMoment {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  altitude: string;
  time: string;
  image: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  location: string;
  likes: number;
  comments: number;
  tag: string;
  isReel?: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  journeyId: string;
  travelDate: string;
  guests: number;
  pickupCity: string;
  notes?: string;
}

export type NatureMood = 'monsoon' | 'dawn' | 'forest' | 'starlight';

export interface SeasonalAlmanacPeriod {
  id: NatureMood;
  seasonName: string;
  hindiName: string;
  months: string;
  headline: string;
  temperature: string;
  trailCondition: string;
  specialPhenomenon: string;
  keyFlora: { name: string; botanical: string; description: string }[];
  keyFauna: { name: string; status: string; spottingChance: string }[];
  recommendedTrips: string[];
  colorHex: string;
  accentHex: string;
  ambientTrack: 'rain' | 'breeze' | 'birds' | 'fire';
}
