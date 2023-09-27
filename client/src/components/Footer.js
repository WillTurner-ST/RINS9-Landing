import React from 'react'

const Footer = () => {
  return (
    <div className="cta-container">
      <h2 className="cta-title">Get Started with Our Product!</h2>
      <p className="cta-description">Join us and explore the endless possibilities with our versatile product.</p>
      <a href="#your-link" className="cta-button">Start Now</a>
      <div className="cta-socials">
        <a href="#facebook" className="cta-social-link">FB</a> {/* Replace with Facebook icon */}
        <a href="#twitter" className="cta-social-link">TW</a> {/* Replace with Twitter icon */}
        <a href="#instagram" className="cta-social-link">IG</a> {/* Replace with Instagram icon */}
      </div>
      <p className="cta-copyright">© 2023 Your Company Name. All rights reserved.</p>
    </div>
  );
};
export default Footer