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
        <a href="./" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
        <a href="#upcoming" onClick={() => setIsMobileMenuOpen(false)}>Upcoming Events</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
      </div>
      {/* <div className="navbar-social-media">
        <a href="https://www.facebook.com/profile.php?id=61562956484753" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com/alifviewmedia/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/in/alifview-media-552358320/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div> */}
      <div className="navbar-hamburger" onClick={toggleMobileMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
