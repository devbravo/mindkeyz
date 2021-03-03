import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Guide from './Guide';

/**
 * Factory function to create a ShallowWrapper for the Credit component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<Guide />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'guide-component');
  expect(component.length).toBe(1);
});
