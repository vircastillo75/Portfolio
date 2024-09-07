import React, { useState } from 'react';
import TabButton from '../components/TabButton';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Experiencies from '../components/Experiencies';
import { FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="container mx-auto p-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end mb-4">
          {!isMenuOpen ? (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-3xl focus:outline-none"
            >
              <FaBars />
            </button>
          ) : null}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col items-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl focus:outline-none mb-4"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-end space-y-4">
              <TabButton
                label="About me"
                isActive={activeTab === 'about'}
                onClick={() => {
                  setActiveTab('about');
                  setIsMenuOpen(false);
                }}
              />
              <TabButton
                label="Projects"
                isActive={activeTab === 'projects'}
                onClick={() => {
                  setActiveTab('projects');
                  setIsMenuOpen(false);
                }}
              />
              <TabButton
                label="Technologies"
                isActive={activeTab === 'technologies'}
                onClick={() => {
                  setActiveTab('technologies');
                  setIsMenuOpen(false);
                }}
              />
              <TabButton
                label="Experiences"
                isActive={activeTab === 'experiences'}
                onClick={() => {
                  setActiveTab('experiences');
                  setIsMenuOpen(false);
                }}
              />
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-around mb-4">
          <TabButton
            label="About me"
            isActive={activeTab === 'about'}
            onClick={() => setActiveTab('about')}
          />
          <TabButton
            label="Projects"
            isActive={activeTab === 'projects'}
            onClick={() => setActiveTab('projects')}
          />
          <TabButton
            label="Technologies"
            isActive={activeTab === 'technologies'}
            onClick={() => setActiveTab('technologies')}
          />
          <TabButton
            label="Experiences"
            isActive={activeTab === 'experiences'}
            onClick={() => setActiveTab('experiences')}
          />
        </div>

        {/* Content */}
        <section className="my-8">
          {activeTab === 'about' && <About />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'technologies' && <Technologies />}
          {activeTab === 'experiences' && <Experiencies />}
        </section>
      </div>
    </div>
  );
};

export default Home;
