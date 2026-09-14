import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Compass, Phone, MessageCircle } from 'lucide-react';
import { AmbientAudio } from './AmbientAudio';
import { BRAND_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection?: string;
}

export function Navbar({ onOpenBooking, activeSection = '' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'JOURNEYS', href: '#journeys', id: 'journeys' },
    { label: 'DESTINATIONS', href: '#destinations', id: 'destinations' },
    { label: 'ALMANAC', href: '#almanac', id: 'almanac' },
    { label: 'ECO PLEDGE', href: '#eco-pledge', id: 'eco-pledge' },
    { label: 'EXPERIENCES', href: '#moments', id: 'moments' },
    { label: 'STORIES', href: '#stories', id: 'stories' },
    { label: 'ABOUT', href: '#philosophy', id: 'philosophy' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0d0c]/85 backdrop-blur-md border-b border-stone-800/50 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0a0d0c]/90 via-[#0a0d0c]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Emblem */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3.5 text-left focus:outline-hidden"
            data-cursor="PARIKRAMA"
          >
            {/* The Circle of Nature Emblem */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#e5a93c]/50 group-hover:border-[#e5a93c] transition-colors duration-300"></div>
              <div className="absolute inset-1 rounded-full border border-stone-700/60 border-dashed animate-[spin_30s_linear_infinite]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#e5a93c] shadow-xs shadow-[#e5a93c]/50"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-[0.25em] text-[#f4f5f0] group-hover:text-white leading-none">
                PARIKRAMA
              </span>
              <span className="font-expedition text-[9px] tracking-[0.32em] text-[#d8cebe]/70 uppercase mt-1">
                The Circle of Nature
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-200 ${
                    isActive ? 'text-[#e5a93c]' : 'text-stone-300 hover:text-white'
                  }`}
                  data-cursor="GO"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#e5a93c]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4">
            <AmbientAudio />

            <button
              type="button"
              onClick={onOpenBooking}
              data-cursor="BOOK"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-md hover:shadow-[#e5a93c]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>BOOK A JOURNEY</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#090c0a]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="space-y-6 mt-4">
              <div className="text-[11px] font-mono tracking-widest text-[#e5a93c] uppercase">
                // EXPEDITION NAVIGATION
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between text-left py-2 border-b border-stone-800/60 group"
                  >
                    <span className="font-heading text-2xl font-bold tracking-wider text-stone-200 group-hover:text-[#e5a93c] transition-colors">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-stone-500 group-hover:text-[#e5a93c]">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-xl bg-[#e5a93c] text-[#0a0d0c] font-black text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <span>BOOK A JOURNEY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-stone-900 border border-stone-800 text-xs font-semibold text-stone-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-stone-900 border border-stone-800 text-xs font-semibold text-stone-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#e5a93c]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-2 text-[10px] tracking-widest text-stone-500 uppercase">
                {BRAND_INFO.tagline} • PARIKRAMA EXPEDITIONS
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
