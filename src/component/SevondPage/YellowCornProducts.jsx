import { useState } from 'react';
import c1 from '../../images/c1.jpg';
import c2 from '../../images/c2.jpg';
import c3 from '../../images/c3.jpg';
import c4 from '../../images/c4.png';
import c5 from '../../images/c5.jpg';

const CornProducts = [
  { name: 'Corn Flour', image: c1, features: 'Made from finely ground corn, Ideal for baking.' },
  { name: 'Cornmeal', image: c2, features: 'Coarser than flour, Perfect for breading and baking.' },
  { name: 'Popcorn Kernels', image: c3, features: 'High-quality kernels, Great for popping.' },
  { name: 'Corn Grains', image: c4, features: 'Whole grains, Ideal for various recipes.' },
  { name: 'Yellow Corn Chips', image: c5, features: 'Crispy snack, Perfect for dipping.' },
];

const YellowCornProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the index on mouse enter
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Clear the index on mouse leave
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center bg-[#10375C] p-4 text-white my-8 mb-16">Yellow Corn Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CornProducts.map((product, index) => (
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

export default YellowCornProducts;
