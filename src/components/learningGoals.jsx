import React from "react";
import { FaHandsHelping, FaCertificate, FaChartBar, FaCogs } from "react-icons/fa";

const LearningGoals = () => {
  return (
    <section className="bg-gray-50 text-gray-800 px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Goals List */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Learning focused on your goals
          </h2>

          <div className="space-y-4">
            {/* Card 1 */}
            <a href="#" className="block border border-purple-600 p-5 rounded-md shadow-sm bg-white hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-4">
                <FaHandsHelping className="text-2xl text-purple-600 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Hands-on training</h3>
                  <p className="text-sm mt-1">
                    Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="#" className="block bg-white border p-5 rounded-md shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-4">
                <FaCertificate className="text-2xl text-gray-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Certification prep</h3>
                  <p className="text-sm mt-1">
                    Prep for industry-recognized certifications by solving real-world challenges and earning badges along the way.
                  </p>
                  <span className="text-purple-600 font-semibold text-sm mt-2 inline-block">
                    Explore courses →
                  </span>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="#" className="block bg-white border p-5 rounded-md shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-4">
                <FaChartBar className="text-2xl text-gray-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Insights and analytics
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-0.5 rounded">
                      Enterprise Plan
                    </span>
                  </h3>
                  <p className="text-sm mt-1">
                    Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.
                  </p>
                  <span className="text-purple-600 font-semibold text-sm mt-2 inline-block">
                    Find out more →
                  </span>
                </div>
              </div>
            </a>

            {/* Card 4 */}
            <a href="#" className="block bg-white border p-5 rounded-md shadow-sm hover:shadow-lg transition duration-300">
              <div className="flex items-start gap-4">
                <FaCogs className="text-2xl text-gray-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Customizable content
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-0.5 rounded">
                      Enterprise Plan
                    </span>
                  </h3>
                  <p className="text-sm mt-1">
                    Create tailored learning paths for team and organization goals and even host your own content and resources.
                  </p>
                  <span className="text-purple-600 font-semibold text-sm mt-2 inline-block">
                    Find out more →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT: Just the image (no styling) */}
        <div className="hidden lg:block">
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
            alt="Learning Goals"
          />
        </div>
      </div>
    </section>
  );
};

export default LearningGoals;
