import React, { useState } from 'react';
import { Newspaper, FileText, Youtube, Mic, Rss, Globe } from 'lucide-react';

const TABS = ['Context', 'Chat', 'Docs', 'Media', 'Web', 'Workflow'];

const IMAGES = {
  Context: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop',
  Chat: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
  Docs: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
  Media: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
  Web: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop',
  Workflow: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop',
};

const SOURCES = [
  { name: 'News Articles', icon: <Newspaper className="w-5 h-5" /> },
  { name: 'PDFs', icon: <FileText className="w-5 h-5" /> },
  { name: 'YouTube Videos', icon: <Youtube className="w-5 h-5" /> },
  { name: 'Podcasts', icon: <Mic className="w-5 h-5" /> },
  { name: 'Blog posts', icon: <Rss className="w-5 h-5" /> },
  { name: 'Wikipedia', icon: <Globe className="w-5 h-5" /> },
];

const SummarizeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section id="features" className="py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Context Button with Hover-Revealed Functions */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 group">
          {/* Context Button */}
          <button
            onClick={() => setActiveTab('Context')}
            className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
              activeTab === 'Context' 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-black/40 border border-blue-500/30 text-gray-300 hover:text-white hover:border-blue-500/50'
            }`}
          >
            Context
          </button>

          {/* Arrow */}
          <div className="flex items-center text-blue-400 mx-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Other Function Buttons - Text always visible, borders on hover */}
          <div className="flex flex-wrap items-center gap-2">
            {TABS.slice(1).map((tab, index) => (
              <div key={tab} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-blue-500/20 border border-blue-500/50 text-blue-300' 
                      : 'text-gray-400 hover:text-gray-300 group-hover:bg-black/20 group-hover:border group-hover:border-gray-600/30'
                  }`}
                >
                  {tab}
                </button>
                {index < TABS.slice(1).length - 1 && (
                  <div className="text-gray-500 mx-1">•</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <div className="w-full max-w-4xl mx-auto relative h-96 mb-16">
          {activeTab === 'Context' ? (
            /* Context: Keep original visualization */
            <div className="w-full h-full flex items-center justify-between">
              {/* Left: Sources */}
              <div className="flex flex-col gap-4 w-48">
                {SOURCES.map((source) => (
                  <div key={source.name} className="flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-black/40 backdrop-blur-sm text-sm shadow-md shadow-blue-500/10">
                    <span className="text-blue-400">{source.icon}</span>
                    <span>{source.name}</span>
                  </div>
                ))}
              </div>

              {/* Center: SVG Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" className="pointer-events-none">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                  </defs>
                  {[40, 95, 150, 250, 305, 360].map((y, i) => (
                    <g key={i}>
                        <path
                            d={`M 50 ${y} C 250 ${y}, 350 200, 520 200`}
                            stroke="url(#line-gradient)"
                            strokeWidth="1"
                            fill="none"
                            filter="url(#glow)"
                        />
                         <circle cx="50" cy={y} r="2.5" fill="#06B6D4" className="animate-pulse" style={{ animationDelay: `${i * 0.1}s`}} />
                         <circle cx="520" cy="200" r="1.5" fill="#FFFFFF" className="opacity-50" />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Right: Icon */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute w-36 h-36 bg-gray-900 border border-gray-700/80 rounded-3xl transform rotate-45">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                </div>
                 <div className="absolute w-36 h-36 rounded-3xl transform rotate-45 border-2 border-blue-500/50 blur-lg"></div>
                 <div className="absolute w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl"></div>
                     <div className="absolute inset-0 transform scale-75 origin-center border-[3px] border-white rounded-full animate-rotate" style={{ animationDuration: '5s' }}></div>
                </div>
              </div>
            </div>
          ) : (
            /* Other tabs: Show different images */
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-blue-500/20">
              <img
                src={IMAGES[activeTab as keyof typeof IMAGES]}
                alt={activeTab}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 pointer-events-none"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SummarizeSection;