import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import VisibleOnScroll from '../utilities/VisibleOnScroll';
import getLocation from '../utilities/getLocation';

const Navbar = () => {
  return (
    <div
      data-test='navbar-component'
      className={`navbar ${VisibleOnScroll(230) ? 'active' : ''} ${
        getLocation() ? 'noAnimation' : ''
      }`}>
      <Link className='mindkeyz' to='/ '>
        <h3 className='mindkeyz__header'>MINDKEYZ</h3>
      </Link>
      <NavLinks />
      <SocialIcons />
    </div>
  );
};

export default Navbar;
