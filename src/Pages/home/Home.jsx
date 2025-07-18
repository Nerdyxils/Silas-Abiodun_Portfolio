import React from 'react';
import HeroSection from '../../Components/sections/HeroSection';
import AboutSection from '../../Components/sections/AboutSection';
import ServicesSection from '../../Components/sections/ServicesSection';
import CTASection from '../../Components/sections/CTASection';
import ContactSection from '../../Components/sections/ContactSection';
import './Home.css';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CTASection />
            <ContactSection />
        </div>
);
};

export default Home;