import React, { useState, useRef, useEffect } from 'react';
import { Newspaper, FileText, Youtube, Mic, Rss, Globe } from 'lucide-react';

const TABS = ['Summarize', 'Chat', 'Connect', 'Review', 'Recall'];

const CONTENT = {
  Summarize: 'Get instant summaries of all your content.',
  Chat: 'Chat with your documents, videos, and articles.',
  Connect: 'Find connections between different pieces of information.',
  Review: 'Review key highlights and takeaways automatically.',
  Recall: 'Recall any information instantly with a simple search.',
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
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({});

  useEffect(() => {
    const activeTabIndex = TABS.indexOf(activeTab);
    const activeTabEl = tabsRef.current[activeTabIndex];
    if (activeTabEl) {
      setPillStyle({
        left: activeTabEl.offsetLeft,
        width: activeTabEl.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <section id="features" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Tabs */}
        <div className="relative flex items-center p-1 border border-gray-700/60 rounded-full bg-gray-900/50 backdrop-blur-sm mb-12">
          <div
            className="absolute top-1 bottom-1 h-auto bg-gray-700/50 rounded-full transition-all duration-300 ease-in-out"
            style={pillStyle}
          ></div>
          {TABS.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => (tabsRef.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-medium mb-16">{CONTENT[activeTab as keyof typeof CONTENT]}</h2>

        {/* Main visualization */}
        <div className="w-full max-w-4xl mx-auto relative h-96 flex items-center justify-between">
          {/* Left: Sources */}
          <div className="flex flex-col gap-4 w-48">
            {SOURCES.map((source) => (
              <div key={source.name} className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-700/80 bg-gray-900/60 backdrop-blur-sm text-sm">
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
      </div>
    </section>
  );
};

export default SummarizeSection;