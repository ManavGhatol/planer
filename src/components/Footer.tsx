import { BRAND_INFO } from '../data/mockData';
import { Phone, MessageCircle, Instagram, Mail, ArrowUpRight, Compass, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#050706] text-[#f4f5f0] pt-24 pb-12 border-t border-stone-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#e5a93c]"></div>
                <div className="w-3 h-3 rounded-full bg-[#e5a93c]"></div>
              </div>
              <div>
                <h3 className="font-heading font-black text-3xl tracking-[0.25em] text-white uppercase leading-none">
                  {BRAND_INFO.name}
                </h3>
                <span className="font-expedition text-[10px] tracking-[0.35em] text-[#d8cebe] uppercase">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm max-w-md leading-relaxed font-light">
              Indian trekking, mountaineering, and wilderness expeditions inspired by the ancient philosophy of Parikrama — circumambulating and honoring the sacred circle of nature.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-stone-400">
              <span className="px-3 py-1 rounded-md bg-stone-900 border border-stone-800">
                BASE // MUMBAI
              </span>
              <span className="px-3 py-1 rounded-md bg-stone-900 border border-stone-800">
                PUNE
              </span>
              <span className="px-3 py-1 rounded-md bg-stone-900 border border-stone-800">
                DEHRADUN
              </span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs text-[#e5a93c] uppercase tracking-widest block mb-2">
              // EXPEDITION INDEX
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('journeys')}
                  className="hover:text-[#e5a93c] transition-colors"
                >
                  JOURNEYS & TREKS
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-[#e5a93c] transition-colors"
                >
                  EXPEDITION REGIONS
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('moments')}
                  className="hover:text-[#e5a93c] transition-colors"
                >
                  HORIZONTAL TIMELINE
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('stories')}
                  className="hover:text-[#e5a93c] transition-colors"
                >
                  COMMUNITY STORIES
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('plan')}
                  className="hover:text-[#e5a93c] transition-colors"
                >
                  TRIP RECOMMENDATION ENGINE
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('philosophy')}
                  className="hover:text-[#e5a93c] transition-colors"
                >
                  BRAND MANIFESTO
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs text-[#e5a93c] uppercase tracking-widest block mb-2">
              // DISPATCH & CONTACT
            </span>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#e5a93c] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-stone-300">WHATSAPP DISPATCH</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#e5a93c] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#e5a93c]" />
                  <span className="text-xs font-mono text-stone-300">{BRAND_INFO.phone}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#e5a93c] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-mono text-stone-300">{BRAND_INFO.instagram}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#e5a93c] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-mono text-stone-300">{BRAND_INFO.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#e5a93c] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Brand Typography Graphic */}
        <div className="py-12 select-none overflow-hidden text-center opacity-10">
          <span className="font-heading font-black text-6xl sm:text-9xl md:text-[11rem] tracking-widest uppercase text-stone-300 whitespace-nowrap">
            PARIKRAMA
          </span>
        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © 2026 PARIKRAMA EXPEDITIONS. ALL RIGHTS RESERVED.
          </div>

          <div className="tracking-widest uppercase text-stone-400">
            EXPLORE • EXPERIENCE • REMEMBER
          </div>
        </div>
      </div>
    </footer>
  );
}
