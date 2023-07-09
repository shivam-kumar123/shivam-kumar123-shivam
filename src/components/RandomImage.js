import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

import './RandomImage.css';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get('https://picsum.photos/400');
        setImageUrl(response.request.responseURL);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
    setShareUrl(window.location.href);
  }, []);

  return (
    <div className='random-image-container'>
      {imageUrl !== '' ? <img src={imageUrl} alt="Random" /> : <p>Loading image...</p>}
      <div className='icon-container'>
        <FacebookShareButton url={shareUrl} quote={'title goes here'}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} quote={'title goes here'}>
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton url={shareUrl} quote={'title goes here'}>
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default RandomImage;