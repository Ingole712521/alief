import "../style/HomeSection.css";

// Import a single image
import backgroundImage from '../assets/background.png'; // Adjust path as needed

const HomeSection = () => {
  return (
    <section id="home" className="home-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-content">
        <h1 className="home-title">Alif View Media</h1>
        <p className="home-description">
          Welcome to AlifView Media Group, where Innovation meets Excellence. We specialize in transforming ordinary moments into extraordinary experiences. AlifView Media aims to be passionate about bringing your vision to life through innovative and creative media solutions.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;