import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ourproducts.css';
import dia from '../assets/diamond.png';
import pink from '../assets/pink cake.jpg';
import cook from '../assets/cookies.jpeg';
import brown from '../assets/brownie.jpeg';
import cup from '../assets/cup.jpeg';
import choc from '../assets/chco.jpeg';
import ci from '../assets/cakci.jpeg';

const ourproducts = () => {
  return (
    <div className='back'>
      <div className='products'>
        Our Products
      </div>
      <div className='diam'>
        <img src={dia} alt="Diamond" />
      </div>
      <div className='product-list'>
        <div className='product-item'>
          <Link to="/cake">
            <div>
              <img src={pink} alt="Pink Cake" className='product-image' />
              <div className='product-label'>CAKES</div>
            </div>
          </Link>
        </div>
        <div className='product-item'>

        <Link to="/caksicle">
            <div>
              <img src={ci} alt="Pink Cake" className='product-image' />
              <div className='product-label'>CAKESICLES</div>
            </div>
          </Link>
        </div>

        
        <div className='product-item'>

        <Link to="/glasses">
            <div>
              <img src={cup} alt="Pink Cake" className='product-image' />
              <div className='product-label'>DESSERT GLASSES</div>
            </div>
          </Link>
        </div>


        <div className='product-item'>


        <Link to="/chocolate">
            <div>
              <img src={choc} alt="Pink Cake" className='product-image' />
              <div className='product-label'>CHOCOLATES</div>
            </div>
          </Link>

        </div>


        <div className='product-item'>

        <Link to="/cook">
            <div>
              <img src={cook} alt="Pink Cake" className='product-image' />
              <div className='product-label'>COOKIES</div>
            </div>
          </Link>

        </div>


        <div className='product-item'>

        <Link to="/brownies">
            <div>
              <img src={brown} alt="Pink Cake" className='product-image' />
              <div className='product-label'>BROWNIES</div>
            </div>
          </Link>



        </div>
      </div>
    </div>
  );
};

export default ourproducts;
