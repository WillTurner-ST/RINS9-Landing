import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import CTAbutton from '../assets/Images/CTAbutton1.png'

const Footer = () => {
  return (
    <div className="cta-container">
      <h3 className="cta-title">Get Started with Our Product!</h3>
      <p className="cta-description">Join us and explore the endless possibilities with our versatile product.</p>
      <div className='cta-button'>
           <a href='https://www.snapdragonhemp.com/product/canna-bliss-sparkling-infused-water-12oz-10mg-or-25mg-delta-9-thc/'><img className='CButton' alt='Call-action-button' src={CTAbutton}/></a>
        </div>
      <div className="cta-socials">
        <a href="#facebook" className="cta-social-link"><FaFacebook/></a>
        <a href="#twitter" className="cta-social-link"><FaTwitter/></a>
        <a href="#instagram" className="cta-social-link"><FaInstagram/></a>
      </div>
      <p className="cta-copyright">© 2023 Snapdragon Hemp. All rights reserved.</p>
    </div>
  );
};
export default Footer