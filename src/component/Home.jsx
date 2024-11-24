import HeroSection from "./HomePage/HeroSection";
import CommitmentAndLogistics from "./HomePage/CommitmentAndLogistics";
import WhereWeDeliver from "./HomePage/WhereWeDeliver";
import FadeInGallery from "./FadeInGallery";
import AboutSection from "./AboutSection";
import DeliverySection from "./DeliverySection";


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <FadeInGallery/>
      <DeliverySection/>
      <CommitmentAndLogistics />
      <WhereWeDeliver />
      </div>
  );
};

export default Home;
