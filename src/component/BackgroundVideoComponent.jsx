import { useState } from 'react';
import bgVideo from '../images/animationVideo.mp4';

const BackgroundVideoComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video as background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content on hover */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">Welcome To Aplura</h1>
        </div>
      )}
    </div>
  );
};

export default BackgroundVideoComponent;
