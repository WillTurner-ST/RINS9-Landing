import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import CTAbutton from '../assets/Images/CTAbutton2.png'

const Footer = () => {
  return (
    <div className="cta-container">
      <h3 className="cta-title">Elevate Your Hydration with RINS9!</h3>
      <p className="cta-description">Click learn more to see our full selection of RINS9 beverages and many other great products</p>
      <div className='cta-button'>
           <a href='https://www.snapdragonhemp.com/product/canna-bliss-sparkling-infused-water-12oz-10mg-or-25mg-delta-9-thc/'><img className='CButton' alt='Call-action-button' src={CTAbutton}/></a>
        </div>
      <div className="cta-socials">
        <a href="https://www.facebook.com/profile.php?id=100093248125807" className="cta-social-link"><FaFacebook/></a>
        <a href="https://twitter.com/SnapdragonHemp" className="cta-social-link"><FaTwitter/></a>
        <a href="https://www.instagram.com/snapdragon_hemp/" className="cta-social-link"><FaInstagram/></a>
        <a href="https://www.linkedin.com/company/snapdragon-hemp/" className="cta-social-link"><FaLinkedinIn/></a>
      </div>
      <p className="cta-copyright">© 2023 Snapdragon Hemp. All rights reserved.</p>
    </div>
  );
};
export default Footer