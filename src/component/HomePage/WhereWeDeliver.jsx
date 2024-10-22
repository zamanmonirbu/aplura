import React, { useState } from 'react';
import map from '../../images/MapChart_Map.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for proper map display

// Country coordinates and names
const countries = [
  { name: "Germany", coords: [51.1657, 10.4515] },
  { name: "Saudi Arabia", coords: [23.8859, 45.0792] },
  { name: "India", coords: [20.5937, 78.9629] },
  { name: "South Korea", coords: [35.9078, 127.7669] },
  { name: "South Africa", coords: [-30.5595, 22.9375] },
];

// Custom location marker using HTML (a red circle for simplicity)
const locationIcon = L.divIcon({
  className: 'custom-icon',
  html: `<div style="background-color: red; width: 20px; height: 20px; border-radius: 50%;"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 20],
});

const MapView = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleOpenModal = (country) => {
    setSelectedCountry(country);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed transition-opacity duration-300"
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
          className="px-6 py-3 bg-white text-black rounded shadow-lg hover:bg-gray-300 transition duration-200"
          onClick={() => handleOpenModal(countries[0])} // Change as needed for specific countries
        >
          View Map
        </button>
      </div>

      {/* Modal for map view */}
      {isModalOpen && selectedCountry && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/2 max-h-full overflow-y-auto">
            {/* Larger Close Button */}
            <button
              className="absolute top-4 right-4 text-4xl font-bold text-red-500"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            {/* Map View Inside Modal */}
            <MapContainer 
              center={selectedCountry.coords} 
              zoom={5} 
              scrollWheelZoom={true} 
              style={{ height: "400px", width: "98%" }}
              dragging={true}
              touchZoom={false}
              zoomControl={true}
              doubleClickZoom={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={selectedCountry.coords} icon={locationIcon}>
                <Popup>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaMapMarkerAlt style={{ color: 'red', marginRight: '8px' }} />
                    <span>{selectedCountry.name}</span>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
