import creditCardIcons from '../../images/credit_card_icons.png';

const Store = () => {
  return (
    <div className='store-section'>
      <div className='store'>
        <iframe
          title='store'
          className='store__player'
          id='airbit_infinity'
          src='https://Mindkeyz.infinity.airbit.com?config_id=8072&embed=1'
          width='1100'
          height='750'
          frameBorder='0'
          scrolling='no'></iframe>
        <div className='store__bar-under-player'>
          <div className='bar-half-1'>
            <span className='store__bar-under-player--deals'>Current Deal</span>
            Buy 2 get 1 free
          </div>
          <div className='bar-half-2'>
            <p>
              <strong>We accept </strong>the following
            </p>
            <img
              className='credit-cards'
              alt='credit-cards'
              src={creditCardIcons}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
