import React, { useState } from 'react';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    window.scrollY >= 230 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeNavBackground);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div>
        <a href='www.mindkeyz.com' className='mindkeyz'>
          <h3 className='mindkeyz__header'>MINDKEYZ</h3>
        </a>
      </div>
      {/* <img src='' alt='' className='navbar__mindkeyz-logo' /> */}
      <NavLinks />
      <SocialIcons />
    </nav>
  );
};

export default Navbar;
