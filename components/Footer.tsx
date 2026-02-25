import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONFIG, openEmail } from '../utils/whatsapp';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  const handleTechContact = (e: React.MouseEvent) => {
    e.preventDefault();
    openEmail(
      'Soporte Técnico - Arquitectura Web', 
      'Hola, me contacto para solicitar asistencia técnica sobre servicios web...'
    );
  };

  return (
    <footer className="bg-[#050505] py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-8">
            <div className="h-20 sm:h-24 md:h-28 lg:h-36 flex items-center">
              <img 
                  src={CONTACT_CONFIG.logoUrl} 
                  alt="Logo Arquitectura Web" 
                  className="h-full w-auto object-contain"
                />
            </div>
            <p className="text-white/30 text-lg max-w-sm leading-relaxed font-light">
              Creamos sitios web profesionales para que tu negocio crezca en el mundo digital.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-20 gap-y-10">
            <div className="flex flex-col gap-6">
              <span className="mono-label">Legal</span>
              <button onClick={() => setActiveModal('terms')} className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest text-left">Términos</button>
              <button onClick={() => setActiveModal('privacy')} className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest text-left">Privacidad</button>
            </div>
            <div className="flex flex-col gap-6">
              <span className="mono-label">Soporte</span>
              <button onClick={handleTechContact} className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest text-left">Asistencia Técnica</button>
              <span className="text-white/20 text-[10px] font-mono">Monitoreo 24/7</span>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.3em]">
            © {currentYear} Arquitectura Web — Excelencia en Ingeniería.
          </p>
          <div className="flex gap-8">
             <span className="text-white/10 text-[10px] font-mono uppercase">V.2.4.0-Estable</span>
             <span className="text-white/10 text-[10px] font-mono uppercase">Latencia: 24ms</span>
          </div>
        </div>

        {/* Modal System */}
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveModal(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-[#0a0a0a] w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-8 border-b border-white/5">
                <h3 className="mono-label !text-white">
                  {activeModal === 'terms' ? 'Términos de Servicio' : 'Política de Privacidad'}
                </h3>
                <button onClick={() => setActiveModal(null)} className="p-2 text-white/20 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto p-10 text-white/40 text-base leading-relaxed font-light">
                {activeModal === 'terms' ? (
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">1. Servicio</h4>
                      <p>Prestamos servicios de consultoría y desarrollo web bajo estándares profesionales de ingeniería.</p>
                    </section>
                    <section>
                      <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">2. Propiedad</h4>
                      <p>El código y activos finales pertenecen al cliente una vez finalizado el pago íntegro de los servicios.</p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Datos</h4>
                      <p>Tus datos son tratados con estricta confidencialidad y solo para fines de contacto profesional. No compartimos información con terceros.</p>
                    </section>
                  </div>
                )}
              </div>

              <div className="p-8 bg-white/5 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-8 py-3 bg-white text-black font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-indigo-500 hover:text-white transition-all"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;