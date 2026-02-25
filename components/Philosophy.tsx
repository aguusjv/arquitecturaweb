import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu } from 'lucide-react';

const Philosophy: React.FC = () => {
  const items = [
    {
      icon: <Terminal className="text-indigo-400" size={24} />,
      title: "Presupuesto claro",
      desc: "Conoce exactamente cuánto invertirás. Sin sorpresas ni costos escondidos en el camino."
    },
    {
      icon: <Cpu className="text-cyan-400" size={24} />,
      title: "Resultados medibles",
      desc: "Generamos leads, consultas y visitas. Tu web no es solo bonita, es una herramienta que vende."
    },
    {
      icon: <Shield className="text-emerald-400" size={24} />,
      title: "Soporte garantizado",
      desc: "No desaparecemos después de lanzar. Estamos para ayudarte a mantener y mejorar tu presencia digital."
    }
  ];

  return (
    <section id="enfoque" className="py-32 bg-[#050505] text-white relative overflow-hidden scroll-mt-20 border-y border-white/5">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-subtle opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono-label mb-4 block">Por qué elegirnos</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              Soluciones web <br />
              <span className="text-white/30">que generan resultados.</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed max-w-2xl font-light">
              Te ofrecemos 3 opciones claras: desde una landing page hasta un desarrollo completamente personalizado. Elige la que mejor se adapte a tu negocio.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10 overflow-hidden rounded-3xl">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 bg-[#050505] hover:bg-white/[0.02] transition-colors"
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform border border-white/5">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;