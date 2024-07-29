import '../style/AboutSection.css';
import companyLogo from '../assets/company-logo.png';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="about-title" data-aos="fade-in">About Us</h1>
      <div className="about-content">
        <img src={companyLogo} alt="Company Logo" className="about-logo" data-aos="fade-in" />
        <div className="about-description" data-aos="fade-in">
          <p>
            AlifView Media is a premier conference organizer. We are dedicated to delivering exceptional value through landmark summits that provide unique opportunities for delegates to exchange knowledge and learn about the latest technological and innovative advancements. A prestigious platform that honors the exceptional contributions and success of individuals, teams, and organizations who have demonstrated excellence, innovation and impact in their respective domains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
