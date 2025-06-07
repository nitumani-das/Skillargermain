import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    company: "Booz | Allen | Hamilton",
    title:
      "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
    stats: [
      {
        value: "93%",
        label: "retention rate among participating employees",
      },
      {
        value: "65%",
        label: "of learners noted a positive impact on their productivity",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    company: "TechCorp | Innovations",
    title: "TechCorp Drives Digital Growth With Custom Training Solutions",
    stats: [
      {
        value: "89%",
        label: "course completion rate",
      },
      {
        value: "72%",
        label: "improved digital skills in 3 months",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1616587656977-ac36a5a430bc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    company: "FutureWorks | AI Division",
    title: "FutureWorks Upskills Teams in AI and Machine Learning",
    stats: [
      {
        value: "96%",
        label: "increase in model deployment efficiency",
      },
      {
        value: "80%",
        label: "staff promotion within 6 months",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?q=80&w=2071&auto=format&fit=crop",
  },
];

export default function CaseStudySlider() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const startSlide = () => {
    stopSlide(); // clear if already running
    slideInterval.current = setInterval(nextSlide, 3000); // auto-slide every 8 seconds
  };

  const stopSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  return (
    <div
      className="bg-gray-100 py-16 px-6 md:px-24"
      onMouseEnter={stopSlide}
      onMouseLeave={startSlide}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h4 className="text-xl text-gray-700 font-semibold">
            {slides[current].company}
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {slides[current].title}
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {slides[current].stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 mt-6 rounded shadow">
            Read full story
          </button>

          <div className="flex items-center mt-10 space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex justify-center items-center rounded-full bg-white shadow hover:bg-gray-200"
            >
              &#8592;
            </button>
            <div className="flex space-x-2">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex justify-center items-center rounded-full bg-white shadow hover:bg-gray-200"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={slides[current].image}
            alt="Slide"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
