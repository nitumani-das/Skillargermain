import React from "react";

const TopFooter = () => {
  return (
    <div className="bg-gray-900 text-white py-6 px-4 border-t border-purple-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Text */}
        <p className="text-sm text-center md:text-left">
          Top companies choose{" "}
          <a href="#" className="text-purple-400 font-semibold hover:underline">
            Skillarger Business
          </a>{" "}
          to build in-demand career skills.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq" className="h-6" />
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagen" className="h-6" />
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="NetApp" className="h-6" />
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Eventbrite" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
