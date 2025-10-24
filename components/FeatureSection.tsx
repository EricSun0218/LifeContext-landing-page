import React from 'react';

interface FeatureSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ icon, title, description, imageUrl, imageAlt, reverse = false }) => {
  const direction = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${direction} items-center gap-12 lg:gap-24`}>
      <div className="md:w-1/2">
        <div className="mb-4">{icon}</div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      </div>
      <div className="md:w-1/2">
        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 shadow-2xl shadow-blue-500/10">
           <img src={imageUrl} alt={imageAlt} className="rounded-lg object-cover w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;