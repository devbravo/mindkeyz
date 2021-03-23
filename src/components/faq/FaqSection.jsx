import Accordion from './Accordion';

const FaqSection = () => {
  return (
    <div className='faq-section'>
      <div className='faq-section__text'>
        <h3>Frequently Asked Questions</h3>
        <p>What you should know</p>
      </div>
      <Accordion />
    </div>
  );
};

export default FaqSection;
