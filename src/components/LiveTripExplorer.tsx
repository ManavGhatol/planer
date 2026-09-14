import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, ArrowRight, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';
import { FEATURED_JOURNEYS } from '../data/mockData';
import { Journey } from '../types';

interface LiveTripExplorerProps {
  onBookJourney: (journey: Journey) => void;
  onExploreJourney: (journey: Journey) => void;
}

export function LiveTripExplorer({ onBookJourney, onExploreJourney }: LiveTripExplorerProps) {
  const [selectedMonth, setSelectedMonth] = useState<string>('ALL');

  // Flatten upcoming departures
  const upcomingDepartures = [
    {
      id: 'dep-1',
      journey: FEATURED_JOURNEYS[0], // Kalsubai
      date: '26 Sept — 29 Sept',
      month: 'SEPTEMBER',
      seatsLeft: 4,
      status: 'FAST FILLING',
      batchCode: 'PKR-KAL-44',
    },
    {
      id: 'dep-2',
      journey: FEATURED_JOURNEYS[1], // Ratangad
      date: '27 Sept — 29 Sept',
      month: 'SEPTEMBER',
      seatsLeft: 7,
      status: 'AVAILABLE',
      batchCode: 'PKR-RAT-18',
    },
    {
      id: 'dep-3',
      journey: FEATURED_JOURNEYS[3], // Secret Waterfall
      date: '28 Sept — 29 Sept',
      month: 'SEPTEMBER',
      seatsLeft: 3,
      status: 'LAST 3 SEATS',
      batchCode: 'PKR-WAT-09',
    },
    {
      id: 'dep-4',
      journey: FEATURED_JOURNEYS[2], // Nainital
      date: '01 Oct — 05 Oct',
      month: 'OCTOBER',
      seatsLeft: 5,
      status: 'FILLING UP',
      batchCode: 'PKR-NAI-08',
    },
    {
      id: 'dep-5',
      journey: FEATURED_JOURNEYS[4], // Melghat
      date: '02 Oct — 05 Oct',
      month: 'OCTOBER',
      seatsLeft: 6,
      status: 'AVAILABLE',
      batchCode: 'PKR-MEL-05',
    },
    {
      id: 'dep-6',
      journey: FEATURED_JOURNEYS[5], // Harishchandragad
      date: '10 Oct — 12 Oct',
      month: 'OCTOBER',
      seatsLeft: 2,
      status: 'LAST 2 SEATS',
      batchCode: 'PKR-HCG-31',
    },
  ];

  const filtered = upcomingDepartures.filter((dep) => {
    if (selectedMonth === 'ALL') return true;
    return dep.month === selectedMonth;
  });

  return (
    <section className="relative py-24 sm:py-32 bg-[#0c100d] text-[#f4f5f0] border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE DEPARTURE ROSTER</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95]">
              TRIPS HAPPENING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] to-[#f5b84c]">
                SOON.
              </span>
            </h2>
          </div>

          {/* Month Filter */}
          <div className="flex items-center gap-2">
            {['ALL', 'SEPTEMBER', 'OCTOBER'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setSelectedMonth(m)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  selectedMonth === m
                    ? 'bg-[#e5a93c] text-[#0a0d0c]'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Live departures grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dep) => {
            const { journey } = dep;

            return (
              <div
                key={dep.id}
                className="group relative bg-[#121814] border border-stone-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-stone-700 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top status bar */}
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="text-stone-400 tracking-wider">
                      {dep.batchCode}
                    </span>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 ${
                        dep.seatsLeft <= 3
                          ? 'bg-rose-950/80 text-rose-300 border border-rose-800'
                          : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {dep.seatsLeft} SEATS LEFT
                    </span>
                  </div>

                  {/* Destination image thumbnail */}
                  <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-stone-800/80">
                    <img
                      src={journey.heroImage}
                      alt={journey.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121814] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#0a0d0c]/85 border border-stone-700 text-[10px] font-mono text-stone-300 uppercase">
                        {journey.difficulty}
                      </span>
                      <span className="text-[11px] font-mono text-stone-300">
                        {journey.nightsDays}
                      </span>
                    </div>
                  </div>

                  {/* Title & Dates */}
                  <h3 className="font-heading font-black text-2xl text-white uppercase group-hover:text-[#e5a93c] transition-colors">
                    {journey.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-stone-300 font-mono text-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#e5a93c]" />
                    <strong className="text-stone-200">{dep.date}</strong>
                  </div>

                  <p className="text-stone-400 text-xs mt-2 line-clamp-2">
                    {journey.subtitle} — Includes private transport, mountain camp, local meals & certified leads.
                  </p>
                </div>

                {/* Price & Booking action */}
                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase block">
                      ALL-INCLUSIVE
                    </span>
                    <span className="font-heading font-black text-xl text-[#e5a93c]">
                      ₹{journey.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-stone-400 uppercase ml-1">/ PERSON</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onExploreJourney(journey)}
                      className="p-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors"
                      title="View Itinerary"
                    >
                      <Clock className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookJourney(journey)}
                      data-cursor="BOOK"
                      className="px-4 py-2.5 rounded-lg bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-black text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <span>BOOK SEAT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
