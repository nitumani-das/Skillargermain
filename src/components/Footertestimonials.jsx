import React from 'react';

const testimonials = [
  {
    name: 'Diksha S',
    initials: 'DS',
    feedback:
      'Because of this course I was able to clear my two interviews... Thanks for making such wonderful content.',
    linkText: 'Business Intelligence (BI)',
    linkUrl: '#',
  },
  {
    name: 'Chethan B',
    initials: 'CB',
    feedback:
      'This has helped me so much in my career...I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course.',
    linkText: 'View this Go (golang) course.',
    linkUrl: '#',
  },
  {
    name: 'Batchu K',
    initials: 'BK',
    feedback:
      'Today, I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course.',
    linkText: 'View this Java course',
    linkUrl: '#',
  },
  {
    name: 'Ankit K',
    initials: 'AK',
    feedback:
      'I would highly recommend this Web Development Bootcamp to anyone interested in pursuing a career in web development or looking to enhance their skills in this field.',
    linkText: 'View this Web Development course',
    linkUrl: '#',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
          See what others are achieving through learning
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl text-gray-500 mb-4">“</div>
              <p className="text-gray-700 text-sm mb-6">{item.feedback}</p>

              <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold mr-3">
                  {item.initials}
                </div>
                <span className="text-sm font-medium text-gray-800">{item.name}</span>
              </div>

              <a
                href={item.linkUrl}
                className="text-purple-700 text-sm font-medium hover:underline"
              >
                {item.linkText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
