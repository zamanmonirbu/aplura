import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa"; // Importing icons from react-icons

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Aplura has transformed our supply chain efficiency. Their products are top-notch & reliable!",
      company: "AgriTech Innovations",
      rating: 5,
    },
    {
      name: "Jane Smith",
      feedback:
        "Exceptional service and quality! Aplura goes above and beyond to meet our needs.",
      company: "EcoFarm Solutions",
      rating: 4,
    },
    {
      name: "Mike Johnson",
      feedback:
        "We trust Aplura for all our agricultural supplies. Their commitment to quality is unmatched.",
      company: "Harvest Masters",
      rating: 5,
    },
    {
      name: "Emily Davis",
      feedback:
        "The quality of Aplura’s products is outstanding. They have become our go-to supplier.",
      company: "GreenField Co.",
      rating: 4,
    },
    {
      name: "Sarah Wilson",
      feedback:
        "Aplura’s customer service is excellent! They are always ready to help us with our inquiries.",
      company: "Farm Fresh Ltd.",
      rating: 5,
    },
    {
      name: "David Brown",
      feedback:
        "We have seen significant improvements in our yields since using Aplura products.",
      company: "Agro Solutions",
      rating: 4,
    },
    {
      name: "Laura Green",
      feedback:
        "Aplura’s commitment to sustainability is admirable. We love working with such a responsible company.",
      company: "Sustainable Farming Inc.",
      rating: 5,
    },
    {
      name: "James White",
      feedback:
        "Their products are consistently high-quality. We have never had any issues with them.",
      company: "Precision Agri",
      rating: 5,
    },
    {
      name: "Olivia Lee",
      feedback:
        "The team at Aplura is knowledgeable and professional. They provide excellent support.",
      company: "CropTech",
      rating: 4,
    },
    {
      name: "Daniel Martinez",
      feedback:
        "We appreciate the timely delivery and great communication from Aplura.",
      company: "Field Innovations",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.floor(testimonials.length / testimonialsPerPage)
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.floor(testimonials.length / testimonialsPerPage)
        ? 0
        : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-yellow-500 ${
          index < rating ? "fas fa-star" : "far fa-star"
        }`}
      >
        ★
      </span>
    ));
  };

  const startIndex = currentIndex * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  return (
    <section className="py-10 bg-[#10375C]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          What Our Clients Say
        </h2>
        <div className="flex items-center justify-center">
          {/* Prev button */}
          <button
            className="bg-[#10375C] text-white py-2 px-4 rounded hover:bg-[#697e91] mr-4"
            onClick={handlePrev}
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>

          {/* Testimonials content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg text-center "
              >
                <p className="text-lg italic text-[#10375C]">
                  <FaQuoteLeft className="inline text-xl" />
                  {testimonial.feedback}
                  <FaQuoteRight className="inline text-xl" />
                </p>
                <h3 className="font-bold text-lg mt-4">{testimonial.name}</h3>
                <h4 className="text-gray-500">{testimonial.company}</h4>
                <div className="mt-2">{renderStars(testimonial.rating)}</div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            className="bg-[#10375C] text-white py-2 px-4 rounded hover:bg-[#697e91] ml-4"
            onClick={handleNext}
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
