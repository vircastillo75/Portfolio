import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-around">
        <button onClick={() => setActiveTab('about')} className={`text-gray-600 hover:text-gray-800 focus:outline-none ${activeTab === 'about' ? 'border-b-2 border-blue-500' : ''}`}>About me</button>
        <button onClick={() => setActiveTab('projects')} className={`text-gray-600 hover:text-gray-800 focus:outline-none ${activeTab === 'projects' ? 'border-b-2 border-blue-500' : ''}`}>Projects</button>
        <button onClick={() => setActiveTab('technologies')} className={`text-gray-600 hover:text-gray-800 focus:outline-none ${activeTab === 'technologies' ? 'border-b-2 border-blue-500' : ''}`}>Technologies</button>
        <button onClick={() => setActiveTab('skills')} className={`text-gray-600 hover:text-gray-800 focus:outline-none ${activeTab === 'skills' ? 'border-b-2 border-blue-500' : ''}`}>Soft Skills</button>
      </div>
      <section className="my-8">
        {activeTab === 'about' && (
          <>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">About me</h2>
            <p className="mt-4">Soy María Virginia Castillo, Abogada convertida en Full Stack Developer. Mi pasión por la resolución de problemas y la creación de soluciones innovadoras me ha llevado a explorar el mundo del desarrollo de software. Mi experiencia en una amplia gama de tecnologías me permite ofrecer soluciones completas tanto en el lado del servidor como en el lado del cliente.</p>
          </>
        )}
        {activeTab === 'projects' && (
          <>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Projects</h2>
            <p className="mt-4">Desarrollo de Aplicación Web Interactiva de Temática Countries
Desarrollé de una aplicación web interactiva centrada en países y sus actividades. Los objetivos de la misma: buscar países, visualizar la información de los mismos, filtrarlos, ordenarlos, y crear actividades turísticas. Tecnologías utilizadas: React, Redux, CSS, Node.js, Express y Sequelize.</p>
            <p className="mt-4">Creación de una E-commerce de indumentaria deportiva - Pinkpanther
Participé activamente en el equipo de desarrollo de una aplicación E-commerce para un cliente real en el sector de indumentaria deportiva. Esta plataforma proporciona a los usuarios una experiencia de compra completa y fluida, junto con herramientas de administración para el personal interno. HTML5, Javascricpt, React.js, Redux.js, Tailwind CSS, Node.js, Express.js, PostgreSQL con Sequelize, Git, Github, Trello.</p>
          </>
        )}
        {activeTab === 'technologies' && (
          <>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Technologies</h2>
            <p className="mt-4">....</p>
          </>
        )}
        {activeTab === 'skills' && (
          <>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Soft Skills</h2>
            <p className="mt-4">.....</p>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;


