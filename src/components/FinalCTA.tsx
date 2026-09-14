import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onStartJourney: () => void;
  onExploreDestinations: () => void;
}

export function FinalCTA({ onStartJourney, onExploreDestinations }: FinalCTAProps) {
  return (
    <section className="relative py-32 sm:py-44 bg-[#080b09] text-[#f4f5f0] overflow-hidden border-t border-stone-800/80">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85"
          alt="Sahyadri mountain sunset and misty valleys"
          className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.2] scale-105"
          loading="lazy"
        />
      </div>

      {/* Gradients & Film Grain */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080b09] via-transparent to-[#080b09] pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080b09]/85 via-transparent to-[#080b09]/85 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none z-1" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14291e]/90 border border-[#234331] text-[10px] font-bold tracking-[0.3em] text-[#e5a93c] uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR EXPEDITION AWAITS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-heading font-black text-4xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.95]"
        >
          THE WILD IS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4f5f0] via-[#e5a93c] to-[#f5b84c]">
            WAITING.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-expedition text-xl sm:text-3xl tracking-[0.2em] text-[#d8cebe] uppercase mt-6"
        >
          ARE YOU READY?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            type="button"
            onClick={onStartJourney}
            data-cursor="EXPEDITION"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-black text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl hover:shadow-[#e5a93c]/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={onExploreDestinations}
            data-cursor="DESTINATIONS"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white font-bold text-xs sm:text-sm tracking-[0.18em] uppercase border border-stone-700/80 backdrop-blur-md transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-[#e5a93c]" />
            <span>EXPLORE ALL DESTINATIONS</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
