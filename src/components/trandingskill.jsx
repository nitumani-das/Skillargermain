import React from "react";

const trendingData = [
  {
    category: "ChatGPT is a top skill",
    links: [
      { name: "See ChatGPT courses", learners: "4,589,607 learners" },
    ]
  },
  {
    category: "Development",
    links: [
      { name: "Python", learners: "48,358,441 learners" },
      { name: "Web Development", learners: "14,116,971 learners" },
      { name: "Data Science", learners: "7,902,799 learners" }
    ]
  },
  {
    category: "Design",
    links: [
      { name: "Blender", learners: "2,964,771 learners" },
      { name: "Graphic Design", learners: "4,542,974 learners" },
      { name: "User Experience (UX) Design", learners: "2,091,903 learners" }
    ]
  },
  {
    category: "Business",
    links: [
      { name: "PMI Project Management Professional (PMP)", learners: "2,632,028 learners" },
      { name: "Microsoft Power BI", learners: "4,743,736 learners" },
      { name: "Project Management", learners: "4,076,639 learners" }
    ]
  }
];

export default function TrendingSkills() {
  return (
    <div className="bg-gray-50 py-6 px-4">
      <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {trendingData.map((section, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
            <ul className="space-y-3">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-700 font-medium hover:underline">
                    {link.name}
                  </a>
                  <p className="text-sm text-gray-500">{link.learners}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="text-purple-700 border border-purple-700 px-4 py-2 rounded hover:bg-purple-100">
          Show all trending skills ↗
        </button>
      </div>
    </div>
  );
}
