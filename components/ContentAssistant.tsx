
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, RefreshCw } from 'lucide-react';
import { generateIdeas } from '../service/ai.service.ts';
const ContentAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ hook: string; outline: string[]; caption: string } | null>(null);
  const handleGenerate = async () => {
    if (!topic) return;
    
    setLoading(true);
    try {
      const data = await generateIdeas(topic);
      setResult(data);
    } catch (error) {
      console.error("AI Error:", error);
      alert('Error generando contenido. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="assistant" className="py-24 bg-slate-900 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-xs font-black tracking-widest border border-purple-500/20 mb-8 uppercase">
              Herramienta gratuita de IA
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
               ¿Atascado con el contenido? <br />
              <span className="text-purple-400 font-serif italic">Pregúntale a mi asistente de IA.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
             He entrenado esta IA con mi marco personal de contenido viral. Introduce tu nicho o tema a continuación para obtener un gancho y un esquema que llamen la atención. </p>
            
            <div className="relative group">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Por Ej, marca de relojes de lujo, cuidado de la piel para hombres..."
                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl py-5 px-6 focus:border-purple-500 outline-none transition-all text-white placeholder-slate-500 pr-16"
              />
              <button 
                onClick={  handleGenerate}
                disabled={loading || !topic}
                className="absolute right-3 top-3 bottom-3 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-700 rounded-xl px-4 transition-all flex items-center justify-center"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800 border border-slate-700 rounded-[2rem] p-8 shadow-2xl relative min-h-[400px] flex flex-col justify-center">
              {result ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-400 tracking-widest block mb-2">El gancho (primeros 2 segundos)</span>
                    <h4 className="text-2xl font-bold leading-tight">"{result.hook}"</h4>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-400 tracking-widest block mb-2">Estructura del vídeo</span>
                    <ul className="space-y-2">
                      {result.outline && result.outline.map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="font-black text-purple-500">{i + 1}.</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-400 tracking-widest block mb-2">Texto del pie de foto</span>
                    <p className="text-sm text-slate-400 italic line-clamp-3 hover:line-clamp-none transition-all cursor-pointer">
                      {result.caption}
                    </p>
                  </div>

                  <button 
                    onClick={() => setResult(null)}
                    className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors"
                  >
                    <RefreshCw size={14} /> Start Over
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
                    <Sparkles size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-300">¿Listo para idear?</h4>
                  <p className="text-slate-500 max-w-xs mx-auto">Introduce un tema a la izquierda para generar tu estrategia de contenido viral impulsada.</p>
                </div>
              )}

             
              <div className="absolute top-0 right-0 p-4">
                <div className="w-4 h-4 border-t-2 border-r-2 border-slate-600"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-4 h-4 border-b-2 border-l-2 border-slate-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentAssistant;
