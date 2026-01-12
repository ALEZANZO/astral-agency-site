import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass-panel rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;