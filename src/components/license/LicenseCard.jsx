import { Download } from '@styled-icons/heroicons-solid/Download';
import { PropTypes } from 'prop-types';

/**
 * Functional react component for rendering licensing cards.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component
 */

const LicenseCard = ({ ...props }) => {
  return (
    <div data-test='licenseCard-component' className='card-container'>
      <div className='card-container__header'>
        <div className='card-container__header--title'>{props.licenseName}</div>
        <span className='card-container__header--price'>{props.price}</span>
        <div className='card-container__header--deal'>{props.deal}</div>
      </div>

      <div className='card-container__body'>
        <ul className='card-container__body--list'>
          {props.licenses.map(license => (
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

LicenseCard.propTypes = {
  licenseName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  deal: PropTypes.string.isRequired,
  licenses: PropTypes.array.isRequired,
};

export default LicenseCard;
