import AnimatedImageContainer from "./HomePage/AnimatedImageContainer";
import CommitmentAndLogistics from "./HomePage/CommitmentAndLogistics";
import CustomerTestimonials from "./HomePage/CustomerTestimonials";
import ExploreMore from "./HomePage/ExploreMore";
import ImageCarousel from "./HomePage/ImageCarousel";
import ImageUpDown from "./HomePage/ImageUpDown";
import ProductOfferings from "./HomePage/ProductOfferings";
import WhereWeDeliver from "./HomePage/WhereWeDeliver";

const Home = () => {
  return (
    <div>
      <ImageUpDown />
      <AnimatedImageContainer />
      <ImageCarousel />
      <ProductOfferings />
      <CommitmentAndLogistics />
      <CustomerTestimonials />
      <WhereWeDeliver />
      <ExploreMore />
    </div>
  );
};

export default Home;
