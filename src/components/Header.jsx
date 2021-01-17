import React from 'react';
import Button from './Button';

const Header = () => {
  const link = 'https://airbit.com/';
  return (
    <div className='header'>
      <div className='header__text-button'>
        <h1 className='header__text--h1'>best dancehall & afrobeats online</h1>
        <h2 className='header__text--h2'>
          We provide the keys to your musical mind
        </h2>
        <Button send={link} />
      </div>
    </div>
  );
};

export default Header;
