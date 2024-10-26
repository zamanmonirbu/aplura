// import ParticlesComponent from "./Particle/ParticlesComponent";
import PotatoSeedsProducts from "./SecondPage/PotatoSeedsProducts";
import PotatoVariations from "./SecondPage/PotatoVariations";
import YellowCornProducts from "./SecondPage/YellowCornProducts";

const ViewAllProducts = () => {
  return (
    <div className="products-container">
      {/* <ParticlesComponent />  */}
      <div className="content">
        <PotatoVariations />
        <YellowCornProducts />
        <PotatoSeedsProducts />
      </div>
    </div>
  );
};

export default ViewAllProducts;
