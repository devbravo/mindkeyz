import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ArtistData } from '../../data/ArtistData';
import ArtistCard from './ArtistCard';

const show = 4;
const infiniteLoop = true;

const Carousel = () => {
  //const [data] = useState(ArtistData);
  const data = ArtistData;
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  //const [length, setLength] = useState(ArtistData.length);
  const length = ArtistData.length;

  // useEffect(() => {
  //   setLength(ArtistData.length);
  //   console.log('render');
  // }, []);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {currentIndex > 0 && (
          <FaArrowAltCircleLeft
            data-test='prev-button'
            onClick={() => prev()}
            className='left-arrow'
          />
        )}
        {currentIndex < length - 1 && (
          <FaArrowAltCircleRight
            data-test='next-button'
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
              <ArtistCard key={data.name} data={data} current={currentIndex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
