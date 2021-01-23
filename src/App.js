import './sass/App.scss';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Guide from './components/Guide';
import Store from './components/Store';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Guide />
      <Store />
    </div>
  );
}

export default App;
