import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import certificationImage1 from "../../images/cf1.png"; 
import certificationImage2 from "../../images/cf2.jpg"; 
import certificationImage3 from "../../images/cf3.png"; 

const CommitmentAndLogistics = () => {
  return (
    <section className="relative py-10 overflow-hidden my-1">
      {/* Background Particles */}
      {/* <ParticlesComponent /> */}

      <div className="container mx-auto flex flex-wrap relative z-10">
        <div className="flex w-full flex-col sm:flex-row">
          {/* Commitment to Quality Section */}
          <div className="flex-1 p-4 flex flex-col justify-between bg-gray-100 rounded-lg shadow-lg h-full mr-2 mb-4 sm:mb-0 sm:mr-2">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center text-secondary">Our Quality Promise</h2>
              <p className="mb-6 text-lg text-secondary text-justify">
                At Aplura, we are dedicated to maintaining the highest standards of quality in our products. Our rigorous testing and quality control measures ensure that every product meets our stringent guidelines. 
                We believe that quality is not just about meeting customer expectations but exceeding them. Our team continuously monitors the production process, conducts regular audits, and implements improvements based on feedback.
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg text-secondary mb-2">Stringent Testing Protocols</p>
              <p className="font-semibold text-lg text-secondary mb-2">Comprehensive Quality Control</p>
              <p className="font-semibold text-lg text-secondary mb-2">Fast Delivery</p>
            </div>
          </div>

          {/* Logistics and Compliance Section */}
          <div className="flex-1 p-4 flex flex-col justify-between bg-gray-100 rounded-lg shadow-lg h-full mr-2 mb-4 sm:mb-0 sm:mr-2">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center text-secondary">Logistics & Compliance</h2>
              <p className="mb-6 text-lg text-secondary text-justify">
                Aplura specializes in international logistics and customs compliance, ensuring efficient and timely delivery of our products. Our logistics capabilities include strategic partnerships with trusted carriers, advanced tracking systems, and a dedicated team that monitors shipments to guarantee optimal performance and customer satisfaction.
              </p>
            </div>
            <ul className="list-disc mb-6 text-lg text-secondary">
              <p className="mb-2 font-semibold text-secondary ">Reliable transportation solutions</p>
              <p className="mb-2 font-semibold text-secondary">Expertise in global shipping and logistics</p>
              <p className="mb-2 font-semibold text-secondary">Compliance with international customs regulations</p>
            </ul>
          </div>

          {/* Certification Section with Carousel */}
          {/* <div className="flex-1 p-4 flex flex-col justify-between bg-gray-100 rounded-lg shadow-lg h-full">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center text-secondary">Certification</h2>
              <p className="mb-6 text-lg text-secondary text-justify">
                Our certifications reflect our commitment to maintaining the highest standards in the agricultural industry. These accreditations ensure that our processes and products meet both national and international quality benchmarks.
              </p>
            </div>
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000} 
              showThumbs={false} 
              showStatus={false} 
              showIndicators={true} 
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CommitmentAndLogistics;
