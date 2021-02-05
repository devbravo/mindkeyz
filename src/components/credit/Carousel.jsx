import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import data from './data';
import Card from './Card';

const Carousel = () => {
  const show = 5;
  const infiniteLoop = true;

  const [properties, setProperties] = useState(data.properties);
  const [current, setCurrent] = useState(data.properties[4]);
  const [length, setLength] = useState(properties.length);
  console.log(current);

  const [isRepeating, setIsRepeating] = useState(infiniteLoop && length > show);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Set the length to match current properties from data
  useEffect(() => {
    setLength(properties.length);
    setIsRepeating(infiniteLoop && properties.length > show);
  }, [properties, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (current === show || current === length) {
        setTransitionEnabled(true);
      }
    }
  }, [current, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || current < length - show) {
      setCurrent(data.properties[current + 1]);
    }
  };

  const prev = () => {
    if (isRepeating || current.index > 0) {
      setCurrent(data.properties[current - 1]);
    }
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (current === 0) {
        setTransitionEnabled(false);
        setCurrent(length);
      } else if (current === length + show) {
        setTransitionEnabled(false);
        setCurrent(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(properties[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(properties[index]);
    }
    return output;
  };

  // const [current, setCurrent] = useState(data.properties[4]);

  // const length = properties.length;

  // const nextSlide = () => {
  //   setCurrent(
  //     current.index === length - 1
  //       ? data.properties[0]
  //       : data.properties[current.index + 1]
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrent(
  //     current.index === 0
  //       ? data.properties[length - 1]
  //       : data.properties[current.index - 1]
  //   );
  // };

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {(isRepeating || current > 0) && (
          <FaArrowAltCircleLeft className='left-arrow' onClick={() => prev()} />
        )}
        <div className={`carousel-content-wrapper active-slide-${current}`}>
          {(isRepeating || current < length - show) && (
            <FaArrowAltCircleRight
              className='right-arrow'
              onClick={() => next()}
            />
          )}
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${current.index * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}>
            {length > show && isRepeating && renderExtraPrev()
              ? properties.map(current => (
                  <Card key={current.name} property={current} />
                ))
              : length > show && isRepeating && renderExtraNext()}
            {/* {length > show && isRepeating && renderExtraNext()} */}
          </div>
        </div>
      </div>
    </div>
  );
};

// const images = [data.properties.image];
// console.log(images);
// const [current, setCurrent] = useState(0);
// const length = images.length;
// const nextSlide = () => {
//   setCurrent(current === length - 1 ? 0 : current + 1);
// };
// const prevSlide = () => {
//   setCurrent(current === 0 ? length - 1 : current - 1);
// };
// if (!Array.isArray(images) || images.length <= 0) {
//   return null;
// }
// console.log(current);
// return (
//   <section className='slider'>
//     <FaArrowAltCircleLeft className='left-arrow' />
//     <FaArrowAltCircleRight className='right-arrow' />
//     {images.map((image, idx) => {
//       return (
//         <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
//           {idx === current && (
//             <img src={image} alt={images} className='images' />
//           )}
//         </div>
//       );
//     })}
//   </section>
// );

export default Carousel;
