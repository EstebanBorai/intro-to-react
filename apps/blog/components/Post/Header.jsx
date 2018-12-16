import React from 'react';
import './post.css';

const Header = ({ author }) => (
  <header>
    <img src={author.avatar} alt={`${author.username} avatar`} />
    <h4>{author.username}</h4>
  </header>
);

export default Header;
