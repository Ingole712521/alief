import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "../style/Footer.css";
// Import the company logo
import companyLogo from '../assets/company-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={companyLogo} alt="Company Logo" />
      </div>
      <div className="divider"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Reach Us</h3>
          <p><FontAwesomeIcon icon={faPhone} /> +1 012 3456 789</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> demo@gmail.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 132 Dartmouth Street, Boston, Massachusetts 02156, United States</p>
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
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Subscribe for weekly updates to improve your tool management.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <label>
              <input type="checkbox" />
              I agree to receive weekly updates
            </label>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
