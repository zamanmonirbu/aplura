import backgroundImage from "../images/background.jpg"; // Replace with your overall background image path
import potatoImage from "../images/potatoSub.jpg"; // Replace with the image for potatoes
import cornImage from "../images/cornssub.jpg"; // Replace with the image for corn
import seedImage from "../images/potetoSub.jpeg"; // Replace with the image for potato seeds

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
      "We also offer premium potato seeds, catering to the AMEA region and South America. Our seeds are carefully selected to ensure high yield and disease resistance.",
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
      className="py-20 bg-cover bg-center min-h-screen flex justify-center items-center" // Flexbox centering and full screen height
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center bg-white bg-opacity-90 p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-[#10375C]">Our Products</h2>{" "}
        {/* Larger title */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {" "}
          {/* Increased gap between product cards */}
          {products.map((product, index) => (
            <div
              key={index}
              className="relative h-[500px] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                  opacity: 0.2,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="relative z-10 text-left">
                <h3 className="text-2xl font-semibold mb-4 text-[#10375C]">
                  {product.title}
                </h3>
                <p className="mb-6 text-lg">{product.description}</p>
                <h4 className="font-semibold text-xl">Features:</h4>
                <ul className="list-disc list-inside">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 text-lg">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOfferings;
