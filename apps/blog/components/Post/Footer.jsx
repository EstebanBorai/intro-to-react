import React from 'react';
import './post.css';
import Heart from './Heart';

const Footer = ({ votes, tags, isLiked, onLike }) => (
  <footer>
    <ul className="tags">
      {
        tags ? tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        )) : null
      }
    </ul>
    <p>likes {votes} <Heart isLiked={isLiked} onLike={onLike} /></p>
  </footer>
);

export default Footer;
