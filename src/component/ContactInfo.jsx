import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center bg-[#EB8317] py-2 font-bold">
      {/* Contact Info in a responsive row */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
        {/* Phone Number */}
        <div className="flex items-center space-x-2">
          <FaPhone className="text-[#10375C] text-2xl" />
          <span className="text-sm sm:text-base text-[#10375C]">+49 123 456 789</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-[#10375C] text-2xl" />
          <span className="text-sm sm:text-base text-[#10375C]">info@aplura.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
