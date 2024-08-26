import React, { useState } from 'react';
import './Post.css';
import { FaImage, FaMusic, FaMicrophone } from 'react-icons/fa';

const Post = ({ addPost }) => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handlePost = () => {
    if (content.trim()) {
      addPost(content);
      setContent(''); 
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    alert(`Archivo seleccionado: ${event.target.files[0].name}`);
  };

  return (
    <div className="container">
      <div className="post">
        <div className="profile-pic">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuaMWPg22qXS09O2E4lSAMMvDqaw2iP6EZQ&s" alt="Profile" />
        </div>
        <div className="post-content">
          <input
            type="text"
            placeholder="This was the best performance of the night! The dancers, choreography, costumes, stage, everything!"
            id="usernameField"
            value={content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="menu">
          <p>Agrega</p>
          <label className="menu-item">
            <FaImage />
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
          <button className="menu-item">
            <FaMusic />
          </button>
          <button className="menu-item">
            <FaMicrophone />
          </button>
        </div>
        <div className="post-actions">
          <select className="public-select">
            <option value="publico">Público</option>
            <option value="amigos">Amigos</option>
            <option value="solo-yo">Solo yo</option>
          </select>
          <button className="post-button" onClick={handlePost}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
