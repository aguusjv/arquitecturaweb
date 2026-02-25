import React from 'react';
import { motion } from 'framer-motion';
import { Step } from '../types';

const steps: Step[] = [
  { id: "01", title: "Entendemos tu idea", description: "Nos reunimos para conocer tu negocio y qué es lo que necesitás lograr con tu nueva web." },
  { id: "02", title: "Creamos tu sitio", description: "Diseñamos y programamos todo, manteniéndote al tanto de cada avance importante." },
  { id: "03", title: "Listo para funcionar", description: "Lanzamos tu web al mundo y nos aseguramos de que todo funcione perfecto desde el día uno." }
];

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 md:py-32 bg-[#0a0f1a] scroll-mt-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <span className="mono-label mb-4 block">Paso a paso</span>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
            De la idea a <br />
            <span className="text-white/30">la realidad.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-16 bg-[#050505] hover:bg-white/[0.02] transition-colors group"
            >
              <div className="text-[120px] font-serif font-black text-white/5 leading-none absolute top-8 right-8 group-hover:text-indigo-500/10 transition-colors">
                {step.id}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full font-mono font-bold text-sm mb-12">
                  {step.id}
                </div>
                <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">{step.title}</h4>
                <p className="text-white/40 text-lg leading-relaxed font-light">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;