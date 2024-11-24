import FooterContact from "./FooterContact";

const Footer = () => {
  const companyDetails = {
    established: "May 24, 2024",
    location: "Diepholz, Germany",
    industry: "Agriculture",
  };

  return (
    <div>
      <FooterContact />
      <footer className="p-4 text-white text-center bg-secondary bottom-0 left-0 w-full z-[9999]">
        {/* Company Details */}
        <div className="mb-4 text-sm">
          <p>
            <span className="font-bold">Established:</span> {companyDetails.established}
          </p>
          <p>
            <span className="font-bold">Location:</span> {companyDetails.location}
          </p>
          <p>
            <span className="font-bold">Industry:</span> {companyDetails.industry}
          </p>
        </div>
        {/* Copyright Notice */}
        <p className="text-sm">&copy; 2024. All Rights Reserved. Aplura GmbH.</p>
      </footer>
    </div>
  );
};

export default Footer;
