import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
         <img src={assets.logo} alt=""/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus soluta debitis praesentium iusto a, perspiciatis est commodi sunt quis repudiandae illum minus architecto ratione asperiores illo sequi, obcaecati numquam!</p>
       <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt=""/>
        <img src={assets.twitter_icon} alt=""/>
        <img src={assets.linkedin_icon} alt=""/>
       </div>
        </div>
         <div className="footer-content-center">
         <h2>ORANGE</h2>
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Private Policy</li>
         </ul>
         </div>
         <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>+91 751002782</li>
            <li>orange@gmail.com</li>
         </ul>
         </div>
        </div>
        <hr/>
        <p className="footer-copyright"> Copyright 2024 @Orange.com - All Rights Reserved</p>
        </div>
  )
}

export default Footer