import React, { useState, useEffect } from 'react';
import './App.css';
import './Pages/home/Home.css';
import './utils/customAnimations.css';
import { initHybridAnimations } from './utils/hybridAnimations';
import Menu from './Components/menu-item/Menu';
import HeroSection from './Components/sections/HeroSection';
import StatisticsSection from './Components/sections/StatisticsSection';
import AboutSection from './Components/sections/AboutSection';
import ServicesSection from './Components/sections/ServicesSection';
import TechnologyCarousel from './Components/sections/TechnologyCarousel';
import FAQSection from './Components/sections/FAQSection';
import UnfilteredCTASection from './Components/sections/UnfilteredCTASection';
import ContactSection from './Components/sections/ContactSection';
import FooterSection from './Components/sections/FooterSection';
// import AnimationTest from './Components/AnimationTest';

function Preloader() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 900);
    return () => clearTimeout(timer);
  }, []);
  if (hide) return null;
  return (
    <div className="preloader-overlay">
      <div className="rolling-circle" />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Initialize hybrid animation system after component mounts
    const usingFramerMotion = initHybridAnimations();
    console.log(`Portfolio loaded with ${usingFramerMotion ? 'Framer Motion 6.5.1' : 'CSS fallback'} animations`);
  }, []);

  return (
    <div className="main">
      <Preloader />
      {/* <AnimationTest /> */}
      <div className="body">
        <Menu />
        <HeroSection />
        <StatisticsSection />
        <AboutSection />
        <ServicesSection />
        <TechnologyCarousel />
        <FAQSection />
        <UnfilteredCTASection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;