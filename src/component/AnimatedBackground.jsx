import React from 'react';
import './BackgroundAnimation.css'; 
import bg from '../images/background.jpg'; // Import the background image

const AnimatedBackground = () => {
  return (
    <div className="relative h-400 flex items-center justify-center overflow-hidden group">
      {/* Background image with animation */}
      <div className="absolute inset-0 bg-cover bg-center animate-rise bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      </div>

      {/* Centered text and button (Hidden by default, visible on hover) */}
      <div className="z-10 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our Site</h1>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>

      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default AnimatedBackground;
