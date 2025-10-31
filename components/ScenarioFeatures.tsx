import React from 'react';
import { FileText, Image, Video, Mic, Code, Globe, Brain, Zap, Target, Users } from 'lucide-react';

const ScenarioFeatures: React.FC = () => {
  const scenarios = [
    {
      title: "Knowledge Management Expert",
      description: "Build personal knowledge base with intelligent document, note, and link organization",
      icon: <Brain className="w-8 h-8" />,
      features: ["Smart Classification", "Auto Tagging", "Full-text Search", "Knowledge Graph"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Content Creator",
      description: "Complete creative workflow from material collection to content generation",
      icon: <FileText className="w-8 h-8" />,
      features: ["Material Management", "Content Generation", "Multi-format Output", "Collaborative Review"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Learning Assistant",
      description: "Personalized learning paths with intelligent review reminders",
      icon: <Target className="w-8 h-8" />,
      features: ["Learning Plans", "Progress Tracking", "Review Reminders", "Knowledge Testing"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    },
    {
      title: "Team Collaborator",
      description: "Team knowledge sharing and project document management",
      icon: <Users className="w-8 h-8" />,
      features: ["Team Collaboration", "Document Sharing", "Version Control", "Permission Management"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
    },
    {
      title: "Media Producer",
      description: "Multimedia content creation and editing",
      icon: <Video className="w-8 h-8" />,
      features: ["Audio/Video Processing", "Image Editing", "Media Library", "Batch Generation"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"
    },
    {
      title: "Developer Tools",
      description: "Code management, technical documentation, and API integration",
      icon: <Code className="w-8 h-8" />,
      features: ["Code Analysis", "Document Generation", "API Integration", "Automation Scripts"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    }
  ];


  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* For Developers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">For Developers</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional knowledge management and collaboration solutions for developers
          </p>
        </div>

        {/* Developers Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {scenarios.map((scenario, index) => (
            <div key={`developers-${index}`} className="bg-black/40 border border-blue-500/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={scenario.image} 
                  alt={scenario.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                    {scenario.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{scenario.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{scenario.description}</p>
                <div className="flex flex-wrap gap-2">
                  {scenario.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* For Consumers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">For Consumers</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Intelligent life assistant and knowledge management tools for individual users
          </p>
        </div>

        {/* Consumer Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div key={`consumer-${index}`} className="bg-black/40 border border-blue-500/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={scenario.image} 
                  alt={scenario.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                    {scenario.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{scenario.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{scenario.description}</p>
                <div className="flex flex-wrap gap-2">
                  {scenario.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScenarioFeatures;
