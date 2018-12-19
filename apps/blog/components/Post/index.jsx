import React from 'react';
import './post.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post = ({ post, onLike }) => (
  <li className="post">
    <Header 
      author={post.author} 
      created={post.created} 
    />
    <Body 
      title={post.title} 
      body={post.body} 
      image={post.image} 
    />
    <Footer 
      votes={post.votes} 
      tags={post.tags}
      isLiked={post.liked}
      onLike={onLike} 
    />
  </li>
);

export default Post;
