import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import VisibleOnScroll from '../utilities/VisibleOnScroll';
import getParam from '../utilities/getParam';

const Navbar = () => {
  return (
    <div
      data-test='navbar-component'
      className={
        VisibleOnScroll(230) || getParam() ? 'navbar active' : 'navbar'
      }>
      <Link className='mindkeyz' to='/ '>
        <h3 className='mindkeyz__header'>MINDKEYZ</h3>
      </Link>
      <NavLinks />
      <SocialIcons />
    </div>
  );
};

export default Navbar;
