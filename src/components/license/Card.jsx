const Card = ({ name, price, deal, licenses }) => {
  return (
    <div className='container'>
      <div className='container__header'>
        <div className='container__header--title'>{name}</div>
        <span className='container__header--price'>{price}</span>
        <div className='container__header--deal'>{deal}</div>
      </div>

      <div className='container__body'>
        <ul className='container__body--list'>
          {licenses.map(license => (
            <div key={license}>
              <li>{license}</li>
            </div>
          ))}
        </ul>
      </div>

      <a className='container__btn' href='/#'>
        Download agreement
      </a>
    </div>
  );
};

export default Card;
