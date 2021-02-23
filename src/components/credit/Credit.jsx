import Carousel from './Carousel';

const Credit = () => {
  return (
    <div
      data-test='credit-component'
      className='credit-section'
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        //marginTop: 64,
      }}>
      <div className='credit-section__text'>
        <h3>Production credits</h3>
        <p>Who we worked with</p>
      </div>
      <Carousel />
    </div>
  );
};

export default Credit;
