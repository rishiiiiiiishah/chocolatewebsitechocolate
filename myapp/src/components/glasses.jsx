import React from 'react'
import glass from './glassdata'
import '../components/glasses.css';
import dia from '../assets/bluediamond.png';
import front from '../assets/frontcake.png';
import { Link } from 'react-router-dom';


const glasses = () => {
  return (
    <div className="popular">
    <h1>Dessert Glasses</h1>
    <img src={dia} alt="Diamond" className="diamond-image" />
    <p>Any celebration, whether a cozy gathering or an extravagant party, is incomplete without a caksicle! We offer a wide range of handcrafted special caksicles that are a treat to the eyes and also the taste buds.</p>
    <div className='front-cake-i'>
   <img src={front} alt="Front Cake"  />
   </div>
    <hr />

    <div className="popular-item">
      {glass.map((product) => (
        <div key={product.id}>
          <Link to={`/desse/${product.id}`} >
          <img src={product.image} alt={product.name} />
          <div className="overlay">
            <h2>{product.name}</h2>
            <p className="prices">
              <span className="new-price">Rs {product.new_price}</span>
              <span className="old-price">Rs {product.old_price}</span>
            </p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default glasses
