import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import ArtistData from './data';
import Card from './Card';

const show = 4;
const resetUpper = 6;
const resetLower = 1;
const infiniteLoop = true;

const Carousel = () => {
  const [data, setData] = useState(ArtistData);
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(ArtistData.length);
  console.log(currentIndex, length);
  console.log(data);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && ArtistData.length > show
  );

  // Set the length to match current children from props
  useEffect(() => {
    setLength(ArtistData.length);
  }, []);

  const next = () => {
    if (currentIndex > resetUpper) {
      setCurrentIndex(-1);
    }
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex(prevState => prevState + 1);
    }
    renderExtraPrev();
  };

  const prev = () => {
    if (currentIndex < resetLower) {
      setCurrentIndex(7);
    }
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
    renderExtraNext();
  };

  const renderExtraPrev = () => {
    let newArr = [];
    newArr = data.slice(0, length);
    newArr.push(newArr.shift());
    setData(newArr);

    // ArtistData.push(ArtistData.shift());
    // console.log(ArtistData);
    // return ArtistData;
  };

  const renderExtraNext = () => {
    let newArr = [];
    newArr = data.slice(0, length);
    newArr.unshift(newArr.pop());
    setData(newArr);

    // ArtistData.unshift(ArtistData.pop());
    // console.log(ArtistData);
    // return ArtistData;
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        <FaArrowAltCircleLeft onClick={() => prev()} className='left-arrow' />
        <FaArrowAltCircleRight onClick={() => next()} className='right-arrow' />
        <div
          className={`carousel-content-wrapper active-slide-${currentIndex}`}>
          <div
            className={`carousel-content show-${4}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / 6.5)}%)`,
              transition: `transform 300ms easeInOut`,
            }}>
            {console.log(currentIndex, length)}

            {ArtistData.map(data => (
              <Card key={data.name} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div className='App'>
//       <FaArrowAltCircleLeft onClick={() => prev()} className='left-arrow' />
//       <FaArrowAltCircleRight onClick={() => next()} className='right-arrow' />

//       <div className='page'>
//         <div className='col'>
//           <div className={`cards-slider active-slide-${currentIndex}`}>
//             <div
//               className='cards-slider-wrapper'
//               style={{
//                 transform: `translateX(-${currentIndex * (100 / length)}%)`,
//               }}>
//               {ArtistData.map(data => (
//                 <Card key={data.name} data={data} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Carousel;
