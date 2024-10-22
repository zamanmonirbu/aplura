import { useState } from "react";
import ParticlesComponent from "./Particle/ParticlesComponent";

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What types of products does Aplura GmbH offer?",
      answer:
        "Aplura GmbH specializes in premium-grade potatoes for chip production, high-quality yellow corn for tortilla manufacturing, and disease-resistant potato seeds suitable for various regions.",
    },
    {
      question: "How does Aplura GmbH ensure product quality?",
      answer:
        "We adhere to stringent quality control measures, including rigorous testing and inspections, to ensure that all our products meet the highest industry standards.",
    },
    {
      question: "What countries does Aplura GmbH deliver to?",
      answer:
        "We deliver our products to several countries across Europe, the Middle East, Asia, Africa, and South America. For a complete list, please refer to our Global Presence section.",
    },
    {
      question: "How can I place an order with Aplura GmbH?",
      answer:
        "You can place an order by contacting our sales team through the contact information provided on our website. We are here to assist you with your needs.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "The minimum order quantity may vary depending on the product type. Please reach out to our sales team for specific details regarding your order.",
    },
    {
      question: "Does Aplura GmbH provide support for international shipping?",
      answer:
        "Yes, we have extensive experience in managing international logistics and customs compliance to ensure that your products reach you on time and in perfect condition.",
    },
    {
      question: "What should I do if I encounter an issue with my order?",
      answer:
        "If you encounter any issues with your order, please contact our customer support team immediately. We are committed to resolving any problems promptly.",
    },
    {
      question:
        "Can I request samples of your products before placing a large order?",
      answer:
        "Yes, we can provide product samples upon request. Please contact our sales team for more information on how to obtain samples.",
    },
    {
      question:
        "What measures does Aplura GmbH take to support sustainable agriculture?",
      answer:
        "We are dedicated to promoting sustainable practices in agriculture by offering disease-resistant seeds and implementing environmentally friendly logistics solutions.",
    },
    {
      question: "How can I stay updated on Aplura GmbH’s products and news?",
      answer:
        "You can stay informed by subscribing to our newsletter, following us on social media, or visiting our blog section for the latest updates and insights.",
    },
  ];

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen">
      {/* Particles Component in the background */}
      <ParticlesComponent />

      {/* FAQs Content */}
      <div className="relative z-10 max-w-5xl mx-auto my-10 p-5 bg-white border rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-5">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer py-3"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">
                {expandedIndex === index ? "-" : "+"}
              </span>
            </div>
            {expandedIndex === index && (
              <p className="text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
