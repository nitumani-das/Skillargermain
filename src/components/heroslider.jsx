import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";

const slides = [
  {
    title: "Skills that drive you forward",
    description:
      "Stay ahead with modern skills in a fast-changing digital world. Learn with us and grow.",
    buttonText: "View Plans",
    image: Slide1,
  },
  {
    title: "Expert-led Learning",
    description:
      "Our instructors are working professionals — guiding you through real-world learning.",
    buttonText: "Explore Courses",
    image: Slide2,
  },
  {
    title: "Learn Anytime, Anywhere",
    description:
      "Your future starts with flexible, self-paced learning. Access from any device, anywhere.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt="Slide"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Card */}
      <div className="absolute z-20 inset-0 flex justify-center md:justify-start items-center px-4">
        <div className="bg-black/60 backdrop-blur-md text-white text-center md:text-left max-w-xl w-[90%] md:w-auto p-4 md:p-6 rounded-xl shadow-lg mx-auto md:ml-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            {slides[current].title}
          </h2>
          <p className="text-xs sm:text-sm md:text-lg mb-4 sm:mb-6">
            {slides[current].description}
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded text-xs sm:text-sm md:text-base font-semibold">
            {slides[current].buttonText}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute z-30 top-1/2 left-4 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-md"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="text-gray-900 w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-30 top-1/2 right-4 transform -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-md"
        aria-label="Next Slide"
      >
        <ChevronRight className="text-gray-900 w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}
