import React from 'react';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';

const NavBar = () => {
  return (
    <div className='navigation'>
      <div>
        <a href='#' className='mindkeyz'>
          <h3 className='mindkeyz__header'>MINDKEYZ</h3>
        </a>
      </div>
      {/* <img src='' alt='' className='navbar__mindkeyz-logo' /> */}
      <NavLinks />
      <SocialIcons />
    </div>
  );
};

export default NavBar;
