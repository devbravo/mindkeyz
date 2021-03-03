import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import License from './License';
import LicenseCard from './LicenseCard';

describe('renders License and LicenseCard component', () => {
  test('renders License component without error', () => {
    const wrapper = shallow(<License />);
    const license = findByTestAttr(wrapper, 'license-component');
    expect(license.length).toBe(1);
  });
  test('renders LicenseCard component without error', () => {
    // const licenseName = 'basic',
    //   price = '30',
    //   deal = 'buy 2 get one free';
    // licenses = [];

    const wrapper = shallow(
      <LicenseCard licenseName='basic' price='$30' deal='' licenses={[]} />
    );
    const license = findByTestAttr(wrapper, 'licenseCard-component');
    expect(license.length).toBe(1);
  });
});
