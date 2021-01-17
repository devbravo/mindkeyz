import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart';

const Button = ({ send, className }) => {
  return (
    <div className='btn-beatstoreCart'>
      <a
        href={send}
        target='_blank'
        rel='noreferrer'
        className='btn btn--white btn--animated btn-storeCart__beatstore'>
        beatstore
        <ShoppingCart className='btn-storeCart__cart' />
      </a>
    </div>
  );
};

export default Button;
