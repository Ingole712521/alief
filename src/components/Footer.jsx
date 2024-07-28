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
          <h3>Reach Us</h3>
          <p><FontAwesomeIcon icon={faPhone} /> +1 012 3456 789</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> demo@gmail.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 15/4, Jalsa Apartment, Pakhal Road, Nashik 422011</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <p><a href="#about">About</a></p>
          <p><a href="#privacy-policy">Privacy Policy</a></p>
          <p><a href="#techlabz">Techlabz</a></p>
          <p><a href="#keybox">Keybox</a></p>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <p><a href="#terms-of-use">Terms of Use</a></p>
          <p><a href="#refund-policy">Refund Policy</a></p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><a href="#blogs">Blogs</a></p>
          <p><a href="#forum">Forum</a></p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href=" https://www.facebook.com/profile.php?id=61562956484753
" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=" https://www.instagram.com/alifviewmedia/ " aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/alifview-media-552358320/
" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
