import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../images/logo1.png'

const FooterContact = () => {
  const contacts = [
    {
      icon: <FaPhoneAlt className="text-white text-2xl mb-2" />,
      text: "+49 123 456 789",
    },
    {
      icon: <FaEnvelope className="text-white text-2xl mb-2" />,
      text: "info@aplura.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-white text-2xl mb-2" />,
      text: "Diepholz, Germany",
    },
  ];

  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src={logo} // Replace with your logo URL
            alt="Company Logo"
            className="mx-auto w-24"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {contact.icon}
              <p className="text-sm md:text-base">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;


