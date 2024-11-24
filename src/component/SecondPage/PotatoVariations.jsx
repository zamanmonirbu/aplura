import { useState } from 'react';
import p1 from '../../images/ps1.jpeg';
import p2 from '../../images/ps2.jpeg';
import p3 from '../../images/ps3.jpeg';
import p4 from '../../images/ps4.jpg';
import p5 from '../../images/ps5.jpg';
import p6 from '../../images/ps6.jpg';
import bg from '../../images/b1.jpg'; // Background image for the whole section

const Variations = [
  { name: 'Russet', image: p1, features: 'High starch content, Excellent for baking and frying.' },
  { name: 'Yukon Gold', image: p2, features: 'Golden skin, Great flavor, Perfect for roasting.' },
  { name: 'Red Potatoes', image: p3, features: 'Waxy texture, Ideal for boiling and salads.' },
  { name: 'Fingerling', image: p4, features: 'Unique shape, Nutty flavor, Great for roasting.' },
  { name: 'Purple Potatoes', image: p5, features: 'Rich in antioxidants, Great for unique dishes.' },
  { name: 'New Potatoes', image: p6, features: 'Harvested early, Tender texture, Ideal for salads.' },
];

const PotatoVariations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center pt-16"
      style={{
        backgroundImage: `url(${bg})`, // Set the same background image
      }}
    >
      {/* Green overlay */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 p-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Potato Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Variations.map((potato, index) => (
            <div
              key={index}
              className="relative group cursor-pointer flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Background Image with overlay */}
              <div
                className="w-full max-w-xs h-64 min-h-[250px] max-h-[300px] overflow-hidden rounded-lg relative"
                style={{
                  backgroundImage: `url(${potato.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay with green-700 and opacity */}
                <div
                  className={`absolute inset-0 bg-green-700 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-50' : 'opacity-0'
                  }`}
                ></div>

                {/* Hovered Content */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 p-4 rounded">
                    <p className="text-center">{potato.features}</p>
                  </div>
                )}
              </div>

              {/* Potato Name */}
              <h3 className="text-center font-semibold mt-2">{potato.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotatoVariations;
