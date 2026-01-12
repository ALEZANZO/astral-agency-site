import React from 'react';
import { Share2, Target, PenTool, BarChart3 } from 'lucide-react';

const services = [
  { id: 'social', title: 'Social Media', icon: <Share2 />, color: '#00F0FF' },
  { id: 'ads', title: 'Pubblicità', icon: <Target />, color: '#FF0055' },
  { id: 'branding', title: 'Branding', icon: <PenTool />, color: '#FFD700' },
  { id: 'analytics', title: 'Analisi Dati', icon: <BarChart3 />, color: '#32CD32' },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-magenta">Il Sistema Astrale</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">I nostri servizi orbitano attorno alle esigenze principali del tuo brand, creando un'attrazione gravitazionale per i clienti.</p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
            {/* Central Sun */}
            <div className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-orange-400 to-red-600 shadow-[0_0_80px_rgba(255,100,0,0.6)] z-10 flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-xl tracking-widest">TU</span>
            </div>

            {/* Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full"></div>
            <div className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] border border-white/5 rounded-full"></div>

            {/* Planets */}
            {services.map((service, index) => {
                // Calculate position on a circle
                const angle = (index / services.length) * 2 * Math.PI;
                // Radius differs for visual interest
                const radius = index % 2 === 0 ? 150 : 250; 
                
                return (
                    <div 
                        key={service.id}
                        className="absolute flex flex-col items-center group transition-all duration-500 hover:scale-110 hover:z-50 cursor-pointer"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(calc(-50% + ${Math.cos(angle) * 140}px), calc(-50% + ${Math.sin(angle) * 140}px))`, 
                        }}
                    >
                    </div>
                );
            })}
            
            {/* Fallback Grid for easier responsiveness while maintaining the metaphor */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-6 z-20">
                 {services.map((service) => (
                    <div key={service.id} className="flex flex-col items-center">
                         <div 
                            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl mb-4 transition-transform hover:scale-110"
                            style={{
                                background: `radial-gradient(circle at 30% 30%, ${service.color}, #000)`,
                                boxShadow: `0 0 30px ${service.color}66`
                            }}
                         >
                            {service.icon}
                         </div>
                         <h3 className="text-xl font-bold uppercase tracking-wider">{service.title}</h3>
                    </div>
                 ))}
            </div>
        </div>
    </section>
  );
};

export default Services;