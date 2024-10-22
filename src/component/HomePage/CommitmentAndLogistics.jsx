import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import certificationImage1 from "../../images/cf1.png"; // Add more certification images as needed
import certificationImage2 from "../../images/cf2.jpg"; // Replace with actual image paths
import certificationImage3 from "../../images/cf3.png"; // Replace with actual image paths
import { FaCheckCircle, FaFileContract, FaGlobe, FaRegClipboard, FaShippingFast, FaTruck } from "react-icons/fa";
import ParticlesComponent from "../Particle/ParticlesComponent";

const CommitmentAndLogistics = () => {
  return (
    <section className="relative py-10  overflow-hidden">
      {/* Background Particles */}
      <ParticlesComponent />

      <div className="container mx-auto flex flex-wrap relative z-10"> {/* Ensure this has a higher z-index */}
        {/* Create a wrapper with flex-grow to ensure equal height */}
        <div className="flex w-full flex-col sm:flex-row">
          {/* Commitment to Quality Section */}
          <div className="flex-1 p-4 flex flex-col justify-between bg-slate-100 rounded-lg shadow-lg h-full mr-2 mb-4 sm:mb-0 sm:mr-2">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center text-[#10375C]">Our Quality Promise</h2>
              <p className="mb-6 text-lg text-gray-700 text-justify">
                At Aplura, we are dedicated to maintaining the highest standards of quality in our products. Our rigorous testing and quality control measures ensure that every product meets our stringent guidelines. 
                We believe that quality is not just about meeting customer expectations but exceeding them. Our team continuously monitors the production process, conducts regular audits, and implements improvements based on feedback.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-green-500 text-3xl mr-2" />
                <span className="font-semibold text-lg text-[#10375C]">Stringent Testing Protocols</span>
              </div>
              <div className="flex items-center mb-4">
                <FaRegClipboard className="text-blue-500 text-3xl mr-2" />
                <span className="font-semibold text-lg text-[#10375C]">Comprehensive Quality Control</span>
              </div>
              <div className="flex items-center mb-4">
                <FaShippingFast className="text-yellow-500 text-3xl mr-2" />
                <span className="font-semibold text-lg text-[#10375C]">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Logistics and Compliance Section */}
          <div className="flex-1 p-4 flex flex-col justify-between bg-slate-100 rounded-lg shadow-lg h-full mr-2 mb-4 sm:mb-0 sm:mr-2">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center text-[#10375C]">Logistics & Compliance</h2>
              <p className="mb-6 text-lg text-gray-700 text-justify">
                Aplura specializes in international logistics and customs compliance, ensuring efficient and timely delivery of our products. Our logistics capabilities include strategic partnerships with trusted carriers, advanced tracking systems, and a dedicated team that monitors shipments to guarantee optimal performance and customer satisfaction. With a focus on sustainability, we continuously seek innovative solutions to minimize our environmental impact while maintaining high service standards.        
              </p>
            </div>
            <ul className="list-disc mb-6 text-lg text-gray-700">
              <li className="flex items-center mb-2">
                <FaTruck className="text-blue-500 mr-2 text-3xl my-2 " />
                <span className="font-semibold text-[#10375C]">Reliable transportation solutions</span>
              </li>
              <li className="flex items-center mb-2">
                <FaGlobe className="text-green-500 mr-2 font-semibold text-3xl my-2" />
                <span className="font-semibold text-[#10375C]">Expertise in global shipping and logistics</span>
              </li>
              <li className="flex items-center mb-2">
                <FaFileContract className="text-yellow-500 mr-2 font-semibold text-3xl my-2" />
                <span className="font-semibold text-[#10375C]">Compliance with international customs regulations</span>
              </li>
            </ul>
          </div>

          {/* Certification Section with Carousel */}
          <div className="flex-1 p-4 flex flex-col justify-between bg-slate-100 rounded-lg shadow-lg h-full">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center text-[#10375C]">Certification</h2>
              <p className="mb-6 text-lg text-gray-700 text-justify">
                Our certifications reflect our commitment to maintaining the highest standards in the agricultural industry. These accreditations ensure that our processes and products meet both national and international quality benchmarks.
              </p>
            </div>
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000} // Image changes every 3 seconds
              showThumbs={false} // Hide thumbnails
              showStatus={false} // Hide status indicators
              showIndicators={true} // Show indicators
              className="rounded-lg shadow-lg"
            >
              <div>
                <img src={certificationImage1} alt="Certification 1" className="w-full h-auto object-cover" />
              </div>
              <div>
                <img src={certificationImage2} alt="Certification 2" className="w-full h-auto object-cover" />
              </div>
              <div>
                <img src={certificationImage3} alt="Certification 3" className="w-full h-auto object-cover" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentAndLogistics;
