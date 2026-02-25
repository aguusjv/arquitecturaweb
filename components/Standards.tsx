import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Ruler, Cpu } from 'lucide-react';

const Standards: React.FC = () => {
  const pillars = [
    {
      icon: <BarChart3 size={24} />,
      title: "Planificamos tu éxito",
      description: "Analizamos qué necesita tu cliente para que encuentre lo que busca de forma rápida y sencilla."
    },
    {
      icon: <Ruler size={24} />,
      title: "Diseño elegante",
      description: "Creamos sitios limpios y modernos que transmiten confianza y profesionalismo desde el primer segundo."
    },
    {
      icon: <Cpu size={24} />,
      title: "Tecnología moderna",
      description: "Usamos herramientas de última generación para que tu web no se quede atrás con el paso del tiempo."
    }
  ];

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <span className="mono-label mb-4 block">Cómo trabajamos</span>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
            Calidad en cada <br />
            <span className="text-white/30">detalle.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8"
            >
              <div className="w-16 h-16 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-2xl group-hover:bg-indigo-500 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-white/40 text-lg leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
