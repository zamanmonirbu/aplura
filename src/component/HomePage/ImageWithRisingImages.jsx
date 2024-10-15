import './ImageWithRisingImages.css';
import image1 from "../../images/download.jpeg";
import image2 from "../../images/fac.jpg";
import image3 from "../../images/gq3.jpeg";
import image4 from "../../images/b23.jpg";
import image5 from "../../images/cornRuti.jpeg";
import image6 from "../../images/cfac.jpg";
import image7 from "../../images/corn3.jpg";
import image8 from "../../images/corn4.jpg";
import image9 from "../../images/pt3.jpeg";
import image10 from "../../images/pt4.jpeg";
import image11 from "../../images/pt5.jpeg";
import image12 from "../../images/pt2.jpeg";
import backgroundImage from "../../images/potato-field-SMAF00803.jpg"; // Background image path

const ImageWithRisingImages = () => {
    return (
        <div className="relative flex flex-wrap justify-center py-10 pl-[1%] bg-gray-200" style={{ height: '8   0vh', width: '100%' }}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    opacity: 0.07, // Set opacity for the background
                }}
            />
            {/* Content Above the Background */}
            <div className="relative z-10 w-full flex flex-wrap justify-center">
                <div className="gallery w-full sm:w-full md:w-1/2 lg:w-1/3 p-2">
                    <img src={image1} alt="Chips 1" className="w-full h-auto rounded-lg" />
                    <img src={image2} alt="Chips 2" className="w-full h-auto rounded-lg mt-2" />
                    <img src={image3} alt="Chips 3" className="w-full h-auto rounded-lg mt-2" />
                    <img src={image4} alt="B23" className="w-full h-auto rounded-lg mt-2" />
                </div>
                <div className="gallery w-full sm:w-full md:w-1/2 lg:w-1/3 p-2">
                    <img src={image5} alt="Chips 5" className="w-full h-auto rounded-lg" />
                    <img src={image6} alt="Corn 2" className="w-full h-auto rounded-lg mt-2" />
                    <img src={image7} alt="Corn 3" className="w-full h-auto rounded-lg mt-2" />
                    <img src={image8} alt="Corn 4" className="w-full h-auto rounded-lg mt-2" />
                </div>
                <div className="gallery w-full sm:w-full md:w-1/2 lg:w-1/3 p-2">
                    <img src={image9} alt="Corn 5" className="w-full h-auto rounded-lg" />
                    <img src={image10} alt="Corn 1" className="w-full h-auto rounded-lg mt-2" />
                    <img src={image11} alt="PT 1" className="w-full h-auto rounded-lg mt-2" />
                    <img src={image12} alt="PT 2" className="w-full h-auto rounded-lg mt-2" />
                </div>
            </div>
        </div>
    );
};

export default ImageWithRisingImages;
