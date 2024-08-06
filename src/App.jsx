// src/App.jsx
import  { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Duration of your video

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <HomeSection />
          <AboutSection />
          <GallerySection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
