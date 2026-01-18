
import React from 'react';
// Added Instagram to the imports from lucide-react to fix compilation error
import { ArrowRight, Play, Sparkles, Instagram } from 'lucide-react';
import Imagen from '../public/imgs/mochileroMamut.jpg'
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#FDFCFB] to-white">
    
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-bold tracking-tight animate-fade-in border border-purple-100">
            <Sparkles size={16} />
             Elevando marcas a través del contenido
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900">
            IDENTIDAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 italic font-serif">VISUAL</span> <br />
            QUE CONVIERTE.
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
             Ayudo a emprendedores y marcas personales a destacar en Instagram y TikTok con un diseño visual llamativo y vídeos cortos de alta conversión.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="#portfolio" 
              className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-purple-600 transition-all hover:translate-x-1 shadow-xl shadow-black/10"
            >
              Ver portafolio
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-white text-black border-2 border-black/5 px-8 py-4 rounded-full font-bold hover:border-black transition-all"
            >
               Contáctame
            </a>
          </div>

          <div className="flex items-center gap-8 mt-4 pt-8 border-t border-gray-100">
            <div>
              <div className="text-3xl font-black">60+</div>
              <div className="text-sm text-gray-500 font-medium">Diseños entregados</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <div className="text-3xl font-black">20+</div>
              <div className="text-sm text-gray-500 font-medium">Vistas de vídeo</div>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <div className="text-3xl font-black">98%</div>
              <div className="text-sm text-gray-500 font-medium">Éxito del Cliente</div>
            </div>
          </div>
        </div>

        <div className="relative group perspective-1000">
          <div className="relative z-10 w-full aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2">
            <img 
              src={Imagen} 
              alt="Design Preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <div className="flex justify-between items-end">
                <div className="text-white">
                  <div className="text-sm font-medium opacity-80 mb-1">Último proyecto</div>
                  <div className="text-2xl font-bold">Historia para @bolsos_mamut</div>
                </div>
               
              </div>
            </div>
          </div>
          
          
         
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-[3rem] -z-10 translate-x-4 translate-y-4 blur-sm opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
