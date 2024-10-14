import { Route, Routes } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import BlogList from "./component/BlogList";
import Contact from "./component/Contact";
import ContactInfo from "./component/ContactInfo";
import FAQs from "./component/FAQs";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import ProductOfferings from "./component/HomePage/ProductOfferings";
import PotatoSeedsProducts from "./component/SevondPage/PotatoSeedsProducts";
import PotatoVariations from "./component/SevondPage/PotatoVariations";
import YellowCornProducts from "./component/SevondPage/YellowCornProducts";
import Support from "./component/Support";
import ViewAllProducts from "./component/ViewAllProducts";

const App = () => {
  return (
    <div>
      <ContactInfo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ViewAllProducts />} />
        <Route
          path="/products/potatoesforchipsproduction"
          element={<PotatoVariations />}
        />
        <Route
          path="/products/yellowcornfortortillamanufacturing"
          element={<YellowCornProducts />}
        />
        <Route path="/products/potatoseeds" element={<PotatoSeedsProducts />} />
        <Route path="/variants" element={<ProductOfferings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/faq" element={<FAQs />} />
        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
