import React, { useState, useEffect } from 'react';
import vid from '../assets/vid2.mp4';
import '../components/header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location=useLocation()
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <div className="video-container">
      <video className='video-full' src={vid} autoPlay loop muted></video>
      {showOverlay && (
        <>
          <div className="overlay-text">
           Made with Love
          </div>
          <div className="overlay-textt">
           Chocolicious
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
