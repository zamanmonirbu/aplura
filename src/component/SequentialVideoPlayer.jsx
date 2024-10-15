import { useState, useEffect, useRef } from 'react';

// Video file imports
import video1 from '../images/1video.mp4';
import video2 from '../images/2video.mp4';
import video3 from '../images/3video.mp4';
import video4 from '../images/4video.mp4';

const SequentialVideoPlayer = () => {
  const videos = [video1, video2, video3, video4]; // Array of video files
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Track which video is playing
  const videoRef = useRef(null); // Reference to the video element

  // When the current video finishes, move to the next one
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length); // Loop back to the first video after the last one
  };

  // Play the next video when currentVideoIndex changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video when changing
      videoRef.current.play(); // Automatically play the video
    }
  }, [currentVideoIndex]);

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        width="100%"
        controls
        onEnded={handleVideoEnd} // Triggered when the video ends
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SequentialVideoPlayer;
