import { ShoppingCart } from '@styled-icons/fa-solid/ShoppingCart';
import { HashLink as Link } from 'react-router-hash-link';

const Button = () => {
  return (
    <div data-test='button-component' className='btn-beatstoreCart'>
      <Link
        smooth
        to='#store'
        data-test='button-link'
        className='btn btn--white btn--animated btn-storeCart__beatstore'>
        buy beats
        <ShoppingCart className='btn-storeCart__cart' />
      </Link>
    </div>
  );
};

export default Button;
