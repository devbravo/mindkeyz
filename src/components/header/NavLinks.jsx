import React, { useState } from 'react';

const NavLinks = () => {
  const [links] = useState(['Home', 'Services', 'About', 'Contact']);

  return (
    <nav>
      <ul className='nav'>
        {links.map(link => (
          <li key={link} className='nav__list'>
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
