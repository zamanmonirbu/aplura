import PotatoSeedsProducts from "./PotatoSeedsProducts";
import PotatoVariations from "./potatoVariations";
import YellowCornProducts from "./yellowCornProducts";


const ViewAllProducts = () => {
    return (
        <div>
            <PotatoVariations/>
            <YellowCornProducts/>
            <PotatoSeedsProducts/>
        </div>
    );
};

export default ViewAllProducts;