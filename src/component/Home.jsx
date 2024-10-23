import FAQs from "./FAQs";
import HeroSection from "./HomePage/HeroSection";
import HomeAboutUs from "./HomeAboutUs";
import CommitmentAndLogistics from "./HomePage/CommitmentAndLogistics";
import ImageCarousel from "./HomePage/ImageCarousel";
import ProductOfferings from "./HomePage/ProductOfferings";
import WhereWeDeliver from "./HomePage/WhereWeDeliver";
import GalleryImages from "./GalleryImages";
import ImageGallery from "./Animation";



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ImageGallery/>
      <ImageCarousel />
      <ProductOfferings />
      <GalleryImages/>
      <CommitmentAndLogistics />
      <WhereWeDeliver />
      <HomeAboutUs/>
      <FAQs/>
      </div>
  );
};

export default Home;
