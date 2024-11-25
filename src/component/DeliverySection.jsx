import { useEffect, useState, useRef } from "react";
import field from "../images/field.jpg";

const DeliverySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

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
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${field})`,
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <div
          className={`space-y-6 transform ${
            isVisible ? "translate-y-0" : "translate-y-10"
          } transition-transform duration-1000`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Ask the potato suppliers at
            <br />
            <span className="text-gray-200 font-extrabold">Aplura</span> about delivery
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Contact our wholesalers for more details.
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
            +49 123 456 789
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
