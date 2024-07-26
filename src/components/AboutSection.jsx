// components/AboutSection.jsx
import '../style/AboutSection.css'; // Ensure you have this CSS file for styling

// Import the company logo
import companyLogo from '../assets/company-logo.png'; // Adjust path as needed

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <img src={companyLogo} alt="Company Logo" className="about-logo" />
        <div className="about-description">
          <p>
          AlifView Media is a premier conference organizer. We are dedicated to delivering exceptional value through landmark summits that provide unique opportunities for delegates to exchange knowledge and learn about the latest technological and innovative advancements. A prestigious platform that honors the exceptional contributions and success of individuals, teams, and organizations who have demonstrated excellence, innovation and impact in their respective domains.


          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
