import React from 'react';
import './header.css';
import rubberDuckLogo from '../../assets/rubber-duck-logo-header.png'

class Header extends React.Component {
  render() {
    const { onSort, sortingBy, sortTypes } = this.props;
    return (
      <header className="app-header">
        <div className="header-left">
          <img src={rubberDuckLogo} />
          The Rubber Duck
        </div>
        <div className="header-right">
          Sorting Posts By&nbsp;
          <span className="post-sorting" onClick={onSort}>
            {sortTypes[sortingBy].name}
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
