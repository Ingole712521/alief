import "../style/ContactSection.css";
import contactImage from "../assets/Frame.png";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
    <h2 className="contact-title">Let's Connect</h2>
    <p className="contact-subtitle">Any question or remarks? Just write us a message!</p>
    <div className="contact-container">
      <div className="contact-image-container">
        <img src={contactImage} alt="Contact" className="contact-image" />
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <h3 className="form-title">Contact Us</h3>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="contactDetail">Contact Detail</label>
            <input type="text" id="contactDetail" name="contactDetail" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Drop Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;