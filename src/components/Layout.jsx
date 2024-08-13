import React from 'react';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
