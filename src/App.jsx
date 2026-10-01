import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Careers from './components/Careers';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
  const [activeSelectedServiceId, setActiveSelectedServiceId] = useState('prep');

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromHero = (serviceId) => {
    setActiveSelectedServiceId(serviceId);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07070a] text-gray-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Background Video System with user custom video uploader & preset reels */}
      <BackgroundVideo />

      {/* Main Foreground Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section matching the user's reference mockup */}
          <Hero 
            onSelectService={handleSelectServiceFromHero}
          />

          {/* 5 Core Disciplines Showcase: 1. Prep, 2. Roto, 3. Comp, 4. Matchmove, 5. AI Videos */}
          <Services 
            selectedServiceId={activeSelectedServiceId}
            onSelectService={setActiveSelectedServiceId}
          />

          {/* About Us Section with Studio Vision & TPN Gold Security */}
          <AboutUs onContact={handleScrollToContact} />

          {/* Portfolio & Showreel Grid with Category Filters */}
          <Portfolio />

          {/* Careers & Job Portal */}
          <Careers />

          {/* VFX Journal & Tech Articles */}
          <Blog />

          {/* Contact Us */}
          <Contact />
        </main>

        {/* Studio Footer */}
        <Footer 
          onSelectService={handleSelectServiceFromHero}
        />

      </div>

    </div>
  );
}
