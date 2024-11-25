import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const RightSide = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track which item is clicked

  const menuItems = [
    { icon: <FaPhoneAlt />, label: 'Call Us', content: '+49 123 456 789' },
    { icon: <FaEnvelope />, label: 'Email Us', content: 'info@aplura.com' },
  ];

  // Function to handle click and toggle visibility
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div className="fixed top-1/3 right-2 flex flex-col space-y-4 hidden md:flex z-20">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative flex items-center transition duration-300"
        >
          {/* Icon */}
          <div
            className="bg-black text-white p-3 rounded-full cursor-pointer z-20"
            onClick={() => handleClick(index)} // Toggle onClick
          >
            {item.icon}
          </div>

          {/* Toggle Content (Visibility controlled on click) */}
          <div
            className={`absolute right-14 top-1/2 transform -translate-y-1/2 
            ${activeIndex === index ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}
            bg-white text-black rounded-lg shadow-md px-4 py-2 transition-all duration-300 flex items-center z-10`}
          >
            <p className="text-sm font-semibold mr-1 w-10">{item.label}</p>
            <span className="text-sm text-gray-600 w-32">{item.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSide;
