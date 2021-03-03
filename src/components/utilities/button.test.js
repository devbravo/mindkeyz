import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Button from './Button';

/**
 * Factory function to create a ShallowWrapper for the Button component.
 * @function setup
 * @param {object}
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<Button />);
};

describe('Button component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-component');
    expect(button.length).toBe(1);
  });
  // test('should navigate to ... when link is clicked', () => {
  //   const wrapper = shallow(<Button />);
  //   const link = findByTestAttr(wrapper, 'button-link');
  //   link.simulate('click');
  //   expect(link).toBe('www.airbit.com');
  // });
});
