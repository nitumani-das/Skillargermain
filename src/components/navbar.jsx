import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const dummyUser = {
  name: "Shreenibash",
  profilePhoto: "https://i.pravatar.cc/300?img=1",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearchClick = () => {
    alert("Search clicked!");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-30 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full gap-6">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-4 flex-grow">
            <div
              className="md:hidden cursor-pointer text-gray-700 text-2xl"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-12 sm:h-16 w-auto drop-shadow-md"
              />
            </a>

            <div className="hidden md:block w-full max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses"
                  className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={handleSearchClick}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  <FaSearch className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Auth + Cart */}
          <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Categories</a>
            <a href="#" className="hover:text-blue-600">My Courses</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <a href="#" className="hover:text-blue-600">Opportunity</a>

            {isLoggedIn ? (
              <img
                src={dummyUser.profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-blue-500 cursor-pointer hover:shadow-md"
                title={dummyUser.name}
              />
            ) : (
              <div className="flex space-x-3 items-center">
                <button
                  className="px-4 py-1 border rounded-full text-center border-blue-500 text-blue-600 hover:bg-blue-50"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="px-4 py-1 rounded-full text-center bg-pink-600 text-white hover:bg-blue-700"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
                <button
                  className="px-4 py-1 rounded-full text-center bg-green-600 text-white hover:bg-green-700 flex items-center gap-1"
                  onClick={() => alert("Add to cart clicked!")}
                >
                  <FaShoppingCart />
                  Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[998] md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-[999] shadow-md transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 pt-5 pb-4 space-y-2 font-medium text-gray-700">
          <button onClick={toggleMenu} className="text-2xl mb-4 text-gray-700">
            <FaTimes />
          </button>
          <a href="#" className="block hover:text-blue-600">Categories</a>
          <a href="#" className="block hover:text-blue-600">My Courses</a>
          <a href="#" className="block hover:text-blue-600">About</a>
          <a href="#" className="block hover:text-blue-600">Contact</a>
          <a href="#" className="block hover:text-blue-600">Opportunity</a>

          {isLoggedIn ? (
            <div className="pt-3">
              <img
                src={dummyUser.profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-blue-500"
              />
              <p className="text-sm mt-1">{dummyUser.name}</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 pt-2">
              <button
                className="w-full border border-blue-500 text-blue-600 rounded-full py-1 hover:bg-blue-50"
                onClick={() => {
                  toggleMenu();
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="w-full bg-blue-600 text-white rounded-full py-1 hover:bg-blue-700"
                onClick={() => {
                  toggleMenu();
                  navigate("/signup");
                }}
              >
                Signup
              </button>
              <button
                className="w-full bg-green-600 text-white rounded-full py-1 hover:bg-green-700 flex items-center justify-center gap-1"
                onClick={() => alert("Add to cart clicked!")}
              >
                <FaShoppingCart />
                Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
