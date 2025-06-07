import React from 'react';

const footerData = [
  {
    title: 'In-demand Careers',
    links: [
      { name: 'Data Scientist', url: '#' },
      { name: 'Full Stack Web Developer', url: '#' },
      { name: 'Cloud Engineer', url: '#' },
      { name: 'Project Manager', url: '#' },
      { name: 'Game Developer', url: '#' },
      { name: 'See all Career Accelerators', url: '#' },
    ],
  },
  {
    title: 'Web Development',
    links: [
      { name: 'Web Development', url: '#' },
      { name: 'JavaScript', url: '#' },
      { name: 'React JS', url: '#' },
      { name: 'Angular', url: '#' },
      { name: 'Java', url: '#' },
    ],
  },
  {
    title: 'IT Certifications',
    links: [
      { name: 'Amazon AWS', url: '#' },
      { name: 'AWS Certified Cloud Practitioner', url: '#' },
      { name: 'AZ-900: Microsoft Azure Fundamentals', url: '#' },
      { name: 'AWS Certified Solutions Architect - Associate', url: '#' },
      { name: 'Kubernetes', url: '#' },
    ],
  },
  {
    title: 'Leadership',
    links: [
      { name: 'Leadership', url: '#' },
      { name: 'Management Skills', url: '#' },
      { name: 'Project Management', url: '#' },
      { name: 'Personal Productivity', url: '#' },
      { name: 'Emotional Intelligence', url: '#' },
    ],
  },
  {
    title: 'Certifications by Skill',
    links: [
      { name: 'Cybersecurity Certification', url: '#' },
      { name: 'Project Management Certification', url: '#' },
      { name: 'Cloud Certification', url: '#' },
      { name: 'Data Analytics Certification', url: '#' },
      { name: 'HR Management Certification', url: '#' },
      { name: 'See all Certifications', url: '#' },
    ],
  },
  {
    title: 'Data Science',
    links: [
      { name: 'Data Science', url: '#' },
      { name: 'Python', url: '#' },
      { name: 'Machine Learning', url: '#' },
      { name: 'ChatGPT', url: '#' },
      { name: 'Deep Learning', url: '#' },
    ],
  },
  {
    title: 'Communication',
    links: [
      { name: 'Communication Skills', url: '#' },
      { name: 'Presentation Skills', url: '#' },
      { name: 'Public Speaking', url: '#' },
      { name: 'Writing', url: '#' },
      { name: 'PowerPoint', url: '#' },
    ],
  },
  {
    title: 'Business Analytics & Intelligence',
    links: [
      { name: 'Microsoft Excel', url: '#' },
      { name: 'SQL', url: '#' },
      { name: 'Microsoft Power BI', url: '#' },
      { name: 'Data Analysis', url: '#' },
      { name: 'Business Analysis', url: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1d3e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold">
            Top companies choose <span className="text-purple-400">Skillarger Business</span> to build in-demand career skills.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center">Explore top skills and certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {footerData.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
