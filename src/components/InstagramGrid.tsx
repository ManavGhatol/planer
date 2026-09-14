import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ArrowUpRight, Play } from 'lucide-react';
import { INSTAGRAM_POSTS, BRAND_INFO } from '../data/mockData';

interface InstagramGridProps {
  onSelectTrekTag?: (tag: string) => void;
}

export function InstagramGrid({ onSelectTrekTag }: InstagramGridProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0a0d0c] text-[#f4f5f0] overflow-hidden border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14291e] border border-[#234331] text-[10px] font-bold tracking-[0.25em] text-[#e5a93c] uppercase mb-4">
              <Instagram className="w-3.5 h-3.5" />
              <span>COMMUNITY FEED ARCHIVE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95]">
              YOU'VE SEEN THE POSTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5a93c] to-[#f5b84c]">
                NOW LIVE THE JOURNEY.
              </span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            data-cursor="INSTAGRAM"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-mono text-xs tracking-widest uppercase transition-all"
          >
            <span>FOLLOW {BRAND_INFO.instagram}</span>
            <ArrowUpRight className="w-4 h-4 text-[#e5a93c]" />
          </a>
        </div>

        {/* Cinematic Instagram Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => {
            return (
              <div
                key={post.id}
                className="group relative rounded-2xl overflow-hidden bg-[#111613] border border-stone-800/80 hover:border-stone-600 transition-all duration-500 shadow-xl"
              >
                {/* Photo with zoom on hover */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.location}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.88] contrast-[1.1]"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c] via-[#0a0d0c]/30 to-transparent" />

                  {/* Reel Indicator */}
                  {post.isReel && (
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0a0d0c]/80 backdrop-blur-md border border-stone-700 flex items-center justify-center text-[#e5a93c]">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  )}

                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#0a0d0c]/85 backdrop-blur-md border border-stone-700 text-[10px] font-mono text-[#e5a93c]">
                      {post.tag}
                    </span>
                  </div>

                  {/* Hover Information Reveals */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[11px] font-mono text-stone-400 block mb-1">
                      {post.location}
                    </span>
                    <p className="text-stone-200 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-3">
                      {post.caption}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-800/80 text-xs font-mono text-stone-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 hover:text-rose-400 transition-colors">
                          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                          {post.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3.5 h-3.5 text-stone-400" />
                          {post.comments}
                        </span>
                      </div>

                      <span className="text-[#e5a93c] flex items-center gap-1 text-[11px] group-hover:translate-x-1 transition-transform">
                        VIEW POST <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
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
