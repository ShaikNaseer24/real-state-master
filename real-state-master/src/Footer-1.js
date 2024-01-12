import React from 'react';
import './Footer.css';
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import {CiYoutube} from  "react-icons/ci";
const Footer = () => {
  return (
    <div className="footerr">
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Popular Locations</h3>
          <ul><li>
            <li>Banglore</li>
            <li>Hyderbad</li>
            <li>Mumbai</li>
            <li>Goa</li>
            <li>Kerala</li>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Trending Locations</h3>
          <ul><li>
            <li>Chennai</li>
            <li>Pune</li>
            <li>Kolkata</li>
            <li>Chandighar</li>
            <li>Delhi</li>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul><li>
            <li>PhoneNumber</li>
            <li>Email</li>
            <li>Location</li>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media-icons">
            <li>
                {/* <BsFacebook/> */}
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
            {/* <BsTwitter/> */}
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
            {/* <AiFillInstagram/> */}
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
        <h3>&copy;THANK YOU FOR VISITING FORTUNE IDEAS.</h3> 
      </div>
      </div>
      
    </footer></div>
  );
};

export default Footer;