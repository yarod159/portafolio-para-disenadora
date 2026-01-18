
import React from 'react';
import { Instagram, Video, Layers, Wand2 } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Diseño del feed de IG',
    description: 'Cuadrículas estéticas personalizadas, carruseles fluidos y publicaciones estáticas atractivas diseñadas para detener el desplazamiento.',
    icon: <Instagram className="text-purple-600" size={32} />
  },
  {
    id: '2',
    title: 'Vídeo corto',
    description: 'Reels y TikToks llenos de energía con transiciones modernas, subtítulos dinámicos y un experto etalonaje de color.',
    icon: <Video className="text-pink-600" size={32} />
  },
  {
    id: '3',
    title: 'Recursos de la historia',
    description: 'Historias estáticas y con gráficos animados para lanzamientos de productos, interacción diaria y desarrollo de marca.',
    icon: <Layers className="text-blue-600" size={32} />
  },
  {
    id: '4',
    title: 'Retoque fotográfico',
    description: 'Edición profesional con Photoshop para fotografía de estilo de vida, moda y productos, con el fin de garantizar la perfección.',
    icon: <Wand2 className="text-orange-500" size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600 mb-4">Lo que hago</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Todo lo que necesitas para un <span className="font-serif italic">de clase mundial</span> presencia social.
          </h3>
          <p className="text-gray-500 text-lg">
             Ofrezco soluciones de diseño personalizadas que no solo son bonitas, sino que también fomentan el compromiso y fidelizan a los clientes con la marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 rounded-[2rem] bg-[#FDFCFB] border border-gray-100 hover:border-purple-200 transition-all duration-500 hover:-translate-y-2 group hover:shadow-2xl hover:shadow-purple-100/50"
            >
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-md">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-purple-600">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
