import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Header from './Header';
import Navbar from './NavBar';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';

describe('Components render without error', () => {
  test('Header renders without error', () => {
    const wrapper = shallow(<Header />);
    const header = findByTestAttr(wrapper, 'header-component');
    expect(header.length).toBe(1);
  });
  test('Navbar renders without error', () => {
    const wrapper = shallow(<Navbar />);
    const navbar = findByTestAttr(wrapper, 'navbar-component');
    expect(navbar.length).toBe(1);
  });
  test('NavLinks renders without error', () => {
    const wrapper = shallow(<NavLinks />);
    const navlinks = findByTestAttr(wrapper, 'navlink-component');
    expect(navlinks.length).toBe(1);
  });
  test('SocialIcons render without error', () => {
    const wrapper = shallow(<SocialIcons />);
    const socialIcons = findByTestAttr(wrapper, 'social-component');
    expect(socialIcons.length).toBe(1);
  });
});
