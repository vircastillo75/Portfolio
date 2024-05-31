import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine, RiTailwindCssFill, RiJavascriptLine } from 'react-icons/ri';
import { FaNodeJs, FaGithub, FaHtml5, FaTrello } from 'react-icons/fa';
import { SiRedux, SiExpress } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

const Technologies = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowIcons(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  const iconVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const firstLineIcons = [
    <RiReactjsLine className="text-cyan-400" />,
    <FaNodeJs className="text-green-400" />,
    <SiRedux className="text-violet-400" />,
    <RiTailwindCssFill className="text-blue-400" />,
    <FaGithub />,
  ];

  const secondLineIcons = [
    <RiJavascriptLine className="text-yellow-400" />,
    <FaHtml5 className="text-red-400" />,
    <SiExpress />,
    <BiLogoPostgresql className="text-sky-700" />,
    <FaTrello className="text-sky-600" />,
  ];

  return (
    <motion.div
      initial="hidden"
      animate={showIcons ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-wrap justify-center gap-4 mt-16 mb-8 md:justify-start md:gap-8"
    >
      <div className="flex flex-wrap justify-center w-full md:w-auto mt-16 md:mt-0 mx-auto"> {/* Ajuste aquí */}
        {firstLineIcons.map((icon, index) => (
          <motion.div
            key={index}
            variants={iconVariants}
            initial="hidden"
            animate={showIcons ? "visible" : "hidden"}
            transition={{ delay: index * 0.1 }} 
            className="rounded-full border-4 border-neutral-800 p-4 text-8xl m-4"
          >
            {icon}
          </motion.div>
        ))}
      </div>
  
      <div className="flex flex-wrap justify-center w-full md:w-auto mx-auto"> {/* Ajuste aquí */}
        {secondLineIcons.map((icon, index) => (
          <motion.div
            key={index}
            variants={iconVariants}
            initial="hidden"
            animate={showIcons ? "visible" : "hidden"}
            transition={{ delay: (index + firstLineIcons.length) * 0.1 }} 
            className="rounded-full border-4 border-neutral-800 p-4 text-8xl m-4"
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;

