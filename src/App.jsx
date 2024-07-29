import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
