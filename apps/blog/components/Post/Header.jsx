import React from 'react';
import './post.css';

const Header = ({ author, created }) => (
  <header>
    <div>
      <img src={author.avatar} alt={`${author.username} avatar`} />
      <h4>{author.username}</h4>
    </div>
    <span>
      {created.getDate()}/{created.getMonth()}/{created.getFullYear()}
    </span>
  </header>
);

export default Header;
