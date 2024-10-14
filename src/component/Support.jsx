import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { FaHeadset } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white">
      <h2 className="text-4xl font-bold mb-6" style={{ color: '#10375C' }}>
        Customer Support
      </h2>

      <div className="max-w-3xl text-lg text-left text-[#10375C] mb-8">
        <p className="mb-4">
          At Aplura GmbH, we are dedicated to providing excellent support to our clients. Our customer support team is available to assist you with any inquiries or issues you may have regarding our products and services.
        </p>
      </div>

      <div className="flex flex-col items-start max-w-3xl w-full">
        <div className="flex items-center mb-4">
          <FaHeadset className="text-3xl mr-4" style={{ color: '#10375C' }} />
          <span className="font-semibold">Support Contact</span>
        </div>

        <div className="flex items-center mb-4">
          <MdPhone className="text-3xl mr-4" style={{ color: '#10375C' }} />
          <span>Phone: <span className="font-semibold">217-903-5999</span></span>
        </div>

        <div className="flex items-center mb-4">
          <MdEmail className="text-3xl mr-4" style={{ color: '#10375C' }} />
          <span>Email: <a href="mailto:support@aplura.com" className="underline" style={{ color: '#10375C' }}>support@aplura.com</a></span>
        </div>

        <div className="flex items-center mb-4">
          <MdLocationOn className="text-3xl mr-4" style={{ color: '#10375C' }} />
          <span>Address: <span className="font-semibold">Diepholz, Germany</span></span>
        </div>
      </div>

      <div className="max-w-3xl text-lg text-left text-[#10375C] mb-8">
        <h3 className="text-2xl font-bold mb-4">Support Hours</h3>
        <p className="mb-2">Monday - Friday: 9 AM - 5 PM (CET)</p>
        <p>Saturday - Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Support;
