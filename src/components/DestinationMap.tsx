import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, MapPin, ArrowRight, Mountain, Calendar, Sparkles } from 'lucide-react';
import { DESTINATION_REGIONS } from '../data/mockData';
import { DestinationRegion } from '../types';

interface DestinationMapProps {
  onSelectRegion: (regionId: string) => void;
}

export function DestinationMap({ onSelectRegion }: DestinationMapProps) {
  const [activeRegion, setActiveRegion] = useState<DestinationRegion>(DESTINATION_REGIONS[0]);

  return (
    <section id="destinations" className="relative py-24 sm:py-32 bg-[#0a0d0c] overflow-hidden border-t border-stone-800/40">
      {/* Background Topographic Contour & Grid Styling */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#e5a93c_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPEDITION REGIONS OF INDIA</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#f4f5f0] uppercase">
              WHERE DO YOU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] to-[#f5b84c]">
                WANT TO GO?
              </span>
            </h2>
          </div>

          <p className="font-expedition text-stone-400 text-sm sm:text-base max-w-md tracking-wider">
            "Your next story is somewhere out there."
            <span className="block text-xs text-stone-500 font-sans tracking-normal mt-1">
              Select an expedition sector on the topographic cartography below to inspect trails and elevations.
            </span>
          </p>
        </div>

        {/* Expedition Map Canvas & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111613]/70 border border-stone-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Subtle Expedition Compass Rose Watermark */}
          <div className="absolute top-6 right-6 opacity-10 pointer-events-none hidden sm:block">
            <Compass className="w-44 h-44 text-[#e5a93c] stroke-[0.8]" />
          </div>

          {/* Left / Top: Interactive Stylized Vector Expedition Map */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center bg-[#0d120f]/90 rounded-2xl border border-stone-800/60 p-4 sm:p-6 overflow-hidden">
            {/* Topographic Contours (Expedition aesthetic) */}
            <svg
              viewBox="0 0 500 560"
              className="w-full h-full max-h-[500px] select-none pointer-events-none stroke-stone-700/40"
              fill="none"
            >
              {/* Latitude / Longitude lines */}
              <line x1="50" y1="100" x2="450" y2="100" strokeDasharray="3 3" stroke="#25312a" />
              <line x1="50" y1="220" x2="450" y2="220" strokeDasharray="3 3" stroke="#25312a" />
              <line x1="50" y1="360" x2="450" y2="360" strokeDasharray="3 3" stroke="#25312a" />
              <line x1="50" y1="480" x2="450" y2="480" strokeDasharray="3 3" stroke="#25312a" />
              <line x1="160" y1="40" x2="160" y2="520" strokeDasharray="3 3" stroke="#25312a" />
              <line x1="300" y1="40" x2="300" y2="520" strokeDasharray="3 3" stroke="#25312a" />

              {/* Stylized Abstract India Subcontinent Outline */}
              <path
                d="M 190 60 
                   Q 210 50, 230 65 
                   L 250 85 
                   Q 275 110, 310 120 
                   L 370 140 
                   Q 410 145, 430 160 
                   L 440 180 
                   Q 410 200, 370 200 
                   L 330 220 
                   Q 330 270, 310 330 
                   L 260 440 
                   Q 230 500, 220 530 
                   Q 210 500, 190 440 
                   L 155 350 
                   Q 135 290, 140 240 
                   L 115 220 
                   Q 110 170, 130 140 
                   Z"
                fill="#131b16"
                stroke="#2f3d35"
                strokeWidth="2"
              />

              {/* Himalayan Mountain Ridge Range Arch */}
              <path
                d="M 180 80 Q 250 115, 360 140"
                stroke="#e5a93c"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Western Ghats Mountain Chain */}
              <path
                d="M 150 250 Q 165 370, 205 470"
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.5"
              />

              {/* Elevation contour ripples */}
              <ellipse cx="205" cy="305" rx="55" ry="40" stroke="#1d2721" strokeWidth="1.5" />
              <ellipse cx="205" cy="305" rx="90" ry="70" stroke="#18211b" strokeWidth="1" />
              <ellipse cx="240" cy="120" rx="45" ry="25" stroke="#1d2721" strokeWidth="1.5" />
            </svg>

            {/* Interactive Map Region Markers */}
            <div className="absolute inset-0">
              {DESTINATION_REGIONS.map((region) => {
                const isSelected = activeRegion.id === region.id;
                return (
                  <div
                    key={region.id}
                    style={{ left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveRegion(region)}
                      data-cursor="DISCOVER"
                      className="group relative flex items-center justify-center p-2 focus:outline-hidden"
                      aria-label={`Select ${region.name}`}
                    >
                      {/* Animated radar sonar rings */}
                      {isSelected && (
                        <>
                          <span className="animate-ping absolute w-8 h-8 rounded-full bg-[#e5a93c] opacity-50" />
                          <span className="animate-pulse absolute w-12 h-12 rounded-full border border-[#e5a93c]/50" />
                        </>
                      )}

                      {/* Center pin node */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                          isSelected
                            ? 'bg-[#e5a93c] text-[#0a0d0c] scale-125'
                            : 'bg-stone-900 border border-stone-600 text-[#e5a93c] hover:border-[#e5a93c] hover:scale-110'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>

                      {/* Region Tag Floating on Marker */}
                      <span
                        className={`absolute left-8 whitespace-nowrap text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-sm transition-all duration-200 uppercase ${
                          isSelected
                            ? 'bg-[#0a0d0c] text-[#e5a93c] border border-[#e5a93c]/60 shadow-lg'
                            : 'bg-[#0a0d0c]/80 text-stone-300 border border-stone-800 group-hover:text-white'
                        }`}
                      >
                        {region.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Coordinates legend overlay */}
            <div className="absolute bottom-3 left-4 font-mono text-[9px] text-stone-500 tracking-widest uppercase">
              LAT 8°4'N – 37°6'N • LON 68°7'E – 97°25'E // SURVEY SECTORS
            </div>
          </div>

          {/* Right / Bottom: Selected Destination Inspector Card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Sector Badge & Journeys Count */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest text-[#e5a93c] uppercase">
                    SECTOR // {activeRegion.state}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-xs font-semibold text-stone-300">
                    {activeRegion.journeysCount} ACTIVE EXPEDITIONS
                  </span>
                </div>

                {/* Region Image with cinematic aspect */}
                <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden border border-stone-800 group">
                  <img
                    src={activeRegion.image}
                    alt={activeRegion.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest text-stone-400 uppercase font-mono">
                        {activeRegion.tag}
                      </span>
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase leading-none">
                        {activeRegion.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-300 text-sm leading-relaxed">
                  {activeRegion.description}
                </p>

                {/* Technical specs grid */}
                <div className="grid grid-cols-2 gap-3 py-2 border-y border-stone-800/80 font-mono text-xs">
                  <div className="flex items-center gap-2 text-stone-400">
                    <Mountain className="w-4 h-4 text-[#e5a93c]" />
                    <span>ELEVATION: {activeRegion.elevation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <Calendar className="w-4 h-4 text-[#e5a93c]" />
                    <span>SEASON: {activeRegion.bestSeason}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => onSelectRegion(activeRegion.id)}
                  data-cursor="EXPEDITIONS"
                  className="w-full group inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-[#e5a93c]/20"
                >
                  <span>EXPLORE {activeRegion.name} JOURNEYS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
