import React, { useState } from 'react';
import './InfiniteVideoComponent.css'; // External CSS for styles

const InfiniteVideoComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="video-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video autoPlay loop muted className="video-element">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isHovered && (
        <div className="overlay-content">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <button className="hover-button">Click Here</button>
        </div>
      )}
    </div>
  );
};

export default InfiniteVideoComponent;
