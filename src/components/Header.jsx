import React from 'react';
import Button from './Button';

const Header = () => {
  const link = 'https://airbit.com/widgets/html5?uid=67484&config=319962';
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
      <Button send={link} />
    </div>
  );
};

export default Header;
