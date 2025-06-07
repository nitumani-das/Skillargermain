import React, { useState } from "react";
import { HiMail } from "react-icons/hi";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
      // You can add API call here
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-10 rounded-2xl bg-gray-50 border border-gray-200 shadow-md text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
        Join Our Newsletter
      </h2>
      <p className="mb-8 text-gray-700 text-lg max-w-xl mx-auto">
        Stay updated with the latest courses, offers, and exclusive content delivered to your inbox.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <div className="relative w-full sm:flex-1">
            <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-5 py-3 rounded-full border border-gray-300 bg-white text-gray-900 font-medium placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 flex items-center justify-center gap-2"
          >
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      ) : (
        <p className="mt-6 text-lg font-semibold text-green-600">
          🎉 Thanks for subscribing! You’re all set.
        </p>
      )}
    </section>
  );
};

export default NewsletterSection;
