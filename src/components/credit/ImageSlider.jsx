import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import data from './data';
import Card from './Card';

const ImageSlider = () => {
  const [properties, setProperties] = useState(data.properties);
  const [current, setCurrent] = useState(data.properties[0]);

  const length = properties.length;

  const nextSlide = () => {
    const newIndex = current.index + 1;
    setCurrent(
      current.index === length - 1
        ? data.properties[0]
        : data.properties[newIndex]
    );
  };

  const prevSlide = () => {
    const newIndex = current.index - 1;
    setCurrent(
      current.index === 0
        ? data.properties[length - 1]
        : data.properties[newIndex]
    );
  };

  return (
    <div className='slider'>
      <FaArrowAltCircleLeft
        className='left-arrow'
        onClick={() => nextSlide()}
      />
      <FaArrowAltCircleRight
        className='right-arrow'
        onClick={() => prevSlide()}
      />
      <div className='page'>
        <div className='col'>
          <div className={`cards-slider active-slide-${current.index}`}>
            <div
              className='cards-slider-wrapper'
              style={{
                transform: `translateX(-${
                  current.index * (100 / properties.length)
                }%)`,
              }}>
              {properties.map(current => (
                <Card key={current.name} property={current} />
              ))}
            </div>
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

export default ImageSlider;
