
import React from 'react';
import { Mail, MessageCircle, Instagram, ArrowRight, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
      
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-400 mb-6">Colaboremos</h2>
              <h3 className="text-4xl md:text-7xl font-black text-white leading-[1] mb-8">
                ¿Listo para subir de nivel de <span className="font-serif italic text-white/90">contenido?</span>
              </h3>
            
              
              <div className="-ml-8 md:ml-0 flex flex-col gap-6 ">
                <a 
                  href="mailto:Andre.colmenarez08@gmail.com" 
                  className="flex items-center gap-4 text-white group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-white/40">correo electrónico</div>
                   <div className="text-[13px] sm:text-xl font-bold">Andre.colmenarez08@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://w.app/wcqk15" 
                  className="flex items-center gap-4 text-white group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-white/40">WhatsApp</div>
                    <div className="text-[13px] sm:text-xl font-bold">+58 (424) 551-3769</div>
                  </div>
                </a>

                <div className="flex gap-4 pt-6">
                 
                    <a 
                      href="https://www.instagram.com/sarahi_studioo/" 
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all"
                    >
                     <Instagram size={20} />
                    </a>
                     <div>
                    <div className="text-xs font-black uppercase tracking-widest text-white/40">Instagram</div>
                    <div className="text-[15px] sm:text-xl font-bold text-white ">sarahi_studioo</div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40 px-2">Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-white/40 px-2">Correo</label>
                    <input 
                      type="email" 
                      placeholder="Tu correo electrónico"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 px-2">Servicio</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-purple-500 transition-all appearance-none">
                    <option className="bg-slate-900">Diseño del feed de Instagram</option>
                    <option className="bg-slate-900">Edición de vídeo (Reels/TikTok)</option>
                    <option className="bg-slate-900">Historias animadas</option>
                    <option className="bg-slate-900">Gestión mensual completa</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 px-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    placeholder="Cuéntame cuáles son los objetivos de tu marca..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-purple-500 transition-all"
                  ></textarea>
                </div>
                <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2">
                 Enviar consulta
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
