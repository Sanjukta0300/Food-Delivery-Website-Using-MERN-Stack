import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        
            <img className='logo' src={assets.logo} alt="" />
            
            <p>+91 0123456789 | contact@zomato.com | 123/1 Abcd Lane, Noida, 700123</p>
            <div className="social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
            </div>
            
     
        <br /><br />  
      <p className="footer-copyright">© 2024 Zomato. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
