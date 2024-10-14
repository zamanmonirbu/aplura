import { useEffect, useState } from 'react';
import img1 from '../../images/p1.jpg'; // replace with your actual image paths
import img2 from '../../images/p2.jpg';
import img3 from '../../images/p3.jpg';
import img4 from '../../images/p4.jpg';
import img5 from '../../images/p5.jpg';
import './AnimatedImageContainer.css'; 

const AnimatedImageContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // Cycle through 5 images
    }, 2000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative  w-full h-96 bg-cover bg-center transition-opacity duration-300 py-10 bg-[#10375C]"
      style={{ backgroundImage: "url('../../images/background.jpg')" }}
    >
      <div className="absolute inset-0 flex justify-between items-center p-4">
        {/* Image 1 */}
        <div className={`w-1/5 h-auto ${activeIndex === 0 ? 'scale' : ''} mx-2`}>
          <img src={img1} alt="Image 1" className="image w-full h-full object-contain " />
        </div>

        {/* Image 2 */}
        <div className={`w-1/5 h-auto ${activeIndex === 1 ? 'scale' : ''} mx-2`}>
          <img src={img2} alt="Image 2" className="image w-full h-full object-contain" />
        </div>

        {/* Image 3 */}
        <div className={`w-1/5 h-auto ${activeIndex === 2 ? 'scale' : ''} mx-2`}>
          <img src={img3} alt="Image 3" className="image w-full h-full object-contain" />
        </div>

        {/* Image 4 */}
        <div className={`w-1/5 h-auto ${activeIndex === 3 ? 'scale' : ''} mx-2`}>
          <img src={img4} alt="Image 4" className="image w-full h-full object-contain" />
        </div>

        {/* Image 5 */}
        <div className={`w-1/5 h-auto ${activeIndex === 4 ? 'scale' : ''} mx-2`}>
          <img src={img5} alt="Image 5" className="image w-full h-full object-contain" />
        </div>
      </div>

      {/* Progress Line */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1">
        <div
          className="h-full bg-[#10375C] transition-all duration-500"
          style={{ width: `${(activeIndex + 1) * 20}%` }} // Progress for 5 images
        />
      </div> */}
    </div>
  );
};

export default AnimatedImageContainer;
