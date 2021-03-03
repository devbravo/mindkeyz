import React from 'react';
import Button from '../utilities/Button';

const Header = () => {
  return (
    <div data-test='header-component' className='header'>
      <div className='header__text-button'>
        <h1 className='header__text--h1'>best dancehall & afrobeats online</h1>
        <h2 className='header__text--h2'>
          We provide the keys to your musical mind
        </h2>
        <Button />
      </div>
    </div>
  );
};

export default Header;
