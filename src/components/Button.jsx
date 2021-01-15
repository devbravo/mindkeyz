import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart';

const Button = ({ send, className }) => {
  return (
    <div className='btn-cart'>
      <a
        href={send}
        target='_blank'
        rel='noreferrer'
        className='btn header__btn--animated btn-white btn-cart__beatstore'>
        beatstore
        <ShoppingCart className='btn-cart__cart' />
      </a>
    </div>
  );
};

export default Button;
