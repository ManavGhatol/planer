import { useState } from 'react';
import { motion } from 'motion/react';
import { TRAVELER_STORIES } from '../data/mockData';
import { Quote, Star, MapPin, Calendar, Compass, ArrowLeft, ArrowRight } from 'lucide-react';

export function StoriesFromTrail() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % TRAVELER_STORIES.length);
  };

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + TRAVELER_STORIES.length) % TRAVELER_STORIES.length);
  };

  const current = TRAVELER_STORIES[activeIndex];

  return (
    <section id="stories" className="relative py-28 sm:py-36 bg-[#0a0d0c] text-[#f4f5f0] overflow-hidden border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>VOICES FROM THE MOUNTAINS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95]">
              STORIES FROM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] to-[#f5b84c]">
                THE TRAIL.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevStory}
              data-cursor="PREV"
              aria-label="Previous traveler story"
              className="w-12 h-12 rounded-full bg-stone-900 border border-stone-700 hover:border-[#e5a93c] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextStory}
              data-cursor="NEXT"
              aria-label="Next traveler story"
              className="w-12 h-12 rounded-full bg-stone-900 border border-stone-700 hover:border-[#e5a93c] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111713] border border-stone-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
            <Quote className="w-36 h-36 text-[#e5a93c]" />
          </div>

          {/* Left Avatar & Explorer Details */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#e5a93c]/80 shadow-xl">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl text-white uppercase">
                {current.author}
              </h3>
              <p className="text-stone-400 text-xs font-mono">
                {current.authorRole}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-2 text-[#e5a93c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800/80 w-full text-xs font-mono text-stone-400 space-y-1">
              <div>EXPEDITION: <strong className="text-stone-200">{current.destination}</strong></div>
              <div>DATE: {current.trekDate}</div>
            </div>
          </div>

          {/* Right Quotation & Experience Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-expedition text-xl sm:text-2xl md:text-3xl tracking-[0.08em] text-[#d8cebe] uppercase leading-snug">
              "{current.quote}"
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              {current.fullStory}
            </p>

            {/* Micro indicators */}
            <div className="flex items-center gap-2 pt-4">
              {TRAVELER_STORIES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-[#e5a93c]' : 'w-2 bg-stone-700'
                  }`}
                  aria-label={`Go to story ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
