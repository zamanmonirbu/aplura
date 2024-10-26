import React, { useState } from 'react';
import map from '../../images/MapChart_Map.png';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed transition-opacity duration-300 w-[80%] mx-auto"
      style={{
        backgroundImage: `url(${map})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Hover Effect to change opacity and show button */}
      <div className="absolute inset-0 hover:bg-black hover:bg-opacity-50 transition duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
        <button
          className="px-4 py-2 md:px-6 md:py-3 bg-white text-black rounded shadow-lg hover:bg-gray-300 transition duration-200"
          onClick={handleOpenModal}
        >
          View Map
        </button>
      </div>

      {/* Full-screen Modal for Image View */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div
            className="absolute top-4 right-4 text-2xl md:text-4xl font-bold text-white cursor-pointer z-50"
            onClick={handleCloseModal}
          >
            &times;
          </div>

          {/* Responsive Background Image Full-Screen */}
          <div
            className="w-full h-full bg-center bg-cover md:max-w-screen-lg mx-auto"
            style={{
              backgroundImage: `url(${map})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MapView;
