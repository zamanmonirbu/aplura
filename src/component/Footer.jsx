import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"; // Add more icons

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0F2C4F] text-white py-8 text-lg">
        <div className="max-w-7xl mx-auto px-4">
          {/* Center grid items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center justify-center items-center">
            {/* Sales & Support */}
            <div className="flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
              <FaPhone className="w-12 h-12 mb-2 text-red-500" />
              <h4 className="font-semibold">Sales & Support</h4>
              <p className="mt-2">217-903-5999</p>
            </div>

            {/* Address */}
            <div className="flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
              <FaMapMarkerAlt className="w-12 h-12 mb-2 text-red-500" />
              <h4 className="font-semibold">Address</h4>
              <p className="mt-2">Diepholz, Germany</p>
            </div>

            {/* Email */}
            <div className="flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
              <FaEnvelope className="w-12 h-12 mb-2 text-red-500" />
              <h4 className="font-semibold">Email</h4>
              {/* <p className="mt-2">Get in Touch</p> */}
              <a
                href="mailto:info@aplura.com"
                className="text-white hover:underline"
              >
                info@aplura.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center my-12 space-x-4 flex-wrap">
            <a
              href="#"
              className="text-white hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <FaFacebook className="w-[40px] h-[40px]" />
            </a>
           
            <a
              href="#"
              className="text-white hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram className="w-[40px] h-[40px]" />
            </a>
           
            <a
              href="#"
              className="text-white hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <FaWhatsapp className="w-[40px] h-[40px]" />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm">&copy; 2024. All Rights Reserved. Aplura GmbH.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
