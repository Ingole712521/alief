import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../style/Footer.css";
import companyLogo from '../assets/Aliief_white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={companyLogo} alt="Company Logo" />
      </div>
      <div className="footer-divider"></div>
      <div className="footer-content">
        <div className="footer-section">
          <p1>Reach Us</p1>
          <p><FontAwesomeIcon icon={faPhone} />                  +91 8329357983</p>
          <p><FontAwesomeIcon icon={faEnvelope} />                marketing.alifviewmedia@gmail.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} />                 15/4, Jalsa Apartment, Pakhal Road, Nashik 422011</p>
        </div>
        <div className="footer-section">
          <p1>Company</p1>
          <p><a href="#about">About</a></p>
          <p><a href="#upcoming">Gallery</a></p>
          <p><a href="#contact">Contact US</a></p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href=" https://www.facebook.com/profile.php?id=61562956484753
" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=" https://www.instagram.com/alifviewmedia/ " aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/alifview-media-552358320/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024 Alif View Media</p>
      </div>
    </footer>
  );
};

export default Footer;
