import React from 'react';
import { Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Planet Surface */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-[#0a0a20] to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider leading-tight">
            Lancia il Tuo Brand <span className="neon-text-cyan">Oltre i Confini</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Astral è un'agenzia di marketing di nuova generazione che sfrutta l'IA e la creatività cosmica per spingere il tuo business nel futuro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" /> Inizia la Missione
            </button>
            <button className="glass-panel hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white/20 transition-all flex items-center justify-center gap-2">
              Esplora i Servizi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;