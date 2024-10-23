import { useEffect, useRef, useState } from "react";
import potatoImage from "../../images/potatoSub.jpg"; // Image for potatoes
import cornImage from "../../images/cornssub.jpg"; // Image for corn
import seedImage from "../../images/potetoSub.jpeg"; // Image for potato seeds

const products = [
  {
    title: "Potatoes for Chips Production",
    description:
      "We supply premium-grade potatoes specifically cultivated for the chip production industry. Our selection is renowned for its quality, taste, and consistency, ensuring optimal results for manufacturers.",
    features: [
      "High starch content",
      "Excellent frying characteristics",
      "Varieties suitable for various chip styles",
    ],
    imageUrl: potatoImage,
  },
  {
    title: "Yellow Corn for Tortilla Manufacturing",
    description:
      "Aplura GmbH provides high-quality yellow corn, essential for tortilla production. Our corn is sourced from reliable growers, ensuring that it meets stringent quality standards.",
    features: [
      "Superior texture and flavor",
      "High nutritional value",
      "Consistent supply for production needs",
    ],
    imageUrl: cornImage,
  },
  {
    title: "Potato Seeds",
    description:
      "We also offer premium potato seeds, catering to the AMEA region and South America. Our seeds are carefully selected to ensure high yield and disease resistance. You must get the best production from our seeds.",
    features: [
      "Disease-resistant varieties",
      "High germination rates",
      "Suitable for diverse climatic conditions",
    ],
    imageUrl: seedImage,
  },
];

const ProductOfferings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

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
    <section
      ref={sectionRef}
      className={`py-20 min-h-screen flex justify-center items-center relative transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto text-center bg-third p-5 rounded-lg shadow-lg relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-fourth">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden group bg-white max-w-xs mx-auto"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                  opacity: 0.1,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="relative z-10 text-left text-third p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="mb-4 text-sm md:text-md">{product.description}</p>
                <h4 className="font-semibold text-lg">Features:</h4>
                <ul className="list-disc list-inside mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 text-sm md:text-md">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 bg-third text-white font-semibold rounded-lg hover:bg-third transition-colors text-sm md:text-base"
                    onClick={() =>
                      (window.location.href = `/products/${product.title.replace(/\s+/g, "").toLowerCase()}`)
                    }
                  >
                    Variations
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOfferings;
