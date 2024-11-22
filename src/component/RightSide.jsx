import React from "react";
import { FaPhoneAlt, FaEnvelope, FaSearch } from "react-icons/fa";

const RightSide = () => {
  const menuItems = [
    { icon: <FaPhoneAlt />, label: "Call Us", content: "01708 341280" },
    { icon: <FaEnvelope />, label: "Email Us", content: "info@example.com" },
    { icon: <FaSearch />, label: "Search", content: "Find Products" },
  ];

  return (
    // Hide on small devices using Tailwind's `hidden` and `md:flex`
    <div className="fixed top-1/3 right-2 flex flex-col space-y-4 hidden md:flex">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="group relative flex items-center hover:bg-gray-200 hover:rounded-full transition duration-300"
        >
          {/* Icon */}
          <div className="bg-black text-white p-3 rounded-full cursor-pointer">
            {item.icon}
          </div>

          {/* Hover Content */}
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-white text-black rounded-lg shadow-md px-4 py-2 transition-all duration-300 flex items-center">
            <p className="text-sm font-semibold mr-1 w-20">{item.label}</p>
            <span className="text-sm text-gray-600 w-32">{item.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSide;
