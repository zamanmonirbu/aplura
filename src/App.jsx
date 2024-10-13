import CommitmentAndLogistics from './component/CommitmentAndLogistics';
import ContactInfo from './component/ContactInfo';
import CustomerTestimonials from './component/CustomerTestimonials';
import ExploreMore from './component/ExploreMore';
import Footer from './component/Footer';
import Header from './component/Header';
import ImageUpDown from './component/ImageUpDown';
import ProductOfferings from './component/ProductOfferings';
import WhereWeDeliver from './component/WhereWeDeliver';

const App = () => {
  return (
    <div>
      <ContactInfo/>
      <Header/>
      <ImageUpDown/>
      <ProductOfferings/>
      <CommitmentAndLogistics/>
      <CustomerTestimonials/>
      <ExploreMore/>
      <WhereWeDeliver/>
      <Footer/>
    </div>
  );
};

export default App;