//import React, { useState } from 'react';

const NavLinks = () => {
  const links = ['Buy Beats', 'Licensing', 'Services', 'About'];

  return (
    <nav>
      <ul className='nav'>
        {links.map(link => (
          <li key={link} className='nav_list'>
            <a href='/#' className='nav__list--link'>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
