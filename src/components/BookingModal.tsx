import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { X, Users, Calendar, Phone, Mail, User, ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { FEATURED_JOURNEYS, BRAND_INFO } from '../data/mockData';
import { Journey } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedJourney?: Journey | null;
}

export function BookingModal({ isOpen, onClose, preselectedJourney }: BookingModalProps) {
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>(
    preselectedJourney ? preselectedJourney.id : FEATURED_JOURNEYS[0].id
  );

  const selectedJourney = FEATURED_JOURNEYS.find((j) => j.id === selectedJourneyId) || FEATURED_JOURNEYS[0];

  const [selectedDate, setSelectedDate] = useState<string>(selectedJourney.availableDates[0]);
  const [guests, setGuests] = useState<number>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickupCity, setPickupCity] = useState(BRAND_INFO.baseCities[0]);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const totalAmount = selectedJourney.price * guests;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e5a93c', '#22c55e', '#ffffff', '#14291e'],
    });

    const ref = `PKR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Namaste Parikrama! I want to confirm my expedition booking:\n\nRef: ${bookingRef || 'NEW-BOOKING'}\nJourney: ${selectedJourney.title} (${selectedJourney.subtitle})\nDate: ${selectedDate}\nGuests: ${guests}\nPickup: ${pickupCity}\nName: ${name}\nPhone: ${phone}\nTotal: ₹${totalAmount.toLocaleString('en-IN')}`;
    return `https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#060807]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-2xl w-full bg-[#0f1411] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl my-8 text-[#f4f5f0]"
      >
        {/* Modal Top Header */}
        <div className="bg-[#141b16] px-6 sm:px-8 py-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e5a93c] animate-pulse" />
            <span className="font-mono text-xs text-[#e5a93c] tracking-widest uppercase font-bold">
              EXPEDITION RESERVATION DESK
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-stone-900 border border-stone-700 text-stone-300 hover:text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body or Success Receipt */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#14291e] border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="font-mono text-xs text-[#e5a93c] uppercase tracking-widest">
                  CONFIRMATION DISPATCHED
                </span>
                <h3 className="font-heading font-black text-3xl text-white uppercase mt-1">
                  SEAT RESERVATION RECORDED
                </h3>
                <p className="text-stone-400 text-sm mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Your expedition interest has been registered. Reference: <span className="font-mono text-[#e5a93c] font-bold">{bookingRef}</span>.
                </p>
              </div>

              {/* Receipt card */}
              <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 text-left max-w-md mx-auto font-mono text-xs space-y-2">
                <div className="flex justify-between text-stone-400">
                  <span>EXPEDITION:</span>
                  <strong className="text-white">{selectedJourney.title}</strong>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>DATES:</span>
                  <span className="text-stone-200">{selectedDate}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>EXPLORERS:</span>
                  <span className="text-stone-200">{guests} Person(s)</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>PICKUP HUB:</span>
                  <span className="text-stone-200">{pickupCity}</span>
                </div>
                <div className="pt-2 border-t border-stone-800 flex justify-between text-sm font-bold text-white">
                  <span>ESTIMATED TOTAL:</span>
                  <span className="text-[#e5a93c]">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Instant WhatsApp link */}
              <div className="pt-2 space-y-3 max-w-md mx-auto">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>INSTANT CONFIRM VIA WHATSAPP</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-300 text-xs font-mono tracking-wider uppercase hover:text-white"
                >
                  RETURN TO EXPEDITIONS
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Journey Selector */}
              <div>
                <label className="block text-xs font-mono text-[#e5a93c] uppercase tracking-wider mb-2">
                  SELECTED JOURNEY
                </label>
                <select
                  value={selectedJourneyId}
                  onChange={(e) => {
                    setSelectedJourneyId(e.target.value);
                    const j = FEATURED_JOURNEYS.find((item) => item.id === e.target.value);
                    if (j && j.availableDates.length > 0) {
                      setSelectedDate(j.availableDates[0]);
                    }
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white font-medium text-sm focus:border-[#e5a93c] focus:outline-hidden transition-colors"
                >
                  {FEATURED_JOURNEYS.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.title} — {j.subtitle} (₹{j.price.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                    AVAILABLE TRAVEL DATE
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white font-mono text-xs focus:border-[#e5a93c] focus:outline-hidden"
                  >
                    {selectedJourney.availableDates.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                    NUMBER OF EXPLORERS
                  </label>
                  <div className="flex items-center border border-stone-700 rounded-xl bg-stone-900 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="px-4 py-3 text-stone-300 hover:text-white font-bold"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-mono text-sm font-bold text-white">
                      {guests} {guests === 1 ? 'Person' : 'People'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="px-4 py-3 text-stone-300 hover:text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                    FULL NAME *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Joshi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-[#e5a93c] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                    PHONE / WHATSAPP *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-[#e5a93c] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="adventurer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-sm focus:border-[#e5a93c] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                    PREFERRED PICKUP HUB
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs font-mono focus:border-[#e5a93c] focus:outline-hidden"
                    >
                      {BRAND_INFO.baseCities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Dynamic Price Calculation Summary Banner */}
              <div className="p-4 rounded-xl bg-[#141b16] border border-[#234331] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">
                    PACKAGE COMPUTATION (₹{selectedJourney.price} × {guests})
                  </span>
                  <span className="font-heading font-black text-2xl text-[#e5a93c]">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-stone-400 uppercase ml-1">TOTAL</span>
                </div>

                <div className="text-right text-[11px] font-mono text-stone-400">
                  <span className="text-emerald-400 block font-bold">● NO HIDDEN CHARGES</span>
                  <span>Includes all permits & food</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  data-cursor="CONFIRM"
                  className="w-full py-4 rounded-xl bg-[#e5a93c] hover:bg-[#f5b84c] text-[#0a0d0c] font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <span>CONFIRM INTEREST</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 border border-stone-800 text-xs font-semibold text-stone-300 hover:text-white"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 border border-stone-800 text-xs font-semibold text-stone-300 hover:text-white"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#e5a93c]" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
