import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';
import { openWhatsApp, openEmail } from '../utils/whatsapp';

const TrustContact: React.FC = () => {
  const [method, setMethod] = useState<'wa' | 'form'>('wa');
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id="contacto" className="py-32 bg-[#050505] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-16 md:p-24 flex flex-col justify-center space-y-10 bg-gradient-to-br from-white/5 to-transparent">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="mono-label mb-6 block">Hablemos</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                ¿Listo para <br /> empezar tu <span className="text-indigo-400">proyecto?</span>
              </h2>
              <p className="text-white/40 text-xl leading-relaxed font-light mb-12">
                Charlemos sobre lo que necesitás. Te asesoramos sin cargo para encontrar la mejor solución para tu negocio.
              </p>
              <div className="space-y-6">
                {[
                  { text: "Asesoría personalizada", color: "text-indigo-400" },
                  { text: "Presupuesto en 48hs", color: "text-cyan-400" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/60">
                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${item.color} border border-white/5`}>
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-sm font-medium tracking-wide uppercase">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 bg-[#050505] p-16 md:p-24 border-l border-white/10">
            <div className="flex gap-4 mb-16">
              {['wa', 'form'].map((m) => (
                <button 
                  key={m}
                  onClick={() => setMethod(m as any)}
                  className={`flex-1 py-4 px-6 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all border ${method === m ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'}`}
                >
                  {m === 'wa' ? 'WhatsApp' : 'Email'}
                </button>
              ))}
            </div>

            {method === 'wa' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-10 py-10"
              >
                <div className="w-24 h-24 bg-white/5 text-white rounded-full flex items-center justify-center mx-auto border border-white/10">
                  <MessageSquare size={40} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-bold text-white tracking-tight">Ingeniería en Tiempo Real</h4>
                  <p className="text-white/40 text-lg font-light">Hablemos ahora mismo sobre su visión técnica.</p>
                </div>
                <button 
                  onClick={() => openWhatsApp()}
                  className="w-full bg-white text-black hover:bg-indigo-500 hover:text-white font-bold py-6 rounded-full flex items-center justify-center gap-3 transition-all uppercase tracking-[0.2em] text-xs"
                >
                  Abrir WhatsApp
                </button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = `Consulta desde web: ${name || 'Sin nombre'}`;
                  const body = `Nombre: ${name}\nEmail: ${contactEmail}\n\n${message}`;
                  openEmail(subject, body);
                  setSent(true);
                }}
              >
                {sent ? (
                  <div className="py-20 text-center space-y-6">
                    <CheckCircle size={60} className="text-indigo-400 mx-auto" />
                    <h4 className="text-3xl font-bold text-white">Mensaje enviado</h4>
                    <p className="text-white/40 font-light">Nos pondremos en contacto a la brevedad.</p>
                  </div>
                ) : (
                  <>
                    <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder="Su nombre" className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-sm focus:border-indigo-500 outline-none text-white transition-colors" />
                    <input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required type="email" placeholder="Email de contacto" className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-sm focus:border-indigo-500 outline-none text-white transition-colors" />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Cuéntenos sobre su proyecto..." className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-sm h-40 outline-none focus:border-indigo-500 resize-none text-white transition-colors"></textarea>
                    <button type="submit" className="w-full bg-white text-black font-bold py-6 rounded-full flex items-center justify-center gap-3 hover:bg-indigo-500 hover:text-white transition-all uppercase tracking-[0.2em] text-xs">
                      Enviar Mensaje <Send size={18} />
                    </button>
                  </>
                )}
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustContact;