
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Video, 
  Layers, 
  Zap, 
  ChevronRight, 
  Mail, 
  MessageCircle, 
  ArrowRight,
  Menu,
  X,
  Play,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ContentAssistant from './components/ContentAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Retoque', href: '#retouching' },
    { name: 'Acerca de', href: '#about' },
    { name: 'Asistente', href: '#assistant' },
  ];

  return (
    <div className="min-h-screen">
     
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 w-28">
           <img src="/imgs/logo.png" alt="" />
          </div>

        
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-600 transition-all hover:scale-105"
            >
              Contactame
            </a>
          </div>

          <button 
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium border-b border-gray-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-purple-600 text-white px-6 py-4 rounded-xl text-center font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Hablemos
            </a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <About />
        <ContentAssistant />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-white border-t py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2 w-28">
           <img src="/public/imgs/logo.png" alt="" />
          </div>
         
          <p>Creado por Ing.Asdrúbal Morales</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
