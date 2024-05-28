// src/pages/Home.jsx
import React, { useState } from 'react';
import TabButton from '../components/TabButton';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Skills from '../components/Skills';

const Home = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-around mb-4">
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
          label="Soft Skills"
          isActive={activeTab === 'skills'}
          onClick={() => setActiveTab('skills')}
        />
      </div>
      <section className="my-8">
        {activeTab === 'about' && <About />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'technologies' && <Technologies />}
        {activeTab === 'skills' && <Skills />}
      </section>
    </div>
  );
};

export default Home;





