import React, { useState } from 'react';
import { FaqData } from '../../data/FaqData';
import Faqs from './Faqs';

const Accordion = () => {
  const [clicked, setClicked] = useState(null);
  console.log(clicked);

  const toggle = index => {
    clicked === index ? setClicked(null) : setClicked(index);
  };
  console.log(toggle);

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
