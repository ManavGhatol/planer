import { motion } from 'motion/react';
import { Compass, Sparkles, Feather } from 'lucide-react';

export function BrandPhilosophy() {
  return (
    <section id="philosophy" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#070908] text-[#f4f5f0] border-t border-stone-800/60">
      {/* Giant Background Photograph with Deep Cinematic Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85"
          alt="Atmospheric mountain ridge wilderness"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.25]"
          loading="lazy"
        />
      </div>

      {/* Atmospheric Vignette & Film Grain */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c] via-transparent to-[#0a0d0c]/90 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d0c]/90 via-transparent to-[#0a0d0c]/90 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none z-1" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14291e]/90 border border-[#234331] text-[10px] font-bold tracking-[0.3em] text-[#e5a93c] uppercase mb-8"
        >
          <Feather className="w-3.5 h-3.5" />
          <span>OUR EXPEDITION ETHOS</span>
        </motion.div>

        {/* Big Impact Statements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="space-y-4"
        >
          <h2 className="font-heading font-black text-4xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.95] text-stone-400">
            THIS IS NOT <br />
            <span className="line-through decoration-stone-600">TOURISM.</span>
          </h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-heading font-black text-4xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-[#f4f5f0] via-[#e5a93c] to-[#f5b84c]"
          >
            THIS IS EXPERIENCE.
          </motion.h3>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 font-expedition text-base sm:text-2xl md:text-3xl tracking-[0.12em] text-[#d8cebe] max-w-3xl mx-auto uppercase leading-snug"
        >
          "We don't just take you to places. We take you into moments worth remembering."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light"
        >
          No packaged souvenir shops. No loudspeakers. Just the smell of wet mountain earth, the crackle of campfire embers, and trails known only to mountain tribes.
        </motion.p>
      </div>
    </section>
  );
}
