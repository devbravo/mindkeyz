import './sass/App.scss';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/header/NavBar';
import HeaderSection from './components/header/HeaderSection';
import GuideSection from './components/utilities/GuideSection';
import Store from './components/store/Store';
import LicenseSection from './components/license/LicenseSection';
import CreditSection from './components/credit/CreditSection';
import FaqSection from './components/faq/FaqSection';
import FooterSection from './components/footer/FooterSection';

function App() {
  return (
    <div data-testid='app-component' className='App'>
      <Navbar />

      <HeaderSection />
      <GuideSection />
      <Store />
      <LicenseSection />
      <CreditSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export default App;
