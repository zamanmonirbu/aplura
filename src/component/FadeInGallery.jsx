import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image4.jpg";
import image4 from "../images/image3.jpg";

const FadeInGallery = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.getElementById("gallery");
      const galleryTop = gallery.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (galleryTop < windowHeight) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      title: "Potato Wholesalers",
      image: image1,
      link: "/potato-wholesalers", // Example link
    },
    {
      title: "Potato Exports",
      image: image2,
      link: "/potato-wholesalers", // Example link
    },
    {
      title: "Horticultural Seeds",
      image: image3,
      link: "/horticultural-seeds", // Example link
    },
    {
      title: "Produce Range",
      image: image4,
      link: "/produce-corns", // Example link
    },
  ];

  return (
    <div
      id="gallery"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 transition-opacity duration-1000 px-[12%] bg-green-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden rounded-lg shadow-md transform transition-all duration-1000 ${
            inView
              ? index < 2
                ? "translate-x-0"
                : "translate-x-0"
              : index < 2
              ? "-translate-x-32"
              : "translate-x-32"
          }`}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-50"></div>
          {/* SVG & Text */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="35.391 33.391 130.218 133.217"
              role="presentation"
              aria-hidden="true"
              className="w-full h-36 fill-black transition-all duration-300 group-hover:h-48"
            >
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M165.609 164.184a2.428 2.428 0 0 1-2.428 2.424H37.818a2.426 2.426 0 0 1-2.427-2.424V99.589c0-2.326 2.427-4.851 2.427-4.851s59.828-59.485 60.966-60.622c1.138-1.136 2.713-.772 3.452-.034.74.738 60.569 60.656 60.569 60.656s2.663 2.677 2.804 4.851v64.595z"
                ></path>
              </g>
            </svg>
            {/* Title and Arrow */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-white font-bold text-lg">
              <span className="text-xl">{item.title}</span>
              <a
                href={item.link}
                className="mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-transform duration-300"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FadeInGallery;
