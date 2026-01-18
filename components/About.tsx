
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFCFB] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 w-full aspect-square md:aspect-auto md:h-[600px] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="../public/imgs/perfil.jpg" 
                alt="Solo - Social Media Designer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
           
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600 rounded-[3rem] -z-10 opacity-10 "></div>
            <div className=" absolute top-1/2 -left-4 -translate-y-1/2 p-3 bg-white rounded-2xl shadow-xl z-20 border border-gray-100   sm:-left-10 sm:p-6 sm:rounded-2xl top-[80%] sm:top-1/2">
 
              <div className="text-4xl font-black text-purple-600 mb-1">+2</div>
              <div className="text-xs font-black text-slate-500 uppercase tracking-widest leading-none">Años de diseño<br/>Experiencia</div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600">El Diseñador</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Creando <span className="font-serif italic">narrativas que detienen el scroll</span>.
            </h3>
            <div className="flex flex-col gap-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Hola, soy Andreina. Me especializo en convertir el ruido digital en armonía visual. Mi enfoque combina disparadores de marketing psicológico con diseño estético de alta gama para ayudarte a dominar las plataformas de redes sociales.
              </p>
              <p>
                He trabajado con más de 20 marcas personales y tiendas de e-commerce , ayudándoles a lograr más vistas combinadas y multiplicando sus ingresos atribuidos.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <h4 className="font-black text-slate-900 mb-2">Mis Valores</h4>
                <p className="text-sm text-gray-500">Calidad sobre cantidad, estrategia sobre vanidad, y conexión humana auténtica.</p>
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-2">Mis Herramientas</h4>
                <p className="text-sm text-gray-500">Photoshop, Canva, CapCut, y flujos de trabajo asistidos por IA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
