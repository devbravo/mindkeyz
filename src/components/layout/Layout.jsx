import React from 'react';
import Navbar from '../header/NavBar';
import Footer from '../footer/Footer';

const Layout = props => {
  return (
    <div className='layout'>
      <Navbar />
      <main className='home'>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
