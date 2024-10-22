import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Define country data with coordinates and names
const countries = [
  { name: "Germany", coords: [51.1657, 10.4515] }, // Coordinates for Germany
  { name: "Saudi Arabia", coords: [23.8859, 45.0792] }, // Coordinates for Saudi Arabia
  { name: "India", coords: [20.5937, 78.9629] }, // Coordinates for India
  { name: "South Korea", coords: [35.9078, 127.7669] }, // Coordinates for South Korea
  { name: "South Africa", coords: [-30.5595, 22.9375] }, // Coordinates for South Africa
];

// Create a custom icon for the markers
const locationIcon = L.icon({
  iconUrl: 'https://img.icons8.com/ios-filled/50/000000/marker.png', // Use any location icon URL
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Anchor point of the icon
});

const CountryMap = () => {
  return (
    <div className="relative h-screen">
      <MapContainer 
        center={[20, 30]} // Center the map roughly to the countries of interest
        zoom={2} // Initial zoom level
        scrollWheelZoom={false} // Disable zooming with the scroll wheel
        style={{ height: "100%", width: "100%" }} // Set map dimensions
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country) => (
          <Marker key={country.name} position={country.coords} icon={locationIcon}>
            <Popup>{country.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CountryMap;
