import React from 'react';

const NavLinks = () => {
  return (
    <nav>
      <ul className='nav'>
        <li className='nav__list'>
          <a href='#' className='nav__list--link'>
            Buy Beats
          </a>
        </li>
        <li className='nav__list'>
          <a href='#' className='nav__list--link'>
            Licensing
          </a>
        </li>
        <li className='nav__list'>
          <a href='#' className='nav__list--link'>
            Faq
          </a>
        </li>
        <li className='nav__list'>
          <a href='#' className='nav__list--link'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
