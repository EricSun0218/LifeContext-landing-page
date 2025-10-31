import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6">
          <span className="block text-5xl md:text-7xl lg:text-[8rem] font-extrabold tracking-tight mb-5 leading-none">
            <span className="text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              LifeContext
            </span>
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          Your proactive life search engine
        </p>
      </div>
    </section>
  );
};

export default Hero;