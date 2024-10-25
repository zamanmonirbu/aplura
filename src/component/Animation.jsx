import React, { useEffect, useRef } from 'react';
import './Animation.css'; 
import image1 from '../images/chips1.webp';
import image2 from '../images/chips2.webp';
import image3 from '../images/chips3.webp';
import image4 from '../images/chips4.webp';
import image5 from '../images/Aplora.jpeg';

const images = [
  image1, image2, image3, image4, image5
];

const Animation = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Add fade-in class when in view
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      });
    });

    // Observe each image
    imageRefs.current.forEach(img => {
      if (img) {
        observer.observe(img);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      imageRefs.current.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className='bg-third'>

<div className="flex flex-col justify-center items-center min-h-screen mx-auto max-w-[80%]">
  {images.map((img, index) => (
    <div 
      key={index} 
      className={`w-3/4 my-5 ${index % 2 === 0 ? 'self-start' : 'self-end'}`} // Adjusted width to 3/4 for larger images
    >
      <img 
        src={img} 
        alt={`Gallery ${index}`} 
        className="gallery-img w-full h-auto" 
        ref={el => (imageRefs.current[index] = el)}
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default Animation;
