import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
          Your Perfect Memory,
          <br />
          <span className="text-blue-500">Powered by AI.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          LifeContext captures your thoughts and conversations, turning them into a perfectly organized, searchable, and intelligent knowledge base.
        </p>
        <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-transparent border border-gray-600 text-gray-300 font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              Get API
            </a>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Get Started Free
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;