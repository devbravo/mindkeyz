import './sass/App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/utilities/ScrollToTop.js';
import ScrollUpBtn from './components/utilities/ScrollUpBtn';

function App() {
  return (
    <div data-testid='app-component' className='App'>
      <ScrollToTop />
      <Switch>
        <Route path='/ ' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Redirect from='/' exact to='/ ' />
      </Switch>

      <ScrollUpBtn />
    </div>
  );
}

export default App;
