import { Audio } from '@styled-icons/open-iconic/Audio';
import { Paypal } from '@styled-icons/entypo-social/Paypal';
import { Download } from '@styled-icons/fa-solid/Download';

const Guide = () => {
  return (
    <div data-test='guide-component' className='guide'>
      <div className='guide_container--2'>
        <div className='guide__container'>
          <Audio className='guide__container--icon' />
          <h2 className='guide__container--h2'>1. Select Your Beats</h2>
          <p className='guide__container--p'>
            Click "add" button and select a license
          </p>
        </div>
        <div className='guide__container'>
          <Paypal className='guide__container--icon' />
          <h2 className='guide__container--h2'>2. Securely Checkout</h2>
          <p className='guide__container--p'>
            Next click “Check out” and pay via PayPal
          </p>
        </div>
        <div className='guide__container'>
          <Download className='guide__container--icon' />
          <h2 className='guide__container--h2'>3. Download Beats</h2>
          <p className='guide__container--p'>
            Finally go to your inbox for the download link
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guide;
