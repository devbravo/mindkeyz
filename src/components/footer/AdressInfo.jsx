import { Email } from '@styled-icons/material-rounded/Email';

const AdressInfo = () => {
  return (
    <div className='footer-section__info'>
      <h3 className='mindkeyz__logo'>MINDKEYZ</h3>

      <ul className='adress'>
        <li>Mindkeyz</li>
        <li>South America</li>
        <li>Paramaribo, Suriname</li>
      </ul>

      <div className='email'>
        <Email className='email__icon' />
        <div className='email__adress'>mindkeyz@gmail.com</div>
      </div>
    </div>
  );
};

export default AdressInfo;
