import React from 'react';
import gift from '../assets/gift.png'
import '../components/gifting.css'
import dia from '../assets/diamond.png'
import './gifting.css'
const Gifting = () => {
  return (
    <div>
      <div className="container">
        <div className="text-content">
          <h2>Packed with love & all your favourites!</h2>
          <div className='diamm'>
          <img src={dia} alt="" />
          </div>
          
          <p>Now gift your loved ones our special hampers curated with our signature products.</p>
        </div>
        <div className="image-content">
          <img src={gift} alt="Special Hampers" />
        </div>
      </div>
    </div>
  );
}

export default Gifting;
