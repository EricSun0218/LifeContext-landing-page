import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What is LifeContext</h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The world's first intelligent context management platform that transforms your scattered thoughts and experiences into a powerful, connected knowledge ecosystem.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-black/40 border border-blue-500/30 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold mb-2 text-white">Smart Connection</h4>
                <p className="text-xs text-gray-400">AI-powered information linking</p>
              </div>

              <div className="text-center p-4 bg-black/40 border border-blue-500/30 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold mb-2 text-white">Privacy First</h4>
                <p className="text-xs text-gray-400">Secure data protection</p>
              </div>

              <div className="text-center p-4 bg-black/40 border border-blue-500/30 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold mb-2 text-white">Easy to Use</h4>
                <p className="text-xs text-gray-400">Intuitive design</p>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mb-3"></div>
                  <h4 className="text-white text-sm font-semibold mb-2">Knowledge Base</h4>
                  <p className="text-gray-400 text-xs">Centralized information storage</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full mb-3"></div>
                  <h4 className="text-white text-sm font-semibold mb-2">AI Processing</h4>
                  <p className="text-gray-400 text-xs">Intelligent content analysis</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20">
                  <div className="w-8 h-8 bg-green-500 rounded-full mb-3"></div>
                  <h4 className="text-white text-sm font-semibold mb-2">Smart Search</h4>
                  <p className="text-gray-400 text-xs">Context-aware retrieval</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20">
                  <div className="w-8 h-8 bg-purple-500 rounded-full mb-3"></div>
                  <h4 className="text-white text-sm font-semibold mb-2">Auto Generation</h4>
                  <p className="text-gray-400 text-xs">Content creation tools</p>
                </div>
              </div>
              
              {/* Central Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  <path d="M50 50 Q100 100 150 50" stroke="url(#line-gradient)" strokeWidth="2" fill="none"/>
                  <path d="M50 150 Q100 100 150 150" stroke="url(#line-gradient)" strokeWidth="2" fill="none"/>
                  <circle cx="100" cy="100" r="4" fill="#3B82F6" opacity="0.8"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
