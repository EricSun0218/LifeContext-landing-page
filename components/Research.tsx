import React from 'react';

const Research: React.FC = () => {
  const papers = [
    {
      title: "Context-Aware Knowledge Management in Large Language Models",
      authors: "Dr. Sarah Chen, Prof. Michael Zhang",
      journal: "Nature Machine Intelligence",
      year: "2024",
      abstract: "This paper introduces a novel approach to context-aware knowledge management using advanced transformer architectures and dynamic context retrieval mechanisms.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Intelligent Document Processing with Multi-Modal Context Understanding",
      authors: "Dr. Alex Johnson, Dr. Maria Rodriguez",
      journal: "Journal of Artificial Intelligence Research",
      year: "2024",
      abstract: "We present a comprehensive framework for processing documents across multiple modalities while maintaining contextual coherence and semantic understanding.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Personal Knowledge Graphs: Building Connected Information Ecosystems",
      authors: "Prof. David Kim, Dr. Lisa Wang",
      journal: "ACM Transactions on Knowledge Discovery",
      year: "2024",
      abstract: "This research explores the construction and maintenance of personal knowledge graphs that enable seamless information retrieval and intelligent connections.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "AI-Powered Memory Augmentation Systems",
      authors: "Dr. Robert Taylor, Prof. Emily Chen",
      journal: "IEEE Transactions on Human-Machine Systems",
      year: "2024",
      abstract: "We investigate the design and implementation of AI systems that enhance human memory capabilities through intelligent context management and retrieval.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Multi-Modal Context Fusion for Intelligent Information Processing",
      authors: "Dr. James Wilson, Dr. Anna Liu",
      journal: "Computer Vision and Pattern Recognition",
      year: "2024",
      abstract: "This work presents novel techniques for fusing contextual information across text, images, audio, and video modalities in intelligent processing systems.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Privacy-Preserving Knowledge Management in Distributed Systems",
      authors: "Prof. Michael Brown, Dr. Sarah Davis",
      journal: "ACM Computing Surveys",
      year: "2024",
      abstract: "We propose a privacy-preserving framework for distributed knowledge management that maintains data security while enabling collaborative intelligence.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Research</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Cutting-edge research in intelligent context management and knowledge processing
          </p>
        </div>

        {/* Research Papers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
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
                <p className="text-gray-500 text-xs mb-4">{paper.journal}</p>
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
      </div>
    </section>
  );
};

export default Research;
