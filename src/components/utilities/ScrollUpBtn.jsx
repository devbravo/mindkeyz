import { ArrowUpSquareFill } from '@styled-icons/bootstrap/ArrowUpSquareFill';
import { HashLink as Link } from 'react-router-hash-link';
import VisibleOnScroll from './VisibleOnScroll';

const ScrollUpBtn = () => {
  return (
    <div className={VisibleOnScroll(1170) ? 'scrollUp active' : 'scrollUp'}>
      <Link smooth to='#header'>
        <ArrowUpSquareFill className='scrollUp__btn' />
      </Link>
    </div>
  );
};

export default ScrollUpBtn;
