import React from 'react';

const Footer = () => {
  console.log('test');
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="www.linkedin.com/in/theodorebing">
          <img className="footer-icon" src="https://img.icons8.com/color/480/000000/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://github.com/theodorebing">
          <img className="footer-icon" src="https://img.icons8.com/fluency/240/000000/github.png" alt="Github" />
        </a>
        <a href="https://twitter.com/BingTheodore">
          <img className="footer-icon" src="https://img.icons8.com/fluency/240/000000/twitter.png" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
