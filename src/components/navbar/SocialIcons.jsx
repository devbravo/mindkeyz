import React from 'react';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { YoutubeWithCircle } from '@styled-icons/entypo-social/YoutubeWithCircle';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';
// import { Facebook } from '@styled-icons/material-outlined/Facebook';
//import { Facebook } from '@styled-icons/bootstrap/Facebook';
// import { logo1 } from '../../images/iconfinder_Circled_Youtube_svg_5279120.svg';
// import logo2 from '../../images/iconfinder_Circled_Instagram_svg_5279112.svg';
// import logo3 from '../../images/iconfinder_Circled_Facebook_svg_5279111.svg';

const SocialIcons = () => {
  return (
    <div className='social'>
      <a
        href='https://www.youtube.com/channel/UC9jdJsG9Mlgf4g2dpogDQsQ'
        className='social__links'>
        {/* <img src={logo1} alt='youtube logo' className='youtube' /> */}
        <YoutubeWithCircle fill='#333333' className='social__icons' />
      </a>
      <a
        href='https://www.instagram.com/mindkeyz/?hl=en'
        className='social__links'>
        {/* <img src={logo2} alt='instagram logo' className='instagram' /> */}
        <InstagramWithCircle fill='#333333' className='social__icons' />
      </a>
      <a href='https://www.facebook.com/Mindkeyz/' className='social__links'>
        {/* <img src={logo3} alt='facebook logo' className='facebook' /> */}
        <FacebookWithCircle fill='#333333' className='social__icons' />
      </a>
    </div>
  );
};

export default SocialIcons;
