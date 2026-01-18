
import React from 'react';
import { Testimonial } from '../types';
import mamutLogo from '@/public/imgs/mamut-logo.png';
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Bolsos Mamut',
    role: 'Empresa de Bolsos',
    content: "Gracias al rediseño de mi perfil de Instagram, mi marca ahora se ve profesional y coherente. Pasé de tener un feed desordenado a uno que realmente conecta con mis clientes y genera más pedidos.",
    avatar: mamutLogo
  },
  {
    id: '2',
    name: 'Carlos Rivas',
    role: 'Creador de contenido en TikTok',
    content: "Me ayudó a mejorar completamente la imagen de mi perfil y mis videos. El diseño, los textos y la estructura hicieron que mi contenido se viera más atractivo y aumentara el engagement en pocas semanas.",
    avatar: 'https://picsum.photos/id/63/100/100'
  },
  {
    id: '3',
    name: 'Valentina Pérez',
    role: 'Marca personal | Venezuela',
    content: "No solo diseña, entiende cómo destacar en redes sociales. Me ayudó a optimizar mi perfil de Instagram para atraer seguidores reales y mostrar mi trabajo de forma clara y profesional.",
    avatar: 'https://picsum.photos/id/66/100/100'
  }
];


const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600 mb-4">Historias de éxito</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">Con la confianza de <span className="font-serif italic">Líderes del sector.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-10 rounded-[2.5rem] bg-[#FDFCFB] border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
