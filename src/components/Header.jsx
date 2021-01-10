import React from 'react';
import Button from './Button';

const Header = () => {
  const link = 'https://www.airbit.com';
  return (
    <div className='header'>
      <div className='header__text'>
        <h1 className='header__text--h1'>
          The best dancehall & afrobeats online
        </h1>
        <h2 className='header__text--h2'>
          We provide the keys to your musical mind
        </h2>
      </div>
      <div>
        <Button send={link} className='btn header__btn--animated' />
      </div>
    </div>
  );
};

export default Header;
