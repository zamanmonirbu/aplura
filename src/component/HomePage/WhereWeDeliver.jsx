import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import backgroundImage from '../../images/MapChart_Map.png'; 

// Define the countries and their information
const countries = [
  { name: "Germany", coordinates: [10.4515, 51.1657], region: "Europe", services: "Agricultural supplies" },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859], region: "Middle East", services: "Seeds and fertilizers" },
  { name: "India", coordinates: [78.9629, 20.5937], region: "Asia", services: "Produce and seeds" },
  { name: "South Africa", coordinates: [22.9375, -30.5595], region: "Africa", services: "Food products" },
  { name: "Brazil", coordinates: [-51.9253, -14.2350], region: "South America", services: "Export services" },
  // Add more countries as needed
];

const WhereWeDeliver = () => {
  return (
    <section
      className="py-10 bg-cover bg-center fade-in-section" // Added fade-in class
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center text-white p-6">

        {/* Interactive World Map */}
        <div className="mb-10">
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 200 }}>
            <Geographies geography="/path/to/your/world-50m.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography 
                    key={geo.rsmKey} 
                    geography={geo} 
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    className="transition-transform transform hover:scale-105" // Add scaling effect on hover
                  />
                ))
              }
            </Geographies>
            {countries.map((country, index) => (
              <Marker key={index} coordinates={country.coordinates}>
                <circle r={8} fill="#FF5733" className="animate-pulse" /> {/* Added pulsing effect */}
                <text textAnchor="middle" y={-10} style={{ fontFamily: "Arial", fill: "#FF5733" }}>
                  {country.name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* Textual List */}
        <div className="text-left animate-fade-in">
          <h4 className="text-xl font-semibold mb-4">Countries Served:</h4>
          <ul className="list-disc list-inside">
            {countries.map((country, index) => (
              <li key={index} className="text-gray-300">{country.name} ({country.region})</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhereWeDeliver;
