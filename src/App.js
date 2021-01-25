import './sass/App.scss';
import Navbar from './components/navbar/NavBar';
import Header from './components/Header';
import Guide from './components/Guide';
import Store from './components/Store';
import LicenseSection from './components/license/LicenseSection';
import Credit from './components/Credit';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Guide />
      <Store />
      <LicenseSection />
      <Credit />
    </div>
  );
}

export default App;
