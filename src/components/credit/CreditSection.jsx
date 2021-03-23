import Carousel from './Carousel';

const CreditSection = () => {
  return (
    <div
      data-test='credit-component'
      className='credit-section'
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
      <div className='credit-section__text'>
        <h3>Production credits</h3>
        <p>Who we worked with</p>
      </div>
      <Carousel />
    </div>
  );
};

export default CreditSection;
