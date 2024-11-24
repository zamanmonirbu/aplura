import { useEffect, useState } from "react";
import aboutSection from "../images/27370.jpg";
import field from "../images/field.jpg";

const AboutSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about-section"
      className={`relative w-full h-[70%] bg-cover bg-center bg-no-repeat py-12 px-6 transition-opacity duration-[2000ms] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${field})`,
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between h-full text-white px-6 px-[12%] transition-transform duration-1000">
        {/* Left Side - Text */}
        <div
          className={`lg:w-1/2 text-left space-y-6 transform ${
            inView ? "translate-x-0" : "-translate-x-32"
          } transition-transform duration-1000`}
        >
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            QUALITY <span className="block text-gray-200">you can trust</span>
          </h1>
          <p className="text-lg leading-relaxed text-justify text-gray-100">
            Aplura is a trusted supplier of high-quality potatoes grown
            specifically for chips. With our farms spread across the best
            agricultural lands, we ensure every potato meets the standards of
            the perfect crisp. From wholesale supply in the UK to exports across
            Europe, we are dedicated to delivering quality at competitive prices.
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          className={`lg:w-1/2 flex justify-end transform ${
            inView ? "translate-x-0" : "translate-x-32"
          } transition-transform duration-1000`}
        >
          <img
            src={aboutSection}
            alt="Aplura Potato Supply"
            className="rounded-lg shadow-lg max-h-[22rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
