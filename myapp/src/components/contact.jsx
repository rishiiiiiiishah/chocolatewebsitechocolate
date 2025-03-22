import React from 'react';
import '../components/contact.css';
import ContactImageRight from '../assets/booka.png'; // Replace with your image import
import diamo from '../assets/bluediamond.png'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="center-content">
        <h1>Contact Us</h1>
        <div className='diamon'>
          <img src={diamo} alt="Diamond" />
        </div>
        <p className="quote">We would love to hear from you. Share your thoughts and queries with us.</p>
      </div>

      <div className="center-line"></div>

      <div className="contact-details">
        <div className="left-side">
          <form action="https://formspree.io/f/mnnaalyz" method="post" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="textt" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number:</label>
              <input type="textt" id="contact" name="contact" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="textt" id="city" name="city" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <select id="subject" name="subject">
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

          

            <button type="submit">Submit</button>
          </form>
        </div>


        <div className="center-lin"></div>

        <div className="right-side">
          <img src={ContactImageRight} alt="Contact Us Image" className="contact-image" />
          <div className="contact-in">
          <div className='addres'>
          <div className='ad'>Address</div>
          <div className='ad'>
            <div>304 Atmaj, 3rd Floor</div>
            <div>August Kranti Marg</div>
            <div>Kemps Corner, Grant Road</div>
            <div>400036 Mumbai</div>
            <div>India</div>
          </div>
        </div>
        <div className='bhadi'>
        <p>Contact: +91 9757219922</p>
        </div>
            
            <div className="socia-icons">
              {/* Add your social media icons here */}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:example@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
