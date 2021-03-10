import React from 'react';
import logo from '../../asserts/images/logo.jpg';
import Nav from './nav';

function Header(props) {
  return (
    <header className="header">
      <div className="flex full-width ">
        <img src={logo} alt="loading..." height="70px" width="90px" />
        <Nav />
      </div>
    </header>
  );
}
export default Header;
