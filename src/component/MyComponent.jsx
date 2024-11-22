import React from 'react';

const MyComponent = () => {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-4">
      {/* Left Logo Section */}
      <div className="flex items-center">
        <img src="https://via.placeholder.com/50/007bff" alt="Logo" className="w-12 h-12 mr-4 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">RUSSELL</h1>
          <p className="text-sm text-gray-500">FARMERS LTD</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="bg-gray-400 rounded-full p-2">
          <p className="text-sm text-white">01708 3412 80</p>
        </div>
        <div className="bg-gray-400 rounded-full p-2">
          <p className="text-sm text-white">E</p>
        </div>
        <div className="bg-gray-400 rounded-full p-2">
          <p className="text-sm text-white">E</p>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;