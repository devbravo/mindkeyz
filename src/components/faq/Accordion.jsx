import { Data } from './Data';
import { Plus, Minus } from '@styled-icons/evaicons-solid';
import { IndeterminateCheckBox } from 'styled-icons/material-twotone';

const Accordion = () => {
  const halfwayPoint = Math.ceil(Data.length / 2);
  console.log(halfwayPoint);

  const DataA = Data.slice(0, halfwayPoint);
  const DataB = Data.slice(halfwayPoint, Data.length);

  console.log(DataA);
  console.log(DataB);
  console.log(Data);

  return (
    <div className='container'>
      <div className='row'>
        <div className='columnA'>
          {DataA.map((item, index) => (
            <div className='question' key={index}>
              <div className='wrap'>
                <h1>{item.question}</h1>
              </div>
              <div className='dropdown'>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='columnB'>
          {DataB.map((item, index) => (
            <div className='question' key={index}>
              <div className='wrap'>
                <h1>{item.question}</h1>
              </div>
              <div className='dropdown'>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
