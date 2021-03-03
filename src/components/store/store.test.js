import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Store from './Store';
import BarUnderPlayer from './BarUnderPlayer';

describe('renders two components', () => {
  test('renders store without error', () => {
    const wrapper = shallow(<Store />);
    const store = findByTestAttr(wrapper, 'store-component');
    expect(store.length).toBe(1);
  });

  test('renders barunderPlayer without error', () => {
    const wrapper = shallow(<BarUnderPlayer />);
    const store = findByTestAttr(wrapper, 'barUnderPlayer-component');
    expect(store.length).toBe(1);
  });
});
