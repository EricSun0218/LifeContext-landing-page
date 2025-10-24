import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative p-12 bg-black/40 border border-blue-500/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[180px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
             Turn your conversations into structured knowledge. Start your free trial today and experience the future of memory.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Sign Up for Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;