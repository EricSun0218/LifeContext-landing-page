import React from 'react';

const ApplicationScenarios: React.FC = () => {
  const scenarios = [
    {
      title: "Personal Knowledge Assistant",
      description: "Transform your daily life experiences into a structured knowledge base. Capture thoughts, conversations, and activities, then retrieve insights whenever you need them.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
      alignment: "left" // text left, image right
    },
    {
      title: "Intelligent Content Creation",
      description: "Seamlessly collect materials from various sources and generate content with full context awareness. Your AI assistant understands your workflow and helps you create better content faster.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
      alignment: "right" // image left, text right
    },
    {
      title: "Life Context Search Engine",
      description: "Search across your entire life context—past conversations, documents, media, and experiences. Find exactly what you're looking for with intelligent context understanding.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop",
      alignment: "left" // text left, image right
    }
  ];

  return (
    <section className="py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-48">
        {scenarios.map((scenario, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              scenario.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-12`}
          >
            {/* Text Content */}
            <div className="md:w-2/5 px-4">
              <h3 className="text-4xl font-bold text-white mb-6">{scenario.title}</h3>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6"></div>
              <p className="text-gray-300/90 leading-relaxed text-xl">
                {scenario.description}
              </p>
            </div>

            {/* Image */}
            <div className="md:w-3/5 relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl">
              <img
                src={scenario.image}
                alt={scenario.title}
                className="w-full h-80 md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationScenarios;

