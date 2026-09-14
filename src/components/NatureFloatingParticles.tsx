import { useMemo } from 'react';
import { motion } from 'motion/react';
import { useNatureTheme } from '../context/NatureThemeContext';

interface Particle {
  id: number;
  startX: number;
  size: number;
  duration: number;
  delay: number;
  rotateZ: number;
  sway: number;
  type: 'leaf' | 'spore' | 'firefly' | 'droplet';
}

export function NatureFloatingParticles() {
  const { showParticles, mood, themeConfig } = useNatureTheme();

  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100, // percentage 0 to 100
      size: 10 + Math.random() * 16,
      duration: 16 + Math.random() * 14,
      delay: Math.random() * 10,
      rotateZ: Math.random() * 360,
      sway: 30 + Math.random() * 50,
      type: (['leaf', 'spore', 'firefly', 'droplet'] as const)[i % 4],
    }));
  }, []);

  if (!showParticles) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => {
        const isFirefly = mood === 'starlight' || p.type === 'firefly';
        const isMonsoon = mood === 'monsoon';

        return (
          <motion.div
            key={p.id}
            className="absolute will-change-transform"
            style={{
              left: `${p.startX}%`,
              top: '-5%',
            }}
            initial={{ y: -40, opacity: 0, x: 0 }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, p.sway, -p.sway, p.sway / 2, 0],
              rotate: [0, p.rotateZ, p.rotateZ + 180],
              opacity: [0, 0.7, 0.85, 0.4, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {isFirefly ? (
              // Glowing bioluminescent firefly
              <div
                className="rounded-full shadow-lg"
                style={{
                  width: `${Math.max(4, p.size * 0.4)}px`,
                  height: `${Math.max(4, p.size * 0.4)}px`,
                  backgroundColor: '#fcd34d',
                  boxShadow: `0 0 12px 3px ${themeConfig.accentHex}`,
                }}
              />
            ) : isMonsoon && p.type === 'droplet' ? (
              // Translucent dewy droplet
              <div
                className="w-1.5 h-3 rounded-full bg-emerald-200/40 blur-[0.5px]"
                style={{
                  boxShadow: '0 0 6px rgba(52, 211, 153, 0.4)',
                }}
              />
            ) : (
              // Botanical Leaf Silhouette
              <svg
                viewBox="0 0 24 24"
                width={p.size}
                height={p.size}
                className="transition-colors duration-500 opacity-60"
                style={{
                  fill:
                    mood === 'monsoon'
                      ? '#34d399'
                      : mood === 'dawn'
                      ? '#f59e0b'
                      : mood === 'forest'
                      ? '#22c55e'
                      : '#a3e635',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                }}
              >
                {/* Organic Leaf Path */}
                <path d="M12 2C7.5 2 4 6.5 4 12c0 4 2 7 8 10 6-3 8-6 8-10 0-5.5-3.5-10-8-10zm0 18c-4.5-2.5-6-5-6-8 0-4 2.5-7.5 6-7.5s6 3.5 6 7.5c0 3-1.5 5.5-6 8z" />
                <path
                  d="M12 4v14M8 9l4 3M16 11l-4 3"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  className="opacity-40"
                />
              </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
