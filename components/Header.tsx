import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_CONFIG } from '../utils/whatsapp';
import { scrollToSection } from '../utils/scroll';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    scrollToSection(id);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="h-16"
        >
          <img src={CONTACT_CONFIG.logoUrl} alt="Arquitectura Web" className="h-full w-auto object-contain brightness-0 invert" />
        </motion.a>
        
        <nav className="hidden md:flex items-center gap-12">
          {[
            { id: 'enfoque', label: 'Nosotros' },
            { id: 'servicios', label: 'Servicios' },
            { id: 'metodologia', label: 'Proceso' }
          ].map((item, i) => (
            <motion.button 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.id} 
              onClick={() => scrollTo(item.id)} 
              className="mono-label hover:text-white transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => scrollTo('contacto')}
            className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Contacto
          </motion.button>
        </nav>
      </div>
    </header>
  );
};

export default Header;