import React, { useState } from 'react';
import { Instagram, Play, Maximize2, Heart } from 'lucide-react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  {
    id: '1',
    type: 'post',
    imageUrl: '/imgs/sushi.jpg',
    title: 'Marca de sushi',
    category: 'Feed Post'
  },
  {
    id: '2',
    type: 'video',
    imageUrl: '/imgs/studio.png',
    videoUrl: '/videos/presentacion.mp4',
    title: 'Presentacion',
    category: 'Vídeo corto'
  },
  {
    id: '3',
    type: 'post',
    imageUrl: '/imgs/mamut_navidad.png',
    title: 'Ofertas navideñas',
    category: 'Carousel'
  },
  {
    id: '4',
    type: 'post',
    imageUrl: '/imgs/seguridad.jpg',
    title: 'Marca de seguridad',
    category: 'Feed Post'
  },
  {
    id: '5',
    type: 'video',
    imageUrl: '/imgs/mamut-ig.png',
     videoUrl: '/videos/mamut.mp4',
    title: 'Reels para Instagram',
    category: 'Reels'
  },
  {
    id: '6',
    type: 'post',
    imageUrl: '/imgs/servicioEncomiendas.jpg',
    title: 'Feed Post',
    category: 'Feed Post'
  },
  {
    id: '7',
    type: 'post',
    imageUrl: '/imgs/electrico.jpg',
    title: 'Morning Routine',
    category: 'Feed Post'
  },
  {
    id: '8',
    type: 'post',
    imageUrl: '/imgs/carrosuel.jpg',
    title: 'Diseño de Redes Sociales',
    category: 'Carousel'
  },
  {
    id: '9',
    type: 'story',
    imageUrl: '/imgs/batido.jpg',
    title: 'Product Launch',
    category: 'Historia'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'post' | 'video' | 'story'>('all');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems =
    filter === 'all' ? items : items.filter(item => item.type === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto">

       
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600 mb-4">
              Mi portafolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Seleccionado <span className="font-serif italic">Obras</span>
            </h3>
          </div>

          <div className="flex bg-white p-1 rounded-full shadow-sm border border-gray-100 translate-x-6 sm:translate-x-0">

            {(['all', 'post', 'video', 'story'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all capitalize ${
                  filter === f
                    ? 'bg-black text-white'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {f === 'all' ? 'Todos' : f + 's'}
              </button>
            ))}
          </div>
        </div>

       
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() =>
                item.type === 'video' &&
                item.videoUrl &&
                setActiveVideo(item.videoUrl)
              }
              className="relative group overflow-hidden rounded-[2rem] bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                    {item.category}
                  </div>
                  {item.type === 'video' ? (
                    <Play className="text-white fill-white" size={20} />
                  ) : (
                    <Instagram className="text-white" size={20} />
                  )}
                </div>

                <div className="text-white">
                  <h4 className="text-lg font-bold leading-tight mb-1">
                    {item.title}
                  </h4>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>

    
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="relative max-w-3xl w-full bg-black rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
            >
              ✕
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-auto max-h-[80vh] bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
