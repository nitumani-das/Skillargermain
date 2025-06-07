import React, { useState } from 'react';

const faqData = [
  {
    question: "Who are Career Accelerators for?",
    answer:
      "Learners interested in gaining fundamental and practical skills that employers are looking for, looking to fast track learning for an entry-level career.",
  },
  {
    question: "Is any prior knowledge or experience required?",
    answer:
      "No prior knowledge is required. The program is designed to be accessible to learners of all backgrounds, regardless of previous experience.",
  },
  {
    question: "How are courses selected for career accelerators?",
    answer:
      "Courses are carefully curated by Udemy’s content experts using data-driven insights from our global learner base of over 62 million. We prioritize top-rated, fresh, and relevant courses for professional learners.",
  },
  {
    question: "What is a full-stack web developer?",
    answer:
      "A full-stack web developer is someone who is skilled in both front-end and back-end development. They build both the front-end (client-side) and work with databases, servers, and frameworks for the back-end (server-side). Full-stack developers can build and manage entire web applications from start to finish.",
  },
  {
    question: "How long does it take to become a full-stack developer?",
    answer:
      "Becoming a full-stack developer typically takes 3 months to 1 year, depending on the amount of time you can dedicate to learning. For example, if you can dedicate 30-40 hours a week it can take 3-4 months to become a full stack developer, whereas if you can spend 10-15 hours a week it could take up to one year.",
  },
  {
    question: "Is a Full-Stack Developer the same as a Web Developer?",
    answer:
      "Web developers specialize in either front-end (user interface) or back-end (server-side) development, while full-stack developers work on both. Full-stack developers handle the entire web application, from design to database management. So, a full-stack developer is a type of web developer, but not all web developers are full-stack.",
  },
  {
    question: "Can I become a full stack developer with no experience?",
    answer:
      "Yes, you can become a full-stack developer without experience. Employers often prioritize job applicants who can demonstrate the skills needed to be successful. Online classes - like those offered by Udemy - can provide the skills and projects that can route you to a full-stack developer career.",
  },
];

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const displayedFaqs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
      <div className="space-y-4">
        {displayedFaqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-md shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-xl">{openIndexes.includes(index) ? '−' : '+'}</span>
            </button>
            {openIndexes.includes(index) && (
              <div className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-indigo-600 font-medium hover:underline"
        >
          {showAll ? 'Show less' : 'Show more'}
        </button>
      </div>
    </section>
  );
}
