import HeaderSection from '../header/HeaderSection';
import GuideSection from '../guide/GuideSection';
import Store from '../store/Store';
import LicenseSection from '../license/LicenseSection';
import CreditSection from '../credit/CreditSection';
import FaqSection from '../faq/FaqSection';

const Home = () => {
  return (
    <>
      <HeaderSection />
      <GuideSection />
      <Store />
      <LicenseSection />
      <CreditSection />
      <FaqSection />
    </>
  );
};

export default Home;
