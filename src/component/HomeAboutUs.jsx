import { FaBuilding, FaSeedling, FaHandsHelping } from 'react-icons/fa'; // Importing icons
import ParticlesComponent from './Particle/ParticlesComponent';
import bgImage from '../images/Aplora.jpeg'; // Import the background image

const HomeAboutUs = () => {
  return (
   <div className='bg-third'>
     <div className="relative flex flex-col items-center p-5 bg-white text-third border rounded shadow w-[90%] md:w-[67%] mx-auto ">
      
      {/* Background Particles */}
      <ParticlesComponent />

      {/* Background image with opacity effect and fixed attachment */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed', // Set the background image to be fixed
          opacity: "10%", // Adjust opacity
        }}
      >
        {/* Add an overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ color: 'black', zIndex: 10 }}>
          About <span className="text-[#EB8317]">Aplura GmbH</span>
        </h2>

        <div className="max-w-5xl text-lg text-secondary mb-8 text-justify relative z-10 text-secondary">
          <p className="mb-4">
            Aplura GmbH is a premier agricultural supplier specializing in high-quality potatoes for chip production and yellow corn for tortilla manufacturing. With a solid foundation built on over a decade of industry experience, we pride ourselves on our commitment to excellence and our service-oriented approach.
          </p>
          <p className="mb-4">
            Our mission is to empower our clients by providing them with top-tier agricultural products, expert guidance, and unmatched customer service. We are dedicated to fostering long-lasting relationships with our customers, ensuring that their needs are met with honesty and integrity.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start max-w-5xl w-full text-fifth text-justify text-secondary">
        {/* Company Overview */}
        <div className="mb-4">
          <div className="flex items-start mb-4">
            <FaBuilding className="text-3xl mr-4" style={{ color: '#EB8317' }} />
            <span className="font-semibold">Company Overview</span>
          </div>
          <p className="mb-2">Established: May 24, 2024</p>
          <p className="mb-2">Location: Diepholz, Germany</p>
          <p className="mb-4">Industry: Agriculture</p>
        </div>

        {/* Our Commitment */}
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <FaSeedling className="text-3xl mr-4" style={{ color: '#EB8317' }} />
            <span className="font-semibold">Our Commitment</span>
          </div>
          <p className="mb-4">
            At Aplura GmbH, quality is at the heart of everything we do. We ensure that all our products adhere to the highest industry standards through rigorous testing and quality control measures. Our dedication to quality ensures that our customers receive only the best, allowing them to maintain their reputation in the market.
          </p>
        </div>

        {/* Customer Focused */}
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <FaHandsHelping className="text-3xl mr-4" style={{ color: '#EB8317' }} />
            <span className="font-semibold">Customer Focused</span>
          </div>
          <p>
            Our service-oriented approach emphasizes building long-lasting relationships with our clients, ensuring their needs are met with integrity and professionalism.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default HomeAboutUs;
