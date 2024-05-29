import React from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4" style={{ backgroundColor: '#03045e', color: '#9bb1ff' }}>
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-3xl mb-1 md:mb-0 font-bold">María Virginia Castillo</h1>
          <p className="text-lg md:text-xl font-bold">Full Stack Developer</p>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="https://www.linkedin.com/in/mvirginiacastillo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl md:text-2xl hover:text-blue-500" data-tip="LinkedIn" />
          </a>
          <a href="https://github.com/vircastillo75" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl md:text-2xl hover:text-blue-500" data-tip="GitHub" />
          </a>
          <FaPhoneAlt className="text-xl md:text-2xl hover:text-blue-500 cursor-pointer" data-tip="<b>+54 9 261 6995478</b>" data-html={true} />
          <FaEnvelope className="text-xl md:text-2xl hover:text-blue-500 cursor-pointer" data-tip="<b>vircastillo75@gmail.com</b>" data-html={true} />
        </div>
      </div>
      <ReactTooltip place="top" type="dark" effect="solid" />
    </header>
  );
};

export default Header;



