import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { COMMUNITY_STATS } from '../data/mockData';
import { Users, Mountain, Compass, HeartHandshake } from 'lucide-react';

export function CommunityMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });
  const [counts, setCounts] = useState<number[]>(COMMUNITY_STATS.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // easeOutQuad
      const eased = progress * (2 - progress);

      setCounts(
        COMMUNITY_STATS.map((stat) => Math.floor(stat.value * eased))
      );

      if (step >= steps) {
        clearInterval(timer);
        setCounts(COMMUNITY_STATS.map((stat) => stat.value));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative py-28 sm:py-36 bg-[#080b09] text-[#f4f5f0] overflow-hidden border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>THE CIRCLE OF EXPLORERS</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95]">
            TRAVEL ALONE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] to-[#f5b84c]">
              RETURN WITH A COMMUNITY.
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 font-expedition text-xs sm:text-sm tracking-[0.22em] text-[#d8cebe] uppercase">
            <span>TREKKERS</span>
            <span>•</span>
            <span>TRAVELERS</span>
            <span>•</span>
            <span>PHOTOGRAPHERS</span>
            <span>•</span>
            <span>ADVENTURE SEEKERS</span>
          </div>
        </div>

        {/* Counter Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-8 rounded-2xl bg-[#0e1410]/80 border border-stone-800/80 text-center flex flex-col justify-center items-center hover:border-stone-700 transition-colors"
            >
              <div className="font-heading font-black text-4xl sm:text-6xl text-[#e5a93c] leading-none mb-2">
                {counts[idx].toLocaleString()}
                <span className="text-2xl sm:text-3xl font-light text-stone-400">{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#f4f5f0] uppercase">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-400 mt-1 font-light">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
