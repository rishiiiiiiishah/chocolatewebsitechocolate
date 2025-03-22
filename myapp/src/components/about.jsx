import React, { useState } from 'react';
import '../components/about.css';
import dia from '../assets/diamond.png';
import pink from '../assets/quality .png';
import cup from '../assets/cupcake.png';
import love from '../assets/heart.png';
import book from '../assets/book.png';
import ma from '../assets/ma.jpeg';
import vid from '../assets/vidd.jpg';
import dad from '../assets/daa.jpeg';
import diamo from '../assets/bluediamond.png'

const About = () => {
  const [expanded, setExpanded] = useState({
    darshana: false,
    shirish: false,
    vidhi: false
  });

  const toggleExpand = (member) => {
    setExpanded((prevState) => ({
      ...prevState,
      [member]: !prevState[member]
    }));
  };

  return (
    <div>
      <div className='pro'>
        About Us
      </div>
      <div className='diamon'>
        <img src={diamo} alt="Diamond" />
      </div>

      <div className="about-container">
        <div className="about-item">
          <img src={cup} alt="Authentic Recipes Icon" className="about-icon" />
          <h2>AUTHENTIC RECIPES</h2>
          <p>Our products are based on traditional home-style recipes, using fresh ingredients.</p>
        </div>
        <div className="about-item">
          <img src={love} alt="Baked with Love Icon" className="about-icon" />
          <h2>BAKED WITH LOVE</h2>
          <p>Our passion for baking is poured into every recipe, serving smiles on a plate every day.</p>
        </div>
        <div className="about-item">
          <img src={book} alt="Honestly Priced Icon" className="about-icon" />
          <h2>HONESTLY PRICED</h2>
          <p>We constantly strive to offer the best products at the right prices.</p>
        </div>
        <div className="about-item">
          <img src={pink} alt="Committed to Quality Icon" className="about-icon" />
          <h2>COMMITTED TO QUALITY</h2>
          <p>From our ingredients to our kitchen operations & guest services, we always prioritize quality.</p>
        </div>
      </div>

      <div className='team'>
        Our Team
      </div>

      <div className='diamon'>
        <img src={diamo} alt="Diamond" />
      </div>
      
      <div className="team-container">
        <div className="team-card">
          <img src={ma} alt="Team Member 1" className="team-photo" />
          <div className="team-info">
            <h3>Darshana Shah</h3>
            <p>Founder/Baker</p>
            <p 
              className="read-more" 
              onClick={() => toggleExpand('darshana')}
            >
              Read More
            </p>
            {expanded.darshana && (
              <div className="additional-info">
                <p>Darshana Shah is the creative force behind our bakery...</p>
              </div>
            )}
          </div>
        </div>
        <div className="team-card">
          <img src={dad} alt="Team Member 2" className="team-photo" />
          <div className="team-info">
            <h3>Shirish Shah</h3>
            <p>Co-Founder/Marketing</p>
            <p 
              className="read-more" 
              onClick={() => toggleExpand('shirish')}
            >
              Read More
            </p>
            {expanded.shirish && (
              <div className="additional-info">
                <p>Shirish Shah is responsible for our marketing strategy...</p>
              </div>
            )}
          </div>
        </div>
        <div className="team-card">
          <img src={vid} alt="Team Member 3" className="team-photo" />
          <div className="team-info">
            <h3>Vidhi Shah</h3>
            <p>Social Media Manager</p>
            <p 
              className="read-more" 
              onClick={() => toggleExpand('vidhi')}
            >
              Read More
            </p>
            {expanded.vidhi && (
              <div className="additional-info">
                <p>Vidhi Shah manages our social media presence...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
