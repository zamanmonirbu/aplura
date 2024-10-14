import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-center h-screen flex flex-col justify-center items-center p-6">
      <div className="w-1/3 mb-4"> {/* Adjust the width as needed */}
        <h2 className="text-4xl font-bold mb-2" style={{ color: "#10375C" }}>
          Get in Touch with Aplura GmbH
        </h2>
        <p className="mb-8 text-lg text-[#10375C]">
          We value your feedback and are here to assist you. Please reach out to us using the contact details below.
        </p>
      </div>
      
      <table className="w-full max-w-lg text-left text-[#10375C] border-collapse">
        <tbody>
          <tr>
            <td className="py-4 flex items-center">
              <FaBuilding className="text-3xl mr-4" />
              <span className="font-semibold">Aplura GmbH</span>
            </td>
          </tr>
          <tr>
            <td className="py-4 flex items-center">
              <MdPhone className="text-3xl mr-4" />
              <span>
                Phone: <span className="font-semibold">217-903-5999</span>
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-4 flex items-center">
              <MdLocationOn className="text-3xl mr-4" />
              <span>
                Address: <span className="font-semibold">Diepholz, Germany</span>
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-4 flex items-center">
              <MdEmail className="text-3xl mr-4" />
              <span>
                Email: <a href="mailto:info@aplura.com" className="underline">info@aplura.com</a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
