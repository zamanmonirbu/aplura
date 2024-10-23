import bg1 from '../images/potato1.png';
import bg2 from '../images/potato2.png';
import bg3 from '../images/potato3.png';
import bg4 from '../images/corn4.jpg';
import bg5 from '../images/corn3.jpg';
import bg6 from '../images/cornRuti.jpeg';
import bg7 from '../images/pt2.jpeg';
import bg8 from '../images/pt3.jpeg';
import bg9 from '../images/pt4.jpeg';

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
  {
    title: "Certified Potato Seeds for Optimal Growth",
    text: "Aplura GmbH also provides high-quality, certified potato seeds, ensuring that our customers can achieve maximum yield and superior quality in their crops. Our potato seeds are carefully chosen to deliver excellent results in any growing condition.",
    heading: "Certified Seeds",
    imageUrl: bg7,
  },
  {
    title: "Premium Seed Selection for Farmers",
    text: "We collaborate closely with experienced farmers and agricultural experts to provide potato seeds that are genetically optimized for superior growth, ensuring a strong harvest every season.",
    heading: "Seed Optimization",
    imageUrl: bg8,
  },
  {
    title: "Ensuring Quality from Seed to Harvest",
    text: "Our commitment to quality starts with the seeds we provide. We ensure that every seed meets the highest industry standards, empowering farmers to grow top-quality potatoes from the ground up.",
    heading: "Seed to Harvest",
    imageUrl: bg9,
  },
];

const GalleryImages = () => {
  return (
    <div className="flex flex-col w-[90%] md:w-[70%] mx-auto">
      <p className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-fifth">
        Image <span className="text-sixth">Gallery</span>
      </p>
      {services.map((service, index) => (
        <div
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } min-h-[250px] md:min-h-[300px] mb-6 md:mb-10`}
          key={index}
        >
          {/* Image Section */}
          <div className="relative flex-1 h-auto mb-4 md:mb-0">
            <div
              className="bg-cover bg-center w-full h-[200px] md:h-[300px] rounded-md"
              style={{
                backgroundImage: `url(${service.imageUrl})`,
              }}
            ></div>

            {/* Title over image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center p-4 md:p-6 lg:p-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{service.heading}</h3>
            <p className="text-base md:text-lg lg:text-xl">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default GalleryImages;
