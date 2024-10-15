import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icon images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default icon for markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Array of country data
const countries = [
  { name: "Germany", coordinates: [51.1657, 10.4515], region: "Europe" },
  { name: "Saudi Arabia", coordinates: [23.8859, 45.0792], region: "Middle East" },
  { name: "India", coordinates: [20.5937, 78.9629], region: "Asia" },
  { name: "South Africa", coordinates: [-30.5595, 22.9375], region: "Africa" },
  { name: "Brazil", coordinates: [-14.2350, -51.9253], region: "South America" },
];

// MapView component
const MapView = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
        scrollWheelZoom={false} // Disable zooming with the scroll wheel
        dragging={true} // Keep dragging enabled
        zoomControl={false} // Hide zoom controls
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country) => (
          <Marker key={country.name} position={country.coordinates}>
            <Tooltip direction="top" offset={[0, -5]} opacity={1} permanent>
              {country.name}
            </Tooltip>
            <Popup>
              <strong>{country.name}</strong><br />
              Region: {country.region}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
