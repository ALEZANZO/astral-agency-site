import React from 'react';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import Growth from './components/Growth';
import About from './components/About';
import Alien from './components/Alien';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-cyan-500 selection:text-black">
      <StarBackground />
      
      {/* Navigation (Simple Overlay) */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/10">
        <div className="text-2xl font-bold tracking-widest font-['Orbitron'] text-white">
            ASTRAL<span className="text-cyan-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-cyan-400 transition-colors">Missione</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Servizi</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Equipaggio</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Growth />
        <About />
      </main>

      <footer className="py-12 border-t border-white/10 bg-black/40 relative">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Astral Agency. Tutti i sistemi operativi.
             </div>
             <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
             </div>
          </div>
          <Alien />
      </footer>
    </div>
  );
};

export default App;