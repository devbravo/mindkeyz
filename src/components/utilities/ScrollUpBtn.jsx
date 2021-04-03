import React, { useState } from 'react';
import { ArrowUpSquareFill } from '@styled-icons/bootstrap/ArrowUpSquareFill';
import { HashLink as Link } from 'react-router-hash-link';

const ScrollUpBtn = () => {
  const [visibleItem, setVisibleItem] = useState(false);

  const changeScrollUpBtn = () => {
    window.scrollY >= 1170 ? setVisibleItem(true) : setVisibleItem(false);
  };

  window.addEventListener('scroll', changeScrollUpBtn);

  return (
    <div className={visibleItem ? 'scrollUp active' : 'scrollUp'}>
      <Link smooth to='#header'>
        <ArrowUpSquareFill className='scrollUp__btn' />
      </Link>
    </div>
  );
};

export default ScrollUpBtn;
