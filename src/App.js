import './sass/App.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Guide from './components/Guide';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Guide />
    </div>
  );
}

export default App;
