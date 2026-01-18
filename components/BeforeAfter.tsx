
import React, { useState, useRef } from 'react';
import { BeforeAfterPair } from '../types';
import before from '@/public/imgs/original.jpg';
import after from '@/public/imgs/mejorado.jpg';
const data: BeforeAfterPair[] = [
  {
    id: '1',
    title: 'Fashion Portrait Retouching',
    before: before,
    after: after,
  }
];

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos((x / rect.width) * 100);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section id="retouching" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600 mb-4">Edición de precisión</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              Impecable <span className="font-serif italic">Retoque</span>
            </h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
             Mediante técnicas avanzadas de retoque de alta gama, realzo los colores, corrijo imperfecciones y creo un aspecto de alta costura, al tiempo que mantengo la textura y los detalles naturales de la piel. </p>
            <ul className="space-y-4 mb-8">
              {['Retoque de piel', 'Gradación de color', 'Remodelación corporal', 'Limpieza de fondo'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div 
            ref={containerRef}
            className="relative h-[700px] rounded-[2.5rem] overflow-hidden cursor-ew-resize shadow-2xl group select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
           
            <img 
              src={data[0].after} 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
           
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={data[0].before} 
                alt="Antes" 
                className="absolute inset-0 h-[700px] w-auto max-w-none object-cover"
                style={{ width: containerRef.current?.offsetWidth || '100%' }}
              />
            </div>

           
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center gap-1 transition-transform group-hover:scale-110">
                <div className="w-1 h-3 bg-slate-300 rounded-full"></div>
                <div className="w-1 h-3 bg-slate-300 rounded-full"></div>
              </div>
            </div>

           
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-black tracking-widest uppercase">Antes</div>
            <div className="absolute top-6 right-6 px-4 py-2 bg-purple-600/80 backdrop-blur-md rounded-full text-white text-xs font-black tracking-widest uppercase">Después</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
