import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ParticlesComponent from "../Particle/ParticlesComponent";
import image1 from "../../images/gp1.png";
import image2 from "../../images/gp2.png";
import image3 from "../../images/gp3.png";
import image4 from "../../images/gp4.png";
import './ImageCarousel.css';

const images = [image1, image2, image3, image4];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade effect
  const [isVisible, setIsVisible] = useState(false); // State for visibility
  const carouselRef = useRef(null); // Ref for the carousel container

  // Handle Next image
  const handleNext = () => {
    if (isVisible) {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade-in after image change
      }, 500); // Delay to sync fade with image change
    }
  };

  // Handle Prev image
  const handlePrev = () => {
    if (isVisible) {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setFade(true); // Start fade-in after image change
      }, 500); // Delay to sync fade with image change
    }
  };

  // Auto-slide functionality (image changes every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      if (isVisible) {
        handleNext();
      }
    }, 3000); // 3 second interval

    return () => clearInterval(timer);
  }, [isVisible]);

  // Set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update visibility state
      },
      { threshold: 0.5 } // Trigger when at least 10% is visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current); // Start observing the carousel
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current); // Stop observing on cleanup
      }
    };
  }, []);

  return (
    <div className="carousel-container bg-[#D9D9D9] relative" ref={carouselRef}>
      {/* Add the ParticlesComponent as a background */}
      <ParticlesComponent />
      
      <div className="w-full max-w-8xl mx-auto p-4 relative z-10">
        {/* Image display with fade transition */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`w-full h-auto object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        />

        {/* Next and Prev buttons with icons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#10375C] text-white px-3 py-2 rounded hover:bg-[#8ea5ba] z-20"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#10375C] text-white px-3 py-2 rounded hover:bg-[#8ea5ba] z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
