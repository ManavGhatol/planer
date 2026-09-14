import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Shield, Mountain, Flame, ChevronDown, Leaf, Trees, Droplets } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { useNatureTheme } from '../context/NatureThemeContext';

interface HeroProps {
  onExploreJourneys: () => void;
  onPlanAdventure: () => void;
}

export function Hero({ onExploreJourneys, onPlanAdventure }: HeroProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { themeConfig, mood } = useNatureTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-1000">
      {/* Background with Slow Cinematic Zoom & Subtle Mouse Parallax */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        animate={{
          x: mouseOffset.x,
          y: mouseOffset.y,
          scale: [1.02, 1.08, 1.02],
        }}
        transition={{
          scale: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.8, ease: 'easeOut' },
          y: { duration: 0.8, ease: 'easeOut' },
        }}
      >
        {/* High-res cinematic Indian Sahyadri / Himalayan wilderness visual */}
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=90"
          alt="Sahyadri mist and Indian mountain trekking wilderness"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.12]"
          loading="eager"
        />
      </motion.div>

      {/* Floating moving clouds / mist layer */}
      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-40 bg-gradient-to-t from-transparent via-stone-300/10 to-transparent animate-fog"
        style={{ filter: 'blur(30px)' }}
      />

      {/* Second drifting fog band */}
      <div
        className="absolute bottom-0 left-[-20%] right-[-20%] h-96 z-1 pointer-events-none opacity-30 bg-radial from-stone-200/20 via-transparent to-transparent animate-pulse-slow"
      />

      {/* Nature Atmosphere Mood Gradient Tint */}
      <div
        className="absolute inset-0 z-1 pointer-events-none transition-colors duration-1000 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${themeConfig.accentGlow}, transparent 70%)`,
        }}
      />

      {/* Dark Cinematic Vignette & Gradients */}
      <div className="absolute inset-0 z-2 bg-gradient-to-t from-[#09130e] via-[#0a1510]/50 to-[#08100c]/75 pointer-events-none" />
      <div className="absolute inset-0 z-2 bg-gradient-to-r from-[#09130e]/80 via-transparent to-[#09130e]/80 pointer-events-none" />
      <div className="absolute inset-0 z-2 bg-grain pointer-events-none opacity-60" />

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-24 flex flex-col items-center">
        {/* Eco-Certified Nature Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full bg-[#11271b]/90 border border-[#214b34] backdrop-blur-md mb-6 shadow-lg"
        >
          <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
            <Leaf className="w-3.5 h-3.5 animate-leaf" />
          </span>
          <span className="font-expedition text-[11px] sm:text-xs tracking-[0.25em] text-[#dceee2] uppercase font-semibold">
            PARIKRAMA • {BRAND_INFO.tagline}
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="hidden sm:inline-block text-[10px] text-emerald-300/90 tracking-widest uppercase font-mono">
            {themeConfig.name}
          </span>
        </motion.div>

        {/* Main Headline: ESCAPE THE ORDINARY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#f4f5f0] leading-[1.05] uppercase">
            ESCAPE THE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4f5f0] via-[#c7e4d1] to-[#34d399]">
              ORDINARY.
            </span>
          </h1>
        </motion.div>

        {/* Secondary Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
          className="font-expedition text-xs sm:text-sm md:text-base tracking-[0.28em] text-[#c9e1d2] uppercase mt-6 sm:mt-8 max-w-2xl mx-auto"
        >
          TRAILS • TREKS • CAMPS • WILDERNESS • STORIES
        </motion.p>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="text-stone-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-4 font-light leading-relaxed"
        >
          Untamed peaks of the Western Ghats to misty Himalayan ridges. Eco-conscious, small-group expeditions crafted to heal the trails we tread.
        </motion.p>

        {/* Nature-friendly Quick Guarantee Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6 text-[11px] sm:text-xs text-stone-300"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12281d]/80 border border-[#204933]">
            <Trees className="w-3.5 h-3.5 text-emerald-400" />
            <span>1 Nomad = 1 Native Tree</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12281d]/80 border border-[#204933]">
            <Droplets className="w-3.5 h-3.5 text-sky-400" />
            <span>100% Plastic-Free Trails</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12281d]/80 border border-[#204933]">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Leave No Trace Certified</span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-9 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={onExploreJourneys}
            data-cursor="EXPEDITION"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-[#09150e] font-black text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#22c55e]/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>EXPLORE THE JOURNEY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={onPlanAdventure}
            data-cursor="PLAN"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#11241a]/90 hover:bg-[#173224] text-stone-200 hover:text-white font-bold text-xs sm:text-sm tracking-[0.18em] uppercase border border-[#234b36] backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:scale-[1.02]"
          >
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>PLAN YOUR ADVENTURE</span>
          </button>
        </motion.div>

        {/* Key expedition pillars summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="grid grid-cols-3 gap-4 sm:gap-10 mt-14 pt-8 border-t border-[#1b3d2b]/80 max-w-xl w-full"
        >
          <div className="flex flex-col items-center text-center">
            <span className="font-heading font-black text-xl sm:text-2xl text-emerald-400">4,860+</span>
            <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider mt-0.5">Trees Planted</span>
          </div>
          <div className="flex flex-col items-center text-center border-x border-[#1b3d2b]/80 px-2">
            <span className="font-heading font-black text-xl sm:text-2xl text-[#f4f5f0]">14-18</span>
            <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider mt-0.5">Max Small Batches</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-heading font-black text-xl sm:text-2xl text-amber-400">0 Trace</span>
            <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider mt-0.5">Ecological Ethos</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const mapSection = document.getElementById('destinations');
          mapSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-expedition text-[10px] tracking-[0.3em] text-emerald-400/80 uppercase">
          ↓ ENTER THE WILD
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-emerald-600/50 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-emerald-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
