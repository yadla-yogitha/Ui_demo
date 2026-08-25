import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import Hero from './components/Hero';
import VfxComparisonSlider from './components/VfxComparisonSlider';
import ServicesSection from './components/ServicesSection';
import ServiceDetailModal from './components/ServiceDetailModal';
import AboutSection from './components/AboutSection';
import PipelineSection from './components/PipelineSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import ShowreelModal from './components/ShowreelModal';
import QuoteCalculatorModal from './components/QuoteCalculatorModal';
import TeamSection from './components/TeamSection';
import CareersSection from './components/CareersSection';
import CareerApplyModal from './components/CareerApplyModal';
import BlogSection from './components/BlogSection';
import BlogDetailModal from './components/BlogDetailModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Tab State: 'home' | 'about' | 'services' | 'portfolio' | 'team' | 'careers' | 'blog' | 'contact'
  const [activeTab, setActiveTab] = useState('home');

  // Modals state
  const [showreelModalOpen, setShowreelModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState('prep');

  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const [selectedJob, setSelectedJob] = useState(null);
  const [careerModalOpen, setCareerModalOpen] = useState(false);

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [blogModalOpen, setBlogModalOpen] = useState(false);

  // Tab switch helper
  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Service select helper
  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setServiceModalOpen(true);
  };

  // Quote with preset service helper
  const handleOpenQuoteWithService = (serviceId) => {
    setQuoteServiceId(serviceId || 'prep');
    setQuoteModalOpen(true);
  };

  // Project inspect helper
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  // Job apply helper
  const handleApplyJob = (job) => {
    setSelectedJob(job);
    setCareerModalOpen(true);
  };

  // Blog article inspect helper
  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    setBlogModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slateBg-950 text-slate-100 font-sans selection:bg-azure-500/30 selection:text-azure-300 flex flex-col justify-between">
      
      {/* 1. Seamless Cinematic Background Video (Pure VFX Atmosphere) */}
      <VideoBackground />

      {/* 2. Sticky Glass Navbar with Tabs */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenQuote={() => handleOpenQuoteWithService('prep')}
        onSelectService={handleSelectService}
      />

      {/* 3. Tabbed Content Views (Each Page As A Distinct View, NOT All in One Scroll) */}
      <main className="relative z-10 flex-1">
        
        {/* TAB 1: HOME VIEW (Left-Middle Logo, Slogan, Subtitle, Get Started) */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-300">
            <Hero
              onExploreServices={() => handleSelectTab('services')}
              onSelectService={(serviceId) => {
                handleSelectTab('services');
                handleSelectService(serviceId);
              }}
              onOpenShowreel={() => setShowreelModalOpen(true)}
              onOpenQuote={() => handleOpenQuoteWithService('prep')}
            />
          </div>
        )}

        {/* TAB 2: ABOUT US VIEW (Heritage, TPN/MPA Security, 5-Stage Pipeline) */}
        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-300 pt-6">
            <AboutSection
              onOpenQuote={() => handleOpenQuoteWithService('prep')}
            />
            <PipelineSection />
          </div>
        )}

        {/* TAB 3: SERVICES VIEW (1. Prep, 2. Roto, 3. Comp, 4. Matchmove, 5. AI videos + Before/After Slider) */}
        {activeTab === 'services' && (
          <div className="animate-in fade-in duration-300 pt-6">
            <ServicesSection
              onSelectService={handleSelectService}
              onOpenQuoteWithService={handleOpenQuoteWithService}
            />
            <VfxComparisonSlider
              onSelectService={handleSelectService}
            />
          </div>
        )}

        {/* TAB 4: PORTFOLIO & REELS VIEW */}
        {activeTab === 'portfolio' && (
          <div className="animate-in fade-in duration-300 pt-6">
            <PortfolioSection
              onOpenShowreel={() => setShowreelModalOpen(true)}
              onSelectProject={handleSelectProject}
            />
          </div>
        )}

        {/* TAB 5: OUR TEAM VIEW */}
        {activeTab === 'team' && (
          <div className="animate-in fade-in duration-300 pt-6">
            <TeamSection />
          </div>
        )}

        {/* TAB 6: CAREERS VIEW */}
        {activeTab === 'careers' && (
          <div className="animate-in fade-in duration-300 pt-6">
            <CareersSection
              onApplyJob={handleApplyJob}
            />
          </div>
        )}

        {/* TAB 7: BLOG / INSIGHTS VIEW */}
        {activeTab === 'blog' && (
          <div className="animate-in fade-in duration-300 pt-6">
            <BlogSection
              onSelectArticle={handleSelectArticle}
            />
          </div>
        )}

        {/* TAB 8: CONTACT US VIEW */}
        {activeTab === 'contact' && (
          <div className="animate-in fade-in duration-300 pt-6">
            <ContactSection
              onOpenQuote={() => handleOpenQuoteWithService('prep')}
            />
          </div>
        )}

      </main>

      {/* 4. Studio Footer */}
      <Footer
        onNavigate={handleSelectTab}
        onSelectService={(serviceId) => {
          handleSelectTab('services');
          handleSelectService(serviceId);
        }}
        onOpenQuote={() => handleOpenQuoteWithService('prep')}
      />

      {/* Modals */}
      <ShowreelModal
        isOpen={showreelModalOpen}
        onClose={() => setShowreelModalOpen(false)}
      />

      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialServiceId={quoteServiceId}
      />

      <ServiceDetailModal
        serviceId={selectedServiceId}
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        onOpenQuoteWithService={handleOpenQuoteWithService}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        onOpenQuote={() => handleOpenQuoteWithService('prep')}
      />

      <CareerApplyModal
        job={selectedJob}
        isOpen={careerModalOpen}
        onClose={() => setCareerModalOpen(false)}
      />

      <BlogDetailModal
        article={selectedArticle}
        isOpen={blogModalOpen}
        onClose={() => setBlogModalOpen(false)}
      />

    </div>
  );
}
