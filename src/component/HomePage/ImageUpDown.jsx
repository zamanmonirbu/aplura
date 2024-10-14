import { useEffect, useState } from "react";
import "./ImageUpDown.css"; 

// Import your images
import imageUrl1 from '../../images/b1.jpg';
import imageUrl2 from '../../images/b2.jpg';
import imageUrl3 from '../../images/b3.jpg';
import { useNavigate } from "react-router-dom";
// Add more images as needed

const images = [imageUrl1, imageUrl2, imageUrl3]; // Array of images

const ImageUpDown = () => {
  const [text, setText] = useState("");
  const navigate=useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fullText = "Quality agricultural products tailored for your needs.";
  const handleNavigate=()=>{
    navigate('/products')
  }

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000); // Change image every 20 seconds

    return () => clearInterval(imageChangeInterval);
  }, []);

  return (
    <div className="image-container">
      <img src={images[currentImageIndex]} alt="Rising image" className="image-up-down" />
      <div className="overlay">
        <h2 className="animated-text">{text}</h2>
        <button className="animated-button" onClick={handleNavigate}>View Products</button>
      </div>
    </div>
  );
};

export default ImageUpDown;