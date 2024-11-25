import bg from "../../images/b1.jpg";
import "./HeroSection.css";

const HeroSection = () => {
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
          zIndex: -1, // Background behind content
          animation: "scaleRotateBackground 40s infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start items-center h-full p-4">
        <div className="flex flex-col items-center mt-[10%] sm: mt-[30%] md:mt-[105px]">
          <p className="text-[#DDE0E0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center uppercase opacity-0 animate-textFadeIn1">
            Innovation Starts in the Soil
          </p>
          <p className="text-[#F9F9F9] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center my-4 opacity-0 animate-textFadeIn2">
            Your Success
          </p>
          <p className="text-[#FFFAFA] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-[10px] mb-[25px] opacity-0 animate-textFadeIn3">
            Our Best Yield
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
