import React from 'react';

const QuickStart: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Quick Start</h2>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop"
            alt="Quick Start"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;

