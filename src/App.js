import './sass/App.scss';
import Navbar from './components/header/NavBar';
import Header from './components/header/Header';
import Guide from './components/utilities/Guide';
import Store from './components/store/Store';
import License from './components/license/License';
import Credit from './components/credit/Credit';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Guide />
      <Store />
      <License />
      <Credit />
    </div>
  );
}

export default App;
