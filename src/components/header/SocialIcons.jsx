import React from 'react';
import { SocialInstagramCircular } from '@styled-icons/typicons/SocialInstagramCircular';
import { SocialYoutubeCircular } from '@styled-icons/typicons/SocialYoutubeCircular';
import { SocialFacebookCircular } from '@styled-icons/typicons/SocialFacebookCircular';
// import { Soundcloud } from '@styled-icons/entypo-social/Soundcloud';

const SocialIcons = () => {
  return (
    <div data-test='social-component' className='social'>
      <a
        href='https://www.youtube.com/channel/UC9jdJsG9Mlgf4g2dpogDQsQ'
        target='_blank'
        rel='noreferrer'
        className='social__links'>
        <SocialYoutubeCircular fill='#fff' className='social__icons' />
      </a>
      <a
        href='https://www.instagram.com/mindkeyz/?hl=en'
        target='_blank'
        rel='noreferrer'
        className='social__links'>
        <SocialInstagramCircular
          fill='#fff'
          className='social__icons instagram'
        />
      </a>
      <a
        href='https://www.facebook.com/Mindkeyz/'
        target='_blank'
        rel='noreferrer'
        className='social__links'>
        <SocialFacebookCircular
          fill='#fff'
          className='social__icons facebook'
        />
      </a>
      {/* <a
        href='https://soundcloud.com/mindkeyz'
        target='_blank'
        rel='noreferrer'
        className='social__links'>
        <Soundcloud fill='#fff' className='social__icons soundcloud' />
      </a> */}
    </div>
  );
};

export default SocialIcons;
