import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Filter, ArrowRight, Sparkles, Calendar, Mountain, Clock } from 'lucide-react';
import { FEATURED_JOURNEYS } from '../data/mockData';
import { Journey } from '../types';

interface AdventureFinderProps {
  onSelectJourney: (journey: Journey) => void;
  onBookJourney: (journey: Journey) => void;
}

export function AdventureFinder({ onSelectJourney, onBookJourney }: AdventureFinderProps) {
  const [selectedActivity, setSelectedActivity] = useState<string>('TREK');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ANY');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('THIS MONTH');

  const activities = [
    { label: 'TREK', key: 'Trek' },
    { label: 'CAMP', key: 'Camp' },
    { label: 'SAFARI', key: 'Safari' },
    { label: 'WATERFALL', key: 'Waterfall' },
    { label: 'MOUNTAINS', key: 'Mountains' },
    { label: 'WEEKEND ESCAPE', key: 'Weekend Escape' },
  ];

  const difficulties = ['ANY', 'EASY', 'MODERATE', 'CHALLENGING'];
  const timelines = ['THIS WEEKEND', 'NEXT WEEK', 'THIS MONTH'];

  const matchedJourneys = useMemo(() => {
    return FEATURED_JOURNEYS.filter((journey) => {
      // Activity match
      const activityMatches =
        selectedActivity === 'WEEKEND ESCAPE'
          ? journey.nightsDays.includes('2D') || journey.nightsDays.includes('3D')
          : journey.category.toUpperCase() === selectedActivity ||
            (selectedActivity === 'TREK' && (journey.category === 'Trek' || journey.category === 'Mountains'));

      // Difficulty match
      const difficultyMatches =
        selectedDifficulty === 'ANY' ||
        journey.difficulty.toUpperCase() === selectedDifficulty;

      return activityMatches && difficultyMatches;
    });
  }, [selectedActivity, selectedDifficulty, selectedTimeline]);

  return (
    <section id="plan" className="relative py-28 sm:py-36 bg-[#0a0e0c] text-[#f4f5f0] overflow-hidden border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ADVENTURE RECOMMENDATION ENGINE</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95]">
            FIND YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] to-[#f5b84c]">
              PERFECT ADVENTURE.
            </span>
          </h2>

          <p className="text-stone-400 text-sm sm:text-base mt-4 font-light">
            Filter through our active seasonal roster according to your physical readiness, preferred landscape, and timeline.
          </p>
        </div>

        {/* Interactive Query Selector Container */}
        <div className="bg-[#111713] border border-stone-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Question 1: Activity */}
          <div>
            <span className="font-mono text-xs text-[#e5a93c] uppercase tracking-widest block mb-3">
              01 // WHAT ARE YOU LOOKING FOR?
            </span>
            <div className="flex flex-wrap gap-2.5">
              {activities.map((act) => (
                <button
                  key={act.label}
                  type="button"
                  onClick={() => setSelectedActivity(act.label)}
                  data-cursor="SELECT"
                  className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                    selectedActivity === act.label
                      ? 'bg-[#e5a93c] text-[#0a0d0c] font-black shadow-lg scale-[1.02]'
                      : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700'
                  }`}
                >
                  [ {act.label} ]
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Difficulty */}
          <div>
            <span className="font-mono text-xs text-[#e5a93c] uppercase tracking-widest block mb-3">
              02 // DIFFICULTY LEVEL?
            </span>
            <div className="flex flex-wrap gap-2.5">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  type="button"
                  onClick={() => setSelectedDifficulty(diff)}
                  data-cursor="SELECT"
                  className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                    selectedDifficulty === diff
                      ? 'bg-[#14291e] border border-[#234331] text-[#e5a93c] font-black shadow-md'
                      : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: When? */}
          <div>
            <span className="font-mono text-xs text-[#e5a93c] uppercase tracking-widest block mb-3">
              03 // WHEN DO YOU WISH TO DEPART?
            </span>
            <div className="flex flex-wrap gap-2.5">
              {timelines.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTimeline(time)}
                  data-cursor="SELECT"
                  className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                    selectedTimeline === time
                      ? 'bg-stone-800 text-white font-bold border border-stone-600'
                      : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Results Display */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-stone-400 tracking-wider uppercase">
              // MATCHED EXPEDITIONS ({matchedJourneys.length})
            </span>
          </div>

          {matchedJourneys.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedJourneys.map((journey) => (
                <div
                  key={journey.id}
                  className="group bg-[#0f1411] border border-stone-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-stone-700 transition-all shadow-xl"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={journey.heroImage}
                        alt={journey.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1411] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#0a0d0c]/80 text-[10px] font-mono text-[#e5a93c] uppercase">
                          {journey.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] font-mono text-stone-400 uppercase block mb-1">
                        {journey.location}
                      </span>
                      <h4 className="font-heading font-black text-2xl text-white uppercase group-hover:text-[#e5a93c] transition-colors">
                        {journey.title}
                      </h4>
                      <p className="font-expedition text-xs text-[#d8cebe] uppercase mt-1">
                        "{journey.subtitle}"
                      </p>
                      <p className="text-stone-400 text-xs mt-3 line-clamp-2">
                        {journey.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-stone-800/80 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-stone-500 uppercase block">FROM</span>
                      <span className="font-heading font-black text-xl text-[#e5a93c]">
                        ₹{journey.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectJourney(journey)}
                        className="px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-xs font-mono text-stone-300 hover:text-white"
                      >
                        DETAILS
                      </button>
                      <button
                        type="button"
                        onClick={() => onBookJourney(journey)}
                        data-cursor="BOOK"
                        className="px-4 py-2 rounded-lg bg-[#e5a93c] text-[#0a0d0c] font-black text-xs uppercase hover:bg-[#f5b84c]"
                      >
                        BOOK
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#101512] rounded-2xl border border-stone-800">
              <Compass className="w-12 h-12 text-[#e5a93c] mx-auto opacity-60 mb-3" />
              <h3 className="font-heading font-bold text-xl text-stone-300">
                NO DIRECT MATCH FOR THIS EXACT COMBINATION
              </h3>
              <p className="text-stone-500 text-xs mt-2">
                Try switching difficulty to 'ANY' or pick a broader activity type.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedActivity('TREK');
                  setSelectedDifficulty('ANY');
                }}
                className="mt-4 px-5 py-2 rounded-lg bg-[#e5a93c] text-[#0a0d0c] text-xs font-bold uppercase"
              >
                RESET FILTERS
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
