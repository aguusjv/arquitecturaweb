import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Briefcase, Code2, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <MousePointer2 size={24} />,
      title: "Landing Page Profesional",
      desc: "Una página optimizada para convertir consultas. Ideal para profesionales independientes.",
      tag: "Entrada",
      fullDesc: "Una sola página optimizada para convertir.\n\n• Hero con propuesta clara\n• Sección servicios y confianza\n• CTA a WhatsApp\n• Optimización básica SEO\n• Mobile-first\n• Hosting y dominio opcional\n\nIdeal para: Psicólogos, abogados, médicos, consultores.\n\nObjetivo: Generar consultas y captar leads."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Sitio Institucional Profesional",
      desc: "Web más completa con autoridad. Para empresas pequeñas y equipos profesionales.",
      tag: "Intermedio",
      fullDesc: "Web completa con 3-6 secciones estructuradas.\n\n• Inicio, Nosotros, Servicios detallados\n• Contacto integrado\n• Blog opcional\n• Mejor estructura SEO\n• Arquitectura más sólida\n• Escalable y moderno\n\nIdeal para: Estudios jurídicos, clínicas, empresas pequeñas.\n\nObjetivo: Posicionamiento + autoridad profesional."
    },
    {
      icon: <Code2 size={24} />,
      title: "Desarrollo Web a Medida",
      desc: "Arquitectura personalizada para proyectos específicos y escalables.",
      tag: "Premium",
      fullDesc: "Solución completamente personalizada según tu necesidad.\n\n• Análisis técnico previo\n• Estructura personalizada\n• Funcionalidades específicas\n• Integraciones especiales\n• Escalabilidad total\n• Consultoría técnica incluida\n\nIdeal para: Proyectos únicos, plataformas, herramientas especiales.\n\nObjetivo: Solución estratégica a medida."
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl space-y-6">
            <span className="mono-label">Nuestros Productos</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              3 opciones <br />
              <span className="text-white/30">para crecer.</span>
            </h2>
          </div>
          <p className="text-white/40 text-lg max-w-sm leading-relaxed font-light">
            Elige el producto que mejor se adapte a tu negocio. Desde una landing page hasta un desarrollo completamente personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#050505] p-16 hover:bg-white/[0.02] transition-all duration-500 flex flex-col"
            >
              <div className="mb-12 text-white p-6 bg-white/5 rounded-2xl w-fit group-hover:bg-indigo-500 group-hover:text-white transition-all border border-white/5">
                {s.icon}
              </div>
              <span className="mono-label !text-indigo-400 mb-4">{s.tag}</span>
              <h3 className="text-3xl font-bold text-white mb-8 tracking-tight leading-tight">{s.title}</h3>
              <p className="text-white/40 text-base leading-relaxed mb-12 flex-grow font-light">{s.desc}</p>
              <button onClick={() => setSelectedService(i)} className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.3em] group/btn hover:text-indigo-400 transition-colors">
                Saber más <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050505] border border-white/10 rounded-2xl max-w-sm w-full relative"
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="mono-label !text-indigo-400 text-xs mb-1 block uppercase tracking-wider">{services[selectedService].tag}</span>
                  <h2 className="text-2xl font-black text-white tracking-tight leading-tight">{services[selectedService].title}</h2>
                </div>

                <div className="space-y-3 text-white/70 mb-4">
                  {services[selectedService].fullDesc.split('\n').map((line, idx) => {
                    if (line.startsWith('•')) {
                      return (
                        <div key={idx} className="flex gap-2 items-start pl-1">
                          <div className="text-indigo-400 font-bold mt-0.5 text-base">●</div>
                          <p className="text-xs leading-relaxed">{line.replace('•', '').trim()}</p>
                        </div>
                      );
                    } else if (line.trim() === '') {
                      return null;
                    } else if (line === 'Incluye:' || line === 'Ideal para:' || line === 'Objetivo:') {
                      return (
                        <h3 key={idx} className="text-white font-bold text-sm mt-3 mb-1">{line}</h3>
                      );
                    } else {
                      return (
                        <p key={idx} className="text-xs leading-relaxed">
                          {line}
                        </p>
                      );
                    }
                  })}
                </div>

                <motion.button
                  whileHover={{ x: 3 }}
                  onClick={() => {
                    scrollToSection('contacto');
                    setSelectedService(null);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold text-[8px] uppercase tracking-[0.2em] px-4 py-2 border border-indigo-500/50 rounded-full hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all bg-indigo-500/10"
                >
                  Contáctanos <ArrowRight size={12} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;