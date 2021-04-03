import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav data-test='navlink-component'>
      <ul className='nav'>
        <li className='nav__list'>
          <NavLink className='nav__list--link' to='/ '>
            Home
          </NavLink>
        </li>
        <li className='nav__list'>
          <NavLink className='nav__list--link' to='/services'>
            Services
          </NavLink>
        </li>
        <li className='nav__list'>
          <NavLink className='nav__list--link' to='/about'>
            About
          </NavLink>
        </li>
        <li className='nav__list'>
          <NavLink className='nav__list--link' to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
