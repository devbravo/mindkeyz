import React from 'react';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { YoutubeWithCircle } from '@styled-icons/entypo-social/YoutubeWithCircle';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';
// import { Facebook } from '@styled-icons/material-outlined/Facebook';
//import { Facebook } from '@styled-icons/bootstrap/Facebook';

const SocialIcons = () => {
  return (
    // <div className='navigation__social'>
    //   <a
    //     href='https://www.youtube.com/channel/UC9jdJsG9Mlgf4g2dpogDQsQ'
    //     className='navigation__social--links'>
    //     <img src={logo3} alt='youtube logo' className='youtube' />
    //   </a>
    //   <a
    //     href='https://www.instagram.com/mindkeyz/?hl=en'
    //     className='navigation__social--links'>
    //     <img src={logo2} alt='instagram logo' className='instagram' />
    //   </a>
    //   <a
    //     href='https://www.facebook.com/Mindkeyz/'
    //     className='navigation__social--links'>
    //     <img src={logo1} alt='facebook logo' className='facebook' />
    //   </a>
    // </div>
    <div className='social'>
      <a
        href='https://www.youtube.com/channel/UC9jdJsG9Mlgf4g2dpogDQsQ'
        className='social__links'>
        {/* <img src={logo1} alt='youtube logo' className='youtube' /> */}
        <YoutubeWithCircle fill='#333333' />
      </a>
      <a
        href='https://www.instagram.com/mindkeyz/?hl=en'
        className='social__links'>
        {/* <img src={logo2} alt='instagram logo' className='instagram' /> */}
        <InstagramWithCircle fill='#333333' />
      </a>
      <a href='https://www.facebook.com/Mindkeyz/' className='social__links'>
        {/* <img src={logo3} alt='facebook logo' className='facebook' /> */}
        <FacebookWithCircle fill='#333333' />
      </a>
    </div>
  );
};

export default SocialIcons;
