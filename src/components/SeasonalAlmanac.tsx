import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CloudRain,
  Flower2,
  Snowflake,
  Sparkles,
  Thermometer,
  Compass,
  ArrowRight,
  Eye,
  Info,
} from 'lucide-react';
import { useNatureTheme } from '../context/NatureThemeContext';
import { SeasonalAlmanacPeriod } from '../types';

interface SeasonalAlmanacProps {
  onSelectJourneyById?: (id: string) => void;
  onExploreJourneys?: () => void;
}

const ALMANAC_DATA: SeasonalAlmanacPeriod[] = [
  {
    id: 'monsoon',
    seasonName: 'MONSOON SEASON',
    hindiName: 'VARSHA RITU (वर्षा)',
    months: 'JULY — SEPTEMBER',
    headline: 'THE GREAT GREEN REBIRTH & BIOLUMINESCENT CANOPY',
    temperature: '18°C — 24°C (Misty & Cool)',
    trailCondition: 'Gushing stream crossings, slippery basalt rock, heavy cloud cover',
    specialPhenomenon:
      '300+ seasonal waterfalls roar to life across Sahyadri walls. In the ancient sacred groves of Bhimashankar, bioluminescent Mycena chlorophos fungus makes entire forest floors glow neon emerald after dark.',
    keyFlora: [
      {
        name: 'Wild Cobra Lily',
        botanical: 'Arisaema tortuosum',
        description: 'Spectacular hooded forest flower rising amidst misty moss beds.',
      },
      {
        name: 'Tree Orchids',
        botanical: 'Dendrobium barbatulum',
        description: 'Delicate pale pink and white blooms hanging from lichen-encrusted teak branches.',
      },
      {
        name: 'Bioluminescent Fungi',
        botanical: 'Mycena chlorophos',
        description: 'Rare glowing mycelium that naturally radiates eerie green light in heavy rain.',
      },
    ],
    keyFauna: [
      {
        name: 'Malabar Gliding Frog',
        status: 'Endemic Amphibian',
        spottingChance: 'Very High (Streams)',
      },
      {
        name: 'Bamboo Pit Viper',
        status: 'Camouflaged Reptile',
        spottingChance: 'Moderate (Canopy branches)',
      },
      {
        name: 'Crested Hawk-Eagle',
        status: 'Apex Mountain Raptor',
        spottingChance: 'High (Circling thermals)',
      },
    ],
    recommendedTrips: ['kalsubai-highest-peak', 'secret-waterfall-trail', 'harishchandragad-cliff'],
    colorHex: '#10b981',
    accentHex: '#34d399',
    ambientTrack: 'rain',
  },
  {
    id: 'forest',
    seasonName: 'POST-MONSOON FLOWER BLOOM',
    hindiName: 'SHARAD RITU (शरद)',
    months: 'OCTOBER — NOVEMBER',
    headline: 'THE PURPLE KARVI BLOOM & CRYSTAL SAHYADRI RIDGES',
    temperature: '16°C — 28°C (Pleasantly Warm Days, Crisp Nights)',
    trailCondition: 'Firm terrain, lush waist-high wildflower plateaus, 100km horizon visibility',
    specialPhenomenon:
      'The legendary 7-year mass blooming of Strobilanthes callosa (Karvi) cloaks rugged volcanic cliffs in vivid lavender-purple. Sonki golden daisies blanket every fort plateau under sapphire blue skies.',
    keyFlora: [
      {
        name: 'Karvi Wildflower',
        botanical: 'Strobilanthes callosa',
        description: 'Endemic shrub that erupts in synchronised mass blooming, drawing wild honeybees.',
      },
      {
        name: 'Sonki Golden Daisy',
        botanical: 'Senecio bombayensis',
        description: 'Brilliant yellow daisies carpeting the high plateaus of Ratangad and Harishchandragad.',
      },
      {
        name: 'Pink Balsam',
        botanical: 'Impatiens lawii',
        description: 'Vibrant pink and violet petals dotting moisture-rich volcanic crevasses.',
      },
    ],
    keyFauna: [
      {
        name: 'Malabar Giant Squirrel (Shekru)',
        status: 'State Animal of Maharashtra',
        spottingChance: 'High (Dense canopies)',
      },
      {
        name: 'Indian Leopard',
        status: 'Elusive Big Cat',
        spottingChance: 'Pugmarks Common on Riverbeds',
      },
      {
        name: 'Great Pied Hornbill',
        status: 'Canopy Seed Disperser',
        spottingChance: 'Moderate (Ficus trees)',
      },
    ],
    recommendedTrips: ['ratangad-flower-valley', 'kalsubai-highest-peak', 'melghat-wildlife-safari'],
    colorHex: '#8b5cf6',
    accentHex: '#a78bfa',
    ambientTrack: 'breeze',
  },
  {
    id: 'dawn',
    seasonName: 'WINTER RIDGE EXPEDITIONS',
    hindiName: 'HEMANT & SHISHIR (शिशिर)',
    months: 'DECEMBER — FEBRUARY',
    headline: 'FROST, BONFIRES & UNBROKEN ORION NIGHT SKIES',
    temperature: '6°C — 22°C (Sub-Zero Ridge Winds, Crisp Sun)',
    trailCondition: 'Dry rocky trails, fast pacing, absolute zero haze for astrophotography',
    specialPhenomenon:
      'Reverse waterfall cloud inversions at Kokankada cliff. Stargazing without light pollution revealing the dense arms of the Milky Way, meteor showers, and frost coatings on Kalsubai steel ladders at dawn.',
    keyFlora: [
      {
        name: 'Himalayan Deodar Cedar',
        botanical: 'Cedrus deodara',
        description: 'Ancient fragrant conifers standing tall along misty Kumaon ridges.',
      },
      {
        name: 'Wild Rhododendron',
        botanical: 'Rhododendron arboreum',
        description: 'Deep crimson and scarlet winter flower buds preparing for spring bloom.',
      },
      {
        name: 'Silver Oak',
        botanical: 'Grevillea robusta',
        description: 'Towering rust-backed canopies filtering winter mountain sunshine.',
      },
    ],
    keyFauna: [
      {
        name: 'Himalayan Monal',
        status: 'Iridescent Mountain Pheasant',
        spottingChance: 'Moderate (Alpine slopes)',
      },
      {
        name: 'Indian Porcupine',
        status: 'Nocturnal Forager',
        spottingChance: 'High (Around night camps)',
      },
      {
        name: 'Steppe Eagle',
        status: 'Migratory Raptor',
        spottingChance: 'High (High cliff perches)',
      },
    ],
    recommendedTrips: ['nainital-kumaon-mountains', 'harishchandragad-cliff', 'kalsubai-highest-peak'],
    colorHex: '#38bdf8',
    accentHex: '#7dd3fc',
    ambientTrack: 'breeze',
  },
  {
    id: 'starlight',
    seasonName: 'FIREFLY PRE-MONSOON',
    hindiName: 'GRISHMA / KAJWA (काजवा)',
    months: 'MAY — JUNE',
    headline: 'KAJWA MAHOTSAV: THE LIVING FOREST OF SYNCHRONIZED LIGHTS',
    temperature: '22°C — 32°C (Warm Evenings, Scent of First Rain)',
    trailCondition: 'Warm dry soil, midnight trail hikes, anticipation of first monsoon thunder',
    specialPhenomenon:
      'Millions of bioluminescent fireflies congregate on Terminalia bellerica trees in Bhandardara and Prabalmachi. The entire forest pulses in rhythm like a living constellation before monsoon rains arrive.',
    keyFlora: [
      {
        name: 'Mahua Tree',
        botanical: 'Madhuca longifolia',
        description: 'Sweet, edible blossoms falling at twilight, scenting the forest breeze.',
      },
      {
        name: 'Behada Forest Canopy',
        botanical: 'Terminalia bellirica',
        description: 'The preferred mating tree of millions of synchronised fireflies.',
      },
      {
        name: 'Night Jasmine (Parijat)',
        botanical: 'Nyctanthes arbor-tristis',
        description: 'Fragrant white and orange nocturnal flowers carpeting camp trails at dawn.',
      },
    ],
    keyFauna: [
      {
        name: 'Bioluminescent Firefly',
        status: 'Synchronised Lampyridae',
        spottingChance: 'Millions in May & June',
      },
      {
        name: 'Indian Flying Fox',
        status: 'Large Fruit Bat',
        spottingChance: 'High (Dusk flights)',
      },
      {
        name: 'Jungle Nightjar',
        status: 'Nocturnal Trail Bird',
        spottingChance: 'Commonly heard clicking at night',
      },
    ],
    recommendedTrips: ['kalsubai-highest-peak', 'ratangad-flower-valley', 'secret-waterfall-trail'],
    colorHex: '#e5a93c',
    accentHex: '#f59e0b',
    ambientTrack: 'fire',
  },
];

export function SeasonalAlmanac({ onExploreJourneys }: SeasonalAlmanacProps) {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const currentSeason = ALMANAC_DATA[selectedSeasonIndex];

  const seasonIcons = [CloudRain, Flower2, Snowflake, Sparkles];

  return (
    <section id="almanac" className="relative py-28 sm:py-36 overflow-hidden bg-[#0a120d] border-t border-[#1a3828]">
      {/* Background Topographic Contours */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
          </filter>
          <g filter="url(#distort)" stroke="#22c55e" strokeWidth="0.75" fill="none">
            <circle cx="20%" cy="30%" r="280" />
            <circle cx="80%" cy="70%" r="350" />
            <circle cx="50%" cy="50%" r="420" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#142e20] border border-[#235338] text-xs font-semibold text-emerald-400 uppercase tracking-[0.25em] mb-4">
            <Flower2 className="w-3.5 h-3.5" />
            <span>NATURE ALMANAC // PHENOLOGY GUIDE</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#f4f5f0] uppercase leading-[1.08]">
            THE LIVING SEASONS OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#e5a93c]">
              THE SAHYADRIS & HIMALAYAS.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            The mountains are never static. Explore how wild flora, elusive fauna, and atmospheric
            phenomena transform our expedition corridors across the four natural cycles of India.
          </p>
        </div>

        {/* Interactive Season Tabs Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {ALMANAC_DATA.map((season, idx) => {
            const Icon = seasonIcons[idx];
            const isSelected = selectedSeasonIndex === idx;

            return (
              <button
                key={season.seasonName}
                type="button"
                onClick={() => setSelectedSeasonIndex(idx)}
                className={`group flex items-center gap-3 px-5 sm:px-6 py-3.5 rounded-2xl sm:rounded-full border transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#153123] border-emerald-500/80 text-white shadow-xl scale-105'
                    : 'bg-[#0e1f16]/70 hover:bg-[#132a1e] border-[#1d3d2c] text-stone-400 hover:text-stone-200'
                }`}
              >
                <Icon
                  className="w-4 h-4 transition-transform group-hover:scale-110"
                  style={{ color: isSelected ? season.colorHex : undefined }}
                />
                <div className="text-left">
                  <div className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase">
                    {season.seasonName}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
                    {season.months}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Season Dossier */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSeason.seasonName}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl bg-[#0e1c15]/90 border border-[#1f3f2d] p-6 sm:p-10 shadow-2xl backdrop-blur-md"
          >
            {/* Top Banner Row: Headline & Weather */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#1f3f2d]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-expedition text-xs uppercase tracking-[0.25em] font-semibold"
                    style={{ color: currentSeason.colorHex }}
                  >
                    {currentSeason.hindiName}
                  </span>
                  <span className="text-stone-600">•</span>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
                    {currentSeason.months}
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {currentSeason.headline}
                </h3>
              </div>

              {/* Weather & Trail Condition Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#14291d] border border-[#234d36] text-xs text-stone-200">
                  <Thermometer className="w-4 h-4 text-emerald-400" />
                  <span>{currentSeason.temperature}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#14291d] border border-[#234d36] text-xs text-stone-200">
                  <Compass className="w-4 h-4 text-[#e5a93c]" />
                  <span>{currentSeason.trailCondition}</span>
                </div>
              </div>
            </div>

            {/* Special Mountain Phenomenon Callout */}
            <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#13281d] border border-[#234c36] flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-300 block mb-1">
                  NATURAL PHENOMENON OF THIS CYCLE:
                </span>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  {currentSeason.specialPhenomenon}
                </p>
              </div>
            </div>

            {/* Flora & Fauna Bento Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Flora Column */}
              <div className="p-6 rounded-2xl bg-[#09150e]/80 border border-[#1b3828]">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                  <Flower2 className="w-4 h-4" />
                  <span>Wild Botanical Indicators (Flora)</span>
                </div>

                <div className="space-y-4">
                  {currentSeason.keyFlora.map((flora) => (
                    <div key={flora.name} className="pb-3 border-b border-[#183324] last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between">
                        <span className="font-heading font-bold text-sm text-stone-100">{flora.name}</span>
                        <span className="text-[11px] font-serif italic text-emerald-400/80">
                          {flora.botanical}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 font-light mt-1">{flora.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fauna Column */}
              <div className="p-6 rounded-2xl bg-[#09150e]/80 border border-[#1b3828]">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#e5a93c] mb-4">
                  <Eye className="w-4 h-4" />
                  <span>Wildlife Sightings & Ethology (Fauna)</span>
                </div>

                <div className="space-y-4">
                  {currentSeason.keyFauna.map((fauna) => (
                    <div key={fauna.name} className="pb-3 border-b border-[#183324] last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between">
                        <span className="font-heading font-bold text-sm text-stone-100">{fauna.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#172f21] text-emerald-300 font-mono">
                          {fauna.spottingChance}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 font-light mt-1">Status: {fauna.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Recommendation Action */}
            <div className="mt-8 pt-6 border-t border-[#1f3f2d] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>All seasonal departures follow Leave No Trace Level 3 wildlife protocols.</span>
              </div>

              {onExploreJourneys && (
                <button
                  type="button"
                  onClick={onExploreJourneys}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b3d2b] hover:bg-[#235038] text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-500/30 transition-all hover:scale-102"
                >
                  <span>SEE DEPARTURES FOR THIS CYCLE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
