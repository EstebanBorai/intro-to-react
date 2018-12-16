import React from 'react';
import './header.css';
import rubberDuckLogo from '../../assets/rubber-duck-logo-header.png'

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <img src={rubberDuckLogo} />
        The Rubber Duck
      </header>
    );
  }
}

export default Header;
