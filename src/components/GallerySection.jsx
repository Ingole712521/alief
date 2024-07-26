import  { useState, useEffect } from 'react';
import "../style/GallerySection.css";

// Import images for the slider and containers
import sliderImage1 from '../assets/image1.png';
import sliderImage2 from '../assets/image2.png';
import sliderImage3 from '../assets/image3.png';
import containerImage1 from '../assets/image1.png';
import containerImage2 from '../assets/image2.png';
import containerImage3 from '../assets/image3.png';


const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderImages = [sliderImage1, sliderImage2, sliderImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section id="upcoming" className="gallery-section">
      <h2 className="section-title">Upcoming Event</h2>
      <div className="image-slider">
        <img src={sliderImages[currentImageIndex]} alt="Slider" className="slider-image" />
      </div>
      <div className="event-containers">
        <div className="event-container">
          <img src={containerImage1} alt="Event 1" className="event-image" />
          <p className="event-description">Description of Event 1</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        <div className="event-container">
          <img src={containerImage2} alt="Event 2" className="event-image" />
          <p className="event-description">Description of Event 2</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        <div className="event-container">
          <img src={containerImage3} alt="Event 3" className="event-image" />
          <p className="event-description">Description of Event 3</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;