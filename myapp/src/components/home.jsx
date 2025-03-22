import React from 'react';
import './home.css';
import choc from '../assets/choco.png';
import dia from '../assets/diamond.png';
import { Link } from 'react-router-dom';
import diamo from '../assets/bluediamond.png'
const Home = () => {
  return (
    <div className='ri'>
    <div className='text'>
      <h2>
        Freshly Baked, With Love!
      </h2>
      <div className='diamo'>
      <img src={diamo} alt="" />
      </div>
      <h6>Since 2022, we've been serving our guests the best quality treats,</h6>
      <div className='text1'>
      <h6>
      traditionally made and presented with care
      </h6>
      </div>


       

      <div className='homeClass'>   
        <img src={choc} alt="Chocolate" />
      </div>








<div className='all4wrap'>




      <div className='class2'>
      <h2>Authentic Recipes</h2>

      <div className='text2'>
      <h6>Our products are based on
traditional</h6>

<h6> home-style recipes
using fresh ingredients.</h6>
      </div>
      </div>


      


      <div className='class3'>
      <h2>Baked With Love</h2>

      <div className='text3'>
      <h6>Our passion for baking is poured into
</h6>
</div>

<div className='text4'>
<h6> every recipe, serving smiles on a
plate everyday.</h6>
</div>

  </div>




  <div className='class4'>
      <h2>Committed To Quality

</h2>

      <div className='text5'>
      <h6>
      From our ingredients to our kitchen operations
</h6>
</div>

<div className='text6'>
<h6>    & guest services,
we always prioritize quality.</h6>
</div>

  </div>





  <div className='class5'>
      <h2>Honestly Priced

</h2>

      <div className='text7'>
      <h6>
We constantly strive to offer the best 
</h6>
</div>

<div className='text8'>
<h6>products at the rigth prices.</h6>
</div>

  </div>



  </div>



  <div className='button-wrapper'>
    
          <Link to="/about" className='aboutya'>Know More</Link>
        </div>






    </div>
    </div>








  );
}

export default Home;
