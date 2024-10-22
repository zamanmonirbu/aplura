import FAQs from "./FAQs";
import HeroSection from "./HomePage/HeroSection";
import HomeAboutUs from "./HomeAboutUs";
import CommitmentAndLogistics from "./HomePage/CommitmentAndLogistics";
import ImageCarousel from "./HomePage/ImageCarousel";
import ProductOfferings from "./HomePage/ProductOfferings";
import WhereWeDeliver from "./HomePage/WhereWeDeliver";
// import Gallery from "./ImageAndTextSection";
// import CountryMap from "./HomePage/CountryMap";


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ImageCarousel />
      <ProductOfferings />
      <CommitmentAndLogistics />
      <WhereWeDeliver />
      <HomeAboutUs/>
      {/* <CountryMap/> */}
      <FAQs/>
      {/* <Gallery/> */}
    </div>
  );
};

export default Home;
