import React from 'react';
import PropTypes from 'prop-types';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';

const Card = ({ data, current }) => {
  const { index, image, name, song, song_link } = data;

  return (
    <div id={`card-${index}`} className='card'>
      <img src={image} alt={name} className='card__images' />
      {current > -1 && (
        <div className='card__details'>
          <p className='card__details--name'>{name}</p>

          <div className='card__details--btn'>
            <Youtube className='card__details--icons' />
            <a
              href={song_link}
              target='_blank'
              rel='noreferrer'
              className='card__details--link'>
              {song}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
