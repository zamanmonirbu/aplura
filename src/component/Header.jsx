import { useState,useEffect } from "react";
import logo from '../images/logo1.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
  return (
    <header className="sticky top-0 z-50">
     <nav className={`bg-secondary border-gray-200 px-4 lg:px-6 py-4 text-xl lg:text-2xl xl:text-3xl  text-white ${isShrunk ? 'py-2' : 'py-4'}`}>
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
    <a href="/" className="flex items-center">
      <img
        src={logo}
        className={`mr-3 ${isShrunk ? 'h-8 w-6 lg:h-10 lg:w-8' : 'h-10 w-8 lg:h-12 lg:w-10'}`}
        alt="Logo"
      />
      <span className="self-center text-lg lg:text-xl font-semibold whitespace-nowrap">
        Aplura
      </span>
    </a>
    <div className="flex items-center lg:order-2">
      <button
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-seconHover focus:outline-none focus:ring-2 focus:ring-[#a3e4a3] text-white"
        aria-controls="mobile-menu"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className={`w-5 h-5 ${isOpen ? "hidden" : "block"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className={`w-5 h-5 ${isOpen ? "block" : "hidden"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } justify-center items-center w-full lg:flex lg:w-auto lg:order-1`}
      id="mobile-menu"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-base lg:text-lg">
        {['Products', 'Variants', 'Contact', 'About Us', 'Support'].map((item) => (
          <li key={item}>
            <a
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="block py-2 pr-4 pl-3 rounded transition-all duration-300 text-center 
                hover:bg-seconHover lg:hover:bg-seconHover text-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

    </header>
  );
};

export default Header;
