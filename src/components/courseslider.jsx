import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "ChatGPT",
  "Data Science",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence (AI)",
  "Statistics",
  "NLP",
];

const tagVariants = ["Trending", "Hot", "New"];

const courses = {
  ChatGPT: [
    {
      title: "ChatGPT & Generative AI - The Complete Guide",
      price: "₹939",
      rating: "4.6",
      reviews: "24,725",
      tag: "Trending",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UhnZs_RgbtVTR56Rsrm40gHaEE&pid=Api",
    },
    {
      title: "ChatGPT for Product Management & Innovation",
      price: "₹2,029",
      rating: "4.6",
      reviews: "218",
      tag: "Hot",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UhnZs_RgbtVTR56Rsrm40gHaEE&pid=Api",
    },
    {
      title: "ChatGPT Masterclass: Beginners to Experts!",
      price: "₹3,629",
      rating: "4.3",
      reviews: "9,278",
      tag: "New",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UhnZs_RgbtVTR56Rsrm40gHaEE&pid=Api",
    },
    {
      title: "ChatGPT Course For Work 2025 (Ethically)!",
      price: "₹3,819",
      rating: "4.5",
      reviews: "113,626",
      tag: "Trending",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.UhnZs_RgbtVTR56Rsrm40gHaEE&pid=Api",
    },
  ],
  "Data Science": [
    {
      title: "Data Science A-Z: Real-Life Data Science Exercises Included",
      price: "₹1,299",
      rating: "4.5",
      reviews: "45,200",
      tag: "Hot",
      image:
        "https://img-c.udemycdn.com/course/240x135/951618_0839_3.jpg",
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      price: "₹1,499",
      rating: "4.6",
      reviews: "102,458",
      tag: "Trending",
      image:
        "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
    },
  ],
};

export default function CourseSlider() {
  const [selectedCategory, setSelectedCategory] = useState("ChatGPT");
  const catRef = useRef(null);
  const courseRef = useRef(null);

  const scroll = (ref, direction) => {
    const { current } = ref;
    if (!current) return;
    const amount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (courseRef.current) {
        courseRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        All the skills you need in one place
      </h2>

      {/* Category Slider */}
      <div className="relative flex items-center mb-6">
        <button
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow hidden md:block"
          onClick={() => scroll(catRef, "left")}
        >
          <ChevronLeft />
        </button>

        <div
          ref={catRef}
          className="flex space-x-3 overflow-x-auto px-10 md:px-12 scrollbar-hide"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow hidden md:block"
          onClick={() => scroll(catRef, "right")}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Course Cards */}
      <div className="relative">
        <button
          className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hidden md:block ml-2"
          onClick={() => scroll(courseRef, "left")}
        >
          <ChevronLeft />
        </button>

        <div
          ref={courseRef}
          className="flex space-x-6 overflow-x-auto px-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {(courses[selectedCategory] || []).map((course, idx) => (
            <div
              key={idx}
              className="min-w-[250px] max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex-shrink-0 relative"
            >
              {/* Tag */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                {course.tag}
              </div>

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-[calc(100%-160px)]">
                <h3 className="text-md font-semibold mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <div className="text-yellow-500 text-sm mb-1">
                  ⭐ {course.rating} ({course.reviews})
                </div>
                <div className="text-lg font-bold text-gray-800 mb-4">
                  {course.price}
                </div>
                <button className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-sm">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hidden md:block mr-2"
          onClick={() => scroll(courseRef, "right")}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
          Show all {selectedCategory} courses
        </button>
      </div>
    </div>
  );
}
