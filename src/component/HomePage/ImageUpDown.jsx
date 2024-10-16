import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../images/b1.jpg";

const ImageUpDown = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const fullText = "Innovation Starts in the Soil.";

  const handleNavigate = () => {
    navigate("/products");
  };

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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 0, // Keep background behind other elements
        }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h2 className="text-white text-3xl text-center">{text}</h2>
          <button
            className="mt-4 px-4 py-2 bg-[#10375C] text-white rounded transition duration-300 hover:bg-white hover:text-[#10375C]"
            onClick={handleNavigate}
          >
            View Products
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scaleRotateBackground {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2); 
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageUpDown;

