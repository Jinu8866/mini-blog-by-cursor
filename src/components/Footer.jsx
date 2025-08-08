import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mini Blog</h3>
            <p>React.js로 만든 미니 블로그 프로젝트입니다.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul className="footer-links">
              <li>React.js</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Mini Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 