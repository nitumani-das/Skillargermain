// src/components/Categories.jsx

import { FaCode, FaPaintBrush, FaChartLine, FaLaptopCode, FaCameraRetro, FaLanguage, FaMusic, FaBusinessTime } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Development", icon: <FaCode />, link: "/categories/development" },
  { id: 2, name: "Design", icon: <FaPaintBrush />, link: "/categories/design" },
  { id: 3, name: "Marketing", icon: <FaChartLine />, link: "/categories/marketing" },
  { id: 4, name: "IT & Software", icon: <FaLaptopCode />, link: "/categories/it-software" },
  { id: 5, name: "Photography", icon: <FaCameraRetro />, link: "/categories/photography" },
  { id: 6, name: "Language", icon: <FaLanguage />, link: "/categories/language" },
  { id: 7, name: "Music", icon: <FaMusic />, link: "/categories/music" },
  { id: 8, name: "Business", icon: <FaBusinessTime />, link: "/categories/business" },
];

export default function Categories() {
  return (
    <div className="flex flex-wrap gap-3 p-4 bg-black  justify-center">
      {categories.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition text-sm font-medium text-white shadow-sm"
        >
          <span className="text-lg">{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
