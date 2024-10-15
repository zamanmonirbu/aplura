import { useEffect, useState } from 'react';
import one from '../../images/b1.jpg';
import two from '../../images/hello3.png';
import three from '../../images/hello1.png';
import four from '../../images/hello2.jpg';
import { useNavigate } from 'react-router-dom';

const ImageTransitionComponent = () => {
  const [imageIndex, setImageIndex] = useState(0); // Start from 0 for array indexing
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('products');
  };

  const text = "Innovation Starts in the Soil.";

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 4); // Cycle through images
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing effect with 100ms delay

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className={`relative h-screen bg-fixed bg-cover bg-center transition-all duration-500`}
      style={{
        backgroundImage: `url(${[one, two, three, four][imageIndex]})`,
      }}
    >
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-100'}`}
        >
          {/* Keep the button and text in a consistent layout */}
          <h1 className="text-4xl font-bold text-center">{typedText}</h1>
          <div className="mt-4 flex justify-center"> {/* Flex container for consistent layout */}
            <button 
              onClick={handleNavigate} 
              className={`px-6 py-2 bg-[#10375C] text-white rounded-full transition-colors duration-300 
                ${isHovered ? 'hover:bg-white hover:text-[#10375C]' : ''}`}
            >
              Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTransitionComponent;
