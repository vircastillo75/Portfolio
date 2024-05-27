// src/components/Header.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl mb-1 md:mb-0">María Virginia Castillo</h1>
          <p className="text-sm md:text-base">Full Stack Developer</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/mvirginiacastillo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl md:text-2xl" />
          </a>
          <a href="https://github.com/vircastillo75" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl md:text-2xl" />
         </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

