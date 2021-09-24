import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import mainStyles from '../styles/main.module.scss';

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <Header />

      <main className={mainStyles.content}>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
