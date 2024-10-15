import BackgroundVideoComponent from "./BackgroundVideoComponent";
import HomeAboutUs from "./HomeAboutUs";
import CommitmentAndLogistics from "./HomePage/CommitmentAndLogistics";
import ExploreMore from "./HomePage/ExploreMore";
import ImageCarousel from "./HomePage/ImageCarousel";
import ImageUpDown from "./HomePage/ImageUpDown";
import ImageWithRisingImages from "./HomePage/ImageWithRisingImages";
import ProductOfferings from "./HomePage/ProductOfferings";
import WhereWeDeliver from "./HomePage/WhereWeDeliver";


const Home = () => {
  return (
    <div>
      <BackgroundVideoComponent/>
      <ImageUpDown />
      <ImageWithRisingImages/>
      <ImageCarousel />
      <ProductOfferings />
      <CommitmentAndLogistics />
      <WhereWeDeliver />
      <HomeAboutUs/>
      <ExploreMore />
    </div>
  );
};

export default Home;
