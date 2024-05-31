import React, { useState } from 'react';

const TabButton = ({ label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`text-lg text-gray-600 font-bold transform transition duration-300 ${
        isActive ? 'border-b-2 border-blue-500 text-blue-500' : ''
      } ${isHovered ? 'text-blue-500 scale-105' : ''} focus:outline-none`}
    >
      {label}
    </button>
  );
};

export default TabButton;

