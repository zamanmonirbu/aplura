import FAQs from "./FAQs";
import HeroSection from "./HomePage/HeroSection";
import HomeAboutUs from "./HomeAboutUs";
import CommitmentAndLogistics from "./HomePage/CommitmentAndLogistics";
import ImageCarousel from "./HomePage/ImageCarousel";
import ProductOfferings from "./HomePage/ProductOfferings";
import WhereWeDeliver from "./HomePage/WhereWeDeliver";
import OurServices from "./GalleryImages";



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ImageCarousel />
      <ProductOfferings />
      <CommitmentAndLogistics />
      <WhereWeDeliver />
      <HomeAboutUs/>
      <OurServices/>
      <FAQs/>
      </div>
  );
};

export default Home;
