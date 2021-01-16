import './sass/App.scss';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Guide from './components/Guide';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Guide />
    </div>
  );
}

export default App;
