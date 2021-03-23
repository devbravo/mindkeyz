import React, { useState } from 'react';
import { FaqData } from '../../Data/FaqData';
import Faqs from './Faqs';

const Accordion = () => {
  const [clicked, setClicked] = useState();

  const toggle = index => {
    clicked === index ? setClicked(null) : setClicked(index);
  };

  return (
    <div className='container'>
      <div className='row'>
        {FaqData.map(item => (
          <Faqs
            clicked={clicked}
            item={item}
            toggle={toggle}
            key={item.index}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
