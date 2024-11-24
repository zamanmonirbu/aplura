import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState, useRef } from "react";

const CommitmentAndLogistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-green-700">
      <section
        ref={sectionRef}
        className={`relative max-w-screen-lg mx-auto py-10 overflow-hidden transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto flex flex-wrap relative z-10">
          <div className="flex w-full flex-col sm:flex-row">
            {/* Left Section - Quality Promise */}
            <div
              className={`flex-1 p-4 flex flex-col justify-between bg-gray-100 rounded-lg shadow-lg h-full mr-2 mb-4 sm:mb-0 sm:mr-2 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0' : '-translate-x-32'
              }`}
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 text-center text-secondary">
                  Our Quality Promise
                </h2>
                <p className="mb-6 text-lg text-secondary text-justify">
                  At Aplura, we are dedicated to maintaining the highest
                  standards of quality in our products. Our rigorous testing and
                  quality control measures ensure that every product meets our
                  stringent guidelines. We believe that quality is not just
                  about meeting customer expectations but exceeding them. Our
                  team continuously monitors the production process, conducts
                  regular audits, and implements improvements based on feedback.
                </p>
              </div>
              <div>
                <p className="font-semibold text-lg text-secondary mb-2">
                  Stringent Testing Protocols
                </p>
                <p className="font-semibold text-lg text-secondary mb-2">
                  Comprehensive Quality Control
                </p>
                <p className="font-semibold text-lg text-secondary mb-2">
                  Fast Delivery
                </p>
              </div>
            </div>

            {/* Right Section - Logistics & Compliance */}
            <div
              className={`flex-1 p-4 flex flex-col justify-between bg-gray-100 rounded-lg shadow-lg h-full mr-2 mb-4 sm:mb-0 sm:mr-2 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0' : 'translate-x-[100%]'
              }`}
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 text-center text-secondary">
                  Logistics & Compliance
                </h2>
                <p className="mb-6 text-lg text-secondary text-justify">
                  Aplura specializes in international logistics and customs
                  compliance, ensuring efficient and timely delivery of our
                  products. Our logistics capabilities include strategic
                  partnerships with trusted carriers, advanced tracking systems,
                  and a dedicated team that monitors shipments to guarantee
                  optimal performance and customer satisfaction.
                </p>
              </div>
              <ul className="list-disc mb-6 text-lg text-secondary">
                <p className="mb-2 font-semibold text-secondary">
                  Reliable transportation solutions
                </p>
                <p className="mb-2 font-semibold text-secondary">
                  Expertise in global shipping and logistics
                </p>
                <p className="mb-2 font-semibold text-secondary">
                  Compliance with international customs regulations
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommitmentAndLogistics;
