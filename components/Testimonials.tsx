import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatarUrl }) => (
  <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/80 transform hover:-translate-y-2 transition-transform duration-300 group relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <p className="text-gray-300 mb-6 relative z-10">"{quote}"</p>
    <div className="flex items-center relative z-10">
      <img className="w-12 h-12 rounded-full mr-4" src={avatarUrl} alt={name} />
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-blue-400 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      quote: "This is a game-changer. I've never felt more connected to my past. The AI summaries are surprisingly insightful and accurate.",
      name: "Sarah L.",
      title: "Photographer",
      avatarUrl: "https://picsum.photos/seed/avatar1/100/100",
    },
    {
      quote: "As someone with a terrible memory, this app is a lifesaver. It's like having a personal historian in my pocket. Highly recommended!",
      name: "David Chen",
      title: "Software Engineer",
      avatarUrl: "https://picsum.photos/seed/avatar2/100/100",
    },
    {
      quote: "The privacy features gave me the confidence to truly open up and document my life. It's beautifully designed and incredibly powerful.",
      name: "Emily Rodriguez",
      title: "Journalist",
      avatarUrl: "https://picsum.photos/seed/avatar3/100/100",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by People Worldwide</h2>
          <p className="text-lg text-gray-400 mt-4">Don't just take our word for it. Here's what our users are saying.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;