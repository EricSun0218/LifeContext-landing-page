import React, { useState, useMemo } from 'react';
import Header from './Header';

const ResearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const papers = [
    {
      title: "Context-Aware Knowledge Management in Large Language Models",
      authors: "Dr. Sarah Chen, Prof. Michael Zhang",
      journal: "Nature Machine Intelligence",
      year: "2024",
      abstract: "This paper introduces a novel approach to context-aware knowledge management using advanced transformer architectures and dynamic context retrieval mechanisms.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Knowledge Management", "LLM", "Context Awareness"]
    },
    {
      title: "Intelligent Document Processing with Multi-Modal Context Understanding",
      authors: "Dr. Alex Johnson, Dr. Maria Rodriguez",
      journal: "Journal of Artificial Intelligence Research",
      year: "2024",
      abstract: "We present a comprehensive framework for processing documents across multiple modalities while maintaining contextual coherence and semantic understanding.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Document Processing", "Multi-Modal", "Context Understanding"]
    },
    {
      title: "Personal Knowledge Graphs: Building Connected Information Ecosystems",
      authors: "Prof. David Kim, Dr. Lisa Wang",
      journal: "ACM Transactions on Knowledge Discovery",
      year: "2024",
      abstract: "This research explores the construction and maintenance of personal knowledge graphs that enable seamless information retrieval and intelligent connections.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Knowledge Graphs", "Information Retrieval", "Personal AI"]
    },
    {
      title: "AI-Powered Memory Augmentation Systems",
      authors: "Dr. Robert Taylor, Prof. Emily Chen",
      journal: "IEEE Transactions on Human-Machine Systems",
      year: "2024",
      abstract: "We investigate the design and implementation of AI systems that enhance human memory capabilities through intelligent context management and retrieval.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Memory Augmentation", "Human-AI Interaction", "Cognitive Enhancement"]
    },
    {
      title: "Multi-Modal Context Fusion for Intelligent Information Processing",
      authors: "Dr. James Wilson, Dr. Anna Liu",
      journal: "Computer Vision and Pattern Recognition",
      year: "2024",
      abstract: "This work presents novel techniques for fusing contextual information across text, images, audio, and video modalities in intelligent processing systems.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Multi-Modal", "Context Fusion", "Information Processing"]
    },
    {
      title: "Privacy-Preserving Knowledge Management in Distributed Systems",
      authors: "Prof. Michael Brown, Dr. Sarah Davis",
      journal: "ACM Computing Surveys",
      year: "2024",
      abstract: "We propose a privacy-preserving framework for distributed knowledge management that maintains data security while enabling collaborative intelligence.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Privacy", "Distributed Systems", "Knowledge Management"]
    },
    {
      title: "Neural Architecture Search for Context-Aware Recommendation Systems",
      authors: "Dr. Jennifer Lee, Prof. Carlos Martinez",
      journal: "Machine Learning Research",
      year: "2024",
      abstract: "We present an automated approach to designing neural architectures for context-aware recommendation systems using evolutionary algorithms and reinforcement learning.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Neural Architecture Search", "Recommendation Systems", "Context-Aware"]
    },
    {
      title: "Federated Learning for Personalized Knowledge Management",
      authors: "Dr. Thomas Anderson, Dr. Rachel Green",
      journal: "IEEE Transactions on Knowledge and Data Engineering",
      year: "2024",
      abstract: "This paper explores federated learning approaches for building personalized knowledge management systems while preserving user privacy and data sovereignty.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Federated Learning", "Personalization", "Privacy"]
    },
    {
      title: "Temporal Context Modeling for Dynamic Knowledge Graphs",
      authors: "Prof. Elena Rodriguez, Dr. Mark Thompson",
      journal: "Knowledge and Information Systems",
      year: "2024",
      abstract: "We introduce temporal context modeling techniques for maintaining and updating knowledge graphs over time, enabling dynamic information retrieval and reasoning.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Temporal Modeling", "Knowledge Graphs", "Dynamic Systems"]
    },
    {
      title: "Cross-Lingual Context Understanding in Multilingual Knowledge Systems",
      authors: "Dr. Hiroshi Tanaka, Dr. Maria Santos",
      journal: "Computational Linguistics",
      year: "2024",
      abstract: "This research addresses the challenges of maintaining contextual coherence across multiple languages in large-scale knowledge management systems.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Cross-Lingual", "Multilingual", "Context Understanding"]
    },
    {
      title: "Quantum-Inspired Context Retrieval for Large-Scale Knowledge Bases",
      authors: "Dr. Alice Quantum, Prof. Bob Entanglement",
      journal: "Quantum Information Processing",
      year: "2024",
      abstract: "We explore quantum-inspired algorithms for efficient context retrieval in massive knowledge bases, leveraging quantum superposition and entanglement principles.",
      image: "https://images.unsplash.com/photo-1635070041078-e43d6dd8dca3?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Quantum Computing", "Context Retrieval", "Large-Scale Systems"]
    },
    {
      title: "Explainable AI for Context-Aware Decision Making",
      authors: "Dr. Sophia Explainable, Prof. John Interpretable",
      journal: "AI and Society",
      year: "2024",
      abstract: "This work focuses on developing explainable AI systems that provide transparent reasoning for context-aware decision making in knowledge management applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      link: "#",
      tags: ["Explainable AI", "Decision Making", "Transparency"]
    }
  ];

  const filteredPapers = useMemo(() => {
    if (!searchTerm) return papers;
    
    return papers.filter(paper => 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, papers]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Research Publications</h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Cutting-edge research in intelligent context management, knowledge processing, and AI-powered memory systems
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search papers by title, authors, journal, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing {filteredPapers.length} of {papers.length} papers
              {searchTerm && (
                <span className="ml-2">
                  for "<span className="text-blue-400">{searchTerm}</span>"
                </span>
              )}
            </p>
          </div>

          {/* Research Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <div key={index} className="bg-black/40 border border-blue-500/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={paper.image} 
                    alt={paper.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full">
                      {paper.year}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{paper.title}</h3>
                  <p className="text-blue-400 text-sm mb-2">{paper.authors}</p>
                  <p className="text-gray-500 text-xs mb-3">{paper.journal}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {paper.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{paper.abstract}</p>
                  <a 
                    href={paper.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Read Paper
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredPapers.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No papers found</div>
              <p className="text-gray-500">
                Try adjusting your search terms or browse all papers by clearing the search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
