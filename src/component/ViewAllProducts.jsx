// import ParticlesComponent from "./Particle/ParticlesComponent";
import PotatoSeedsProducts from "./SecondPage/PotatoSeedsProducts";
import PotatoVariations from "./SecondPage/PotatoVariations";
import YellowCornProducts from "./SecondPage/YellowCornProducts";
import bg from '../images/b1.jpg'


const ViewAllProducts = () => {
  return (
    <div className="products-container px-[12%] mx-auto relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bg})` }} // Corrected here
      >
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-700 opacity-80 z-10"></div>
      </div>

      {/* Content on Top of the Background */}
      <div className="content relative z-20">
        <PotatoVariations />
        <YellowCornProducts />
        <PotatoSeedsProducts />
      </div>
    </div>
  );
};

export default ViewAllProducts;


