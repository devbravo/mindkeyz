import React from 'react';
import Navbar from '../header/NavBar';
import Footer from '../footer/Footer';

const Layout = props => {
  return (
    <div className='layout'>
      <Navbar />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
