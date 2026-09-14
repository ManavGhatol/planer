import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NatureMood } from '../types';

interface NatureThemeContextType {
  mood: NatureMood;
  setMood: (mood: NatureMood) => void;
  showParticles: boolean;
  setShowParticles: (show: boolean | ((prev: boolean) => boolean)) => void;
  ambientSound: 'wind' | 'fire' | 'birds' | 'rain';
  setAmbientSound: (sound: 'wind' | 'fire' | 'birds' | 'rain') => void;
  themeConfig: {
    name: string;
    description: string;
    primaryBg: string;
    accentGlow: string;
    accentHex: string;
    emeraldLeaf: string;
    tagline: string;
  };
}

const THEME_PRESETS: Record<NatureMood, NatureThemeContextType['themeConfig']> = {
  monsoon: {
    name: 'Monsoon Canopy',
    description: 'Dewy emerald rain, cascading mountain waterfalls & mist',
    primaryBg: '#09150e',
    accentGlow: 'rgba(16, 185, 129, 0.18)',
    accentHex: '#10b981',
    emeraldLeaf: '#34d399',
    tagline: 'Lush Sahyadri Rains & Cascades',
  },
  dawn: {
    name: 'Alpine Golden Dawn',
    description: 'Crisp mountain ridges kissed by morning sunrise rays',
    primaryBg: '#13140e',
    accentGlow: 'rgba(245, 158, 11, 0.18)',
    accentHex: '#f59e0b',
    emeraldLeaf: '#fbbf24',
    tagline: 'First Alpine Light on Himalayan Peaks',
  },
  forest: {
    name: 'Ancient Cedar Forest',
    description: 'Deep pine scent, mossy tree trunks & soothing canopy shade',
    primaryBg: '#0a1610',
    accentGlow: 'rgba(34, 197, 94, 0.16)',
    accentHex: '#22c55e',
    emeraldLeaf: '#86efac',
    tagline: 'Old-Growth Wilderness & Pine Canopies',
  },
  starlight: {
    name: 'Sahyadri Firefly Night',
    description: 'Obsidian sky with dancing fireflies & warm campfire embers',
    primaryBg: '#070b09',
    accentGlow: 'rgba(229, 169, 60, 0.18)',
    accentHex: '#e5a93c',
    emeraldLeaf: '#4ade80',
    tagline: 'Starlit Ridges & Bioluminescent Glades',
  },
};

const NatureThemeContext = createContext<NatureThemeContextType | null>(null);

export function NatureThemeProvider({ children }: { children: ReactNode }) {
  const [mood, setMood] = useState<NatureMood>('forest');
  const [showParticles, setShowParticles] = useState<boolean>(true);
  const [ambientSound, setAmbientSound] = useState<'wind' | 'fire' | 'birds' | 'rain'>('birds');

  // Sync ambient sound recommendation with mood
  useEffect(() => {
    if (mood === 'monsoon') setAmbientSound('rain');
    else if (mood === 'dawn') setAmbientSound('birds');
    else if (mood === 'forest') setAmbientSound('wind');
    else if (mood === 'starlight') setAmbientSound('fire');
  }, [mood]);

  const value: NatureThemeContextType = {
    mood,
    setMood,
    showParticles,
    setShowParticles,
    ambientSound,
    setAmbientSound,
    themeConfig: THEME_PRESETS[mood],
  };

  return (
    <NatureThemeContext.Provider value={value}>
      <div
        className="transition-colors duration-1000 min-h-screen relative"
        style={{
          backgroundColor: THEME_PRESETS[mood].primaryBg,
        }}
      >
        {children}
      </div>
    </NatureThemeContext.Provider>
  );
}

export function useNatureTheme() {
  const context = useContext(NatureThemeContext);
  if (!context) {
    throw new Error('useNatureTheme must be used within a NatureThemeProvider');
  }
  return context;
}
