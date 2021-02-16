import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import ArtistData from './data';
import Card from './Card';

const show = 4;
// const resetUpper = 6;
// const resetLower = 1;
const infiniteLoop = true;

const Carousel = () => {
  const [data, setData] = useState(ArtistData);
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(ArtistData.length);

  // const [isRepeating, setIsRepeating] = useState(
  //   infiniteLoop && ArtistData.length > show
  // );

  // Set the length to match current children from props
  useEffect(() => {
    setLength(ArtistData.length);
  }, []);

  const next = () => {
    // if (currentIndex > resetUpper) {
    //   setCurrentIndex(-1);
    // }
    if (currentIndex < length - 1) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    // if (currentIndex < resetLower) {
    //   setCurrentIndex(7);
    // }
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
      console.log(currentIndex);
    }
  };

  // const renderExtraPrev = () => {
  //   let newArr = [...data];
  //   newArr.push(newArr.shift());
  //   setData(newArr);
  // };

  // const renderExtraNext = () => {
  //   let newArr = [...data];
  //   newArr.unshift(newArr.pop());
  //   setData(newArr);
  // };

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {currentIndex > 0 && (
          <FaArrowAltCircleLeft onClick={() => prev()} className='left-arrow' />
        )}
        {currentIndex < length - 1 && (
          <FaArrowAltCircleRight
            onClick={() => next()}
            className='right-arrow'
          />
        )}
        <div
          className={`carousel-content-wrapper active-slide-${currentIndex}`}>
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}>
            {data.map(data => (
              <Card key={data.name} data={data} current={currentIndex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
