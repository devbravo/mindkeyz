import { Download } from '@styled-icons/heroicons-solid/Download';

const Card = ({ name, price, deal, licenses }) => {
  return (
    <div className='card-container'>
      <div className='card-container__header'>
        <div className='card-container__header--title'>{name}</div>
        <span className='card-container__header--price'>{price}</span>
        <div className='card-container__header--deal'>{deal}</div>
      </div>

      <div className='card-container__body'>
        <ul className='card-container__body--list'>
          {licenses.map(license => (
            <div key={license}>
              <li>{license}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className='card-container__btn'>
        <Download className='card-container__btn--icon' />
        <a className='card-container__btn--link' href='/#'>
          Download agreement
        </a>
      </div>
    </div>
  );
};

export default Card;
