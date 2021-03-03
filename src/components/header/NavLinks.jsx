const NavLinks = () => {
  const links = ['Home', 'Services', 'About', 'Contact'];

  return (
    <nav data-test='navlink-component'>
      <ul className='nav'>
        {links.map(link => (
          <li key={link} className='nav__list'>
            <a href='/#' className='nav__list--link'>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
