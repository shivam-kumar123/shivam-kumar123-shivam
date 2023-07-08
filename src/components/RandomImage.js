import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './RandomImage.css'; // Update the file path to match your CSS file location

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/400');
      setImageUrl(response.request.responseURL);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  useEffect(() => {
    fetchRandomImage();
    setShareUrl(window.location.href);
  }, []);

  return (
    <div>
      <div className='random-image-container'>
        {imageUrl !== '' ? <img src={imageUrl} alt="Random" /> : <p>Loading image...</p>}
      </div>
      {console.log(shareUrl)}
    </div>
  );
}

export default RandomImage;
