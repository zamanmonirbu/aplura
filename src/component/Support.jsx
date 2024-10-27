import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { FaHeadset } from 'react-icons/fa';
// import ParticlesComponent from './Particle/ParticlesComponent';


const Support = () => {
  return (
    <div className="relative min-h-screen">
      {/* ParticlesComponent as Background */}
      {/* <ParticlesComponent /> */}
      <div className="md-absolute inset-0 flex flex-col items-center justify-center p-6 z-10  bg-opacity-90"> {/* Adjust opacity for better readability */}
        <h2 className="text-4xl font-bold mb-6 text-secondary" >
        Customer Support
        </h2>

        <div className="max-w-3xl text-lg text-left text-secondary mb-8">
          <p className="mb-4">
            At Aplura GmbH, we are dedicated to providing excellent support to our clients. Our customer support team is available to assist you with any inquiries or issues you may have regarding our products and services.
          </p>
        </div>

        <div className="flex flex-col items-start max-w-3xl w-full">
          <div className="flex items-center mb-4">
            <FaHeadset className="text-3xl mr-4 text-secondary"  />
            <span className="font-semibold">Support Contact</span>
          </div>

          <div className="flex items-center mb-4">
            <MdPhone className="text-3xl mr-4 text-secondary"  />
            <span>Phone: <span className="font-semibold">217-903-5999</span></span>
          </div>

          <div className="flex items-center mb-4">
            <MdEmail className="text-3xl mr-4 text-secondary"  />
            <span>Email: <a href="mailto:support@aplura.com" className="underline" >support@aplura.com</a></span>
          </div>

          <div className="flex items-center mb-4">
            <MdLocationOn className="text-3xl mr-4 text-secondary"  />
            <span>Address: <span className="font-semibold">Diepholz, Germany</span></span>
          </div>
        </div>

        <div className="max-w-3xl text-lg text-left text-secondary mb-8">
          <h3 className="text-2xl font-bold mb-4">Support Hours</h3>
          <p className="mb-2">Monday - Friday: 9 AM - 5 PM (CET)</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
