// src/components/Projects.jsx
import React from 'react';

const Projects = () => (
  <>
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Projects</h2>
    <p className="mt-4 font-bold">Desarrollo de Aplicación Web Interactiva de Temática Countries</p>
    <p className="mb-4">
      Desarrollé una aplicación web interactiva centrada en países y sus actividades. Los objetivos de la misma son: buscar países, visualizar la información de los mismos, filtrarlos, ordenarlos, y crear actividades turísticas. Tecnologías utilizadas: React, Redux, CSS, Node.js, Express y Sequelize.
    </p>
    <div className="mt-8">
      <a href="https://www.youtube.com/watch?v=hbD6WrlYUlI" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.youtube.com/vi/hbD6WrlYUlI/0.jpg"
          alt="Descripción del video"
          className="w-48 h-auto transition-transform transform hover:scale-105"
        />
      </a>
    </div>
    <p className="mt-4 font-bold">Creación de una E-commerce de indumentaria deportiva - Pinkpanther</p>
    <p className="mb-4">
      Participé activamente en el equipo de desarrollo de una aplicación E-commerce para un cliente real en el sector de indumentaria deportiva. Esta plataforma proporciona a los usuarios una experiencia de compra completa y fluida, junto con herramientas de administración para el personal interno. Tecnologías utilizadas: HTML5, JavaScript, React.js, Redux.js, Tailwind CSS, Node.js, Express.js, PostgreSQL con Sequelize, Git, GitHub, Trello.
    </p>
    <div className="mt-8">
      <a href="https://www.youtube.com/watch?v=fqTt2xApocY" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.youtube.com/vi/fqTt2xApocY/0.jpg"
          alt="Descripción del video"
          className="w-48 h-auto transition-transform transform hover:scale-105"
        />
      </a>
    </div>
  </>
);

export default Projects;
