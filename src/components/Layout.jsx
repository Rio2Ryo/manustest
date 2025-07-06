import React from 'react';
import Header from './Header';

/**
 * Simple layout component. You can extend this later with headers/footers.
 */
const Layout = ({ children }) => {
  return (
  <>
    <Header />
    <div style={{ paddingTop: '80px' }}>{children}</div>
  </>
);
};

export default Layout;
