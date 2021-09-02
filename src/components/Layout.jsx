import React from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <Header />

      <main className="content">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
