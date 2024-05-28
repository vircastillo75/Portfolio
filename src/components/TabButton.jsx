// src/components/TabButton.jsx
import React from 'react';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-gray-600 hover:text-gray-800 focus:outline-none font-bold transform transition duration-300 ${
        isActive ? 'border-b-2 border-blue-500' : ''
      } hover:-translate-y-1`}
    >
      {label}
    </button>
  );
};

export default TabButton;
