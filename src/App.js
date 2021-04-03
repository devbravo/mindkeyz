import './sass/App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/header/NavBar';
import Home from './components/sections/Home';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import FooterSection from './components/footer/FooterSection';
import ScrollToTop from './components/utilities/ScrollToTop.js';
import ScrollUpBtn from './components/utilities/ScrollUpBtn';

function App() {
  return (
    <div data-testid='app-component' className='App'>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/ ' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Redirect from='/' exact to='/ ' />
      </Switch>
      <FooterSection />
      <ScrollUpBtn />
    </div>
  );
}

export default App;
