import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Clock, MapPin, ShieldCheck, Flame, Compass, Leaf, Trees, Droplets } from 'lucide-react';
import { FEATURED_JOURNEYS } from '../data/mockData';
import { Journey } from '../types';

interface FeaturedJourneysProps {
  onSelectJourney: (journey: Journey) => void;
  onBookJourney: (journey: Journey) => void;
  selectedCategory?: string;
}

export function FeaturedJourneys({ onSelectJourney, onBookJourney }: FeaturedJourneysProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterOptions = ['ALL', 'SAHYADRI TREKS', 'HIMALAYAN TRAILS', 'WILDLIFE SAFARI', 'WATERFALLS'];

  const filteredJourneys = FEATURED_JOURNEYS.filter((journey) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'SAHYADRI TREKS') return journey.region.includes('Western Ghats') || journey.region.includes('Sahyadri');
    if (activeFilter === 'HIMALAYAN TRAILS') return journey.region.includes('Himalayas');
    if (activeFilter === 'WILDLIFE SAFARI') return journey.category === 'Safari';
    if (activeFilter === 'WATERFALLS') return journey.category === 'Waterfall';
    return true;
  });

  return (
    <section id="journeys" className="relative py-28 sm:py-36 bg-[#0a0d0c] text-[#f4f5f0] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#14291e]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>CURATED INDIAN EXPEDITIONS</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
              YOUR NEXT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4f5f0] via-[#d8cebe] to-[#e5a93c]">
                ADVENTURE.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                data-cursor="SELECT"
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#e5a93c] text-[#0a0d0c] shadow-md'
                    : 'bg-stone-900/90 text-stone-400 hover:text-white border border-stone-800 hover:border-stone-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Panels (Not tiny cards - Dominant photography) */}
        <div className="space-y-16 sm:space-y-24">
          {filteredJourneys.map((journey, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#0f1411] border border-stone-800/80 rounded-3xl overflow-hidden shadow-2xl hover:border-stone-700 transition-all duration-500"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Visual Photography Panel (Dominates 7/12 columns on desktop) */}
                  <div
                    className={`lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden ${
                      isEven ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <img
                      src={journey.heroImage}
                      alt={journey.title}
                      className="w-full h-full object-cover object-center filter brightness-90 contrast-115 group-hover:scale-105 transition-transform duration-1000 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlays for Cinematic Mood */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1411] via-transparent to-transparent lg:hidden" />
                    <div
                      className={`absolute inset-0 hidden lg:block ${
                        isEven
                          ? 'bg-gradient-to-r from-transparent via-transparent to-[#0f1411]'
                          : 'bg-gradient-to-l from-transparent via-transparent to-[#0f1411]'
                      }`}
                    />

                    {/* Badges Floating on Image */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#0a0d0c]/80 backdrop-blur-md border border-stone-700/80 text-[10px] font-mono tracking-widest text-[#e5a93c] uppercase">
                          {journey.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-700/80 text-[10px] font-semibold text-stone-300 uppercase">
                          {journey.difficulty}
                        </span>
                      </div>

                      {journey.seatsLeft <= 4 && (
                        <div className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/70 text-amber-300 font-mono text-[10px] tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span>ONLY {journey.seatsLeft} SEATS LEFT</span>
                        </div>
                      )}
                    </div>

                    {/* Altitude & Location Watermark Bottom Left + Eco Score Bottom Right */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between gap-3">
                      <div className="px-3 py-1.5 rounded-lg bg-[#0a0d0c]/85 border border-stone-800 backdrop-blur-md text-xs font-mono text-stone-300">
                        ALT // {journey.altitude}
                      </div>

                      {journey.ecoScore && (
                        <div className="px-3 py-1.5 rounded-lg bg-[#0e2417]/90 border border-[#205136] backdrop-blur-md text-xs font-mono text-emerald-300 flex items-center gap-1.5 shadow-md">
                          <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="font-bold">{journey.ecoScore}%</span>
                          <span className="text-[10px] text-emerald-400/80 uppercase">Eco Score</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Editorial Text & Package Details Panel (5/12 columns) */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between ${
                      isEven ? 'order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Location & Duration Badges */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-400 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#e5a93c]" />
                          {journey.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-stone-300">
                          <Clock className="w-3.5 h-3.5 text-[#e5a93c]" />
                          {journey.duration}
                        </span>
                      </div>

                      {/* Main Title & Subtitle */}
                      <h3 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                        {journey.title}
                      </h3>
                      <p className="font-expedition text-xs sm:text-sm tracking-[0.2em] text-[#d8cebe] uppercase mt-1">
                        "{journey.subtitle}"
                      </p>

                      {/* Description */}
                      <p className="text-stone-300 text-sm leading-relaxed mt-4 line-clamp-3">
                        {journey.description}
                      </p>

                      {/* Eco Impact & Wildlife Highlights */}
                      {(journey.treesPlanted || journey.floraFauna) && (
                        <div className="mt-5 p-3 rounded-2xl bg-[#0c1a13] border border-[#1d3d2c] flex flex-col gap-2">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                              <Trees className="w-3.5 h-3.5" />
                              <span>{journey.treesPlanted} Native Trees Planted</span>
                            </div>
                            {journey.plasticSaved && (
                              <div className="flex items-center gap-1 text-sky-400 font-medium">
                                <Droplets className="w-3 h-3" />
                                <span>~{journey.plasticSaved} Bottles Prevented</span>
                              </div>
                            )}
                          </div>
                          {journey.floraFauna && journey.floraFauna.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-[#173325]">
                              <span className="text-[10px] text-stone-400 uppercase tracking-wider font-mono">Wildlife:</span>
                              {journey.floraFauna.map((specimen, idx) => (
                                <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-[#132c1f] text-emerald-300 border border-[#214833]">
                                  {specimen}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Inclusions tags */}
                      <div className="mt-5 pt-4 border-t border-stone-800/80">
                        <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase block mb-2.5">
                          EXPEDITION INCLUSIONS
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-[11px] font-semibold text-stone-300">
                            TRANSPORTATION
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-[11px] font-semibold text-stone-300">
                            CAMPING
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-[11px] font-semibold text-stone-300">
                            MEALS
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-[11px] font-semibold text-stone-300">
                            GUIDES
                          </span>
                        </div>
                      </div>

                      {/* Available Next Slots */}
                      <div className="mt-4 flex items-center gap-2 text-xs text-stone-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#e5a93c]" />
                        <span>NEXT: <strong className="text-stone-200">{journey.availableDates[0]}</strong></span>
                      </div>
                    </div>

                    {/* Bottom Pricing & Action Section */}
                    <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block">
                          PACKAGE ALL-INCLUSIVE
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading font-black text-2xl sm:text-3xl text-[#e5a93c]">
                            ₹{journey.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-stone-400 font-medium uppercase">
                            / PERSON
                          </span>
                          {journey.originalPrice && (
                            <span className="text-xs text-stone-500 line-through">
                              ₹{journey.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => onSelectJourney(journey)}
                          data-cursor="DETAILS"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white font-bold text-xs tracking-wider uppercase border border-stone-700/80 transition-all"
                        >
                          <span>EXPLORE JOURNEY</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onBookJourney(journey)}
                          data-cursor="BOOK"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-black text-xs tracking-widest uppercase transition-all shadow-md hover:scale-[1.02]"
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
