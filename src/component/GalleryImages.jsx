import bg1 from '../images/potato1.png';
import bg2 from '../images/potato2.png';
import bg3 from '../images/potato3.png';
import bg4 from '../images/corn4.jpg';
import bg5 from '../images/corn3.jpg';
import bg6 from '../images/cornRuti.jpeg';

const services = [
  {
    title: "High-Quality Potatoes for Chip Manufacturing",
    text: "Aplura GmbH provides premium potatoes specifically grown and selected for chip production, ensuring crisp texture and perfect flavor. Our potatoes meet the highest industry standards, giving manufacturers the best raw materials for their products.",
    heading: "Potatoes for Chips",
    imageUrl: bg1,
  },
  {
    title: "Expertly Sourced Potatoes for Consistent Results",
    text: "With over a decade of experience, we carefully source our potatoes from trusted farms, ensuring that each batch delivers the same level of quality and consistency. This ensures that chip manufacturers can depend on a reliable supply of superior potatoes.",
    heading: "Sourcing Excellence",
    imageUrl: bg2,
  },
  {
    title: "Rigorous Quality Control for Potatoes",
    text: "Our potatoes undergo rigorous testing and quality control to ensure that they are free from defects and have the ideal properties for chip manufacturing. We are committed to supplying only the best potatoes for our clients.",
    heading: "Quality Assurance",
    imageUrl: bg3,
  },
  {
    title: "Top-Grade Yellow Corn for Tortilla Manufacturing",
    text: "Aplura GmbH supplies premium yellow corn ideal for tortilla production, chosen for its flavor, texture, and performance in the manufacturing process. Our yellow corn helps producers create high-quality tortillas that consumers love.",
    heading: "Corn for Tortillas",
    imageUrl: bg4,
  },
  {
    title: "Expert Selection of Yellow Corn",
    text: "Our yellow corn is selected with precision to meet the specific needs of tortilla manufacturers. We ensure that every grain of corn meets the highest quality standards, resulting in a consistently superior product.",
    heading: "Corn Selection",
    imageUrl: bg5,
  },
  {
    title: "Commitment to Quality in Corn Supply",
    text: "Our yellow corn undergoes strict quality control processes to ensure optimal performance in tortilla manufacturing, guaranteeing that our clients receive the best raw materials for their production needs.",
    heading: "Corn Quality Control",
    imageUrl: bg6,
  },
];

const GalleryImages = () => {
  return (
    <div className="flex flex-col w-[90%] md:w-full mx-auto bg-third">
      <p className="text-4xl font-bold text-center my-10 text-white">
        Image <span className="text-secondary">Gallery</span>
      </p>
      {services.map((service, index) => (
        <div
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } min-h-[350px] mb-10`}
          key={index}
        >
          {/* Image Section */}
          <div className="relative flex-[2] h-[300px] md:h-[400px] overflow-hidden">
            <div
              className="bg-cover bg-center bg-fixed w-full h-full rounded-md"
              style={{
                backgroundImage: `url(${service.imageUrl})`,
                backgroundAttachment: 'fixed', // Keep the background fixed
              }}
            ></div>

            {/* Title over image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md w-[70%]">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-[1] flex flex-col justify-center p-6 md:p-10 bg-white rounded text-secondary">
            <h3 className="text-2xl font-bold mb-2">{service.heading}</h3>
            <p className="text-lg">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryImages;
