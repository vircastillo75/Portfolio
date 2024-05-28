// src/components/Header.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4" style={{ backgroundColor: '#03045e', color: '#00b4d8' }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl mb-1 md:mb-0 font-bold">María Virginia Castillo</h1>
          <p className="text-sm md:text-base font-bold">Full Stack Developer</p>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="https://www.linkedin.com/in/mvirginiacastillo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl md:text-2xl hover:text-blue-500" data-tip="LinkedIn" />
          </a>
          <a href="https://github.com/vircastillo75" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl md:text-2xl hover:text-blue-500" data-tip="GitHub" />
          </a>
          <FaPhoneAlt className="text-xl md:text-2xl hover:text-blue-500 cursor-pointer" data-tip="+54 9 261 6995478" />
          <FaEnvelope className="text-xl md:text-2xl hover:text-blue-500 cursor-pointer" data-tip="vircastillo75@gmail.com" />
        </div>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </header>
  );
};

export default Header;






