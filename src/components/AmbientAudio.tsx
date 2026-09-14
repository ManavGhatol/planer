import { useState, useEffect, useRef, ElementType } from 'react';
import { Volume2, VolumeX, Bird, CloudRain, Flame, Wind, Sliders } from 'lucide-react';
import { useNatureTheme } from '../context/NatureThemeContext';

export function AmbientAudio() {
  const { ambientSound, setAmbientSound } = useNatureTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMixer, setShowMixer] = useState(false);
  const [volume, setVolume] = useState(0.4);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const birdIntervalRef = useRef<number | null>(null);
  const crackleIntervalRef = useRef<number | null>(null);
  const rainSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const windSourceRef = useRef<AudioBufferSourceNode | null>(null);

  // Initialize or resume audio context
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const master = ctx.createGain();
      master.gain.setValueAtTime(volume, ctx.currentTime);
      master.connect(ctx.destination);
      masterGainRef.current = master;
    }
  };

  const stopAllSoundSources = () => {
    if (birdIntervalRef.current) {
      window.clearInterval(birdIntervalRef.current);
      birdIntervalRef.current = null;
    }
    if (crackleIntervalRef.current) {
      window.clearInterval(crackleIntervalRef.current);
      crackleIntervalRef.current = null;
    }
    if (rainSourceRef.current) {
      try {
        rainSourceRef.current.stop();
        rainSourceRef.current.disconnect();
      } catch {
        // source already stopped
      }
      rainSourceRef.current = null;
    }
    if (windSourceRef.current) {
      try {
        windSourceRef.current.stop();
        windSourceRef.current.disconnect();
      } catch {
        // source already stopped
      }
      windSourceRef.current = null;
    }
  };

  // Play a procedural bird chirp
  const triggerBirdChirp = (ctx: AudioContext, dest: AudioNode) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      // Random bird pitch between 2400Hz and 3800Hz
      const baseFreq = 2400 + Math.random() * 1400;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + (Math.random() * 800 - 400), now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.16);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // safe fallback
    }
  };

  // Setup sound generators based on selected track
  const startSoundTrack = (track: 'wind' | 'fire' | 'birds' | 'rain') => {
    const ctx = audioCtxRef.current;
    const master = masterGainRef.current;
    if (!ctx || !master) return;

    stopAllSoundSources();

    if (track === 'wind' || track === 'birds') {
      // Filtered pink noise wind
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555;
        b1 = 0.99332 * b1 + white * 0.075;
        b2 = 0.969 * b2 + white * 0.153;
        b3 = 0.8665 * b3 + white * 0.31;
        b4 = 0.55 * b4 + white * 0.53;
        b5 = -0.7616 * b5 - white * 0.016;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.536) * 0.06;
        b6 = white * 0.115;
      }

      const windSource = ctx.createBufferSource();
      windSource.buffer = noiseBuffer;
      windSource.loop = true;

      const windFilter = ctx.createBiquadFilter();
      windFilter.type = 'lowpass';
      windFilter.frequency.setValueAtTime(track === 'birds' ? 240 : 380, ctx.currentTime);
      windFilter.Q.setValueAtTime(2.5, ctx.currentTime);

      windSource.connect(windFilter);
      windFilter.connect(master);
      windSource.start();
      windSourceRef.current = windSource;

      if (track === 'birds') {
        // Periodically trigger melodic bird chirps
        birdIntervalRef.current = window.setInterval(() => {
          if (Math.random() > 0.35) {
            triggerBirdChirp(ctx, master);
            if (Math.random() > 0.5) {
              setTimeout(() => triggerBirdChirp(ctx, master), 180);
            }
          }
        }, 1600);
      }
    }

    if (track === 'fire') {
      // Low rumble + crackle
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(75, ctx.currentTime);
      oscGain.gain.setValueAtTime(0.04, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(master);
      osc.start();

      crackleIntervalRef.current = window.setInterval(() => {
        if (Math.random() > 0.3) {
          try {
            const crackle = ctx.createOscillator();
            const crackleGain = ctx.createGain();
            crackle.type = 'sawtooth';
            crackle.frequency.setValueAtTime(700 + Math.random() * 1600, ctx.currentTime);
            crackleGain.gain.setValueAtTime(0.06 * Math.random(), ctx.currentTime);
            crackleGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
            crackle.connect(crackleGain);
            crackleGain.connect(master);
            crackle.start();
            crackle.stop(ctx.currentTime + 0.06);
          } catch {
            // safe
          }
        }
      }, 250);
    }

    if (track === 'rain') {
      // Rain noise with soft high filter
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.05;
      }
      const rainSource = ctx.createBufferSource();
      rainSource.buffer = noiseBuffer;
      rainSource.loop = true;

      const rainFilter = ctx.createBiquadFilter();
      rainFilter.type = 'bandpass';
      rainFilter.frequency.setValueAtTime(950, ctx.currentTime);
      rainFilter.Q.setValueAtTime(1.2, ctx.currentTime);

      rainSource.connect(rainFilter);
      rainFilter.connect(master);
      rainSource.start();
      rainSourceRef.current = rainSource;
    }
  };

  const toggleSound = async () => {
    if (isPlaying) {
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
        setTimeout(() => {
          stopAllSoundSources();
          audioCtxRef.current?.suspend();
          setIsPlaying(false);
        }, 450);
      }
    } else {
      initAudio();
      if (audioCtxRef.current?.state === 'suspended') {
        await audioCtxRef.current.resume();
      }
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.6);
      }
      startSoundTrack(ambientSound);
      setIsPlaying(true);
    }
  };

  // Change soundscape track
  const handleSelectTrack = (track: 'wind' | 'fire' | 'birds' | 'rain') => {
    setAmbientSound(track);
    if (isPlaying) {
      startSoundTrack(track);
    }
  };

  // Volume slider update
  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(newVol, audioCtxRef.current.currentTime, 0.1);
    }
  };

  useEffect(() => {
    return () => {
      stopAllSoundSources();
      audioCtxRef.current?.close();
    };
  }, []);

  const tracks: { id: 'wind' | 'fire' | 'birds' | 'rain'; label: string; icon: ElementType }[] = [
    { id: 'birds', label: 'Forest Birds', icon: Bird },
    { id: 'wind', label: 'Canopy Breeze', icon: Wind },
    { id: 'rain', label: 'Monsoon Rain', icon: CloudRain },
    { id: 'fire', label: 'Campfire', icon: Flame },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-1.5">
        <button
          id="ambient-audio-toggle"
          type="button"
          onClick={toggleSound}
          data-cursor="SOUND"
          aria-label={isPlaying ? 'Mute wilderness audio' : 'Play wilderness nature soundscape'}
          className="group relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#112319]/90 hover:bg-[#183324] text-xs font-medium text-stone-200 hover:text-white border border-[#214330] backdrop-blur-md transition-all duration-300 shadow-md"
        >
          <span className="relative flex h-2 w-2">
            {isPlaying && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            )}
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isPlaying ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-stone-600'
              }`}
            ></span>
          </span>

          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-200" />
          )}

          <span className="font-expedition text-[10px] tracking-[0.15em] uppercase">
            {isPlaying ? tracks.find((t) => t.id === ambientSound)?.label : 'WILD AUDIO'}
          </span>
        </button>

        {/* Mixer dropdown button */}
        <button
          type="button"
          onClick={() => setShowMixer(!showMixer)}
          className="p-1.5 rounded-full bg-[#112319]/90 hover:bg-[#183324] border border-[#214330] text-stone-300 hover:text-white transition-colors"
          aria-label="Audio Mixer Settings"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Nature Sound Mixer Popover */}
      {showMixer && (
        <div className="absolute top-full mt-2 right-0 z-50 w-64 p-3.5 rounded-2xl bg-[#0e1b14]/95 border border-[#1f3a2b] shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-2 border-b border-[#1f3a2b]">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400">
              Nature Soundscape
            </span>
            <span className="text-[10px] text-stone-400">Procedural Synth</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 my-2.5">
            {tracks.map((t) => {
              const Icon = t.icon;
              const isCurrent = ambientSound === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleSelectTrack(t.id)}
                  className={`flex items-center gap-2 p-2 rounded-xl text-left text-xs transition-colors border ${
                    isCurrent
                      ? 'bg-[#1a3828] border-emerald-500/40 text-emerald-300 font-bold'
                      : 'bg-[#0a140f] border-transparent text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Volume Slider */}
          <div className="pt-2 border-t border-[#1f3a2b]">
            <div className="flex justify-between text-[10px] text-stone-400 mb-1">
              <span>Wilderness Volume</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}
