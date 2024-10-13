import  { useEffect, useState } from "react";
import "./ImageUpDown.css"; 
import imageUrl from '../images/final.png';

const ImageUpDown = () => {
  const [text, setText] = useState("");
  const fullText = "Quality agricultural products tailored for your needs.";

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

  return (
    <div className="image-container">
      <img src={imageUrl} alt="Rising image" className="image-up-down" />
      <div className="overlay">
        <h2 className="animated-text">{text}</h2>
        <button className="animated-button">View Products</button>
      </div>
    </div>
  );
};

export default ImageUpDown;
