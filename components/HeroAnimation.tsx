import React from 'react';

const HeroAnimation: React.FC = () => {
  return (
    <div className="absolute w-[800px] h-[800px] flex items-center justify-center">
      {/* Central Glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[150px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
      
      {/* Outer Rings */}
      <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full animate-rotate"></div>
      <div className="absolute w-[750px] h-[750px] border border-white/5 rounded-full animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>

      {/* Inner Structure */}
      <div className="w-[500px] h-[500px] relative">
        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full"></div>
        <div className="absolute inset-4 border border-cyan-500/20 rounded-full animate-rotate" style={{ animationDuration: '15s' }}></div>
        <div className="absolute inset-8 border border-white/10 rounded-full"></div>
        
        {/* Particles */}
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full blur-[1px] animate-rotate" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/4 right-0 w-1 h-1 bg-white rounded-full animate-rotate" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-rotate" style={{ animationDuration: '12s' }}></div>
      </div>
    </div>
  );
};

export default HeroAnimation;