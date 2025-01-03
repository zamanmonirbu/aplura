import backgroundImage from "../../images/ap5.jpg"; // Replace with your overall background image path
import potatoImage from "../../images/potatoSub.jpg"; // Replace with the image for potatoes
import cornImage from "../../images/cornssub.jpg"; // Replace with the image for corn
import seedImage from "../../images/potetoSub.jpeg"; // Replace with the image for potato seeds

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
  return (
    <section
      className=" py-8 bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center p-1 sm:p-2 md:p-6 xl:p-8">
        <h2 className="text-4xl font-bold mb-8 text-secondary">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-xl transition-transform transform hover:scale-105 overflow-hidden group bg-white max-w-xs sm:max-w-sm md:max-w-md mx-auto" 
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                  opacity: 0.1,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="relative z-10 text-left text-secondary p-4">
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="mb-4 text-md">{product.description}</p>
                <h4 className="font-semibold text-xl">Features:</h4>
                <ul className="list-disc list-inside mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-secondary text-md">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Centered "Variations" button */}
                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-seconHover transition-colors text-sm md:text-base"
                    onClick={() =>
                      (window.location.href = `/products/${product.title.replace(/\s+/g, "").toLowerCase()}`)
                    } // Navigate to URL based on title
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
