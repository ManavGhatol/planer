import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-based
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check what element is under the cursor
      const target = e.target as HTMLElement | null;
      const clickable = target?.closest('[data-cursor]');
      if (clickable) {
        const text = clickable.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (target?.closest('button') || target?.closest('a') || target?.closest('[role="button"]')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: pos.x,
        y: pos.y,
        scale: isHovered ? (cursorText ? 1.4 : 1.2) : 1,
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 350,
        mass: 0.15,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 ${
          cursorText
            ? 'w-16 h-16 bg-[#e5a93c]/90 text-[#090c0a] font-bold text-[10px] tracking-widest shadow-xl backdrop-blur-sm'
            : isHovered
            ? 'w-10 h-10 bg-[#f4f5f0]/20 border border-[#f4f5f0]/60 backdrop-blur-xs'
            : 'w-4 h-4 bg-[#e5a93c] border border-[#0a0d0c]/40 shadow-sm'
        }`}
      >
        {cursorText && <span className="font-extrabold uppercase select-none">{cursorText}</span>}
      </div>
    </motion.div>
  );
}
