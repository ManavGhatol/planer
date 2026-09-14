import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Journey } from '../types';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Mountain,
  CheckCircle2,
  XCircle,
  Shield,
  HelpCircle,
  CheckSquare,
  Square,
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronDown,
  Leaf,
  Trees,
  Droplets
} from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

interface TripDetailModalProps {
  journey: Journey | null;
  onClose: () => void;
  onBook: (journey: Journey) => void;
}

export function TripDetailModal({ journey, onClose, onBook }: TripDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'carry' | 'eco' | 'faq'>('itinerary');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!journey) return null;

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const tabs = [
    { id: 'itinerary', label: '02 // ITINERARY' },
    { id: 'overview', label: '01 // THE JOURNEY' },
    { id: 'eco', label: '05 // ECO & NATURE' },
    { id: 'inclusions', label: '03 // INCLUSIONS' },
    { id: 'carry', label: '04 // PACKING LIST' },
    { id: 'faq', label: '07 // FAQS & INFO' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#060807]/95 backdrop-blur-xl flex flex-col justify-start">
        {/* Sticky Top Bar with Close Button */}
        <header className="sticky top-0 z-40 bg-[#0a0d0c]/90 backdrop-blur-md border-b border-stone-800/80 px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c]" />
            <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase">
              EXPEDITION DOSSIER // {journey.id.toUpperCase()}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            data-cursor="CLOSE"
            className="p-2 rounded-full bg-stone-900 border border-stone-700 text-stone-300 hover:text-white hover:border-[#e5a93c] transition-colors"
            aria-label="Close trip details"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Hero Section of the Expedition */}
        <div className="relative min-h-[420px] sm:min-h-[500px] flex items-end overflow-hidden border-b border-stone-800">
          <img
            src={journey.heroImage}
            alt={journey.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c] via-[#0a0d0c]/40 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-md bg-[#14291e] border border-[#234331] text-[10px] font-mono text-[#e5a93c] uppercase">
                  {journey.category}
                </span>
                <span className="px-3 py-1 rounded-md bg-stone-900/80 border border-stone-700 text-[10px] font-mono text-stone-300 uppercase">
                  DIFF: {journey.difficulty}
                </span>
                <span className="px-3 py-1 rounded-md bg-stone-900/80 border border-stone-700 text-[10px] font-mono text-stone-300 uppercase">
                  ALT: {journey.altitude}
                </span>
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight">
                {journey.title}
              </h1>
              <p className="font-expedition text-sm sm:text-lg tracking-[0.2em] text-[#d8cebe] uppercase mt-1">
                "{journey.subtitle}"
              </p>
            </div>

            {/* Pricing & Primary Quick Book */}
            <div className="bg-[#0e1410]/90 backdrop-blur-md p-6 rounded-2xl border border-stone-700/80 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-start gap-4 shadow-xl">
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
                  ALL-INCLUSIVE EXPEDITION
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-black text-3xl text-[#e5a93c]">
                    ₹{journey.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-stone-400 uppercase">/ PERSON</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onBook(journey)}
                data-cursor="BOOK"
                className="w-full py-3.5 px-8 rounded-xl bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-black text-xs tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>BOOK YOUR SEAT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation Navigation */}
        <div className="sticky top-[69px] z-30 bg-[#0c100d]/95 backdrop-blur-md border-b border-stone-800 px-4 sm:px-8 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto flex items-center gap-2 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#e5a93c] text-[#0a0d0c] font-black shadow-md'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Body Content Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full text-[#f4f5f0]">
          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-12">
              <div>
                <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase">
                  SECTION 02 // DAY-BY-DAY ROUTE TIMELINE
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                  EXPEDITION TRAIL PLAN
                </h2>
              </div>

              <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#e5a93c] before:via-stone-700 before:to-[#e5a93c]">
                {journey.itinerary.map((day) => (
                  <div key={day.day} className="relative group">
                    {/* Pulsing route dot node */}
                    <div className="absolute -left-6 sm:-left-10 top-1 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#0a0d0c] border-2 border-[#e5a93c] flex items-center justify-center shadow-lg">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#e5a93c]" />
                    </div>

                    <div className="bg-[#111713] border border-stone-800/80 rounded-2xl p-6 sm:p-8 hover:border-stone-700 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-md bg-[#14291e] border border-[#234331] font-mono text-xs text-[#e5a93c] font-bold uppercase">
                          DAY 0{day.day}
                        </span>

                        <div className="flex items-center gap-3 text-xs font-mono text-stone-400">
                          {day.distance && <span>TRAIL: {day.distance}</span>}
                          {day.duration && <span>EST: {day.duration}</span>}
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-white uppercase mb-3">
                        {day.title}
                      </h3>

                      <p className="text-stone-300 text-sm leading-relaxed mb-6">
                        {day.description}
                      </p>

                      {/* Key highlights & Meals */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-800/80 text-xs">
                        <div>
                          <span className="font-mono text-stone-500 uppercase block mb-1">
                            HIGHLIGHTS
                          </span>
                          <ul className="space-y-1 text-stone-300">
                            {day.keyHighlights.map((h, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#e5a93c]" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="font-mono text-stone-500 uppercase block mb-1">
                            MEALS PROVIDED
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {day.mealsIncluded.map((meal, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-0.5 rounded-md bg-stone-900 border border-stone-800 text-[11px] text-stone-300"
                              >
                                {meal}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-10 max-w-4xl">
              <div>
                <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase">
                  SECTION 01 // EXPEDITION DOSSIER
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                  THE ESSENCE OF {journey.title}
                </h2>
              </div>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
                {journey.description}
              </p>

              {/* Gallery Grid preview inside modal */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {journey.galleryImages.map((img, idx) => (
                  <div key={idx} className="h-52 rounded-xl overflow-hidden border border-stone-800">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Meeting Points */}
              <div className="pt-6 border-t border-stone-800">
                <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase block mb-4">
                  06 // PICKUP & ASSEMBLY POINTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {journey.meetingPoints.map((pt, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-stone-900/80 border border-stone-800">
                      <span className="font-heading font-bold text-white text-base block">
                        {pt.city}
                      </span>
                      <span className="text-xs text-stone-400 block mt-1">
                        {pt.pickupLocation}
                      </span>
                      <span className="text-xs font-mono text-[#e5a93c] block mt-2">
                        TIME: {pt.pickupTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="space-y-10 max-w-4xl">
              <div>
                <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase">
                  SECTION 03 // TRANSPARENCY & VALUE
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                  WHAT'S INCLUDED & EXCLUDED
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div className="p-6 rounded-2xl bg-[#0f1511] border border-emerald-900/40 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>INCLUDED IN PACKAGE</span>
                  </div>
                  <ul className="space-y-3 text-sm text-stone-300">
                    {journey.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="p-6 rounded-2xl bg-[#140f0f] border border-rose-900/40 space-y-4">
                  <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-bold">
                    <XCircle className="w-4 h-4" />
                    <span>NOT INCLUDED</span>
                  </div>
                  <ul className="space-y-3 text-sm text-stone-300">
                    {journey.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PACKING LIST */}
          {activeTab === 'carry' && (
            <div className="space-y-10 max-w-4xl">
              <div>
                <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase">
                  SECTION 04 // EXPEDITION PREPAREDNESS
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                  WHAT TO CARRY (INTERACTIVE CHECKLIST)
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm mt-1">
                  Click items as you pack your rucksack. Be thoroughly prepared for mountain conditions.
                </p>
              </div>

              <div className="space-y-8">
                {journey.carryList.map((categoryGroup, idx) => (
                  <div key={idx} className="bg-[#111713] border border-stone-800 rounded-2xl p-6">
                    <h3 className="font-mono text-xs uppercase text-[#e5a93c] tracking-wider mb-4">
                      // {categoryGroup.category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {categoryGroup.items.map((item) => {
                        const isDone = !!checkedItems[item];
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleCheck(item)}
                            className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                              isDone
                                ? 'bg-[#14291e] border-emerald-600/60 text-emerald-200 line-through opacity-80'
                                : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-stone-600'
                            }`}
                          >
                            {isDone ? (
                              <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-stone-500 shrink-0" />
                            )}
                            <span className="text-xs sm:text-sm">{item}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FAQS */}
          {activeTab === 'faq' && (
            <div className="space-y-10 max-w-4xl">
              <div>
                <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase">
                  SECTION 07 // FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                  TRAIL READINESS & QUERIES
                </h2>
              </div>

              <div className="space-y-4">
                {journey.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#111713] border border-stone-800 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                      >
                        <span className="font-heading font-bold text-lg text-white group-hover:text-[#e5a93c] transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#e5a93c]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-stone-300 text-sm leading-relaxed border-t border-stone-800/60 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: ECO & NATURE */}
          {activeTab === 'eco' && (
            <div className="space-y-10 max-w-4xl">
              <div>
                <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
                  SECTION 05 // ECOLOGICAL STEWARDSHIP & CONSERVATION
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white uppercase mt-1">
                  NATURE FOOTPRINT & BIO-SANCTUARY
                </h2>
              </div>

              {/* Eco Score Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-6 rounded-2xl bg-[#0e1f16] border border-[#1b442e]">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <Leaf className="w-5 h-5 animate-leaf" />
                    <span className="text-xs font-mono uppercase tracking-wider">Leave-No-Trace Score</span>
                  </div>
                  <div className="font-heading font-black text-4xl text-white">
                    {journey.ecoScore || 98}%
                  </div>
                  <p className="text-xs text-emerald-300/80 mt-2">
                    {journey.ecoCertification || 'Certified Leave No Trace Expedition'}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0e1f16] border border-[#1b442e]">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <Trees className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-mono uppercase tracking-wider">Native Tree Planting</span>
                  </div>
                  <div className="font-heading font-black text-4xl text-emerald-400">
                    {journey.treesPlanted || 2} Trees
                  </div>
                  <p className="text-xs text-stone-400 mt-2">
                    Planted in Western Ghats / Kumaon sacred groves per booked nomad.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0e1f16] border border-[#1b442e]">
                  <div className="flex items-center gap-2 text-sky-400 mb-2">
                    <Droplets className="w-5 h-5 text-sky-400" />
                    <span className="text-xs font-mono uppercase tracking-wider">Plastic Offsetting</span>
                  </div>
                  <div className="font-heading font-black text-4xl text-sky-300">
                    ~{journey.plasticSaved || 16} Bottles
                  </div>
                  <p className="text-xs text-stone-400 mt-2">
                    Single-use plastics eliminated via trail filtration stations.
                  </p>
                </div>
              </div>

              {/* Bio-sanctuary & Flora/Fauna */}
              {journey.floraFauna && journey.floraFauna.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#111713] border border-stone-800">
                  <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>NATIVE BIODIVERSITY & SPECIES OBSERVED ON THIS ROUTE</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {journey.floraFauna.map((specimen, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#0a120d] border border-[#1c3827] flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                        <span className="font-medium text-sm text-stone-200">{specimen}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nomad Trail Ethics Pledge */}
              <div className="p-6 rounded-2xl bg-[#0f2117] border border-[#235037] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="font-heading font-bold text-lg text-emerald-300">The Parikrama Forest Code</h4>
                  <p className="text-sm text-stone-300 mt-1 max-w-xl">
                    Pack it in, pack it out. We collect all bio & inorganic waste, support local tribal trail guides, and prohibit sound pollution on high ridges.
                  </p>
                </div>
                <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs border border-emerald-500/40 uppercase tracking-widest whitespace-nowrap">
                  100% Bio-Ethical
                </span>
              </div>
            </div>
          )}
        </main>

        {/* Sticky Mobile / Bottom Booking Bar */}
        <div className="sticky bottom-0 z-40 bg-[#0a0d0c]/95 backdrop-blur-md border-t border-stone-800 px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-stone-400 uppercase block">
              EXPEDITION SLOTS OPEN
            </span>
            <span className="font-heading font-black text-2xl text-[#e5a93c]">
              ₹{journey.price.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-stone-400 uppercase ml-1">/ PERSON</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                `Hi Parikrama, I have a question regarding the ${journey.title} expedition.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-300 hover:text-white flex items-center gap-2 text-xs font-mono uppercase"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Ask on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => onBook(journey)}
              data-cursor="BOOK"
              className="px-8 py-3 rounded-xl bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-black text-xs tracking-widest uppercase transition-all shadow-md flex items-center gap-2"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
