import React from "react";
import "./Footers.css";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Orisun Lifesciences</h3>
            <p>
              Empowering women's health with science-backed nutrition and care 
              solutions for every stage of life.
            </p>
            <div className="contact-info">
              <p>Email: info@orisunlifesciences.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          
          <div className="footer-section" style={{paddingLeft:'20px'}}>
            <h3>Our Commitment</h3>
            <p>
              At Orisun Lifesciences, we empower women with care and
              resources they need to live healthy, fulfilling lives worldwide.
            </p>
          </div>

          <div className="footer-section quick-link-section" style={{paddingLeft:'40px'}}>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link"  onClick={() => window.scrollTo(0, 0)}>About us</Link></li>
              <li><Link to="/contact" className="footer-link" onClick={() => window.scrollTo(0, 0)}>Contact us</Link></li>
              <li><Link to="/products" className="footer-link" onClick={() => window.scrollTo(0, 0)}>Our Products</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Join Us in Our Mission</h3>         
            <p>
              Explore how Orisun Lifesciences is transforming women's
              healthcare, one innovation at a time.
            </p>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Orisun Lifesciences Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;