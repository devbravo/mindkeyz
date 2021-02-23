import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import BarUnderPlayer from './BarUnderPlayer';

/**
 * Factory function to create a ShallowWrapper for the BarUnderPlayer component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<BarUnderPlayer />);
};

test('renders component', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'barUnderPlayer');
  expect(component.length).toBe(1);
});
