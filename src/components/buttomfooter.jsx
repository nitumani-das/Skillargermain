import React from "react";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        <div>
          <h3 className="text-white font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Discover Skillarger</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Get the app</a></li>
            <li><a href="#">Teach on Skillarger</a></li>
            <li><a href="#">Plans and Pricing</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Help and Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Skillarger for Business</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Skillarger Business</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal & Accessibility</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Accessibility statement</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-sm">
        <div className="text-white font-semibold text-lg mb-4 sm:mb-0">
          <span className="text-purple-400">Skillarger</span> &copy; 2025 Skillarger, Pvt.ltd.
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaGlobe />
          <span>English</span>
        </div>
        <div className="mt-4 sm:mt-0">
          <a href="#" className="underline hover:text-white">Cookie settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
