import React from 'react';
import './post.css';

const Body = ({ title, body, image }) => (
  <main>
    <h3>{title}</h3>
    {
      image ? 
      <img src={image} alt={title + ' image'} /> : 
      null
    }
    <em>{body}</em>
  </main>
);

export default Body;
