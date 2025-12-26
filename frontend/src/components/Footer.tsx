import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><img src="/assets/images/logo.jpg" alt="SSSALU" style={{height: '40px'}} /></h3>
            <p>South Sudanese Student Association at African Leadership University</p>
            <div className="social-links">
              <a href="https://www.facebook.com/sssalu" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com/sssalu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/sssalu" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/sssalu" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/news">News & Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> African Leadership University, Kigali, Rwanda</p>
            <p><i className="fas fa-envelope"></i> choldaniel700@gmail.com</p>
            <p><i className="fas fa-phone"></i> +250 798 619 966</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 South Sudanese Student Association - ALU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;