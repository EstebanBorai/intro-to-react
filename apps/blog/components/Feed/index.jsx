import React from 'react';
import './feed.css';
import seed from './seed';
import Post from '../Post';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null
    }
    
    this.onLike = this.onLike.bind(this);
  }

  /**
   * 
   * @param {number} postId 
   * Toggle post like
   */
  onLike(postId) {
    let index = this.state.posts.findIndex(p => p.id === postId);
    let allPosts = [ ...this.state.posts ];
    let post = { ...this.state.posts[index] };
    if (post.liked) {
      post.votes--;
      post.liked = false;
    } else {
      post.votes++;
      post.liked = true;
    }
    allPosts[index] = post;

    this.setState({
      posts: allPosts
    });
  }

  componentDidMount() {
    this.setState({
      posts: seed
    });
  }

  render() {
    return (
      <ul className="feed">
        {
          this.state.posts && this.state.posts.map((post, index) => (
            <Post 
              key={index} 
              post={post} 
              onLike={this.onLike.bind(null, post.id)} 
            />
          ))
        }
        <li id="end-post">oh you reached the end!</li>
      </ul>
    );
  }
}

export default Feed;
