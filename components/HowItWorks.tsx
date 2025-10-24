import React from 'react';
import { UploadCloud, Cpu, Search } from 'lucide-react';

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-black/40 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm relative overflow-hidden group shadow-lg shadow-blue-500/10">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
        <div className="mb-4 text-blue-400">
            {icon}
        </div>
        <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
          Capture, process, and rediscover your knowledge in three simple steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <Step
            icon={<UploadCloud className="w-8 h-8"/>}
            title="1. Capture Anything"
            description="Record voice notes, upload photos, or jot down thoughts. Integration with your favorite apps makes capturing seamless."
          />
          <Step
            icon={<Cpu className="w-8 h-8"/>}
            title="2. AI Does The Magic"
            description="Our powerful AI processes your entries, adding tags, summarizing content, and identifying key themes and people automatically."
          />
          <Step
            icon={<Search className="w-8 h-8"/>}
            title="3. Rediscover & Share"
            description="Easily search, explore, and get insights from your digital memory. Create beautiful stories and share them securely with loved ones."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;