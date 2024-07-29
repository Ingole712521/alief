import "../style/HomeSection.css";
import backgroundImage from '../assets/AdobeStock_194420149.jpg'; // Adjust path as needed

const HomeSection = () => {
  return (
    <section id="home" className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }} data-aos="fade-in">
      <div className="home-content">
        <h1 className="home-title" data-aos="fade-in">Alif View Media</h1>
        <p className="home-description" data-aos="fade-in">
          Welcome to AlifView Media Group, where Innovation meets Excellence. We specialize in transforming ordinary moments into extraordinary experiences. AlifView Media aims to be passionate about bringing your vision to life through innovative and creative media solutions.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
