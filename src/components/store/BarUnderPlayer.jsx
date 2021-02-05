import creditCardIcons from '../../images/credit_card_icons.png';

const BarUnderPlayer = () => {
  return (
    <div className='store__bar-under-player'>
      <div className='bar-half-1'>
        <span className='deal'>Current Deal</span> Buy 2 get 1 free
      </div>
      <div className='bar-half-2'>
        <span className='payment'>We accept</span> the following
        <img
          className='credit-cards'
          alt='credit-cards'
          src={creditCardIcons}
        />
      </div>
    </div>
  );
};

export default BarUnderPlayer;
