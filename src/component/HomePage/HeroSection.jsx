// import bg from "../../images/b1.jpg";
// import "./HeroSection.css";

// const ImageUpDown = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Fixed Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           zIndex: -1, // Ensure background is behind content
//           animation: "scaleRotateBackground 40s infinite",
//         }}
//       />

//       {/* Scrollable Content */}
//       <div className="relative z-10 flex flex-col justify-start items-center h-full p-4 overflow-auto sm:h-[90vh] md:h-[80vh] lg:h-[70vh]">
//         <div className="into flex flex-col items-center h--full mt-[7%] md:mt-[105px]">
//           <p className="text-[#DDE0E0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center uppercase opacity-0 animate-textFadeIn1">
//             Innovation Starts in the Soil
//           </p>
//           <p className="text-[#F9F9F9] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center my-4 opacity-0 animate-textFadeIn2">
//             Your Success
//           </p>
//           <p className="text-[#FFFAFA] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold md:mt-[10px] md:mb-[25px] opacity-0 animate-textFadeIn3">
//             Our Best Yield
//           </p>
//         </div>

//         {/* <ComingSoon /> */}
//       </div>

//       <style>{`
//         @keyframes scaleRotateBackground {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//           100% { transform: scale(1); }
//         }

//         @keyframes textFadeIn1 {
//           0% { opacity: 0; transformm: translateY(20px); }
//           100% { opacity: 1; transformm: translateY(0); }
//         }

//         @keyframes textFadeIn2 {
//           0% { opacity: 0; transformm: translateY(20px); }
//           100% { opacity: 1; transformm: translateY(0); }
//         }

//         @keyframes textFadeIn3 {
//           0% { opacity: 0; transformm: translateY(20px); }
//           100% { opacity: 1; transformm: translateY(0); }
//         }

//         .animate-textFadeIn1 {
//           animation: textFadeIn1 2s forwards;
//           animation-delay: 1s;
//         }
        
//         .animate-textFadeIn2 {
//           animation: textFadeIn2 2s forwards;
//           animation-delay: 2.5s;
//         }
        
//         .animate-textFadeIn3 {
//           animation: textFadeIn3 2s forwards;
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageUpDown;


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
        <div className="flex flex-col items-center mt-[10%] md:mt-[105px]">
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
