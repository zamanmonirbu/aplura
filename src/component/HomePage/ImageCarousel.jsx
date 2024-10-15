import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import image1 from "../../images/gp1.png";
import image2 from "../../images/gp2.png";
import image3 from "../../images/gp3.png";
import image4 from "../../images/gp4.png";

const images = [image1, image2, image3, image4];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade effect

  // Handle Next image
  const handleNext = () => {
    setFade(false); // Start fade-out

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true); // Start fade-in after image change
    }, 500); // Delay to sync fade with image change
  };

  // Handle Prev image
  const handlePrev = () => {
    setFade(false); // Start fade-out

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true); // Start fade-in after image change
    }, 500); // Delay to sync fade with image change
  };

  // Auto-slide functionality (image changes every 2 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // 3 second interval

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#D9D9D9]">
      <div className="w-full max-w-8xl mx-auto p-4 relative">
        {/* Image display with fade transition */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`w-full h-auto object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        />

        {/* Next and Prev buttons with icons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#10375C] text-white px-3 py-2 rounded hover:bg-[#8ea5ba]"
        >
          <FaChevronLeft /> {/* Prev Icon */}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#10375C] text-white px-3 py-2 rounded hover:bg-[#8ea5ba]"
        >
          <FaChevronRight /> {/* Next Icon */}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
