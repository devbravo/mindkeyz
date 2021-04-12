import React from 'react';
import Navbar from '../header/NavBar';
import Footer from '../footer/Footer';

const Layout = props => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
