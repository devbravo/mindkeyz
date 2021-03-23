import React from 'react';
import PropTypes from 'prop-types';
import { Plus, Minus } from '@styled-icons/evaicons-solid';

const Faqs = ({ clicked, item, toggle }) => {
  return (
    <div className='faq-container'>
      <div
        className={`faq${clicked === item.index ? '-open' : ''}`}
        onClick={() => toggle(item.index)}>
        <div className='faq__question'>{item.question}</div>
        <span className='plus-minus-icon'>
          {clicked === item.index ? <Minus /> : <Plus />}
        </span>
      </div>
      <div
        className={`faq${
          clicked === item.index ? '-open__answer' : '__answer'
        }`}>
        {item.answer}
      </div>
    </div>
  );
};

Faqs.protoTypes = {
  clicked: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Faqs;
