import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your own local images
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";

const slides = [
  {
    title: "Skills that drive you forward",
    description:
      "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
    buttonText: "View Plans",
    image: Slide1,
  },
  {
    title: "Learn from Industry Experts",
    description:
      "Our instructors are real-world pros ready to guide you with practical skills and insights.",
    buttonText: "Explore Courses",
    image: Slide2,
  },
  {
    title: "Flexible Learning Options",
    description:
      "Access classes anytime, anywhere with mobile-friendly tools and self-paced learning.",
    buttonText: "Start Now",
    image: Slide3,
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt="Slide"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay background blur (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="max-w-xl bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {slides[current].title}
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            {slides[current].description}
          </p>
          <button className="bg-purple-700 text-white px-5 py-2 rounded hover:bg-purple-800 transition">
            {slides[current].buttonText}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
