import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property }) => {
  const { index, image, name, song, song_link } = property;

  return (
    <div id={`card-${index}`} className='card'>
      <img src={image} alt={name} className='images' />
      <div className='details'>
        <p className='name'>
          {name}
          <br />
          <a href={song_link}>{song}</a>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
