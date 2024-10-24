import bg from "../../images/b1.jpg";
import './HeroSection.css';

const ImageUpDown = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: -1, // Ensure background is behind content
          animation: "scaleRotateBackground 30s infinite",
        }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col justify-start items-center h-full p-4 overflow-auto">
        <div className="flex flex-col items-center min-h-screen mt-[7%]">
          <p className="text-[#DDE0E0] text-5xl text-center uppercase">
            Innovation Starts in the Soil
          </p>
          <p className="text-[#F9F9F9] text-3xl text-center my-4">
            Your Success
          </p>
          <p className="text-[#FFFAFA] text-5xl text-center font-bold">
            Our Best Yield
          </p>
        </div>

        <ComingSoon />
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

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <p className="text-center">Fertilizing in process...</p>
      <svg
        xmlns="http://www.w3.org/svg"
        viewBox="0 0 300 150"
        className="icon"
        style={{ maxWidth: "120px", margin: "2px auto" }} // Adjusted size
      >
        <path
          fill="none"
          stroke="#53FF1C"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="20 25"
          strokeDashoffset="0"
          d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
        >
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="8.5s"
            values="685;-685"
            keySplines="1 1 1 1"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <p className="text-center">Sustainability and Quality will be back online soon</p>
    </div>
  );
};

export default ImageUpDown;