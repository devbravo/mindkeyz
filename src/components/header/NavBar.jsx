import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import VisibleOnScroll from '../utilities/VisibleOnScroll';

const Navbar = () => {
  return (
    <div
      data-test='navbar-component'
      className={VisibleOnScroll(230) ? 'navbar active' : 'navbar'}>
      <Link className='mindkeyz' to='/ '>
        <h3 className='mindkeyz__header'>MINDKEYZ</h3>
      </Link>
      <NavLinks />
      <SocialIcons />
    </div>
  );
};

export default Navbar;
