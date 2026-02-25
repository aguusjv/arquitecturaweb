import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-40 sm:pt-32 md:pt-28 lg:pt-20 pb-12 overflow-hidden bg-[#050505]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40"></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-start md:items-center">
          <div className="md:col-span-6 lg:col-span-8 space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[110px] font-black leading-[1.05] sm:leading-[1] md:leading-[1] lg:leading-[0.9] xl:leading-[0.85] tracking-tighter uppercase"
            >
              Tu negocio <br />
              <span className="text-gradient">en la web</span> <br />
              como debe ser.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-white/50 leading-relaxed max-w-2xl font-light"
            >
              Landing pages, sitios institucionales o desarrollos a medida. Elige la opción que tu negocio necesita y comienza a generar resultados.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <button 
                onClick={() => scrollTo('contacto')}
                className="btn-primary group"
              >
                Iniciar Proyecto <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('servicios')}
                className="btn-outline"
              >
                Ver Productos
              </button>
            </motion.div>
          </div>

          <div className="md:col-span-6 lg:col-span-4 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="relative glass-card p-6 rounded-[2rem] border border-white/10 overflow-hidden">
                <div className="scan-line"></div>
                <div className="rounded-xl overflow-hidden bg-black/40 p-1 border border-white/5">
                   <div className="h-8 flex items-center gap-2 px-4 border-b border-white/5 bg-white/5">
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                     <span className="ml-2 text-[10px] font-mono text-white/20">arquitectura.ts</span>
                   </div>
                   <div className="p-8 font-mono text-[12px] leading-relaxed">
                     <p className="text-indigo-400">interface <span className="text-white">Sistema</span> &#123;</p>
                     <p className="pl-4 text-white/40">rendimiento: <span className="text-cyan-400">'ultra'</span>;</p>
                     <p className="pl-4 text-white/40">escalabilidad: <span className="text-cyan-400">true</span>;</p>
                     <p className="pl-4 text-white/40">diseño: <span className="text-cyan-400">'premium'</span>;</p>
                     <p className="text-indigo-400">&#125;</p>
                     <p className="mt-4 text-white/20">// Excelencia en ingeniería</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;