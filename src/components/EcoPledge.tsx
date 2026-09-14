import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Trees,
  Droplets,
  Trash2,
  HeartHandshake,
  ShieldCheck,
  CheckCircle,
  Leaf,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { useNatureTheme } from '../context/NatureThemeContext';

interface EcoPledgeProps {
  onOpenBooking?: () => void;
}

export function EcoPledge({ onOpenBooking }: EcoPledgeProps) {
  const { themeConfig } = useNatureTheme();

  // Interactive calculator state
  const [trekDays, setTrekDays] = useState(4);
  const [travelers, setTravelers] = useState(2);
  const [pledged, setPledged] = useState(false);

  // Dynamic calculations
  const treesPlanted = travelers * Math.max(1, Math.floor(trekDays / 2));
  const plasticBottlesSaved = travelers * trekDays * 3;
  const wasteCleanedKg = (travelers * trekDays * 0.85).toFixed(1);
  const villageSupportInr = travelers * trekDays * 1250;

  const pillars = [
    {
      icon: Trees,
      title: '1 Nomad = 1 Native Tree',
      stat: '4,862+',
      label: 'Native Saplings Planted',
      description:
        'For every adventurer on our trails, we plant and nurture endemic saplings (Mahua, Banyan, Oak, Rhododendron) across Sahyadri and Kumaon wildlife corridors in partnership with tribal forest trusts.',
      accent: '#22c55e',
    },
    {
      icon: Droplets,
      title: '100% Zero Single-Use Plastic',
      stat: '64,200+',
      label: 'Single-Use Bottles Avoided',
      description:
        'All expeditions rely strictly on natural mountain spring water purified through portable high-flow Katadyn gravity filtration systems. Every explorer carries our reusable stainless steel expedition canteen.',
      accent: '#38bdf8',
    },
    {
      icon: Trash2,
      title: '120% Trail Waste Retrieval',
      stat: '8,450 kg',
      label: 'Trail Waste Removed',
      description:
        'Leave No Trace is our baseline, not our ceiling. Our trek leaders and nomadic groups carry heavy-duty burlap bags to clear non-biodegradable debris left behind by unregulated commercial tourist herds.',
      accent: '#f59e0b',
    },
    {
      icon: HeartHandshake,
      title: 'Indigenous Tribal Livelihoods',
      stat: '85%',
      label: 'Of Trip Spending Stays Local',
      description:
        'We bypass urban middlemen. Your expedition fees directly sustain indigenous Thakkar, Mahadev Koli, and Korku tribal families who serve as our master naturalists, cooks, and wilderness guides.',
      accent: '#a855f7',
    },
  ];

  return (
    <section id="eco-pledge" className="relative py-28 sm:py-36 overflow-hidden border-t border-[#1a3828]/60">
      {/* Organic Topographic and Botanical Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M30 10 C20 30, 20 60, 40 80 C60 60, 60 30, 30 10 Z"
                fill="none"
                stroke="#22c55e"
                strokeWidth="0.8"
                opacity="0.35"
              />
              <path
                d="M80 50 C70 70, 70 100, 90 120 C110 100, 110 70, 80 50 Z"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.8"
                opacity="0.25"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Atmospheric Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-25 blur-[120px]"
        style={{ backgroundColor: themeConfig.accentHex }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#112a1d] border border-[#204933] text-xs font-semibold text-[#4ade80] uppercase tracking-[0.25em] mb-4 shadow-sm">
            <Leaf className="w-3.5 h-3.5" />
            <span>THE LIVING TRAIL // EARTH FIRST ETHOS</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#f4f5f0] uppercase leading-[1.08]">
            NATURE GIVES US WONDER. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#e5a93c]">
              WE LEAVE ONLY FOOTPRINTS.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-stone-300 font-light leading-relaxed">
            Parikrama is rooted in ancient ecological guardianship. We reject the extractive model of mass
            tourism. Every summit conquered must actively preserve the soil, the water, and the wildlife that
            sustains it.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-3xl bg-[#0f1d16]/80 hover:bg-[#14261d] border border-[#1e3c2c] hover:border-[#2d5c43] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: `${pillar.accent}18`, color: pillar.accent }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight block">
                    {pillar.stat}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mt-1">
                    {pillar.label}
                  </span>

                  <h3 className="font-heading font-bold text-base text-stone-100 mt-4 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1a3828] flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Eco-Standard
                  </span>
                  <span className="font-mono text-stone-500">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Eco-Trail Impact Calculator Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#102419] via-[#0d1c14] to-[#09150e] border border-[#234d36] shadow-2xl relative overflow-hidden">
          {/* Accent glow corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b3b29] text-xs font-semibold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE TRAIL FOOTPRINT CALCULATOR</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Calculate the Positive Ripple of Your Journey
              </h3>

              <p className="text-stone-300 text-sm font-light leading-relaxed">
                Move the sliders to simulate your planned expedition length and party size. See the exact
                environmental and community restoration your presence produces.
              </p>

              {/* Slider 1: Days */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-stone-300 uppercase tracking-wider">Days in Wilderness:</span>
                  <span className="text-emerald-400 font-mono text-sm">{trekDays} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={trekDays}
                  onChange={(e) => setTrekDays(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#1b3527] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-stone-500">
                  <span>1 Day (Micro-trek)</span>
                  <span>5 Days (Sahyadri Crossing)</span>
                  <span>10 Days (Himalayan Ridge)</span>
                </div>
              </div>

              {/* Slider 2: Travelers */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-stone-300 uppercase tracking-wider">Number of Adventurers:</span>
                  <span className="text-emerald-400 font-mono text-sm">{travelers} Nomads</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#1b3527] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-stone-500">
                  <span>Solo Explorer</span>
                  <span>Intimate Duo</span>
                  <span>Small Circle (8 max)</span>
                </div>
              </div>
            </div>

            {/* Right: Calculated Metrics Display */}
            <div className="lg:col-span-6 bg-[#09150e]/90 p-6 sm:p-8 rounded-2xl border border-[#1b3b29] flex flex-col justify-between">
              <span className="font-expedition text-xs text-stone-400 uppercase tracking-[0.2em] mb-4 block">
                YOUR EXPEDITION’S RESTORATION YIELD:
              </span>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#0f2117] border border-[#1f422e]">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-emerald-400 block">
                    {treesPlanted}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                    Native Trees Planted
                  </span>
                  <p className="text-[10px] text-stone-500 mt-1">Geo-tagged in western ghat reserves</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0f2117] border border-[#1f422e]">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-sky-400 block">
                    {plasticBottlesSaved}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                    Plastic Bottles Saved
                  </span>
                  <p className="text-[10px] text-stone-500 mt-1">Via mountain spring refilling</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0f2117] border border-[#1f422e]">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-amber-400 block">
                    {wasteCleanedKg} kg
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                    Trail Litter Retrieved
                  </span>
                  <p className="text-[10px] text-stone-500 mt-1">By Parikrama lead rangers</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0f2117] border border-[#1f422e]">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-[#4ade80] block">
                    ₹{villageSupportInr.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                    Direct Village Revenue
                  </span>
                  <p className="text-[10px] text-stone-500 mt-1">Paid to local cooks & naturalists</p>
                </div>
              </div>

              {/* Action row */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPledged(true)}
                  className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    pledged
                      ? 'bg-emerald-500 text-[#09150e]'
                      : 'bg-[#1b3d2a] hover:bg-[#25523a] text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{pledged ? 'PLEDGE SIGNED // WELCOME NOMAD' : 'SIGN LEAVE NO TRACE PLEDGE'}</span>
                </button>

                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                  >
                    <span>BOOK ECO-EXPEDITION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
