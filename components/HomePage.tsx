import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScenarioFeatures from './ScenarioFeatures';
import Research from './Research';
import { Brain, Zap, Shield, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="text-gray-200 font-sans antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center justify-center text-center overflow-hidden pb-12">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>
            
            {/* Geometric shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/20 rounded-lg transform rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg"></div>
            </div>
            <div className="absolute bottom-32 left-16 w-24 h-24 border border-cyan-500/20 rounded-lg transform -rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M30 28h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            {/* Connection lines visualization */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="line-gradient-hero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Animated nodes */}
              <circle cx="150" cy="200" r="6" fill="#3B82F6" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="650" cy="250" r="6" fill="#06B6D4" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="400" r="8" fill="#3B82F6" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="550" r="6" fill="#06B6D4" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="600" r="6" fill="#3B82F6" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" />
              </circle>
              
              {/* Connection lines */}
              <line x1="150" y1="200" x2="400" y2="400" stroke="url(#line-gradient-hero)" strokeWidth="1.5" opacity="0.4" />
              <line x1="650" y1="250" x2="400" y2="400" stroke="url(#line-gradient-hero)" strokeWidth="1.5" opacity="0.4" />
              <line x1="200" y1="550" x2="400" y2="400" stroke="url(#line-gradient-hero)" strokeWidth="1.5" opacity="0.4" />
              <line x1="600" y1="600" x2="400" y2="400" stroke="url(#line-gradient-hero)" strokeWidth="1.5" opacity="0.4" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-28">
            <h1 className="mb-6">
              <span className="block text-5xl md:text-7xl lg:text-[8rem] font-extrabold tracking-tight mb-5 leading-none">
                <span className="text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Context
                </span>
              </span>
              <span className="block text-xl md:text-3xl lg:text-4xl font-semibold text-gray-300 tracking-wide">
                is all you need
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mt-6">
              Transform what you see, think, and do into a structured life context.
            </p>
          </div>
        </section>
        
        {/* Latest Features & Products */}
        <section className="py-20 px-4 md:px-8 -mt-40 md:-mt-48 lg:-mt-56">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Latest Features & Products</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover our newest capabilities and solutions
              </p>
            </div>

            {/* Card Grid - Large card on left, two small cards on right (one large, one small) */}
            <div className="flex flex-col lg:flex-row gap-3 h-[500px]">
              {/* Large Card - LifeContext (Left) */}
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.hash !== '#products') {
                    window.location.hash = '#products';
                  } else {
                    window.dispatchEvent(new Event('hashchange'));
                  }
                }}
                className="lg:w-2/3 group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#16213e]/80 via-[#0f3460]/70 to-[#1e3c72]/70 group-hover:from-[#16213e]/90 group-hover:via-[#0f3460]/80 group-hover:to-[#1e3c72]/80 transition-all duration-300"></div>
                </div>
                <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-20 h-20 bg-blue-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-10 h-10 text-blue-300" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                      LifeContext
                    </h3>
                    <p className="text-xl text-white/90 mb-2">Product • 7 min read</p>
                    <p className="text-lg text-white/90">
                      Proactive Life Search Engine
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">ex/lifecontext</span>
                    <div className="flex items-center gap-2 text-white/90 group-hover:text-blue-200 transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              {/* Right Column - Two cards stacked (one large, one small) */}
              <div className="lg:w-1/3 flex flex-col gap-3">
                {/* Larger Right Card */}
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.hash !== '#products') {
                      window.location.hash = '#products';
                    } else {
                      window.dispatchEvent(new Event('hashchange'));
                    }
                  }}
                className="flex-1 group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/60 via-blue-600/50 to-blue-500/40 group-hover:from-cyan-600/70 group-hover:via-blue-600/60 group-hover:to-blue-500/50 transition-all duration-300"></div>
                  </div>
                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-3 group-hover:text-cyan-100 transition-colors">
                      Graph RAG Engine
                    </h3>
                    <p className="text-sm text-white/80">RAG • 4 min read</p>
                    <p className="text-xs md:text-sm text-white/80 mt-1">
                      High‑recall retrieval with graph‑aware reranking and long‑context synthesis for precise, source‑grounded answers.
                    </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs">ex/company</span>
                      <svg className="w-5 h-5 text-white group-hover:text-cyan-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Smaller Right Card */}
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.hash !== '#products') {
                      window.location.hash = '#products';
                    } else {
                      window.dispatchEvent(new Event('hashchange'));
                    }
                  }}
                className="flex-[0.7] group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-green-500/20"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 via-emerald-600/50 to-teal-500/40 group-hover:from-green-600/70 group-hover:via-emerald-600/60 group-hover:to-teal-500/50 transition-all duration-300"></div>
                  </div>
                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-2 group-hover:text-green-100 transition-colors">
                        Open Safety Models
                      </h3>
                      <p className="text-xs text-white/80">Security • 5 min read</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs">ex/safety</span>
                      <svg className="w-4 h-4 text-white group-hover:text-green-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RAG Pipeline: Ingestion, Storage, Retrieval */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Ingestion & Parsing - text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-3">Ingestion</div>
                <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">RAG Ingestion & Parsing</h3>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-5"></div>
                <p className="text-gray-300/90 leading-relaxed mb-6">
                  Unified ingestion for documents, web pages, transcripts and structured data. Advanced parsing builds
                  clean semantic chunks with layout awareness and metadata lineage.
                </p>
                <ul className="space-y-3 text-gray-200/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                    Multi‑format support: PDF, DOCX, HTML, Markdown, Audio/Video transcripts
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                    Semantic chunking with tables/figures detection and page anchors
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                    Rich metadata: source, section, time, entity tags and permissions
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative rounded-2xl overflow-hidden border border-blue-500/20">
                <img
                  src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&h=800&fit=crop"
                  alt="RAG ingestion"
                  className="w-full h-72 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 pointer-events-none"></div>
              </div>
            </div>

            {/* Storage - image left, text right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-3">Storage</div>
                <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Vector & Graph Storage</h3>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 mb-5"></div>
                <p className="text-gray-300/90 leading-relaxed mb-6">
                  Hybrid storage that blends vector indexes with a lightweight knowledge graph so relationships and
                  context travel with your data.
                </p>
                <ul className="space-y-3 text-gray-200/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                    High‑quality embeddings with automatic dimension/quantization tuning
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                    Graph edges for citations, entities and cross‑document links
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-1" />
                    Namespaces, ACL and PII‑aware encryption by default
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative rounded-2xl overflow-hidden border border-blue-500/20">
                <img
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=800&fit=crop"
                  alt="RAG storage"
                  className="w-full h-72 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 pointer-events-none"></div>
              </div>
            </div>

            {/* Retrieval - text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">Retrieval</div>
                <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Retrieval & Answer Synthesis</h3>
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-5"></div>
                <p className="text-gray-300/90 leading-relaxed mb-6">
                  Multi‑stage retrieval (keyword + dense + graph walk) with reranking and grounded generation for
                  trustworthy answers and citations.
                </p>
                <ul className="space-y-3 text-gray-200/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                    Hybrid search with query expansion and intent detection
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                    Cross‑chunk reranking and de‑duplication for high signal context
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-1" />
                    Grounded answers with sources, highlights and follow‑up actions
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative rounded-2xl overflow-hidden border border-blue-500/20">
                <img
                  src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200&h=800&fit=crop"
                  alt="RAG retrieval"
                  className="w-full h-72 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Scenario Features */}
        <ScenarioFeatures />

        {/* Research */}
        <Research />
        
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

