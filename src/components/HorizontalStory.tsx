import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Compass, Sparkles, Clock, Mountain } from 'lucide-react';
import { HORIZONTAL_MOMENTS } from '../data/mockData';

export function HorizontalStory() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = HORIZONTAL_MOMENTS.length;
  const currentMoment = HORIZONTAL_MOMENTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard left/right navigation when in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="moments" className="relative py-28 sm:py-36 bg-[#080b09] text-[#f4f5f0] overflow-hidden border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>THE EXPEDITION TIMELINE</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.95]">
              ONE JOURNEY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] via-[#f4f5f0] to-[#d8cebe]">
                MANY MOMENTS.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-widest text-stone-400">
              <strong className="text-[#e5a93c] text-lg font-bold">0{currentIndex + 1}</strong> / 0{total}
            </span>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                data-cursor="PREV"
                aria-label="Previous expedition moment"
                className="w-12 h-12 rounded-full bg-stone-900 border border-stone-700 hover:border-[#e5a93c] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                data-cursor="NEXT"
                aria-label="Next expedition moment"
                className="w-12 h-12 rounded-full bg-stone-900 border border-stone-700 hover:border-[#e5a93c] flex items-center justify-center text-stone-300 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Stage Indicators */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {HORIZONTAL_MOMENTS.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                currentIndex === idx
                  ? 'bg-[#14291e] border border-[#234331] text-[#e5a93c] font-bold shadow-md'
                  : 'bg-stone-900/60 border border-stone-800 text-stone-500 hover:text-stone-300'
              }`}
            >
              <span>{m.stage}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Full-Width Cinematic Viewport */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[550px] sm:h-[620px] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-[#0a0d0c]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMoment.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {/* Cinematic Full Photography */}
              <img
                src={currentMoment.image}
                alt={currentMoment.title}
                className="w-full h-full object-cover filter brightness-[0.75] contrast-110"
              />

              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c] via-[#0a0d0c]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d0c]/80 via-transparent to-transparent hidden md:block" />

              {/* Technical Telemetry Badges Top Left & Right */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-md bg-[#0a0d0c]/85 border border-stone-700/80 backdrop-blur-md font-mono text-xs text-[#e5a93c] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentMoment.time}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-md bg-[#0a0d0c]/85 border border-stone-700/80 backdrop-blur-md font-mono text-xs text-stone-300 flex items-center gap-2">
                    <Mountain className="w-3.5 h-3.5" />
                    <span>ALT // {currentMoment.altitude}</span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-md bg-[#14291e]/90 border border-[#234331] font-mono text-xs tracking-widest text-[#e5a93c] uppercase backdrop-blur-md">
                  {currentMoment.stage}
                </div>
              </div>

              {/* Story Narrative Overlay Bottom */}
              <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-10 max-w-2xl">
                <span className="font-expedition text-xs sm:text-sm tracking-[0.25em] text-[#d8cebe] uppercase">
                  {currentMoment.subtitle}
                </span>
                <h3 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mt-1 leading-none">
                  {currentMoment.title}
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-4 font-light">
                  {currentMoment.description}
                </p>

                {/* Progress bar line */}
                <div className="w-full bg-stone-800/80 h-1 rounded-full mt-6 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#e5a93c]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
