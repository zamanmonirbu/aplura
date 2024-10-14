import backgroundImage from "../../images/b3.jpg"; // Replace with your overall background image path
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
      "We also offer premium potato seeds, catering to the AMEA region and South America. Our seeds are carefully selected to ensure high yield and disease resistance.You must get best production from our seeds. ",
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
      className="py-20 bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center bg-[#10375C] p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative h-[500px] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden group bg-white"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                  opacity: 0.1,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="relative z-10 text-left text-[#10375C]">
                <h3 className="text-2xl font-semibold mb-4">
                  {product.title}
                </h3>
                <p className="mb-6 text-lg">{product.description}</p>
                <h4 className="font-semibold text-xl">Features:</h4>
                <ul className="list-disc list-inside mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 text-lg">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Centered "Varitence" button */}
                <div className="flex justify-center">
                  <button
                    className="px-6 py-2 bg-[#10375C] text-white font-semibold rounded-lg hover:bg-[#0a0c0d] transition-colors"
                    onClick={() =>
                      window.location.href = `/products/${product.title
                        .replace(/\s+/g, "")
                        .toLowerCase()}`
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
  