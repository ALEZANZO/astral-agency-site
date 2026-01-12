import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Milky Way Background Simulation */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/galaxy/1920/1080')] bg-cover bg-center opacity-20 mix-blend-screen"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Siamo Polvere di Stelle</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                    In un universo infinito di contenuti, Astral si pone come un faro di chiarezza e innovazione. Crediamo che ogni brand abbia una forza gravitazionale che aspetta solo di essere sbloccata.
                </p>
                <p>
                    Fondato da esploratori della frontiera digitale, il nostro team combina l'intuizione artistica con la pura potenza dell'intelligenza artificiale. Non seguiamo solo le tendenze; osserviamo il cosmo dei dati per prevedere dove nascerà la prossima stella.
                </p>
                <button className="mt-8 px-8 py-3 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest font-bold">
                    Contatta l'Equipaggio
                </button>
            </div>
        </div>
    </section>
  );
};

export default About;