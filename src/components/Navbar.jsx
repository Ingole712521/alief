import '../style/Navbar.css';
import { useState } from 'react';
import images from "../assets/company-logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images} alt="Company Logo" />
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="./home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="./about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
        <a href="./upcoming" onClick={() => setIsMobileMenuOpen(false)}>Upcoming Events</a>
        <a href="./contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMobileMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
