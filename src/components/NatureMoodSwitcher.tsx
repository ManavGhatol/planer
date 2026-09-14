import { useState, ElementType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CloudRain, Sunrise, Trees, Sparkles, Leaf, Volume2 } from 'lucide-react';
import { useNatureTheme } from '../context/NatureThemeContext';
import { NatureMood } from '../types';

export function NatureMoodSwitcher() {
  const { mood, setMood, showParticles, setShowParticles, themeConfig } = useNatureTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const moods: { id: NatureMood; label: string; icon: ElementType; color: string; desc: string }[] = [
    {
      id: 'monsoon',
      label: 'Monsoon Canopy',
      icon: CloudRain,
      color: '#10b981',
      desc: 'Dewy emerald rain, waterfalls & mist',
    },
    {
      id: 'forest',
      label: 'Cedar Forest',
      icon: Trees,
      color: '#22c55e',
      desc: 'Pine aroma, moss & canopy shade',
    },
    {
      id: 'dawn',
      label: 'Alpine Dawn',
      icon: Sunrise,
      color: '#f59e0b',
      desc: 'Golden sunrise rays over ridges',
    },
    {
      id: 'starlight',
      label: 'Sahyadri Fireflies',
      icon: Sparkles,
      color: '#e5a93c',
      desc: 'Obsidian night & dancing fireflies',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 p-4 rounded-3xl bg-[#0e1913]/95 border border-[#1f3a2b] shadow-2xl backdrop-blur-xl w-72 sm:w-80"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#1f3a2b]">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-[#1b3326] text-[#34d399]">
                  <Leaf className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#e6f4ec]">
                    Nature Atmosphere
                  </span>
                  <p className="text-[10px] text-stone-400">Choose your trail canopy mood</p>
                </div>
              </div>
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: themeConfig.accentHex }}
              />
            </div>

            {/* Mood selector buttons */}
            <div className="grid grid-cols-1 gap-2 mt-3">
              {moods.map((m) => {
                const Icon = m.icon;
                const isSelected = mood === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMood(m.id)}
                    className={`group flex items-center justify-between p-2.5 rounded-2xl text-left transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#152e22] border-[#2d5841] text-white shadow-md'
                        : 'bg-[#0a140f]/60 hover:bg-[#12241b] border-transparent text-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-xl transition-colors"
                        style={{
                          backgroundColor: isSelected ? `${m.color}20` : '#132219',
                          color: m.color,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold tracking-wide flex items-center gap-1.5">
                          {m.label}
                          {isSelected && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#204432] text-[#34d399] font-mono">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-stone-400 mt-0.5">{m.desc}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Particle toggle row */}
            <div className="mt-3 pt-3 border-t border-[#1f3a2b] flex items-center justify-between text-xs text-stone-300">
              <span className="flex items-center gap-2 text-[11px]">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                Floating Botanical Leaves
              </span>
              <button
                type="button"
                onClick={() => setShowParticles((prev) => !prev)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  showParticles ? 'bg-[#10b981]' : 'bg-stone-700'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    showParticles ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Organic Trigger Pill */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        data-cursor="NATURE"
        aria-label="Toggle nature atmosphere mood controls"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#102319]/90 hover:bg-[#163023] text-stone-200 hover:text-white border border-[#274b37] shadow-xl backdrop-blur-xl transition-all duration-300"
      >
        <div className="relative flex items-center justify-center">
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: themeConfig.accentHex }}
          />
          <span
            className="absolute w-5 h-5 rounded-full opacity-40 animate-ping"
            style={{ backgroundColor: themeConfig.accentHex }}
          />
        </div>

        <Leaf className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />

        <span className="font-heading font-bold text-xs uppercase tracking-wider">
          {themeConfig.name}
        </span>

        <span className="text-[10px] text-stone-400 font-mono hidden sm:inline">
          {isExpanded ? 'CLOSE' : 'MOOD'}
        </span>
      </motion.button>
    </div>
  );
}
