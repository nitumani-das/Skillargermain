import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Nitumani das",
    role: "Full Stack Developer",
    photo:
      "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "This course transformed my career. The content was very clear and practical. Highly recommend!",
  },
  {
    id: 2,
    name: "Bragavi das",
    role: "UI/UX Designer",
    photo:
      "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "The instructors were amazing and the assignments really helped me learn hands-on. Loved the structure!",
  },
  {
    id: 3,
    name: "Shrenibash",
    role: "Software Engineer",
    photo:
      "https://randomuser.me/api/portraits/men/75.jpg",
    message:
      "Great course material and support. The community was also very helpful. It boosted my confidence!",
  },
];

const TestimonialCard = ({ photo, name, role, message }) => (
  <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
    <img
      src={photo}
      alt={name}
      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-500"
    />
    <p className="text-gray-700 italic mb-4">"{message}"</p>
    <h3 className="text-lg font-semibold text-indigo-700">{name}</h3>
    <span className="text-sm text-gray-500">{role}</span>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-indigo-100 to-purple-200 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold mb-10 text-center text-indigo-900">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ id, photo, name, role, message }) => (
          <TestimonialCard
            key={id}
            photo={photo}
            name={name}
            role={role}
            message={message}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
