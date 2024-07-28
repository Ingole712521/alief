import  { useState, useEffect } from 'react';
import "../style/GallerySection.css";
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
    }, 3000); 
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
          <p className="event-description">Join us for the Tech Innovation Summit 2024, where industry leaders, innovators, and tech enthusiasts gather to explore the latest advancements in technology. This exciting event will feature keynote speeches from renowned experts, interactive workshops, and networking opportunities. Don't miss your chance to stay ahead of the curve and be part of the future of tech innovation. Save the date and prepare to be inspired</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        <div className="event-container">
          <img src={containerImage2} alt="Event 2" className="event-image" />
          <p className="event-description">Join us for the Tech Innovation Summit 2024, where industry leaders, innovators, and tech enthusiasts gather to explore the latest advancements in technology. This exciting event will feature keynote speeches from renowned experts, interactive workshops, and networking opportunities. Don't miss your chance to stay ahead of the curve and be part of the future of tech innovation. Save the date and prepare to be inspired</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
        <div className="event-container">
          <img src={containerImage3} alt="Event 3" className="event-image" />
          <p className="event-description">Join us for the Tech Innovation Summit 2024, where industry leaders, innovators, and tech enthusiasts gather to explore the latest advancements in technology. This exciting event will feature keynote speeches from renowned experts, interactive workshops, and networking opportunities. Don't miss your chance to stay ahead of the curve and be part of the future of tech innovation. Save the date and prepare to be inspired</p>
          <a href="#" className="learn-more">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
