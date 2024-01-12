import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import imgp8 from './imgp8.jpg';
import { HiUserCircle } from 'react-icons/hi';
import { BiSolidLogInCircle } from 'react-icons/bi';
import {AiOutlineLogin} from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsNavbarTransparent(false);
    } else {
      setIsNavbarTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
       <nav
        className={`navbar-one ${isNavbarTransparent ? 'transparent' : ''}`}
        style={{ zIndex: '1000' }}
      >
        <div className="navbar-logo">
          <Link to="/">
           Logo
          </Link>
        </div>
        <div
          className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <div className="cancel-button" onClick={closeMobileMenu}>
              X
            </div>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Properties" onClick={closeMobileMenu}>
              PROPERTIES
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
          <li >
            <Link to="/PropertyListing" onClick={closeMobileMenu}>
              POST PROPERTIES 
            </Link>
          </li>
          <li className="user-icon-dropdown">
            <HiUserCircle style={{ fontSize: '29px' }} />
            <div className="dropdown-content">
              <Link to="/Login" onClick={closeMobileMenu}>
                SignIn
                {/* <BiSolidLogInCircle/> */}
              </Link>
              <Link to="/Register" onClick={closeMobileMenu}>
                Signup
                {/* <AiOutlineLogin/> */}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <br />
    </>
  );
};

export default Navbar;
