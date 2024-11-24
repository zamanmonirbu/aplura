import { useEffect, useState, useRef } from "react";
import field from '../images/field.jpg';

const DeliverySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${field})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Heading with animation */}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0' : '-translate-x-32'
          }`}
        >
          Ask the potato suppliers at
          <br />
          <span className="text-white font-extrabold">Aplura</span> about delivery
        </h1>
        {/* Text with animation */}
        <p
          className={`text-lg md:text-xl mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0' : 'translate-x-[100%]'
          }`}
        >
          Contact our wholesalers for more details
        </p>
        <p
          className={`text-2xl md:text-3xl font-semibold transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0' : 'translate-x-[100%]'
          }`}
        >
          +49 123 456 789
        </p>
      </div>
    </section>
  );
};

export default DeliverySection;
