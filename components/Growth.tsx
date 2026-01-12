import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import GlassCard from './GlassCard';

const Growth: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visuals */}
            <div className="relative order-2 md:order-1">
                 {/* CSS Rocket representation */}
                 <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                    {/* Smoke Trail */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-64 bg-gradient-to-t from-gray-200/20 to-transparent blur-3xl"></div>
                    
                    {/* Launch Line */}
                    <div className="absolute bottom-10 left-10 right-10 top-10 border-l-2 border-b-2 border-cyan-500/30">
                        {/* Data Points */}
                         <div className="absolute bottom-0 left-[20%] w-4 h-[30%] bg-cyan-500/50"></div>
                         <div className="absolute bottom-0 left-[40%] w-4 h-[50%] bg-cyan-500/70"></div>
                         <div className="absolute bottom-0 left-[60%] w-4 h-[65%] bg-cyan-400"></div>
                         <div className="absolute bottom-0 left-[80%] w-4 h-[85%] bg-cyan-300 shadow-[0_0_20px_#00F0FF]"></div>
                    </div>

                    <img 
                        src="https://picsum.photos/seed/rocket/600/600" 
                        alt="Growth" 
                        className="absolute top-0 right-0 w-32 h-32 rounded-full object-cover border-4 border-cyan-500 shadow-lg z-10 animate-bounce"
                        style={{ animationDuration: '3s' }}
                    />
                 </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold neon-text-cyan">Traiettoria: Verso l'Alto</h2>
                <p className="text-gray-300 text-lg">
                    Non puntiamo solo alla luna; tracciamo una rotta per lo spazio profondo. Le nostre strategie basate sui dati assicurano una crescita sostenibile ed esponenziale per il tuo brand.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <GlassCard className="flex items-center gap-4 group hover:bg-white/10 transition-colors">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                        <div>
                            <h4 className="text-2xl font-bold text-white">300%</h4>
                            <p className="text-sm text-gray-400">ROI Medio</p>
                        </div>
                    </GlassCard>
                     <GlassCard className="flex items-center gap-4 group hover:bg-white/10 transition-colors">
                        <Users className="w-8 h-8 text-blue-400" />
                        <div>
                            <h4 className="text-2xl font-bold text-white">1M+</h4>
                            <p className="text-sm text-gray-400">Copertura Pubblico</p>
                        </div>
                    </GlassCard>
                     <GlassCard className="flex items-center gap-4 group hover:bg-white/10 transition-colors">
                        <DollarSign className="w-8 h-8 text-yellow-400" />
                        <div>
                            <h4 className="text-2xl font-bold text-white">50%</h4>
                            <p className="text-sm text-gray-400">Riduzione Costi</p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;