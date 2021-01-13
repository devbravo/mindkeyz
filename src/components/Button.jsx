import { Cart } from '@styled-icons/boxicons-regular/Cart';

const Button = ({ send, className }) => {
  return (
    <a
      href={send}
      target='_blank'
      rel='noreferrer'
      className='btn header__btn--animated btn-white'>
      beatstore
      {/* <Cart fill='#777' className='cart' /> */}
    </a>
  );
};

export default Button;
