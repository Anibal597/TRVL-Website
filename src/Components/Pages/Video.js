import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';
import video6 from '../../video-6.mp4';

function Video() {
  return (
    <div className='video-page-container'>
      <video
        src= {video6}
        autoPlay
        controls
        loop
        muted
        className='video-element'
      >
        Your browser does not support the video tag.
      </video>
      <div className='back-link'>
        <Link to='/'>← Back to Home</Link>
      </div>
    </div>
  );
}

export default Video;


