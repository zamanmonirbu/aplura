import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
// import ParticlesComponent from "./Particle/ParticlesComponent";

const Contact = () => {
  return (
    <div className="relative h-screen">
      {/* <ParticlesComponent /> */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-10 text-center"> {/* z-10 to ensure text is on top */}
        <div className="w-full max-w-md mb-4">
          <h2 className="text-2xl text-left font-bold mb-2 text-secondary ">
            Get in Touch with Aplura GmbH
          </h2>
          <p className="mb-8 text-lg text-secondary text-left">
            We value your feedback and are here to assist you. Please reach out to us using the contact details below.
          </p>
        </div>
        
        <table className="w-full max-w-lg text-left text-secondary border-collapse">
          <tbody>
            <tr>
              <td className="py-4 flex items-center">
                <FaBuilding className="text-3xl mr-4 text-secondary" />
                <span className="font-semibold">Aplura GmbH</span>
              </td>
            </tr>
            <tr>
              <td className="py-4 flex items-center">
                <MdPhone className="text-3xl mr-4 text-secondary" />
                <span>
                  Phone: <span className="font-semibold">217-903-5999</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-4 flex items-center">
                <MdLocationOn className="text-3xl mr-4 text-secondary" />
                <span>
                  Address: <span className="font-semibold">Diepholz, Germany</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-4 flex items-center">
                <MdEmail className="text-3xl mr-4 text-secondary" />
                <span>
                  Email: <a href="mailto:info@aplura.com" className="underline">info@aplura.com</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
