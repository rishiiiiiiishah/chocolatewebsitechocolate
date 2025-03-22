import React from 'react';
import '../components/footer.css';
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foo'>
        <div className='brand-container'>
          <a href="#" className='nav__brand'>Chocolicious</a>
          <div className='foot'>Homebaker</div>
        </div>
        <div className='address-container'>
          <div className='add'>Address</div>
          <div className='address'>
            <div>304 Atmaj, 3rd Floor</div>
            <div>August Kranti Marg</div>
            <div>Kemps Corner, Grant Road</div>
            <div>400036 Mumbai</div>
            <div>India</div>
          </div>
        </div>
        <div className='contact'>
          <div>Contact Us</div>
          <div className='social-icons'>
            <a href='https://www.instagram.com/_chocoliciouss__?igsh=MWhzaTFqNWp2dTM0cQ==' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
            <a href='https://www.darshanashah304@gmail.com'><FaEnvelope /></a>
            <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-text">
        <p>All rights reserved &copy; 2024 Chocolicious</p>
      </div>
    </div>
  );
}

export default Footer;
