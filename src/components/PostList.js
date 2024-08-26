import React, { useState } from 'react';
import Post from './Post';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (content) => {
    setPosts([...posts, { content, id: posts.length }]);
  };

  return (
    <div>
      <Post addPost={addPost} />
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="profile-pic">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuaMWPg22qXS09O2E4lSAMMvDqaw2iP6EZQ&s" alt="Profile" />
            </div>
            <div className="post-content">
              <p>Camilo · 5 min</p>
              <p>{post.content}</p>
            </div>
            <div className="post-interactions">
              <span>20 Likes</span>
              <span>10 comentarios</span>
              <span>42 compartir</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
