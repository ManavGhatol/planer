import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WHY_FEATURES } from '../data/mockData';
import { Shield, Sparkles, ArrowUpRight } from 'lucide-react';

export function WhyParikrama() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeImage = hoveredIndex !== null ? WHY_FEATURES[hoveredIndex].image : WHY_FEATURES[0].image;

  return (
    <section className="relative py-28 sm:py-36 bg-[#090d0b] text-[#f4f5f0] overflow-hidden border-t border-stone-800/60">
      {/* Background Dynamic Photography Reveal on Hover */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700">
        <img
          src={activeImage}
          alt="Parikrama expeditions background"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-125 transition-all duration-700 scale-105"
        />
        <div className="absolute inset-0 bg-[#090d0b]/80 backdrop-blur-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>EXPEDITION STANDARDS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
            WHY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] to-[#f5b84c]">
              PARIKRAMA?
            </span>
          </h2>
        </div>

        {/* Numbered Editorial Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_FEATURES.map((feature, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={feature.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-cursor="STANDARD"
                className={`group relative p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[280px] ${
                  isHovered
                    ? 'bg-[#14291e]/80 border-[#e5a93c] shadow-2xl scale-[1.02]'
                    : 'bg-[#101612]/60 border-stone-800/80 hover:border-stone-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-2xl font-bold transition-colors ${
                        isHovered ? 'text-[#e5a93c]' : 'text-stone-600'
                      }`}
                    >
                      {feature.number}
                    </span>
                    <span
                      className={`text-xs transition-colors ${
                        isHovered ? 'text-[#e5a93c]' : 'text-stone-700'
                      }`}
                    >
                      // STANDARD
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white uppercase group-hover:text-[#e5a93c] transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-expedition text-xs tracking-wider text-[#d8cebe]/80 uppercase mt-1">
                    {feature.subtitle}
                  </p>

                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mt-4">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between text-[11px] font-mono text-stone-500 group-hover:text-stone-300 transition-colors">
                  <span>EXPEDITION PROTOCOL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#e5a93c]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
