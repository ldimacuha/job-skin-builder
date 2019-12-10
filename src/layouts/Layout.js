import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Layout = props => {
  return (
    <>
      <Header brand="Job Skin Builder" />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout;