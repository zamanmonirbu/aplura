import { useState } from 'react';
import pc1 from '../../images/sp1.jpg';
import pc2 from '../../images/sp2.jpg';

const SeedsProducts = [
  { name: 'Seed Russet', image: pc1, features: 'High yield, Disease-resistant, Suitable for various climates.' },
  { name: 'Seed Yukon Gold', image: pc2, features: 'Excellent taste, High market value, Adaptable to soil conditions.' },
];

const PotatoSeedsProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the index on mouse enter
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Clear the index on mouse leave
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center bg-third p-4 text-white my-8 mb-16">Potato Seeds Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SeedsProducts.map((product, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)} // Handle mouse enter
            onMouseLeave={handleMouseLeave} // Handle mouse leave
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-auto transition duration-300 ${hoveredIndex === index ? 'filter blur-sm' : ''}`}
            />
            <h3 className="text-center font-semibold mt-2">{product.name}</h3>
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 p-4 rounded">
                <p className="text-center">{product.features}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotatoSeedsProducts;
