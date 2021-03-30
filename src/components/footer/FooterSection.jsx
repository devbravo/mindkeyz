import SubscribeForm from './SubscribeForm';
import AdressInfo from './AdressInfo';
import Copyright from './Copyright';

const FooterSection = () => {
  return (
    <div className='footer-section'>
      <div className='footer-section__text'>
        <h3>Subscribe for weekly updates!</h3>
      </div>
      <SubscribeForm />
      <AdressInfo />
      <Copyright />
    </div>
  );
};

export default FooterSection;
