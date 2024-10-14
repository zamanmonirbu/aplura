import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center space-x-4 bg-[#EB8317] py-2 font-bold">
      {/* Empty space taking 1/5 of the width */}
      <div className="w-1/5"></div>

      {/* Contact Info in the same row */}
      <div className="flex items-center space-x-8">
        {/* Phone Number */}
        <div className="flex items-center space-x-2">
          <FaPhone className="text-[#10375C]" />
          <span className="text-sm sm:text-base text-[#10375C]">+49 123 456 789</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-[#10375C]" />
          <span className="text-sm sm:text-base text-[#10375C]">info@aplura.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
