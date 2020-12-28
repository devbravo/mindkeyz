import React from 'react';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
// import logo1 from '../../images/iconfinder_Circled_Youtube_svg_5279120.svg';
// import logo2 from '../../images/iconfinder_Circled_Instagram_svg_5279112.svg';
// import logo3 from '../../images/iconfinder_Circled_Facebook_svg_5279111.svg';

const NavBar = () => {
  return (
    <div className='navigation'>
      <div>
        <a href='#' className='mindkeyz'>
          <h3>Mindkeyz</h3>
        </a>
      </div>
      {/* <img src='' alt='' className='navbar__mindkeyz-logo' /> */}
      <NavLinks />

      <SocialIcons />
    </div>
  );
};

export default NavBar;
