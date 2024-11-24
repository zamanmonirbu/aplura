import { Route, Routes } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import BlogList from "./component/BlogList";
import Contact from "./component/Contact";
import FAQs from "./component/FAQs";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import PotatoSeedsProducts from "./component/SecondPage/PotatoSeedsProducts";
import PotatoVariations from "./component/SecondPage/PotatoVariations";
import YellowCornProducts from "./component/SecondPage/YellowCornProducts";
import Support from "./component/Support";
import ViewAllProducts from "./component/ViewAllProducts";
import "./App.css";
import RightSide from "./component/RightSide";
import OfferFour from "./component/OfferFour";
const App = () => {
  return (
    <div>
      <Header />
      <RightSide />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ViewAllProducts />} />
        <Route
          path="/potato-wholesalers"
          element={<PotatoVariations />}
        />
        <Route
          path="/potato-exports"
          element={<PotatoVariations />}
        />
        <Route
          path="/produce-corns"
          element={<YellowCornProducts />}
        />
        <Route path="/horticultural-seeds" element={<PotatoSeedsProducts />} />
        <Route path="/variants" element={<OfferFour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/faq" element={<FAQs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
