import React from 'react';

import Footer from './Footer.jsx';

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <main className="content">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
