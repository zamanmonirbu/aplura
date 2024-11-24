import { useState } from 'react';
import pc1 from '../../images/sp1.jpg';
import pc2 from '../../images/sp2.jpg';
import bg from '../../images/b1.jpg'; // Background image for the whole section

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
    <div
      className="relative min-h-screen bg-cover bg-center pt-16"
      style={{
        backgroundImage: `url(${bg})`, // Set the background image
      }}
    >
      {/* Green overlay */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 p-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Potato Seeds Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SeedsProducts.map((product, index) => (
            <div
              key={index}
              className="relative group cursor-pointer flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(index)} // Handle mouse enter
              onMouseLeave={handleMouseLeave} // Handle mouse leave
            >
              {/* Background Image with overlay */}
              <div
                className="w-full max-w-xs min-h-[250px] max-h-[250px] overflow-hidden rounded-lg relative"
                style={{
                  backgroundImage: `url(${product.image})`,
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
                    <p className="text-center">{product.features}</p>
                  </div>
                )}
              </div>

              {/* Product Name */}
              <h3 className="text-center font-semibold mt-2">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotatoSeedsProducts;
