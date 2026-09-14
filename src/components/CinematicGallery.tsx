import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { X, ZoomIn, MapPin, Calendar, Mountain, Compass, Maximize2 } from 'lucide-react';

export function CinematicGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['ALL', 'Sahyadri Treks', 'Himalayan Trails', 'Campfire Nights', 'Waterfalls', 'Wildlife'];

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="relative py-28 sm:py-36 bg-[#080b09] text-[#f4f5f0] overflow-hidden border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>VISUAL DOCUMENTARY ARCHIVE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95]">
              EXPEDITION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] via-[#f4f5f0] to-[#d8cebe]">
                GALLERY.
              </span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#e5a93c] text-[#0a0d0c] font-bold'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Irregular Editorial Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {filtered.map((item, idx) => {
            // Span rules according to ratio
            let spanClass = 'col-span-1 row-span-1';
            if (item.ratio === 'landscape') spanClass = 'col-span-1 sm:col-span-2 row-span-1';
            if (item.ratio === 'portrait') spanClass = 'col-span-1 row-span-2';
            if (item.ratio === 'tall vertical') spanClass = 'col-span-1 row-span-2';
            if (item.ratio === 'panoramic') spanClass = 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                data-cursor="VIEW"
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-900 border border-stone-800/80 hover:border-stone-600 transition-all duration-300 ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-[#0a0d0c]/80 text-[#e5a93c] border border-stone-700">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#e5a93c] uppercase block">
                      {item.category} • {item.elevation}
                    </span>
                    <h3 className="font-heading font-black text-lg text-white uppercase leading-tight">
                      {item.title}
                    </h3>
                    <span className="text-xs text-stone-300 font-mono flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[#e5a93c]" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#060807]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#0f1411] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0a0d0c]/80 border border-stone-700 text-stone-300 hover:text-white transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 max-h-[70vh] sm:max-h-[78vh] bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-contain max-h-[75vh]"
                  />
                </div>

                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800">
                  <div>
                    <span className="px-2.5 py-1 rounded-md bg-[#14291e] border border-[#234331] font-mono text-[10px] text-[#e5a93c] uppercase">
                      {selectedPhoto.category}
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-4">
                      {selectedPhoto.title}
                    </h3>

                    <div className="mt-6 space-y-3 font-mono text-xs text-stone-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#e5a93c]" />
                        <span>LOCATION: {selectedPhoto.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mountain className="w-4 h-4 text-[#e5a93c]" />
                        <span>ELEVATION: {selectedPhoto.elevation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#e5a93c]" />
                        <span>SEASON: {selectedPhoto.date}</span>
                      </div>
                    </div>

                    <p className="text-stone-400 text-xs sm:text-sm mt-6 leading-relaxed">
                      Captured during an official Parikrama expedition. We document authentic mountain environments while practicing strictly Leave No Trace principles.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-800">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPhoto(null);
                        const el = document.getElementById('journeys');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-3.5 rounded-xl bg-[#e5a93c] text-[#0a0d0c] font-black text-xs tracking-widest uppercase hover:bg-[#f5b84c] transition-all"
                    >
                      EXPLORE EXPEDITIONS HERE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
