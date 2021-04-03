import { LicenseData } from '../../data/LicenseData';
import LicenseCard from './LicenseCard';

const LicenseSection = () => {
  return (
    <div data-test='license-component' className='license-section'>
      <div className='license-section__text'>
        <h3 className='license-section__h3'>Licensing Info</h3>
        <p className='license-section__p'>
          Please read the licensing info before a purchase
        </p>
      </div>
      <div className='license-section__card'>
        {LicenseData.map((item, index) => (
          <LicenseCard
            key={index}
            licenseName={item.licenseName}
            price={item.price}
            deal={item.deal}
            licenses={item.license}
          />
        ))}
      </div>
    </div>
  );
};

export default LicenseSection;
