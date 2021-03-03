import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart';

const Button = () => {
  return (
    <div data-test='button-component' className='btn-beatstoreCart'>
      <a
        data-test='button-link'
        href='www.airbit.com'
        target='_blank'
        rel='noreferrer'
        className='btn btn--white btn--animated btn-storeCart__beatstore'>
        buy beats
        <ShoppingCart className='btn-storeCart__cart' />
      </a>
    </div>
  );
};

export default Button;
