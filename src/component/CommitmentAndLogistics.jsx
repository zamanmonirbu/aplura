import { FaCheckCircle, FaShippingFast, FaRegClipboard, FaTruck, FaGlobe, FaFileContract } from 'react-icons/fa'; // Import additional icons
import certificationImage from '../images/ISO-Certifcate.png'; // Update with your certification image path

const CommitmentAndLogistics = () => {
  return (
    <section className="py-10 bg-gray-100 min-h-[600px]">
      <div className="container mx-auto flex flex-wrap">
        {/* Commitment to Quality Section */}
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-3xl font-bold mb-4">Our Quality Promise</h2>
          <p className="mb-6 text-lg text-gray-700">
            At Aplura, we are dedicated to maintaining the highest standards of quality in our products. Our rigorous testing and quality control measures ensure that every product meets our stringent guidelines. 
            We believe that quality is not just about meeting customer expectations but exceeding them. Our team continuously monitors the production process, conducts regular audits, and implements improvements based on feedback.
          </p>
          
          <div className="flex items-center mb-4">
            <FaCheckCircle className="text-green-500 text-3xl mr-2" />
            <span className="font-semibold text-lg">Stringent Testing Protocols</span>
          </div>
          <div className="flex items-center mb-4">
            <FaRegClipboard className="text-blue-500 text-3xl mr-2" />
            <span className="font-semibold text-lg">Comprehensive Quality Control</span>
          </div>
          <div className="flex items-center mb-4">
            <FaShippingFast className="text-yellow-500 text-3xl mr-2" />
            <span className="font-semibold text-lg">Fast Delivery</span>
          </div>
        </div>

        {/* Logistics and Compliance Section */}
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Logistics & Compliance</h2>
          <p className="mb-6 text-lg text-gray-700">
          Aplura specializes in international logistics and customs compliance, ensuring efficient and timely delivery of our products. Our logistics capabilities include strategic partnerships with trusted carriers, advanced tracking systems, and a dedicated team that monitors shipments to guarantee optimal performance and customer satisfaction. With a focus on sustainability, we continuously seek innovative solutions to minimize our environmental impact while maintaining high service standards        
          </p>
          <ul className="list-disc mb-6 text-lg text-gray-700">
            <li className="flex items-center mb-2">
              <FaTruck className="text-blue-500 mr-2 text-3xl my-2 " />
              <span className='font-semibold'>
              Reliable transportation solutions
              </span>
            </li>
            <li className="flex items-center mb-2">
              <FaGlobe className="text-green-500 mr-2 font-semibold text-3xl my-2" />
              <span className='font-semibold'>
              Expertise in global shipping and logistics
              </span>
              
            </li>
            <li className="flex items-center mb-2">
              <FaFileContract className="text-yellow-500 mr-2 font-semibold text-3xl my-2" />
              
              <span className='font-semibold'>
              Compliance with international customs regulations
              </span>
            </li>
          </ul>
        </div>

        {/* Certification Section */}
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Certification</h2>
          <p className="mb-6 text-lg text-gray-700">
            Our certifications reflect our commitment to maintaining the highest standards in the agricultural industry. These accreditations ensure that our processes and products meet both national and international quality benchmarks.
          </p>
          <img src={certificationImage} alt="Certifications" className="w-96 h-auto object-cover mt-4 rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default CommitmentAndLogistics;
