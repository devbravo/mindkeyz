import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ property }) => {
  const { index, image, name, song, song_link } = property;

  return (
    <div id={`card-${index}`} className='card'>
      <img src={image} alt={name} className='card__images' />
      <div className='card__details'>
        <p className='card__details--name'>
          {name}
          <br />
          <a href={song_link} className='card__details--link'>
            {song}
          </a>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
