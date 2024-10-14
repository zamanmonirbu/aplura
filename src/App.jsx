import { Route, Routes } from "react-router-dom";
import ContactInfo from "./component/ContactInfo";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
// import PotatoChipsAnimation2 from "./component/Amimation";
import ProductOfferings from "./component/HomePage/ProductOfferings";
import BlogList from "./component/BlogList";
import FAQs from "./component/FAQs";
import ViewAllProducts from "./component/ViewAllProducts";
import Contact from "./component/Contact";
import AboutUs from "./component/AboutUs";
import Support from "./component/Support";
import PotatoVariations from "./component/potatoVariations";
import YellowCornProducts from "./component/yellowCornProducts";
import PotatoSeedsProducts from "./component/PotatoSeedsProducts";


const App = () => {
  return (
    <div>
      <ContactInfo />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ViewAllProducts/>}/>
        <Route path="/products/potatoesforchipsproduction" element={<PotatoVariations/>}/>
        <Route path="/products/yellowcornfortortillamanufacturing" element={<YellowCornProducts/>}/>
        <Route path="/products/potatoseeds" element={<PotatoSeedsProducts/>}/>
        <Route path="/variants" element={<ProductOfferings/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/blog" element={<BlogList/>}/>
        <Route path="/faq" element={<FAQs/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
