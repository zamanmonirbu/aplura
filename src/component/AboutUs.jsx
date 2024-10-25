import { FaBuilding, FaSeedling, FaHandsHelping } from 'react-icons/fa';
import ParticlesComponent from './Particle/ParticlesComponent';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen box-border bg-white"> {/* Removed absolute positioning */}
      <ParticlesComponent />
      
      {/* Main Content Wrapper */}
      <div className="flex flex-col items-center px-4 md:px-6 lg:px-10 py-6 md:py-10 z-10 bg-opacity-90 bg-white box-border">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: '#10375C' }}>
          About <span className="text-[#EB8317]">Aplura GmbH</span>
        </h2>

        <div className="max-w-2xl md:max-w-3xl text-base md:text-lg text-left text-secondary mb-8 box-border">
          <p className="mb-4">
            Aplura GmbH is a premier agricultural supplier specializing in high-quality potatoes for chip production and yellow corn for tortilla manufacturing. With a solid foundation built on over a decade of industry experience, we pride ourselves on our commitment to excellence and our service-oriented approach.
          </p>
          <p className="mb-4">
            Our mission is to empower our clients by providing them with top-tier agricultural products, expert guidance, and unmatched customer service. We are dedicated to fostering long-lasting relationships with our customers, ensuring that their needs are met with honesty and integrity.
          </p>
        </div>

        {/* Company Overview Section */}
        <div className="flex flex-col items-start max-w-2xl md:max-w-3xl w-full text-secondary border border-gray-300 p-4 md:p-6 rounded-md box-border mb-8">
          <div className="flex items-center mb-4">
            <FaBuilding className="text-2xl md:text-3xl mr-4" style={{ color: '#10375C' }} />
            <span className="font-semibold text-lg md:text-xl">Company Overview</span>
          </div>
          <p className="mb-2">Established: May 24, 2024</p>
          <p className="mb-2">Location: Diepholz, Germany</p>
          <p className="mb-4">Industry: Agriculture</p>

          {/* Our Commitment Section */}
          <div className="flex items-center mb-4">
            <FaSeedling className="text-2xl md:text-3xl mr-4" style={{ color: '#10375C' }} />
            <span className="font-semibold text-lg md:text-xl">Our Commitment</span>
          </div>
          <p className="mb-4">
            At Aplura GmbH, quality is at the heart of everything we do. We ensure that all our products adhere to the highest industry standards through rigorous testing and quality control measures. Our dedication to quality ensures that our customers receive only the best, allowing them to maintain their reputation in the market.
          </p>

          {/* Customer Focused Section */}
          <div className="flex items-center mb-4">
            <FaHandsHelping className="text-2xl md:text-3xl mr-4" style={{ color: '#10375C' }} />
            <span className="font-semibold text-lg md:text-xl">Customer Focused</span>
          </div>
          <p>
            Our service-oriented approach emphasizes building long-lasting relationships with our clients, ensuring their needs are met with integrity and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
