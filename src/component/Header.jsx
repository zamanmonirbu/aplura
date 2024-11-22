import { useState, useEffect } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import logo from "../images/logo1.png";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("translate-x-full"); // Toggle sliding effect
  };

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`border-gray-200 px-4 lg:px-6 py-4 text-xl lg:text-2xl xl:text-3xl text-white transition-all duration-300 ${
          isShrunk
            ? "bg-secondary bg-opacity-50 backdrop-blur-md shadow-md py-8"
            : "bg-gray-300 py-8"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              className={`mr-3 ${
                isShrunk
                  ? "h-8 w-6 lg:h-10 lg:w-8"
                  : "h-10 w-8 lg:h-12 lg:w-10"
              }`}
              alt="Logo"
            />
            <span className="self-center text-lg lg:text-xl font-semibold whitespace-nowrap">
              Aplura
            </span>
          </a>
          <div className="flex items-center space-x-4">
            {/* Phone Icon with Number */}
            <a
              href="tel:+123456789"
              className="flex items-center text-white hover:text-seconHover"
            >
              <FiPhone className="w-6 h-6" />
              <span className="ml-2">+123 456 789</span>
            </a>
            {/* Menu Icon */}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg hover:bg-seconHover focus:outline-none focus:ring-2 focus:ring-[#a3e4a3] text-white"
              onClick={toggleMenu}
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sliding Menu */}
      <div
        id="mobile-menu"
        className="fixed top-0 right-0 z-40 w-96 bg-gray-800 text-white transition-all duration-500 ease-in-out h-screen translate-x-full"
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <FiX className="w-6 h-6" />
        </button>

        <ul className="flex flex-col items-center mt-16 space-y-6 font-medium text-lg">
          {["Products", "Variants", "Contact", "About Us", "Support"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 pr-4 pl-3 rounded transition-all duration-300 text-center hover:bg-seconHover text-white"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
