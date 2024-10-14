import  { useState, useEffect } from "react";
import img1 from '../../images/chips.jpg';
import img2 from '../../images/cornssub.jpg';
import img3 from '../../images/chips5.png';
import img4 from '../../images/chips.jpg';


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images=[img1,img2,img3,img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-96 h-auto overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
