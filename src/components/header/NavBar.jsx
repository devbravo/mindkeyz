import React, { useState } from 'react';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    window.scrollY >= 230 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeNavBackground);

  return (
    <div
      data-test='navbar-component'
      className={navbar ? 'navbar active' : 'navbar'}>
      <Link className='mindkeyz' to='/ '>
        <h3 className='mindkeyz__header'>MINDKEYZ</h3>
      </Link>
      <NavLinks />
      <SocialIcons />
    </div>
  );
};

export default Navbar;
