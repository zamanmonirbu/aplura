import { useState } from 'react';
import p1 from '../images/ps1.jpeg';
import p2 from '../images/ps2.jpeg';
import p3 from '../images/ps3.jpeg';
import p4 from '../images/ps4.jpg';
import p5 from '../images/ps5.jpg';
import p6 from '../images/ps6.jpg';

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
    setHoveredIndex(index); // Set the index on mouse enter
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Clear the index on mouse leave
  };

  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center bg-[#10375C] p-4 text-white my-8 mb-16">Potato Variations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Variations.map((potato, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)} // Handle mouse enter
            onMouseLeave={handleMouseLeave} // Handle mouse leave
          >
            <img
              src={potato.image}
              alt={potato.name}
              className={`w-full h-auto transition duration-300 ${hoveredIndex === index ? 'filter blur-sm' : ''}`}
            />
            <h3 className="text-center font-semibold mt-2">{potato.name}</h3>
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 p-4 rounded">
                <p className="text-center">{potato.features}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotatoVariations;
