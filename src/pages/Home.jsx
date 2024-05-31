import React, { useState } from 'react';
import TabButton from '../components/TabButton';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Experiencies from '../components/Experiencies';

const Home = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-blue-100"> 
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
            label="Experiences"
            isActive={activeTab === 'experiences'}
            onClick={() => setActiveTab('experiences')}
          />
        </div>
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





