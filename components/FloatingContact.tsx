import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const FloatingContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-[60]"
        >
          <button
            onClick={() => openWhatsApp()}
            className="group relative flex items-center justify-center w-16 h-16 bg-white text-black rounded-full shadow-2xl hover:bg-indigo-500 hover:text-white transition-all active:scale-95 border border-white/10"
            aria-label="Contactar por WhatsApp"
          >
            <span className="absolute -left-32 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold py-2 px-4 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
              ¿Hablamos?
            </span>
            <MessageCircle size={28} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
