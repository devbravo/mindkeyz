import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Store from './Store';

/**
 * Factory function to create a ShallowWrapper for the Credit component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<Store />);
};

test('Renders without error', () => {
  const wrapper = setup();
  const store = findByTestAttr(wrapper, 'store');
  expect(store.length).toBe(1);
});
