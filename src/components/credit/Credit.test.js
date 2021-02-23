import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Credit from './credit';

/**
 * Factory function to create a ShallowWrapper for the Credit component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<Credit />);
};

test('Renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'credit-component');
  expect(component.length).toBe(1);
});
