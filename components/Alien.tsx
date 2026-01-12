import React, { useState } from 'react';

const Alien: React.FC = () => {
  const [peek, setPeek] = useState(false);

  return (
    <div 
        className="fixed bottom-0 right-10 z-50 cursor-pointer pointer-events-auto"
        onMouseEnter={() => setPeek(true)}
        onMouseLeave={() => setPeek(false)}
        onClick={() => alert("Portami dal tuo capo! 👽")}
    >
        <div 
            className="transition-transform duration-500 ease-in-out transform origin-bottom"
            style={{ transform: peek ? 'translateY(0)' : 'translateY(70%)' }}
        >
             {/* Simple CSS Alien Head */}
             <div className="w-12 h-10 bg-green-500 rounded-t-full relative shadow-[0_-5px_10px_rgba(0,255,0,0.4)]">
                {/* Eyes */}
                <div className="absolute top-3 left-2 w-3 h-4 bg-black rounded-full rotate-[-15deg]">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-3 right-2 w-3 h-4 bg-black rounded-full rotate-[15deg]">
                     <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                </div>
             </div>
        </div>
    </div>
  );
};

export default Alien;