import { Cart } from '@styled-icons/boxicons-regular/Cart';

const Button = ({ send, className }) => {
  return (
    <div className='header__btn-cart'>
      <a role='button' href='/#' className={className}>
        Beatstore
        {/* <Cart fill='#777' className='cart' /> */}
      </a>
    </div>
  );
};

export default Button;
