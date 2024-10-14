import { useEffect, useState } from "react";
import p1 from "../../images/chips.jpg"; // Potato image
import p2 from "../../images/cf2.jpg"; // Processing potato image

const PotatoAnimation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [p1, p2]; // Only two images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="relative w-96 h-96 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Stage ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PotatoAnimation;