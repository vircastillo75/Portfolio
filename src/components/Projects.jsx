import React from 'react';
import intro from '../assets/MacBook Pro-1725659071559.jpeg';
import dashboard from '../assets/MacBook Pro-1725660189977.jpeg';
import news from '../assets/MacBook Pro-1725637254155.jpeg';

const Projects = () => (
  <div className="flex flex-col items-center px-4">

<div className="mt-8 text-center">
      <p className="font-bold text-2xl"> 
       News homepage
      </p>
      <p className="mb-4">
      Creé una página de inicio de un sitio web de noticias con un diseño responsivo, replicando el diseño proporcionado, tanto para pantallas de escritorio como para dispositivos móviles y tablets, utilizando HTML, JavaScript, React Vite y Tailwind CSS. Los principales elementos que debíann implementarse incluían:
      Diseño de varias secciones: La página incluye una cabecera con un menú de navegación desplegable (en la vista móvil), una sección destacada con una imagen principal y un título, una lista de artículos recientes, y una barra lateral con noticias adicionales.
      Diseño responsivo: El desafío incluye un diseño que se adapte tanto a pantallas de escritorio como a dispositivos móviles y tablets. En la vista móvil, el menú de navegación esaccesible a través de un ícono de hamburguesa que despliega las opciones.
      Interactividad: En la versión móvil, el menú se despliega y cierra. También se agregó interactividad extra como efectos al hacer hover o clic en las noticias.
      </p>
      <div className="mt-8">
        <a href="https://www.loom.com/share/ea229d50262e4e349291e1eabd5470a1?sid=5a7c76a3-2c16-4b43-8d92-a900673e8318" target="_blank" rel="noopener noreferrer">
          <img
            src={news}
            alt="Descripción del video"
            className="w-48 h-auto transition-transform transform hover:scale-105 mx-auto"
          />
        </a>
      </div>
    </div>


  <div className="mt-8 text-center">
      <p className="font-bold text-2xl"> 
      Social media dashboard with theme switcher
      </p>
      <p className="mb-4">
      Este proyecto consiste en una página de destino que simula un panel de control de redes sociales. Incluye un conmutador de temas de color que permite a los usuarios cambiar entre un tema claro y uno oscuro. El diseño responde de manera óptima a diferentes tamaños de pantalla y presenta estados de hover y focus para todos los elementos interactivos. Se utilizaron las siguientes tecnologías HTML, JavaScript, React Vite y Tailwind.
      Funcionalidades
      Alternar el tema de color según la preferencia del usuario.
      Visualizar un diseño óptimo de la interfaz según el tamaño de la pantalla del dispositivo.
      Ver estados de hover y focus para todos los elementos interactivos.

      </p>
      <div className="mt-8">
        <a href="https://www.loom.com/share/6d044fb6d7dc43099ec208722129a5f6?sid=ec153fea-3876-4f05-83a3-62b01fbbc146" target="_blank" rel="noopener noreferrer">
          <img
            src={dashboard}
            alt="Descripción del video"
            className="w-48 h-auto transition-transform transform hover:scale-105 mx-auto"
          />
        </a>
      </div>
    </div>


  <div className="mt-8 text-center">
      <p className="font-bold text-2xl"> 
      Sección de introducción con navegación desplegable
      </p>
      <p className="mb-4">
      Este proyecto es una implementación de una sección de introducción con navegación desplegable, diseñada para proporcionar una experiencia de usuario óptima tanto en dispositivos móviles como en escritorio. El proyecto fue desarrollado utilizando HTML, CSS y JavaScript.
      Funcionalidades implementadas
      Menús desplegables interactivos: Los menús de navegación se despliegan al hacer clic en los enlaces correspondientes, tanto en dispositivos móviles como en escritorio.
      Diseño responsivo: El contenido de la página se ajusta automáticamente para proporcionar un diseño óptimo en función del tamaño de la pantalla del dispositivo.
            </p>
      <div className="mt-8">
        <a href="https://www.loom.com/share/ea229d50262e4e349291e1eabd5470a1?sid=210b37a2-3686-49ac-a692-0dbdc93e5c86" target="_blank" rel="noopener noreferrer">
          <img
            src={intro}
            alt="Descripción del video"
            className="w-48 h-auto transition-transform transform hover:scale-105 mx-auto"
          />
        </a>
      </div>
    </div>

    <div className="mt-8 text-center">
      <p className="font-bold text-2xl"> 
        Creación de una E-commerce de indumentaria deportiva - Pinkpanther
      </p>
      <p className="mb-4">
        Participé activamente en el equipo de desarrollo de una aplicación E-commerce para un cliente real en el sector de indumentaria deportiva. Esta plataforma proporciona a los usuarios una experiencia de compra completa y fluida, junto con herramientas de administración para el personal interno. Tecnologías utilizadas: HTML5, JavaScript, React.js, Redux.js, Tailwind CSS, Node.js, Express.js, PostgreSQL con Sequelize, Git, GitHub, Trello.
      </p>
      <div className="mt-8">
        <a href="https://www.youtube.com/watch?v=fqTt2xApocY" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.youtube.com/vi/fqTt2xApocY/0.jpg"
            alt="Descripción del video"
            className="w-48 h-auto transition-transform transform hover:scale-105 mx-auto"
          />
        </a>
      </div>
    </div>

    <div className="mt-4 text-center">
      <p className="font-bold text-2xl"> 
        Desarrollo de Aplicación Web Interactiva de Temática Countries
      </p>
      <p className="mb-4">
        Desarrollé una aplicación web interactiva centrada en países y sus actividades. Los objetivos de la misma son: buscar países, visualizar la información de los mismos, filtrarlos, ordenarlos, y crear actividades turísticas. Tecnologías utilizadas: React, Redux, CSS, Node.js, Express y Sequelize.
      </p>
      <div className="mt-8">
        <a href="https://www.youtube.com/watch?v=hbD6WrlYUlI" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.youtube.com/vi/hbD6WrlYUlI/0.jpg"
            alt="Descripción del video"
            className="w-48 h-auto transition-transform transform hover:scale-105 mx-auto"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
